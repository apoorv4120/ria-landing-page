import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionReveal from './ui/SectionReveal'

// ── Icons ──────────────────────────────────────────────────────────────────

function IconSteps() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="3" cy="3.5" r="1.5" fill="currentColor" />
      <circle cx="3" cy="9" r="1.5" fill="currentColor" />
      <circle cx="3" cy="14.5" r="1.5" fill="currentColor" />
      <line x1="1.5" y1="5" x2="1.5" y2="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1.5" y1="10.5" x2="1.5" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6.5" y1="3.5" x2="16" y2="3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6.5" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6.5" y1="14.5" x2="13" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 2a5 5 0 0 1 5 5v3l1.5 2.5h-13L4 10V7a5 5 0 0 1 5-5Z" />
      <path d="M7 14.5a2 2 0 0 0 4 0" />
    </svg>
  )
}

function IconZap() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.5 2 4 10h5l-1.5 6L16 8h-5l-.5-6Z" />
    </svg>
  )
}

// ── Data ───────────────────────────────────────────────────────────────────

const STEPS = [
  'Transfer was submitted',
  'The money is on its way',
  'Transfer received by partner',
  'Transfer was paid out',
]

const FEATURES = [
  { Icon: IconSteps, title: 'Step-by-step updates',           body: 'Every stage from send to pickup, in real time.' },
  { Icon: IconBell,  title: 'Rate alerts for your corridor',  body: 'Get notified when rates move in your favor.' },
  { Icon: IconZap,   title: 'Send again in 2 taps',           body: 'Saved recipients. No re-entering details.' },
]

// ── Transfer complete notification ─────────────────────────────────────────

