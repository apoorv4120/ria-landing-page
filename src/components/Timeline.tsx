import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionReveal from './ui/SectionReveal'

// ── Data ───────────────────────────────────────────────────────────────────

const MILESTONES = [
  {
    year: '1987',
    event: 'Two brothers opened a single storefront in New York. Homesick immigrants needed a way to send money home.',
  },
  {
    year: '2000',
    event: 'A decade in, families across 50 countries were counting on us.',
  },
  {
    year: '2010',
    event: 'Joined Euronet — the reach to serve every corridor, every city, every neighborhood.',
  },
  {
    year: '2015',
    event: 'Your corner OXXO. Your local pharmacy. 300,000 places where cash was waiting.',
  },
  {
    year: '2024',
    event: '1 billion transfers later. Still the same company. Still the same promise.',
  },
]

// How long the line takes to draw across all 5 dots (seconds)
const LINE_DURATION = 2.0

// Delay for dot i to light up — proportional to its position along the line
const dotDelay = (i: number) => i * (LINE_DURATION / (MILESTONES.length - 1))

// ── Component ──────────────────────────────────────────────────────────────

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-page section-padding overflow-hidden">
      <div className="container-width">

        <SectionReveal className="max-w-2xl mb-14">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Heritage</p>
          <h2
            className="font-display font-extrabold text-gray-900 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            Before the apps.<br />Before the fintechs.<br />Ria was already there.
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            Founded in 1987. Not a startup. Not a pivot. This is all we do.
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative" ref={ref}>

          {/* ── Desktop connector ──────────────────────────────────────── */}

          {/* Gray base track */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 hidden md:block" aria-hidden="true" />

          {/* Orange animated fill */}
          <motion.div
            className="absolute top-5 left-0 right-0 h-0.5 bg-brand-500 origin-left hidden md:block"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: LINE_DURATION, ease: 'easeInOut' }}
          />


          {/* ── Milestone grid ─────────────────────────────────────────── */}

          <div className="grid md:grid-cols-5 gap-0 md:gap-8">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="relative">

                {/* Mobile: vertical connector between items */}
                {i > 0 && (
                  <div className="flex items-start mb-5 md:hidden" aria-hidden="true">
                    <div className="w-px h-5 bg-gray-200 ml-4" />
                  </div>
                )}

                {/* Dot */}
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10"
                  initial={{ backgroundColor: '#e5e7eb', scale: 0.85 }}
                  animate={isInView
                    ? { backgroundColor: '#FF6100', scale: 1 }
                    : { backgroundColor: '#e5e7eb', scale: 0.85 }
                  }
                  transition={{ delay: dotDelay(i), duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="w-3 h-3 rounded-full bg-white" />
                </motion.div>

                {/* Year */}
                <motion.p
                  className="font-display font-extrabold text-xl mb-2"
                  initial={{ color: '#9ca3af' }}
                  animate={isInView ? { color: '#FF6100' } : { color: '#9ca3af' }}
                  transition={{ delay: dotDelay(i) + 0.15, duration: 0.3 }}
                >
                  {m.year}
                </motion.p>

                {/* Event copy */}
                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: dotDelay(i) + 0.22, duration: 0.45, ease: 'easeOut' }}
                >
                  {m.event}
                </motion.p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
