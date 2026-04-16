import { motion } from 'framer-motion'
import Button from './ui/Button'
import Calculator from './ui/Calculator'

const TRUST_SIGNALS = [
  { label: '4.9★', sub: 'App Store', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )},
  { label: '4.6★', sub: 'Google Play', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76c.31.17.67.19 1.01.07l11.75-6.72L12.89 14 3.18 23.76zm15.49-9.05L5.51 7.28 3.19.24c-.34-.12-.7-.1-1.01.07C1.82.5 1.5 1.01 1.5 1.56v20.88c0 .55.32 1.06.68 1.25.31.17.67.19 1.01.07l.02-.02 15.46-8.97c.37-.21.6-.6.6-1.03s-.23-.82-.6-1.03zM3.18.24 12.9 10 16 6.93 4.19.17c-.34-.19-.71-.17-1.01.07z"/>
    </svg>
  )},
  { label: '4.5★', sub: 'Trustpilot', icon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0L9.27 8.18H1l6.63 4.82L5.18 21.2 12 16.36l6.82 4.84-2.45-8.2L23 8.18h-8.27L12 0z"/>
    </svg>
  )},
]

export default function Hero() {
  return (
    <section
      id="section-hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >

      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="blob-animate absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FF7625 0%, transparent 70%)',
            animation: 'blob 8s ease-in-out infinite',
          }}
        />
        <div
          className="blob-animate absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full"
          style={{
            opacity: 0.15,
            background: 'radial-gradient(circle, #E55600 0%, transparent 70%)',
            animation: 'blob 12s ease-in-out infinite reverse',
          }}
        />
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-width relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">

          {/* Left — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white/90 text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Trusted since 1987
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(48px, 6.5vw, 88px)' }}
            >
              Your family gets it{' '}
              <span className="relative inline-block">
                in minutes.
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-white/40"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Send money to 190+ countries with 600,000+ pickup locations. Trusted by millions for 35 years.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <Button variant="ghost" size="lg" className="text-white border-2 border-white/50 hover:bg-white/15 hover:border-white/70 focus-visible:ring-white transition-all">Get the App</Button>
            </motion.div>

            {/* Trust signal pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-2"
            >
              {TRUST_SIGNALS.map(({ label, sub, icon }) => (
                <div
                  key={sub}
                  className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-semibold"
                >
                  {icon}
                  <span>{label}</span>
                  <span className="text-white/60 font-normal">{sub}</span>
                </div>
              ))}
              <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-semibold">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"/>
                </svg>
                <span>Licensed &amp; Regulated</span>
              </div>
            </motion.div>
          </div>

          {/* Right — calculator (single clean card, no wrapper) */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ filter: 'drop-shadow(0 32px 80px rgba(0,0,0,0.28))' }}
          >
            <Calculator />
          </motion.div>

        </div>
      </div>

      {/* Blob keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(20px, -20px) scale(1.05); }
          66%       { transform: translate(-15px, 15px) scale(0.95); }
        }
        @media (prefers-reduced-motion: reduce) {
          .blob-animate { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