function TransferNotification({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      className="absolute -bottom-5 -left-[72px] bg-white rounded-2xl px-3.5 py-3 z-10"
      style={{
        width: 210,
        boxShadow: '0 8px 32px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.08)',
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#22c55e" />
            <path d="M4.5 8.5l2.5 2 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-gray-900 text-[12px] font-semibold leading-tight">Transfer complete</p>
          <p className="text-gray-500 text-[11px] mt-0.5 leading-tight">Maria collected her cash at OXXO</p>
        </div>
      </div>
    </motion.div>
  )
}

// ── App store badges ───────────────────────────────────────────────────────

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 bg-[#1C1C1E] border border-white/[0.10] rounded-xl px-4 py-2.5 hover:bg-white/[0.08] transition-colors"
    >
      {/* Apple logo */}
      <svg width="15" height="18" viewBox="0 0 15 18" fill="white" aria-hidden="true">
        <path d="M12.4 9.4c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8C2.8 4.2 1.2 5.2.5 6.7c-1.6 2.8-.4 7 1.1 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.8 3-.8 1.4 0 1.8.8 3 .8 1.2 0 2-1.2 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.8l.3.8ZM10 2.7c.6-.8 1.1-1.8 1-2.8-1 0-2.1.7-2.7 1.4-.6.7-1.1 1.7-.9 2.7 1 .1 2-.5 2.6-1.3Z"/>
      </svg>
      <div>
        <p className="text-white/50 text-[9px] leading-none tracking-wide">Download on the</p>
        <p className="text-white text-[13px] font-semibold leading-tight">App Store</p>
      </div>
    </a>
  )
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 bg-[#1C1C1E] border border-white/[0.10] rounded-xl px-4 py-2.5 hover:bg-white/[0.08] transition-colors"
    >
      {/* Google Play logo */}
      <svg width="17" height="19" viewBox="0 0 17 19" fill="none" aria-hidden="true">
        <path d="M1 0.8L9.6 9.5L1 18.2V0.8Z" fill="#34A853"/>
        <path d="M1 0.8L13.4 4.9L9.6 9.5L1 0.8Z" fill="#FBBC04"/>
        <path d="M1 18.2L13.4 14L9.6 9.5L1 18.2Z" fill="#EA4335"/>
        <path d="M13.4 4.9L16.3 9.5L13.4 14L9.6 9.5L13.4 4.9Z" fill="#4285F4"/>
      </svg>
      <div>
        <p className="text-white/50 text-[9px] leading-none tracking-wide">Get it on</p>
        <p className="text-white text-[13px] font-semibold leading-tight">Google Play</p>
      </div>
    </a>
  )
}

// ── Phone mockup ───────────────────────────────────────────────────────────

function PhoneMockup() {
  const [activeStep, setActiveStep] = useState(0)
  const isComplete = activeStep === STEPS.length

  useEffect(() => {
    const delay = activeStep === 0 ? 700 : activeStep < STEPS.length ? 1100 : 2800
    const t = setTimeout(
      () => setActiveStep(s => (s < STEPS.length ? s + 1 : 0)),
      delay,
    )
    return () => clearTimeout(t)
  }, [activeStep])

  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[44px] blur-3xl scale-110 -z-10"
        style={{ background: 'radial-gradient(ellipse, rgba(255,97,0,0.25) 0%, transparent 70%)' }}
      />

      {/* Phone shell */}
      <div
        className="w-[264px] rounded-[40px] border-[3px] border-gray-900 bg-white shadow-2xl overflow-hidden flex flex-col"
        style={{ height: 560 }}
        role="img"
        aria-label="Ria app showing a live transfer being tracked step by step"
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3.5 pb-1 shrink-0">
          <span className="text-[11px] font-semibold text-gray-900">9:41</span>
          <div className="flex items-center gap-1" aria-hidden="true">
            <svg width="16" height="11" viewBox="0 0 16 11">
              <rect x="0"  y="7"   width="3" height="4" rx="0.5" fill="#111827" />
              <rect x="4"  y="4.5" width="3" height="6.5" rx="0.5" fill="#111827" />
              <rect x="8"  y="2"   width="3" height="9" rx="0.5" fill="#111827" />
              <rect x="12" y="0"   width="3" height="11" rx="0.5" fill="#111827" opacity="0.25" />
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <circle cx="7.5" cy="9.5" r="1" fill="#111827" />
              <path d="M4.8 7C5.7 6.1 6.6 5.6 7.5 5.6S9.3 6 10.2 7" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M2.2 4.5C3.8 2.9 5.5 2 7.5 2s3.7.9 5.3 2.5" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <svg width="22" height="11" viewBox="0 0 22 11">
              <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="#111827" />
              <rect x="2" y="2" width="14" height="7" rx="1" fill="#111827" />
              <path d="M20 3.5v4a1.5 1.5 0 0 0 0-4Z" fill="#111827" />
            </svg>
          </div>
        </div>

        {/* Nav: back + title */}
        <div className="px-4 pt-1 pb-3 shrink-0">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="mb-2.5" aria-hidden="true">
            <path d="M8 1L1 8l7 7M1 8h18" stroke="#FF6100" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-[17px] font-bold text-gray-900">Track transfer</p>
        </div>

        {/* Amount card */}
        <div className="mx-3 mb-3 rounded-2xl bg-gray-50 border border-gray-100 py-3.5 px-4 shrink-0">
          <p className="text-[16px] font-bold text-gray-900 text-center">200 USD</p>
          <p className="text-[12px] text-gray-400 text-center mt-0.5">Sending to Maria</p>
        </div>

        {/* Timeline card */}
        <div className="mx-3 mb-3 rounded-2xl bg-gray-50 border border-gray-100 px-4 py-4 flex-1">
          {STEPS.map((label, i) => {
            const isDone   = i < activeStep
            const isLast   = i === STEPS.length - 1
            const dotColor = isDone ? (isLast ? '#22c55e' : '#FF6100') : '#e5e7eb'

            return (
              <div key={label} className="flex gap-3">
                {/* Dot + connector */}
                <div className="flex flex-col items-center shrink-0" style={{ width: 13 }}>
                  <motion.div
                    className="w-3 h-3 rounded-full shrink-0"
                    animate={{ backgroundColor: dotColor }}
                    transition={{ duration: 0.3 }}
                  />
                  {!isLast && (
                    <div
                      className="relative overflow-hidden mt-0.5"
                      style={{ width: 1, height: 38, backgroundColor: '#e5e7eb' }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 w-full bg-brand-500"
                        animate={{ height: activeStep > i ? '100%' : '0%' }}
                        transition={{ duration: 0.55, ease: 'easeInOut' }}
                      />
                    </div>
                  )}
                </div>

                {/* Label */}
                <motion.p
                  className="text-[12px] leading-tight"
                  style={{ paddingBottom: isLast ? 0 : 32 }}
                  animate={{ color: isDone ? '#111827' : '#9ca3af' }}
                  transition={{ duration: 0.3 }}
                >
                  {label}
                </motion.p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Surface shelf glow — makes phone look like it's sitting on a lit surface */}
      <div
        aria-hidden="true"
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 -z-10"
        style={{
          width: '130%',
          height: 52,
          background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(255,97,0,0.38) 0%, transparent 100%)',
          filter: 'blur(14px)',
        }}
      />

      {/* Transfer complete notification */}
      <TransferNotification show={isComplete} />
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────

export default function AppShowcase() {
  return (
    <section className="bg-gray-900 section-padding overflow-hidden">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <SectionReveal>
              <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Real-time transfer tracking
              </p>
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                Track every peso.<br />
                Every rupee.<br />
                Every dirham.
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Send money. Watch it arrive. Your family knows before you even call.
              </p>
            </SectionReveal>

            <div className="flex flex-col gap-6 mb-10">
              {FEATURES.map(({ Icon, title, body }, i) => (
                <SectionReveal key={title} delay={i * 0.1}>
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-400 shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-0.5">{title}</p>
                      <p className="text-gray-400 text-sm">{body}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* CTA — app store badges */}
            <SectionReveal delay={0.3}>
              <p className="text-white font-semibold mb-3">Get the app</p>
              <div className="flex flex-wrap gap-3 mb-3">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#FF6100">
                      <path d="M6 1l1.2 3.7H11L8 6.9l1.2 3.7L6 8.4 2.8 10.6 4 6.9 1 4.7h3.8z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 text-xs">4.9 · 22,900+ reviews</span>
              </div>
            </SectionReveal>
          </div>

          {/* Right — phone mockup */}
          <SectionReveal delay={0.15}>
            <div className="flex justify-center">
              <PhoneMockup />
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
