import { useEffect, useRef, useState } from 'react'
import Button from './ui/Button'
import RiaLogo from './ui/RiaLogo'

const SEND_FROM_COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada',        flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom',flag: '🇬🇧' },
  { code: 'DE', name: 'Germany',       flag: '🇩🇪' },
  { code: 'FR', name: 'France',        flag: '🇫🇷' },
  { code: 'AU', name: 'Australia',     flag: '🇦🇺' },
  { code: 'ES', name: 'Spain',         flag: '🇪🇸' },
  { code: 'IT', name: 'Italy',         flag: '🇮🇹' },
]

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [countryOpen, setCountryOpen] = useState(false)
  const [fromCountry, setFromCountry] = useState(SEND_FROM_COUNTRIES[0])

  const menuRef       = useRef<HTMLDivElement>(null)
  const hamburgerRef  = useRef<HTMLButtonElement>(null)
  const countryBtnRef = useRef<HTMLButtonElement>(null)
  const countryDropRef= useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu focus trap + Escape
  useEffect(() => {
    if (!menuOpen) return
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    focusable?.[0]?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); hamburgerRef.current?.focus(); return }
      if (e.key === 'Tab' && focusable && focusable.length > 0) {
        const first = focusable[0]
        const last  = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Country dropdown — close on outside click or Escape
  useEffect(() => {
    if (!countryOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setCountryOpen(false); countryBtnRef.current?.focus() }
    }
    const onClickOutside = (e: MouseEvent) => {
      if (
        countryDropRef.current && !countryDropRef.current.contains(e.target as Node) &&
        countryBtnRef.current  && !countryBtnRef.current.contains(e.target as Node)
      ) {
        setCountryOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [countryOpen])

  const textColor = scrolled ? 'text-gray-700' : 'text-white/90'
  const hoverColor = 'hover:text-brand-500'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-width flex items-center justify-between h-16 md:h-18">

        {/* Logo */}
        <a href="/" aria-label="Ria Money Transfer">
          <RiaLogo
            className={`h-8 w-auto transition-colors duration-300 ${
              scrolled ? 'text-brand-500' : 'text-white'
            }`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Money Transfers', 'Find Location', 'Track Transfer', 'Resources'].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors ${textColor} ${hoverColor}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right side: country selector + CTAs */}
        <div className="hidden md:flex items-center gap-3">

          {/* Country selector */}
          <div className="relative">
            <button
              ref={countryBtnRef}
              onClick={() => setCountryOpen(!countryOpen)}
              aria-expanded={countryOpen}
              aria-haspopup="listbox"
              aria-label={`Sending from ${fromCountry.name}`}
              className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                border transition-all duration-150 cursor-pointer
                ${scrolled
                  ? 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  : 'border-white/30 text-white/90 hover:border-white/50 hover:bg-white/10'
                }
              `}
            >
              <span className="text-base leading-none" aria-hidden="true">{fromCountry.flag}</span>
              <span>{fromCountry.code}</span>
              {/* Chevron */}
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
                className={`transition-transform duration-150 ${countryOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>

            {/* Dropdown */}
            {countryOpen && (
              <div
                ref={countryDropRef}
                role="listbox"
                aria-label="Select sending country"
                className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-gray-100 overflow-hidden py-1.5 z-50"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-3.5 pt-1 pb-1.5">
                  Sending from
                </p>
                {SEND_FROM_COUNTRIES.map((c) => (
                  <button
                    key={c.code}
                    role="option"
                    aria-selected={fromCountry.code === c.code}
                    onClick={() => { setFromCountry(c); setCountryOpen(false) }}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-left transition-colors cursor-pointer
                      ${fromCountry.code === c.code
                        ? 'bg-brand-50 text-brand-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 font-medium'
                      }
                    `}
                  >
                    <span className="text-base" aria-hidden="true">{c.flag}</span>
                    <span>{c.name}</span>
                    {fromCountry.code === c.code && (
                      <svg className="ml-auto w-3.5 h-3.5 text-brand-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={scrolled ? 'text-brand-700' : 'text-white hover:text-white/80'}
          >
            Log in
          </Button>
          <Button variant={scrolled ? 'primary' : 'white'} size="sm">
            Send Money
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-haspopup="true"
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
        <div ref={menuRef} className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {/* Country selector (mobile) */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">Sending from:</span>
            <select
              value={fromCountry.code}
              onChange={(e) => setFromCountry(SEND_FROM_COUNTRIES.find(c => c.code === e.target.value) ?? SEND_FROM_COUNTRIES[0])}
              className="text-sm font-medium text-gray-700 bg-transparent border-none outline-none cursor-pointer"
            >
              {SEND_FROM_COUNTRIES.map(c => (
                <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
              ))}
            </select>
          </div>
          <div className="border-t border-gray-100" />
          {['Money Transfers', 'Find Location', 'Track Transfer', 'Resources'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-brand-500">
              {item}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm" className="text-gray-700">Log in</Button>
            <Button variant="primary" size="sm">Send Money</Button>
          </div>
        </div>
      )}
    </header>
  )
}
