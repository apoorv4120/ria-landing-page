import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Globe data ───────────────────────────────────────────────────────────────

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

function addGridLines(scene: any, THREE: any, radius: number) {
  const STEPS = 128

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

  const eqMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 })
  const eqPts: any[] = []
  for (let i = 0; i <= STEPS; i++) {
    const theta = (i / STEPS) * 2 * Math.PI
    eqPts.push(new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta)))
  }
  scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(eqPts), eqMat))

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
      const size = el.offsetWidth || 600

      const countries = (topojson.feature as any)(worldData, (worldData as any).objects.countries)

      const globe = (Globe as any)({ animateIn: true, rendererConfig: { alpha: true, antialias: true } })(el)

      globe.globeMaterial(new THREE.MeshBasicMaterial({ color: 0xFF6100 }))

      globe
        .width(size)
        .height(size)
        .showAtmosphere(false)
        .polygonsData(countries.features)
        .polygonCapColor(() => 'rgba(0,0,0,0)')
        .polygonSideColor(() => 'rgba(255,255,255,0.15)')
        .polygonStrokeColor(() => '#ffffff')
        .polygonAltitude(0.006)
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
        .pointsData(CITIES)
        .pointLat('lat')
        .pointLng('lng')
        .pointLabel('name')
        .pointColor(() => '#ffffff')
        .pointAltitude(0.01)
        .pointRadius(0.8)
        .ringsData(CITIES)
        .ringLat('lat')
        .ringLng('lng')
        .ringColor(() => (t: number) => `rgba(255,97,0,${1 - t})`)
        .ringMaxRadius(3.5)
        .ringPropagationSpeed(1.5)
        .ringRepeatPeriod(1200)

      // Transparent canvas background — no mix-blend-mode needed.
      // GSAP transforms create an isolated stacking context that breaks screen blending,
      // so we make the renderer genuinely transparent instead.
      globe.backgroundColor('rgba(0,0,0,0)')

      globe.onGlobeReady(() => {
        const scene = (globe as any).scene()
        const renderer = (globe as any).renderer()
        renderer.setClearColor(0x000000, 0)
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

  return <div ref={mountRef} className="w-full h-full" />
}

// ─── GlobeLayer ───────────────────────────────────────────────────────────────
// Fixed orange backdrop + fixed globe that travels through the page via GSAP.
// Dark/light sections are opaque and act as curtains over the globe.
// Orange sections (Hero, CashPickup, FinalCTA) are transparent — globe shows through.

export default function GlobeLayer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Desktop only — mobile shows an inline globe inside CashPickup
    if (window.innerWidth < 768) return

    const el = containerRef.current
    if (!el) return

    const vw = window.innerWidth

    // Initial position: right side of viewport, large — sits behind hero calculator
    // Globe container anchored at top:50vh left:50vw via CSS;
    // xPercent:-50 yPercent:-50 centers it, then x/y offset shifts it.
    // All phases use fromTo so each has explicit start/end — no state bleed between phases.

    gsap.set(el, {
      xPercent: -50,
      yPercent: -50,
      x: vw * 0.46,
      y: 0,
      scale: 2.4,
      opacity: 0.72,
    })

    // Phase 1 — Hero: right/large → center/scaled-down
    const phase1 = gsap.fromTo(el,
      { x: vw * 0.46, scale: 2.4, opacity: 0.72 },
      {
        x: 0, scale: 1.5, opacity: 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: '#section-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.8,
        },
      }
    )

    // Phase 2a — CashPickup entry: center/scaled-up → left/home (scale 1.0)
    const phase2a = gsap.fromTo(el,
      { x: 0, scale: 1.5, opacity: 0.9 },
      {
        x: vw * -0.23, scale: 1.0, opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#section-cashpickup',
          start: 'top bottom',   // CashPickup enters viewport
          end: 'center center',  // CashPickup settles in center
          scrub: 1.8,
        },
      }
    )

    // Phase 2b — CashPickup exit: left/home → center/scaled-up again
    const phase2b = gsap.fromTo(el,
      { x: vw * -0.23, scale: 1.0, opacity: 1 },
      {
        x: 0, scale: 1.4, opacity: 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: '#section-cashpickup',
          start: 'center center', // begins as section starts to leave
          end: 'bottom top',      // completes when section is fully scrolled past
          scrub: 1.8,
        },
      }
    )

    // Phase 3 — FinalCTA: center/medium → center/huge/faded backdrop
    const phase3 = gsap.fromTo(el,
      { x: 0, scale: 1.4, opacity: 0.9 },
      {
        x: 0, scale: 2.4, opacity: 0.18,
        ease: 'none',
        scrollTrigger: {
          trigger: '#section-finalcta',
          start: 'top 80%',
          end: 'center center',
          scrub: 1.5,
        },
      }
    )

    return () => {
      phase1.scrollTrigger?.kill()
      phase2a.scrollTrigger?.kill()
      phase2b.scrollTrigger?.kill()
      phase3.scrollTrigger?.kill()
    }
  }, [])

  return (
    <>
      {/* Fixed orange backdrop — always visible behind all sections */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(ellipse 70% 60% at 80% 10%,  #FF8C2A 0%, transparent 60%),
            radial-gradient(ellipse 55% 50% at 10% 90%,  #C93D00 0%, transparent 55%),
            radial-gradient(ellipse 80% 80% at 50% 50%,  #FF6100 0%, #E55200 100%)
          `.trim(),
        }}
      />

      {/* Fixed globe — desktop only, hidden on mobile */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="fixed pointer-events-none hidden md:block"
        style={{
          top: '50vh',
          left: '50vw',
          width: 600,
          height: 600,
          zIndex: 1,
        }}
      >
        <GlobeGL />
      </div>
    </>
  )
}
