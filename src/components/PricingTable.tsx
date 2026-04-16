import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'

// ── Cost model ─────────────────────────────────────────────────────────────
// Fee figures are representative estimates based on published typical ranges.
// Actual fees vary by institution, corridor, and payment method.
const RIA_FEE     = 2.99
const BANK_FLAT   = 25      // typical bank wire fee
const BANK_MARKUP = 0.04    // typical ~4% exchange rate spread
const WU_FLAT     = 9.99    // typical WU online fee
const WU_MARKUP   = 0.02    // typical ~2% WU rate spread

function computeCosts(amount: number) {
  const bankHidden = +(amount * BANK_MARKUP).toFixed(2)
  const wuHidden   = +(amount * WU_MARKUP).toFixed(2)
  const bankTotal  = +(BANK_FLAT + bankHidden).toFixed(2)
  const wuTotal    = +(WU_FLAT   + wuHidden).toFixed(2)
  return {
    bankHidden,
    wuHidden,
    bankTotal,
    wuTotal,
    savingsVsBank: +(bankTotal - RIA_FEE).toFixed(2),
  }
}

// ── Count-up animation ─────────────────────────────────────────────────────
function useCountUp(target: number, active: boolean, duration = 900) {
  const [val, setVal] = useState(0)
  const prevTarget = useRef(0)

  useEffect(() => {
    if (!active) { setVal(0); return }
    const from = prevTarget.current
    prevTarget.current = target
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const t     = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(+(from + (target - from) * eased).toFixed(2))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])

  return val
}

