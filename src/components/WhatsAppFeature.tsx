import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import kitchenPhoto from '../../images/6D0CC816-49D9-4F24-BEAB-C1F0149BAFB9.jpg'
import Button from './ui/Button'
import SectionReveal from './ui/SectionReveal'

const BENEFITS = [
  { num: '01', label: 'No app download', detail: 'Skip the app store entirely' },
  { num: '02', label: 'Rate confirmed instantly', detail: 'See exactly what they receive' },
  { num: '03', label: 'Cash pickup in minutes', detail: 'OXXO, Nequi, local partners' },
]

const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function WhatsAppFeature() {
  const photoRef = useRef(null)
  const inView = useInView(photoRef, { once: true, amount: 0.3 })

  return (
    <section className="section-padding" style={{ background: '#0D1F1C' }}>
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <SectionReveal>
              {/* Prominent "Only on Ria" badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10"
                style={{ boxShadow: '0 0 20px rgba(37,211,102,0.18)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" aria-hidden="true" />
                <span className="text-[#25D366] text-sm font-bold uppercase tracking-widest">Only on Ria</span>
              </div>

              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight mb-5"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                Send money the way<br />you already talk.
              </h2>
              <p className="text-white/55 text-lg mb-8 leading-relaxed">
                No new apps. No logins. Just open WhatsApp, message Ria, and your
                family gets paid, in the app 2 billion people already use.
              </p>
            </SectionReveal>

            {/* Benefit rows — editorial separator style */}
            <SectionReveal delay={0.1}>
              <div className="border-t border-white/10 mb-10">
                {BENEFITS.map((b) => (
                  <div
                    key={b.num}
                    className="flex items-baseline justify-between gap-6 py-3.5 border-b border-white/10"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-[#25D366] text-xs font-mono tabular-nums shrink-0">{b.num}</span>
                      <span className="text-white font-semibold text-sm">{b.label}</span>
                    </div>
                    <span className="text-white/35 text-xs shrink-0">{b.detail}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <Button
                variant="primary"
                size="lg"
                className="bg-[#25D366] hover:bg-[#1fba5a] shadow-[0_0_24px_rgba(37,211,102,0.32)]"
              >
                {WA_ICON}
                Try it on WhatsApp
              </Button>
              <p className="mt-4 text-white/30 text-xs">
                Available in select countries. More corridors coming soon.
              </p>
            </SectionReveal>
          </div>

          {/* Right — lifestyle photo + animated chat bubble */}
          <SectionReveal delay={0.15}>
            <div ref={photoRef} className="relative flex justify-center">
              {/* Ambient green glow behind image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full scale-75 blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.22) 0%, transparent 70%)' }}
              />

              <div className="relative w-full max-w-md">
                {/* Lifestyle photo */}
                <img
                  src={kitchenPhoto}
                  alt="Woman at home sending money via WhatsApp"
                  className="w-full h-[460px] object-cover object-center rounded-3xl"
                  style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}
                />

                {/* Gradient fade at the bottom to blend into section */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(to top, rgba(13,31,28,0.55) 0%, transparent 45%)',
                  }}
                />

                {/* WhatsApp confirmation bubble — animates in on scroll */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.93 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.55, duration: 0.55, type: 'spring', bounce: 0.28 }}
                  className="absolute bottom-5 left-4 right-4"
                  aria-label="WhatsApp confirmation: Transfer complete, $200 sent to Maria"
                >
                  <div
                    className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 max-w-[270px]"
                    style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.35)' }}
                  >
                    {/* Chat header */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-gray-700">Ria Money Transfer</span>
                    </div>

                    {/* Message content */}
                    <p className="text-[#25D366] text-sm font-semibold leading-snug">✓ Transfer complete</p>
                    <p className="text-gray-600 text-xs mt-0.5 leading-snug">$200 → 3,446 MXN sent to Maria.</p>
                    <p className="text-gray-600 text-xs leading-snug">Ready for cash pickup at OXXO now.</p>
                    <p className="text-gray-400 text-[10px] mt-1.5 text-right">10:43 ✓✓</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
