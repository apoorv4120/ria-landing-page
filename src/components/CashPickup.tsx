import { useRef, useEffect } from 'react'
import Button from './ui/Button'
import CountUp from './ui/CountUp'
import SectionReveal from './ui/SectionReveal'

const NETWORK_STATS = [
  { value: 600, suffix: 'K+', label: 'Pickup Locations' },
  { value: 190, suffix: '+',  label: 'Countries' },
  { value: 7,   suffix: '',   label: 'Days a Week' },
]

const CORRIDORS = [
  { startLat: 37.77,  startLng: -122.42, endLat: 19.43,  endLng: -99.13,  label: 'US → Mexico'      },
  { startLat: 51.51,  startLng: -0.13,   endLat: 6.45,   endLng: 3.40,    label: 'UK → Nigeria'      },
  { startLat: 43.65,  startLng: -79.38,  endLat: 28.61,  endLng: 77.21,   label: 'Canada → India'    },
  { startLat: 34.05,  startLng: -118.24, endLat: 14.60,  endLng: 121.0,   label: 'US → Philippines'  },
  { startLat: 48.85,  startLng: 2.35,    endLat: -12.05, endLng: -77.04,  label: 'France → Peru'     },
  { startLat: 25.20,  startLng: 55.27,   endLat: 23.81,  endLng: 90.41,   label: 'UAE → Bangladesh'  },
  { startLat: 40.71,  startLng: -74.01,  endLat: -34.60, endLng: -58.38,  label: 'US → Argentina'    },
  { startLat: 51.51,  startLng: -0.13,   endLat: 15.55,  endLng: 32.53,   label: 'UK → Ethiopia'     },
]

const CITIES = [
  { lat: 37.77,  lng: -122.42, name: 'San Francisco' },
  { lat: 19.43,  lng: -99.13,  name: 'Mexico City'   },
  { lat: 51.51,  lng: -0.13,   name: 'London'        },
  { lat: 6.45,   lng: 3.40,    name: 'Lagos'         },
  { lat: 43.65,  lng: -79.38,  name: 'Toronto'       },
  { lat: 28.61,  lng: 77.21,   name: 'New Delhi'     },
  { lat: 34.05,  lng: -118.24, name: 'Los Angeles'   },
  { lat: 14.60,  lng: 121.0,   name: 'Manila'        },
  { lat: 48.85,  lng: 2.35,    name: 'Paris'         },
  { lat: -12.05, lng: -77.04,  name: 'Lima'          },
  { lat: 25.20,  lng: 55.27,   name: 'Dubai'         },
  { lat: 23.81,  lng: 90.41,   name: 'Dhaka'         },
  { lat: 40.71,  lng: -74.01,  name: 'New York'      },
  { lat: -34.60, lng: -58.38,  name: 'Buenos Aires'  },
  { lat: 15.55,  lng: 32.53,   name: 'Addis Ababa'   },
]

// Adds lat/long grid lines to the Three.js scene
function addGridLines(scene: any, THREE: any, radius: number) {
  const STEPS = 128

  // Latitude rings every 30°
  const latMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })
  for (let lat = -60; lat <= 60; lat += 30) {
    const phi = (90 - lat) * (Math.PI / 180)
    const pts: any[] = []
    for (let i = 0; i <= STEPS; i++) {
      const theta = (i / STEPS) * 2 * Math.PI
      pts.push(new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      ))
    }
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), latMat))
  }

  // Equator — brighter
  const eqMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 })
  const eqPts: any[] = []
  for (let i = 0; i <= STEPS; i++) {
    const theta = (i / STEPS) * 2 * Math.PI
    eqPts.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)))
  }
  scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(eqPts), eqMat))

  // Meridians every 30°
  const lngMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25 })
  for (let lng = 0; lng < 360; lng += 30) {
    const theta = lng * (Math.PI / 180)
    const pts: any[] = []
    for (let i = 0; i <= STEPS; i++) {
      const phi = (i / STEPS) * Math.PI
      pts.push(new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      ))
    }
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lngMat))
  }
}

