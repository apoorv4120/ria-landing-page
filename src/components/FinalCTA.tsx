import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'

export default function FinalCTA() {
  return (
    <section className="bg-brand-500 section-padding text-center">
      <div className="container-width max-w-2xl">
        <SectionReveal>
          <h2 className="font-display font-extrabold text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Start your first transfer in 2 minutes.
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Join millions of families who trust Ria every day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="white" size="lg">Send Money Now — it's free to sign up</Button>
            <Button variant="ghost" size="lg" className="text-white border-2 border-white/40 hover:bg-white/10 hover:text-white">
              Send on WhatsApp
            </Button>
          </div>
          <p className="text-white/40 text-sm">
            NMLS Licensed · 256-bit encryption · 100% satisfaction guarantee
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
