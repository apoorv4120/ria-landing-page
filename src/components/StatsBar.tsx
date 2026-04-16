import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  {
    end: 1,
    suffix: 'B+',
    label: 'Transfers Completed',
    sub: 'And counting every day',
    format: (v: number) => `${v < 1 ? v.toFixed(1) : '1'}B+`,
  },
  {
    end: 190,
    suffix: '+',
    label: 'Countries Reached',
    sub: 'Nearly every nation on earth',
    format: (v: number) => `${Math.floor(v)}+`,
  },
  {
    end: 600,
    suffix: 'K+',
    label: 'Cash Pickup Locations',
    sub: 'More than any competitor',
    format: (v: number) => `${Math.floor(v)}K+`,
  },
  {
    end: 35,
    suffix: '+',
    label: 'Years of Trust',
    sub: 'Founded in New York, 1987',
    format: (v: number) => `${Math.floor(v)}+`,
  },
]

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          once: true,
        },
      })

      // Eyebrow line fades in first
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      )

      // Cards slam in with physical weight — expo.out stagger
      tl.fromTo(
        cardRefs.current,
        { opacity: 0, y: 64, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.13,
          ease: 'expo.out',
        },
        '-=0.2'
      )

      // Count-up fires in parallel with card entry
      numberRefs.current.forEach((el, i) => {
        if (!el) return
        const stat = STATS[i]
        const counter = { val: 0 }
        gsap.to(counter, {
          val: stat.end,
          duration: 1.8,
          ease: 'power3.out',
          delay: i * 0.13,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            once: true,
          },
          onUpdate() {
            if (el) el.textContent = stat.format(counter.val)
          },
          onComplete() {
            if (el) el.textContent = `${stat.end}${stat.suffix}`
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111111] py-20"
    >
      {/* Subtle ambient glow — warmth behind the numbers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(255,97,0,0.10) 0%, transparent 100%)',
        }}
      />

      <div className="container-width relative">
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="flex items-center gap-4 mb-12 opacity-0"
          aria-hidden="true"
        >
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-brand-500 text-xs font-semibold tracking-[0.18em] uppercase">
            Trusted by millions
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => { cardRefs.current[i] = el }}
              className="rounded-2xl border border-white/[0.07] bg-[#181818] px-8 py-10 opacity-0"
              style={{ borderTop: '3px solid #FF6100' }}
            >
              {/* Number */}
              <div
                className="font-display font-extrabold text-brand-500 leading-none mb-3"
                style={{ fontSize: 'clamp(48px, 5vw, 76px)' }}
              >
                <span ref={(el) => { numberRefs.current[i] = el }}>
                  0{stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="font-display font-extrabold text-white text-base leading-snug mb-1">
                {stat.label}
              </p>

              {/* Proof */}
              <p className="text-gray-500 text-sm leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