function GlobeGL() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    let destroyed = false

    Promise.all([
      import('globe.gl'),
      import('three'),
      import('world-atlas/countries-110m.json'),
      import('topojson-client'),
    ]).then(([{ default: Globe }, THREE, { default: worldData }, topojson]) => {
      if (destroyed || !mountRef.current) return

      const el = mountRef.current
      const size = el.offsetWidth || 480

      // Country polygons for continent outlines
      const countries = (topojson.feature as any)(worldData, (worldData as any).objects.countries)

      const globe = (Globe as any)({ animateIn: true, rendererConfig: { alpha: true, antialias: true } })(el)

      // Orange globe fill
      globe.globeMaterial(new THREE.MeshBasicMaterial({ color: 0xFF6100 }))

      globe
        .width(size)
        .height(size)
        .showAtmosphere(false)
        // Country outline polygons — transparent fill, thick white stroke
        .polygonsData(countries.features)
        .polygonCapColor(() => 'rgba(0,0,0,0)')
        .polygonSideColor(() => 'rgba(255,255,255,0.15)')
        .polygonStrokeColor(() => '#ffffff')
        .polygonAltitude(0.006)
        // Transfer arcs — white with glow gradient
        .arcsData(CORRIDORS)
        .arcStartLat('startLat')
        .arcStartLng('startLng')
        .arcEndLat('endLat')
        .arcEndLng('endLng')
        .arcLabel('label')
        .arcColor(() => ['rgba(255,255,255,0)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0)'])
        .arcAltitude(0.18)
        .arcStroke(1.8)
        .arcDashLength(0.35)
        .arcDashGap(0.65)
        .arcDashAnimateTime(2800)
        // City dots
        .pointsData(CITIES)
        .pointLat('lat')
        .pointLng('lng')
        .pointLabel('name')
        .pointColor(() => '#ffffff')
        .pointAltitude(0.01)
        .pointRadius(0.8)
        // Pulse rings
        .ringsData(CITIES)
        .ringLat('lat')
        .ringLng('lng')
        .ringColor(() => (t: number) => `rgba(255,97,0,${1 - t})`)
        .ringMaxRadius(3.5)
        .ringPropagationSpeed(1.5)
        .ringRepeatPeriod(1200)

      globe.onGlobeReady(() => {
        const scene = (globe as any).scene()
        const renderer = (globe as any).renderer()
        // No stacking context isolation here — blend mode reaches the orange section bg
        renderer.domElement.style.mixBlendMode = 'screen'
        addGridLines(scene, THREE, 101)
      })

      const controls = (globe as any).controls()
      controls.enableZoom = false
      controls.autoRotate = true
      controls.autoRotateSpeed = 1.5
      controls.enablePan = false

      globe.pointOfView({ lat: 20, lng: -30, altitude: 2.2 }, 0)
    })

    return () => {
      destroyed = true
      if (mountRef.current) mountRef.current.innerHTML = ''
    }
  }, [])

  return (
    <div
      className="relative w-full flex items-center justify-center"
      style={{ aspectRatio: '1 / 1', maxWidth: 520 }}
      role="img"
      aria-label="Interactive globe showing Ria's cash pickup network across 190 countries"
    >
      <div ref={mountRef} className="w-full h-full" />
    </div>
  )
}

export default function CashPickup() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 80% 10%,  #FF8C2A 0%, transparent 60%),
          radial-gradient(ellipse 55% 50% at 10% 90%,  #C93D00 0%, transparent 55%),
          radial-gradient(ellipse 80% 80% at 50% 50%,  #FF6100 0%, #E55200 100%)
        `.trim(),
      }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #FF7625 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #E55600 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-width relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <GlobeGL />

          <div>
            <SectionReveal>
              <p className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-3">#1 Cash Pickup Network</p>
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                Cash in hand.<br />Wherever home is.
              </h2>
              <p className="text-white/90 text-lg mb-10">
                600,000+ pickup locations across 190 countries, at local stores, banks, and pharmacies in the neighborhoods your family actually lives in.
              </p>
            </SectionReveal>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {NETWORK_STATS.map((stat, i) => (
                <SectionReveal key={stat.label} delay={i * 0.1}>
                  <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-4">
                    <div
                      className="font-display font-extrabold text-white leading-none mb-1"
                      style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/90 text-sm">{stat.label}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.3}>
              <Button variant="white" size="lg">Find a location near them</Button>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
