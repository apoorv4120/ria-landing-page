import CountUp from './ui/CountUp'
import SectionReveal from './ui/SectionReveal'

const STATS = [
  { value: 35,  suffix: '+',  label: 'Years Trusted' },
  { value: 1,   suffix: 'B+', label: 'Transfers Completed' },
  { value: 600, suffix: 'K+', label: 'Locations Worldwide' },
  { value: 190, suffix: '+',  label: 'Countries Served' },
  { value: 49,  suffix: '',   label: 'App Store Rating', display: '4.9★' },
]

export default function StatsBar() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-display font-extrabold text-brand-500 leading-none mb-2" style={{ fontSize: 'clamp(40px, 4vw, 64px)' }}>
                  {stat.display ? stat.display : (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