// ── Inline SVG icons ───────────────────────────────────────────────────────
const FeeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)
const RateIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)
const SpeedIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)
const PickupIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
)
const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
  </svg>
)
const CheckIcon = ({ cls = '' }: { cls?: string }) => (
  <svg className={`w-3.5 h-3.5 shrink-0 ${cls}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)
const LockIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
)

// ── Main component ─────────────────────────────────────────────────────────
export default function PricingTable() {
  const [rawInput, setRawInput] = useState('500')
  const [amount, setAmount]     = useState(500)

  const sectionRef = useRef<HTMLDivElement>(null)
  const inView     = useInView(sectionRef, { once: true, margin: '-120px' })
  const costs      = computeCosts(amount)
  const animated   = useCountUp(costs.savingsVsBank, inView)

  function handleAmount(v: string) {
    setRawInput(v)
    const n = parseFloat(v)
    if (!isNaN(n) && n > 0) setAmount(n)
  }

  const ROWS = [
    {
      key: 'fee', label: 'Transfer fee', Icon: FeeIcon,
      bank: { primary: `~$${BANK_FLAT}+`,             sub: `+ ~$${costs.bankHidden} rate markup`,  warn: true  },
      ria:  { primary: '$2.99',                        sub: 'Flat. No hidden costs.'                            },
      wu:   { primary: `~$${WU_FLAT}+`,               sub: `+ ~$${costs.wuHidden} rate markup`,    warn: true  },
    },
    {
      key: 'rate', label: 'Exchange rate', Icon: RateIcon,
      bank: { primary: 'Typically +4%', sub: 'Bank pockets the spread', warn: true  },
      ria:  { primary: 'Mid-market',    sub: 'Same as Google'                        },
      wu:   { primary: 'Typically +2%', sub: 'WU pockets the spread',   warn: true  },
    },
    {
      key: 'speed', label: 'Arrives in', Icon: SpeedIcon,
      bank: { primary: '3–5 days', sub: 'Business days only', warn: false },
      ria:  { primary: 'Minutes',  sub: 'Usually under 5 min'             },
      wu:   { primary: 'Same day', sub: '',                   warn: false },
    },
    {
      key: 'pickup', label: 'Cash pickup', Icon: PickupIcon,
      bank: { primary: 'Limited',   sub: 'Branch network only',      warn: false },
      ria:  { primary: '600,000+',  sub: 'Largest global network'              },
      wu:   { primary: '~500,000',  sub: 'locations worldwide',      warn: false },
    },
    {
      key: 'rating', label: 'App rating', Icon: StarIcon,
      bank: { primary: '3.2 ★', sub: 'App Store average', warn: false },
      ria:  { primary: '4.9 ★', sub: '200K+ reviews'                 },
      wu:   { primary: '3.8 ★', sub: 'App Store average', warn: false },
    },
  ]

  return (
    <section ref={sectionRef} className="relative bg-[#111111] section-padding">
      {/* Ambient glow — mirrors StatsBar's bottom glow, anchored at top to create continuity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(255,97,0,0.10) 0%, transparent 100%)',
        }}
      />

      <div className="container-width relative">

        {/* ── Section header ── */}
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">No surprises</p>
            <h2
              className="font-display font-extrabold text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              See exactly what you pay.<br />Nothing more.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Banks bury fees in exchange rates. Western Union stacks markups on top.
              We show you the real cost before you send a dollar.
            </p>
          </div>
        </SectionReveal>

        {/* ── Amount selector (corridor removed — fee model is corridor-agnostic) ── */}
        <SectionReveal delay={0.08}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="text-gray-400 text-sm font-medium">Comparing costs for sending</span>
            <div className="flex items-center bg-white/[0.07] border border-white/[0.12] rounded-xl overflow-hidden">
              <span className="pl-4 pr-1 text-white/50 text-sm select-none">$</span>
              <input
                type="number"
                min="1"
                value={rawInput}
                onChange={(e) => handleAmount(e.target.value)}
                aria-label="Transfer amount in USD"
                className="w-24 bg-transparent px-2 py-2.5 text-white font-semibold text-sm outline-none
                           [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
                           [&::-webkit-outer-spin-button]:appearance-none"
              />
              <span className="px-3 py-2.5 bg-white/[0.05] border-l border-white/[0.10] text-white/50 text-xs font-semibold select-none">
                USD
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* ── Comparison grid ── */}
        {/*
          The Ria column header uses pt-6 (extra top padding) to appear elevated
          without negative margin, so it won't be clipped by overflow containers.
          The visual "rise" comes from extra padding + taller header height.
        */}
        <SectionReveal delay={0.12}>
          <div className="overflow-x-auto overflow-y-visible">
            <div className="min-w-[600px]" role="table" aria-label="Transfer cost comparison">

              {/* Column headers */}
              <div className="grid grid-cols-[1.5fr_1fr_1.05fr_1fr] gap-x-2" role="row">
                <div role="columnheader" aria-label="Category" />

                {/* Bank */}
                <div role="columnheader"
                  className="bg-white/[0.05] border border-white/[0.10] rounded-t-xl px-4 py-4 text-center self-end">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Your Bank</p>
                  <p className="text-gray-600 text-xs mt-1">Wire transfer</p>
                </div>

                {/* Ria — elevated via extra top padding, no negative margin */}
                <div role="columnheader"
                  className="bg-brand-500 rounded-t-2xl px-4 pt-6 pb-5 text-center
                             shadow-[0_-8px_40px_rgba(255,97,0,0.20)]">
                  <div className="inline-flex items-center gap-1 bg-white/20 rounded-full px-2.5 py-0.5 mb-2">
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">✦ Best value</span>
                  </div>
                  <p className="text-white font-display font-extrabold text-base leading-tight">Ria</p>
                  <p className="text-white/70 text-[11px] mt-0.5">riamoneytransfer.com</p>
                </div>

                {/* WU */}
                <div role="columnheader"
                  className="bg-white/[0.05] border border-white/[0.10] rounded-t-xl px-4 py-4 text-center self-end">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Western Union</p>
                  <p className="text-gray-600 text-xs mt-1">Online transfer</p>
                </div>
              </div>

              {/* Data rows */}
              {ROWS.map((row, i) => (
                <motion.div
                  key={row.key}
                  role="row"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="grid grid-cols-[1.5fr_1fr_1.05fr_1fr] gap-x-2"
                >
                  {/* Label */}
                  <div role="rowheader"
                    className="flex items-center gap-2.5 px-2 py-4 border-b border-white/[0.06]">
                    <span className="text-gray-500 shrink-0"><row.Icon /></span>
                    <span className="text-gray-300 text-sm font-medium">{row.label}</span>
                  </div>

                  {/* Bank */}
                  <div role="cell"
                    className={`px-4 py-4 text-center bg-white/[0.025]
                      border-l border-r border-b border-white/[0.07]
                      ${i === 0 ? 'border-t' : ''}`}>
                    <p className={`text-sm font-semibold ${row.bank.warn ? 'text-red-400/80' : 'text-gray-400'}`}>
                      {row.bank.primary}
                    </p>
                    {row.bank.sub && (
                      <p className="text-gray-600 text-xs mt-0.5 leading-snug">{row.bank.sub}</p>
                    )}
                  </div>

                  {/* Ria */}
                  <div role="cell"
                    className="px-4 py-4 text-center bg-brand-500/[0.09]
                      border-l-2 border-r-2 border-b border-brand-500/30">
                    <div className="flex items-center justify-center gap-1">
                      <CheckIcon cls="text-brand-400" />
                      <p className="text-white text-sm font-bold">{row.ria.primary}</p>
                    </div>
                    {row.ria.sub && (
                      <p className="text-white/50 text-xs mt-0.5 leading-snug">{row.ria.sub}</p>
                    )}
                  </div>

                  {/* WU */}
                  <div role="cell"
                    className={`px-4 py-4 text-center bg-white/[0.025]
                      border-l border-r border-b border-white/[0.07]
                      ${i === 0 ? 'border-t' : ''}`}>
                    <p className={`text-sm font-semibold ${row.wu.warn ? 'text-red-400/70' : 'text-gray-400'}`}>
                      {row.wu.primary}
                    </p>
                    {row.wu.sub && (
                      <p className="text-gray-600 text-xs mt-0.5 leading-snug">{row.wu.sub}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Total cost + savings footer */}
              <div className="grid grid-cols-[1.5fr_1fr_1.05fr_1fr] gap-x-2" role="row">
                <div role="rowheader" className="px-2 py-5 flex items-center">
                  <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Typical total cost</span>
                </div>

                {/* Bank total */}
                <div role="cell"
                  className="bg-red-500/[0.06] border-l border-r border-b border-white/[0.07] rounded-b-xl px-4 py-5 text-center">
                  <p className="text-red-400 text-xl font-display font-extrabold">~${costs.bankTotal}</p>
                  <p className="text-gray-600 text-xs mt-1">fees + typical markup</p>
                </div>

                {/* Ria win */}
                <div role="cell"
                  className="bg-emerald-500/[0.08] border-l-2 border-r-2 border-b-2 border-brand-500/40
                             rounded-b-2xl px-4 py-5 text-center shadow-[0_12px_40px_rgba(255,97,0,0.10)]">
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-1">You keep</p>
                  <motion.p
                    key={costs.savingsVsBank}
                    className="text-white text-2xl font-display font-extrabold"
                    initial={{ scale: 0.94, opacity: 0.6 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    aria-live="polite"
                    aria-label={`You save approximately $${costs.savingsVsBank} compared to a typical bank`}
                  >
                    ~${animated.toFixed(2)} more
                  </motion.p>
                  <p className="text-emerald-400/60 text-xs mt-1">vs typical bank · on this transfer</p>
                </div>

                {/* WU total */}
                <div role="cell"
                  className="bg-red-500/[0.04] border-l border-r border-b border-white/[0.07] rounded-b-xl px-4 py-5 text-center">
                  <p className="text-red-400/80 text-xl font-display font-extrabold">~${costs.wuTotal}</p>
                  <p className="text-gray-600 text-xs mt-1">fees + typical markup</p>
                </div>
              </div>

            </div>
          </div>
        </SectionReveal>

        {/* ── Proof strip + disclaimer ── */}
        <SectionReveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.10]
                            rounded-full px-5 py-3 text-sm text-gray-300">
              <LockIcon />
              <span>
                We use the{' '}
                <strong className="text-white font-semibold">same exchange rate you see on Google.</strong>
                {' '}Banks profit from the gap. We don't.
              </span>
            </div>
            <p className="text-gray-600 text-xs text-center max-w-lg">
              * Fee estimates are representative of typical rates. Actual fees vary by institution, corridor, and payment method.
            </p>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
