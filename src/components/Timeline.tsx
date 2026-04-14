import { motion } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'

const MILESTONES = [
  { year: '1987', event: 'Founded in New York by immigrants, for immigrants.' },
  { year: '2000', event: 'Expanded to 50 countries across 3 continents.' },
  { year: '2010', event: 'Joined the Euronet Worldwide network.' },
  { year: '2015', event: '300,000 pickup locations worldwide.' },
  { year: '2024', event: '600K+ locations, 190+ countries, 1B+ transfers.' },
]

export default function Timeline() {
  return (
    <section className="bg-page section-padding overflow-hidden">
      <div className="container-width">
        <SectionReveal className="max-w-2xl mb-14">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Heritage</p>
          <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Before the apps.<br />Before the fintechs.<br />Ria was already there.
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            Founded in 1987. Not a startup. Not a pivot. This is all we do.
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Horizontal connector line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 hidden md:block" />

          <div className="grid md:grid-cols-5 gap-8">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center mb-4 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <p className="font-display font-extrabold text-brand-500 text-xl mb-2">{m.year}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
