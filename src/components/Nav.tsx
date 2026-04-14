import { useEffect, useState } from 'react'
import Button from './ui/Button'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-width flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="/" className={`font-display font-extrabold text-2xl tracking-tight ${scrolled ? 'text-brand-500' : 'text-white'}`}>
          ria
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Money Transfers', 'Find Location', 'Track Transfer', 'Resources'].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className={scrolled ? 'text-brand-500' : 'text-white hover:text-white/80'}>
            Log in
          </Button>
          <Button variant={scrolled ? 'primary' : 'white'} size="sm">
            Send Money
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Money Transfers', 'Find Location', 'Track Transfer', 'Resources'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-brand-500">
              {item}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button variant="primary" size="sm">Send Money</Button>
          </div>
        </div>
      )}
    </header>
  )
}
