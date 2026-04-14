import { motion } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'

const FEATURES = [
  { icon: '🔔', title: 'Live rate alerts', body: 'Get notified when rates are in your favor.' },
  { icon: '📍', title: 'Instant tracking', body: 'From send to pickup — follow every step.' },
  { icon: '⚡', title: 'Saved recipients', body: 'Send again in 2 taps. No re-entering details.' },
]

export default function AppShowcase() {
  return (
    <section className="bg-gray-900 section-padding overflow-hidden">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <SectionReveal>
              <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Mobile App</p>
              <h2 className="font-display font-extrabold text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                Track every peso.<br />Every rupee.<br />Every dirham.
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Real-time tracking, instant notifications, saved recipients, and live exchange rates — all in one app.
              </p>
            </SectionReveal>

            <div className="flex flex-col gap-6 mb-10">
              {FEATURES.map((f, i) => (
                <SectionReveal key={f.title} delay={i * 0.1}>
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <p className="text-white font-semibold mb-0.5">{f.title}</p>
                      <p className="text-gray-400 text-sm">{f.body}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <Button variant="primary" size="md">Download on App Store</Button>
                <Button variant="secondary" size="md" className="border-gray-600 text-gray-300 hover:bg-gray-800">Get on Google Play</Button>
              </div>
              <p className="text-gray-500 text-sm">4.9★ App Store · 4.6★ Google Play · 4.5★ Trustpilot</p>
            </SectionReveal>
          </div>

          {/* Right — floating phone mockup */}
          <SectionReveal delay={0.1}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex justify-center"
            >
              <div className="w-56 h-[480px] bg-gray-800 rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden flex flex-col">
                {/* App header */}
                <div className="bg-brand-500 px-5 pt-8 pb-5">
                  <p className="text-white/70 text-xs mb-1">Transfer sent</p>
                  <p className="text-white font-bold text-lg">$250.00 → MXN</p>
                  <p className="text-white/70 text-xs mt-1">4,312.50 MXN · Fee $2.99</p>
                </div>
                {/* Progress steps */}
                <div className="flex-1 bg-gray-800 p-4 flex flex-col gap-4">
                  {[
                    { label: 'Sent', done: true },
                    { label: 'Processing', done: true },
                    { label: 'Ready for pickup', done: true },
                    { label: 'Collected', done: false },
                  ].map((step) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${step.done ? 'bg-brand-500' : 'bg-gray-600'}`}>
                        {step.done && <span className="text-white text-[8px]">✓</span>}
                      </div>
                      <p className={`text-xs ${step.done ? 'text-white' : 'text-gray-500'}`}>{step.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
