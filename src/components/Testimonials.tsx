import SectionReveal from './ui/SectionReveal'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: "My mom picks it up at OXXO in 10 minutes. Every time.",
    name: 'Carlos M.',
    corridor: 'US → Mexico',
    flag: '🇲🇽',
    stars: 5,
  },
  {
    quote: "The rate is always fair and it never fails. I've tried others — I always come back.",
    name: 'Adaeze O.',
    corridor: 'UK → Nigeria',
    flag: '🇳🇬',
    stars: 5,
  },
  {
    quote: "3 years, never a late transfer. My parents trust it now as much as I do.",
    name: 'Priya S.',
    corridor: 'Canada → India',
    flag: '🇮🇳',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="container-width">
        <SectionReveal className="text-center mb-14">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Real People. Real Families.</p>
          <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            35 years of showing up for families.
          </h2>
          <p className="text-gray-500 text-lg mt-4">From New York to Mexico City. London to Lagos. Toronto to Manila.</p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-page rounded-2xl p-8 border border-gray-100 hover:border-brand-500 transition-colors duration-200"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-brand-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-800 text-lg font-medium leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-lg">
                  {t.flag}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.corridor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionReveal delay={0.3} className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Rated 4.5★ on Trustpilot · 22,900+ reviews
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
