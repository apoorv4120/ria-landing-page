import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'
import CountUp from './ui/CountUp'

const NETWORK_STATS = [
  { value: 600, suffix: 'K+', label: 'Pickup Locations' },
  { value: 190, suffix: '+',  label: 'Countries' },
  { value: 7,   suffix: '',   label: 'Days a Week' },
]

const GLOBE_DOTS = [
  { cx: 22, cy: 42 },
  { cx: 28, cy: 55 },
  { cx: 48, cy: 40 },
  { cx: 52, cy: 45 },
  { cx: 65, cy: 38 },
  { cx: 75, cy: 50 },
  { cx: 35, cy: 58 },
  { cx: 55, cy: 52 },
]

function PulsingGlobe() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg viewBox="0 0 100 60" className="w-full" fill="none">
        <ellipse cx="50" cy="30" rx="48" ry="28" stroke="white" strokeWidth="0.3" strokeOpacity="0.3" />
        {[10,20,30,40,50,60,70,80,90].map(x => (
          <line key={x} x1={x} y1="2" x2={x} y2="58" stroke="white" strokeWidth="0.15" strokeOpacity="0.2" />
        ))}
        {[10,20,30,40,50].map(y => (
          <line key={y} x1="2" y1={y} x2="98" y2={y} stroke="white" strokeWidth="0.15" strokeOpacity="0.2" />
        ))}
      </svg>
      <div className="absolute inset-0">
        {GLOBE_DOTS.map((dot, i) => (
          <div
            key={i}
            className="absolute"
            style={{ left: `${dot.cx}%`, top: `${dot.cy}%`, transform: 'translate(-50%,-50%)' }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <div
                className="absolute inset-0 rounded-full bg-white animate-ping"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s', opacity: 0.6 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CashPickup() {
  return (
    <section className="bg-brand-500 section-padding overflow-hidden">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <PulsingGlobe />
          </SectionReveal>
          <div>
            <SectionReveal>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">#1 Cash Pickup Network</p>
              <h2 className="font-display font-extrabold text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                Cash in hand.<br />Wherever home is.
              </h2>
              <p className="text-white/70 text-lg mb-10">
                600,000+ pickup locations across 190 countries — at local stores, banks, and pharmacies in the neighborhoods your family actually lives in.
              </p>
            </SectionReveal>
            <div className="grid grid-cols-3 gap-6 mb-10">
              {NETWORK_STATS.map((stat, i) => (
                <SectionReveal key={stat.label} delay={i * 0.1}>
                  <div>
                    <div className="font-display font-extrabold text-white leading-none mb-1" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/60 text-sm">{stat.label}</p>
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
