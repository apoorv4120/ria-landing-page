import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'

export default function FinalCTA() {
  return (
    <section
      className="relative section-padding text-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 20% 10%,  #FF8C2A 0%, transparent 60%),
          radial-gradient(ellipse 55% 50% at 90% 90%,  #C93D00 0%, transparent 55%),
          radial-gradient(ellipse 80% 80% at 50% 50%,  #FF6100 0%, #E55200 100%)
        `.trim(),
      }}
    >
      {/* Blobs */}
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
          <h2 className="font-display font-extrabold text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Start your first transfer in 2 minutes.
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Join millions of families who trust Ria every day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="white" size="lg">Send Money Now. It's free to sign up</Button>
            <Button variant="ghost" size="lg" className="text-white border-2 border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-white">
              Get the App
            </Button>
          </div>

          <p className="text-white/65 text-sm">
            NMLS Licensed · 256-bit encryption · 100% satisfaction guarantee
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
