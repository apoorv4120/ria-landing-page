import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'

const DESTINATIONS = [
  'to Mexico.',
  'to India.',
  'to the Philippines.',
  'to Nigeria.',
  'to Colombia.',
  'to Guatemala.',
  'to El Salvador.',
  'to China.',
  'to Vietnam.',
  'to Pakistan.',
  'to Bangladesh.',
  'to Kenya.',
  'to Ghana.',
  'to Morocco.',
  'to Chile.',
  'to Ecuador.',
  'to Peru.',
  'to Jamaica.',
  'to Haiti.',
  'to Nepal.',
]

export default function FinalCTA() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % DESTINATIONS.length)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="section-finalcta"
      className="relative section-padding text-center overflow-hidden"
    >
      {/* Subtle depth blobs — render on top of the fixed orange backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #FF7625 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #E55600 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-width max-w-2xl relative z-10">
        <SectionReveal>
          <h2
            className="font-display font-extrabold text-white leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Start your first transfer
            <br />
            <span
              className="inline-block overflow-hidden align-bottom"
              style={{ height: '1.5em' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: '0%' }}
                  exit={{ opacity: 0, y: '-100%' }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block"
                >
                  {DESTINATIONS[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Join millions of families who trust Ria every day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="white" size="lg">Send money now</Button>
            <a
              href="#"
              className="flex items-center gap-2.5 bg-black/30 border border-white/30 rounded-xl px-4 py-2.5 hover:bg-black/40 transition-colors"
            >
              <svg width="15" height="18" viewBox="0 0 15 18" fill="white" aria-hidden="true">
                <path d="M12.4 9.4c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8C2.8 4.2 1.2 5.2.5 6.7c-1.6 2.8-.4 7 1.1 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.8 3-.8 1.4 0 1.8.8 3 .8 1.2 0 2-1.2 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.8l.3.8ZM10 2.7c.6-.8 1.1-1.8 1-2.8-1 0-2.1.7-2.7 1.4-.6.7-1.1 1.7-.9 2.7 1 .1 2-.5 2.6-1.3Z"/>
              </svg>
              <div className="text-left">
                <p className="text-white/60 text-[9px] leading-none tracking-wide">Download on the</p>
                <p className="text-white text-[13px] font-semibold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 bg-black/30 border border-white/30 rounded-xl px-4 py-2.5 hover:bg-black/40 transition-colors"
            >
              <svg width="17" height="19" viewBox="0 0 17 19" fill="none" aria-hidden="true">
                <path d="M1 0.8L9.6 9.5L1 18.2V0.8Z" fill="white"/>
                <path d="M1 0.8L13.4 4.9L9.6 9.5L1 18.2Z" fill="white"/>
                <path d="M1 18.2L13.4 14L9.6 9.5L1 18.2Z" fill="white"/>
                <path d="M13.4 4.9L16.3 9.5L13.4 14L9.6 9.5L13.4 4.9Z" fill="white"/>
              </svg>
              <div className="text-left">
                <p className="text-white/60 text-[9px] leading-none tracking-wide">Get it on</p>
                <p className="text-white text-[13px] font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>

          <p className="text-white/65 text-sm">
            NMLS Licensed · 256-bit encryption · 100% satisfaction guarantee
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
