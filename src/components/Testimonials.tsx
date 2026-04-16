import SectionReveal from './ui/SectionReveal'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: "My mom picks it up at OXXO in 10 minutes. Every time.",
    name: 'Carlos M.',
    corridor: 'US → Mexico',
    flag: '🇲🇽',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop&q=80',
  },
  {
    quote: "The rate is always fair and it never fails. I've tried others. I always come back.",
    name: 'Adaeze O.',
    corridor: 'UK → Nigeria',
    flag: '🇳🇬',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&auto=format&fit=crop&q=80',
  },
  {
    quote: "3 years, never a late transfer. My parents trust it now as much as I do.",
    name: 'Priya S.',
    corridor: 'Canada → India',
    flag: '🇮🇳',
    stars: 5,
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&auto=format&fit=crop&q=80',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="container-width">
        <SectionReveal className="text-center mb-14">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Real People. Real Families.</p>
          <h2
            className="font-display font-extrabold text-gray-900 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
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
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#FF6100">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-800 text-lg font-medium leading-relaxed mb-8">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs shadow-sm border border-gray-100"
                    aria-hidden="true"
                  >
                    {t.flag}
                  </span>
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
