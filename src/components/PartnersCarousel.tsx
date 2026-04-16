// Logos rendered in each brand's primary color — pop against the dark #111111 bg

function OxxoLogo() {
  return (
    <svg height="40" viewBox="0 0 88 28" aria-label="OXXO" role="img">
      <text x="0" y="22" fill="#E8192C"
        fontFamily="'Plus Jakarta Sans', Arial Black, sans-serif"
        fontWeight="900" fontSize="26" letterSpacing="-1">
        OXXO
      </text>
    </svg>
  )
}

function MercadoPagoLogo() {
  return (
    <svg height="46" viewBox="0 0 140 32" aria-label="Mercado Pago" role="img">
      <path d="M4 10h12l-2 14H6L4 10z" fill="#00B1EA" />
      <path d="M7 10V8a3 3 0 016 0v2" fill="none" stroke="#00B1EA" strokeWidth="1.8" strokeLinecap="round" />
      <text x="22" y="15" fill="#00B1EA"
        fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" letterSpacing="-0.3">
        mercado
      </text>
      <text x="22" y="28" fill="#00B1EA"
        fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" letterSpacing="-0.3">
        pago
      </text>
    </svg>
  )
}

function NequiLogo() {
  return (
    <svg height="40" viewBox="0 0 78 28" aria-label="Nequi" role="img">
      <text x="0" y="22" fill="#FF4D6D"
        fontFamily="'Plus Jakarta Sans', Arial Rounded MT Bold, sans-serif"
        fontWeight="800" fontSize="24" letterSpacing="-0.5">
        nequi
      </text>
    </svg>
  )
}

function YapeLogo() {
  return (
    <svg height="44" viewBox="0 0 80 30" aria-label="Yape" role="img">
      <circle cx="13" cy="15" r="12" fill="none" stroke="#7C3AED" strokeWidth="2" />
      <circle cx="13" cy="15" r="5" fill="#7C3AED" />
      <text x="30" y="21" fill="#7C3AED"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontWeight="900" fontSize="20" letterSpacing="-0.5">
        yape
      </text>
    </svg>
  )
}

function TurbusLogo() {
  return (
    <svg height="40" viewBox="0 0 96 28" aria-label="Turbus" role="img">
      <text x="0" y="21" fill="#4A90D9"
        fontFamily="Arial, sans-serif"
        fontWeight="700" fontSize="20" letterSpacing="1">
        TURBUS
      </text>
    </svg>
  )
}

function BancolomibiaLogo() {
  return (
    <svg height="44" viewBox="0 0 140 30" aria-label="Bancolombia" role="img">
      <text x="0" y="23" fill="#FFD100"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontWeight="800" fontSize="22">
        b
      </text>
      <text x="16" y="23" fill="#FFD100"
        fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="16" letterSpacing="-0.2">
        ancolombia
      </text>
    </svg>
  )
}

function SantanderLogo() {
  return (
    <svg height="46" viewBox="0 0 150 32" aria-label="Santander" role="img">
      <path
        d="M10 30 C10 30 2 22 4 14 C5 9 8 6 10 4 C10 4 9 10 13 13 C14 10 13 6 15 3 C18 8 18 15 14 20 C17 18 18 14 16 11 C15 17 12 22 10 30Z"
        fill="#EC0000"
      />
      <text x="24" y="22" fill="#EC0000"
        fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="17" letterSpacing="0.3">
        Santander
      </text>
    </svg>
  )
}

function BBVALogo() {
  return (
    <svg height="40" viewBox="0 0 80 28" aria-label="BBVA" role="img">
      <text x="0" y="22" fill="#00AEEF"
        fontFamily="'Plus Jakarta Sans', Arial Black, sans-serif"
        fontWeight="900" fontSize="24" letterSpacing="1">
        BBVA
      </text>
    </svg>
  )
}

function ScotiabankLogo() {
  return (
    <svg height="44" viewBox="0 0 145 30" aria-label="Scotiabank" role="img">
      <circle cx="14" cy="15" r="13" fill="none" stroke="#ED1C24" strokeWidth="1.8" />
      <text x="8.5" y="21" fill="#ED1C24"
        fontFamily="Arial, sans-serif"
        fontWeight="700" fontSize="17">
        S
      </text>
      <text x="33" y="21" fill="#ED1C24"
        fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="15" letterSpacing="-0.2">
        Scotiabank
      </text>
    </svg>
  )
}

const PARTNERS = [
  { id: 'oxxo',        logo: <OxxoLogo /> },
  { id: 'mercadopago', logo: <MercadoPagoLogo /> },
  { id: 'nequi',       logo: <NequiLogo /> },
  { id: 'yape',        logo: <YapeLogo /> },
  { id: 'turbus',      logo: <TurbusLogo /> },
  { id: 'bancolombia', logo: <BancolomibiaLogo /> },
  { id: 'santander',   logo: <SantanderLogo /> },
  { id: 'bbva',        logo: <BBVALogo /> },
  { id: 'scotiabank',  logo: <ScotiabankLogo /> },
]

export default function PartnersCarousel() {
  return (
    <section className="relative bg-[#111111] py-12" aria-label="Brand partnerships">

      {/* Top glow — continues warmth from StatsBar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(255,97,0,0.08) 0%, transparent 100%)',
        }}
      />

      {/* Bottom glow — feeds into PricingTable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(255,97,0,0.08) 0%, transparent 100%)',
        }}
      />

      <p className="relative text-center text-xs font-semibold text-white/35 tracking-[0.2em] uppercase mb-8">
        Trusted by our global network
      </p>

      {/* overflow-hidden scoped only to the marquee — keeps section glows from clipping */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="flex animate-marquee w-max items-center gap-14">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={i} className="flex items-center gap-14 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
              {p.logo}
              <div className="w-px h-6 bg-white/10 shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
