import { motion } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'

const ROWS = [
  { label: 'Send $500',      ria: '$2.99',       bank: '$18–$45',    wu: '$9.99' },
  { label: 'Exchange rate',  ria: 'Mid-market',  bank: '+3–5% markup', wu: '+2% markup' },
  { label: 'Arrives',        ria: 'Minutes',     bank: '3–5 days',   wu: 'Same day' },
]

export default function PricingTable() {
  return (
    <section className="bg-page section-padding">
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">No surprises</p>
            <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              See exactly what you pay.<br />Nothing more.
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              While banks hide fees in exchange rates, we show you the real number upfront.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                <div className="p-4" />
                {['Ria', 'Your Bank', 'Western Union'].map((col) => (
                  <div key={col} className={`p-4 text-center text-sm font-semibold ${col === 'Ria' ? 'text-brand-500' : 'text-gray-400'}`}>
                    {col}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {ROWS.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`grid grid-cols-4 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <div className="p-4 text-sm font-medium text-gray-700">{row.label}</div>
                  <div className="p-4 text-center text-sm font-bold text-brand-500">{row.ria}</div>
                  <div className="p-4 text-center text-sm text-gray-400">{row.bank}</div>
                  <div className="p-4 text-center text-sm text-gray-400">{row.wu}</div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-8 text-center">
              <Button variant="primary" size="lg">Calculate your transfer</Button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
