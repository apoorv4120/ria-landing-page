import Button from './ui/Button'
import SectionReveal from './ui/SectionReveal'

const STEPS = [
  { num: '01', title: 'Open WhatsApp', body: 'Message @RiaMoney — no app download, no new account.' },
  { num: '02', title: 'Tell us the amount', body: 'Type how much you want to send. We confirm the rate instantly.' },
  { num: '03', title: 'Done', body: 'Your recipient gets notified the moment money arrives.' },
]

export default function WhatsAppFeature() {
  return (
    <section className="bg-white section-padding">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <SectionReveal>
              <p className="text-[#25D366] text-xs font-semibold uppercase tracking-widest mb-3">Only on Ria</p>
              <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                Send money the way you already talk.
              </h2>
              <p className="text-gray-500 text-lg mb-10">
                No new apps. No logins. Just open WhatsApp, message Ria, and your family gets paid — in the app 2 billion people already use.
              </p>
            </SectionReveal>

            <div className="flex flex-col gap-6 mb-10">
              {STEPS.map((step, i) => (
                <SectionReveal key={step.num} delay={i * 0.1}>
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center text-sm font-bold">
                      {step.num}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">{step.title}</p>
                      <p className="text-gray-500 text-sm">{step.body}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.3}>
              <Button variant="primary" size="lg" className="bg-[#25D366] hover:bg-[#1fba5a]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Try it on WhatsApp
              </Button>
            </SectionReveal>
          </div>

          {/* Right — phone mockup */}
          <SectionReveal delay={0.15}>
            <div className="relative flex justify-center">
              <div className="w-64 h-[480px] bg-gray-900 rounded-[40px] border-4 border-gray-800 shadow-2xl flex flex-col overflow-hidden">
                {/* WhatsApp-style chat header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Ria Money Transfer</p>
                    <p className="text-green-300 text-xs">Online</p>
                  </div>
                </div>
                <div className="flex-1 bg-[#ECE5DD] p-3 flex flex-col gap-2">
                  <div className="self-end bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
                    <p className="text-gray-800 text-xs">Send $200 to Mexico</p>
                    <p className="text-gray-400 text-[10px] text-right">10:42</p>
                  </div>
                  <div className="self-start bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                    <p className="text-gray-800 text-xs">Got it! $200 USD → 3,446 MXN</p>
                    <p className="text-gray-800 text-xs">Fee: $2.99</p>
                    <p className="text-gray-400 text-[10px]">10:42</p>
                  </div>
                  <div className="self-start bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-[#25D366] text-xs font-semibold">✓ Transfer complete</p>
                    <p className="text-gray-800 text-xs">Your family can pick up cash at any OXXO now.</p>
                    <p className="text-gray-400 text-[10px]">10:43</p>
                  </div>
                </div>
              </div>
              {/* Floating glow */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-[#25D366] rounded-full" />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
