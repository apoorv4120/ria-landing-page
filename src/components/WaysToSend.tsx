import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'

const RECEIVE_METHODS = [
  'cash pickup.',
  'bank deposit.',
  'digital wallet.',
  'ATM withdrawal.',
  'home delivery.',
]

export default function WaysToSend() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % RECEIVE_METHODS.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-[#111111] section-padding overflow-hidden">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <SectionReveal>
            <p className="text-brand-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Flexibility
            </p>

            {/* Level 1 — cycling text IS the headline */}
            <div className="mb-6">
              <p className="text-white/60 font-medium leading-snug mb-3" style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}>
                They can collect it as
              </p>
              <div className="overflow-hidden" style={{ height: 'clamp(44px, 5.2vw, 74px)' }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-display font-extrabold text-brand-400 leading-none tracking-tight whitespace-nowrap"
                    style={{ fontSize: 'clamp(36px, 4.8vw, 64px)' }}
                  >
                    {RECEIVE_METHODS[index]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Level 2 — supporting heading */}
            <h2
              className="font-display font-extrabold text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(22px, 2.4vw, 34px)' }}
            >
              Your family picks up<br />however works for them.
            </h2>

            {/* Level 3 — data footnote */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/25 text-sm">
              <span>4 ways to send</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>5 ways to receive</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>every combination works</span>
            </div>
          </SectionReveal>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden md:block"
          >
            <img
              src="/ria-agent-woman.svg"
              alt="Woman receiving a money transfer at a Ria agent location"
              className="w-full h-[520px] object-cover rounded-3xl"
            />
            {/* Fade bottom edge into section bg */}
            <div className="absolute inset-x-0 bottom-0 h-10 rounded-b-3xl bg-gradient-to-t from-[#111111]/40 to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
