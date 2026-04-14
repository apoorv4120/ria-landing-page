# Ria Money Transfer Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Before writing any code:** Invoke `ria-visual` skill for design tokens and `ria-content` skill for all copy. These are the source of truth — do not invent colors, fonts, or copy.

**Goal:** Build a production-grade React landing page for Ria Money Transfer that visually exceeds their current Chile redesign and demonstrates strong visual and frontend craft for an interview.

**Architecture:** Vite + React 18 + TypeScript SPA. One component per section, all in `src/components/`. Shared UI primitives in `src/components/ui/`. Design tokens centralized in `src/tokens.ts`. Framer Motion for all scroll-triggered animations.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS v3, Framer Motion, Plus Jakarta Sans + Inter (Google Fonts), @dotlottie/react (Lottie animations)

**Design system corrections from Figma (overrides spec):**
- Font: **Plus Jakarta Sans Extra Bold** (not Clash Display)
- Primary brand: **`#FF6100`** Blaze Orange (not `#F5A623`)
- Hero bg: **`#FF6100`** full-bleed orange (not dark charcoal)
- Dark sections: **`#111111`** (stats bar, app showcase, footer)
- Light sections: **`#F8FAFB`** (pricing, ways to send, timeline)
- White sections: **`#FFFFFF`** (WhatsApp, testimonials)
- Buttons: pill-shaped (`border-radius: 9999px`), 48px min-height

---

## File Map

```
/Users/apoorvsingh/Documents/Ria/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css                    # font imports, CSS resets, global utilities
│   ├── tokens.ts                    # design system constants (colors, spacing, radius)
│   ├── components/
│   │   ├── Nav.tsx                  # sticky nav, transparent→solid on scroll
│   │   ├── Hero.tsx                 # full-bleed orange hero + calculator
│   │   ├── StatsBar.tsx             # dark section, 5 animated count-up stats
│   │   ├── PricingTable.tsx         # light section, comparison table
│   │   ├── WhatsAppFeature.tsx      # white section, 3-step flow
│   │   ├── CashPickup.tsx           # orange section, Lottie globe
│   │   ├── WaysToSend.tsx           # light section, 2-col send/receive grid
│   │   ├── AppShowcase.tsx          # dark section, phone mockup + features
│   │   ├── Testimonials.tsx         # white section, corridor-tagged cards
│   │   ├── Timeline.tsx             # light section, scroll-revealed milestones
│   │   ├── FinalCTA.tsx             # orange section, CTAs + trust strip
│   │   ├── Footer.tsx               # dark section, links + legal
│   │   └── ui/
│   │       ├── Button.tsx           # pill button, primary/secondary/ghost variants
│   │       ├── Card.tsx             # white card, default/hover/flat variants
│   │       ├── SectionReveal.tsx    # Framer Motion scroll-triggered fade-up wrapper
│   │       ├── CountUp.tsx          # animated number counter (IntersectionObserver)
│   │       └── Calculator.tsx       # send amount → country → rate + fee widget
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tailwind.config.ts`
- Create: `tsconfig.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`

- [ ] **Step 1: Scaffold the Vite + React + TypeScript project**

```bash
cd /Users/apoorvsingh/Documents/Ria
npm create vite@latest . -- --template react-ts
```

Expected: creates `src/`, `index.html`, `package.json`, `vite.config.ts`, `tsconfig.json`

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install framer-motion @dotlottie/react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [ ] **Step 3: Configure Tailwind**

Replace `tailwind.config.ts` with:

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF6100',
          50:  '#FFF8F3',
          100: '#FFD5B8',
          400: '#FF7625',
          500: '#FF6100',
          600: '#E55600',
          700: '#CC4100',
        },
        gray: {
          50:  '#F6F6F6',
          100: '#F3F3F4',
          200: '#E5E7E8',
          300: '#D1D5D8',
          400: '#9CA3A8',
          500: '#697380',
          600: '#4B5056',
          700: '#333333',
          800: '#1F1F1F',
          900: '#111111',
        },
        page: '#F8FAFB',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        '2xl':'24px',
        full: '9999px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 4: Add Google Fonts to `index.html`**

Replace the `<head>` section of `index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ria Money Transfer — Send Money Worldwide</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Set up global CSS**

Replace `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Inter', sans-serif;
    background-color: #F8FAFB;
    color: #111111;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
  }
}

@layer utilities {
  .section-padding {
    @apply py-24 md:py-30;
  }
  .container-width {
    @apply max-w-[1280px] mx-auto px-6 md:px-12;
  }
}
```

- [ ] **Step 6: Clear boilerplate from `src/App.tsx`**

```tsx
import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
```

- [ ] **Step 7: Verify dev server starts**

```bash
npm run dev
```

Expected: Vite serves at `http://localhost:5173`, blank page with no errors in console.

- [ ] **Step 8: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Vite + React + TS + Tailwind + Framer Motion"
```

---

## Task 2: Design Tokens + UI Primitives

**Files:**
- Create: `src/tokens.ts`
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/SectionReveal.tsx`
- Create: `src/components/ui/CountUp.tsx`

- [ ] **Step 1: Create `src/tokens.ts`**

```ts
export const colors = {
  brand: '#FF6100',
  brandHover: '#E55600',
  dark: '#111111',
  page: '#F8FAFB',
  surface: '#FFFFFF',
  textPrimary: '#111111',
  textSecondary: '#555555',
  borderDefault: '#E5E7EB',
} as const

export const radius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
} as const
```

- [ ] **Step 2: Create `src/components/ui/Button.tsx`**

```tsx
import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary:   'bg-brand-500 hover:bg-brand-600 text-white',
  secondary: 'bg-transparent border-2 border-brand-500 text-brand-500 hover:bg-brand-50',
  ghost:     'bg-transparent text-brand-500 hover:underline',
  white:     'bg-white text-brand-500 hover:bg-gray-50',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base min-h-[48px]',
  lg: 'px-8 py-4 text-lg min-h-[56px]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150 cursor-pointer'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}
```

- [ ] **Step 3: Create `src/components/ui/Card.tsx`**

```tsx
import { type ReactNode } from 'react'

type CardVariant = 'default' | 'flat'

interface CardProps {
  children: ReactNode
  variant?: CardVariant
  className?: string
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-brand-500 transition-all duration-200',
  flat:    'bg-white border border-[#E5E7EB]',
}

export default function Card({ children, variant = 'default', className = '' }: CardProps) {
  return (
    <div className={`rounded-xl p-6 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 4: Create `src/components/ui/SectionReveal.tsx`**

```tsx
import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function SectionReveal({ children, delay = 0, className = '' }: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 5: Create `src/components/ui/CountUp.tsx`**

```tsx
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 1500,
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(end)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/tokens.ts src/components/ui/
git commit -m "feat: add design tokens and UI primitives (Button, Card, SectionReveal, CountUp)"
```

---

## Task 3: Navigation

**Files:**
- Create: `src/components/Nav.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/Nav.tsx`**

```tsx
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
          <Button variant={scrolled ? 'ghost' : 'ghost'} size="sm" className={scrolled ? '' : 'text-white hover:text-white/80'}>
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
            <Button variant="secondary" size="sm">Log in</Button>
            <Button variant="primary" size="sm">Send Money</Button>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Run dev server and verify nav renders on the orange hero, transitions to white on scroll**

```bash
npm run dev
```

Open `http://localhost:5173`. Nav should be transparent white text on the orange hero. Scroll down → nav turns white with dark text and shadow.

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.tsx src/App.tsx
git commit -m "feat: add sticky nav with scroll-aware transparent/solid transition"
```

---

## Task 4: Hero Section + Calculator Widget

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/ui/Calculator.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/ui/Calculator.tsx`**

```tsx
import { useState } from 'react'
import Button from './Button'

const COUNTRIES = [
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', rate: 17.23 },
  { code: 'IN', name: 'India', flag: '🇮🇳', rate: 83.91 },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭', rate: 56.12 },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', rate: 1610.5 },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴', rate: 3921.0 },
  { code: 'GT', name: 'Guatemala', flag: '🇬🇹', rate: 7.78 },
]

export default function Calculator() {
  const [amount, setAmount] = useState('250')
  const [country, setCountry] = useState(COUNTRIES[0])
  const fee = 2.99
  const received = ((parseFloat(amount) || 0) * country.rate).toFixed(2)

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm mx-auto">
      {/* Header band */}
      <div className="bg-brand-500 px-5 py-3">
        <p className="text-white font-semibold text-sm">How much do you want to send?</p>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Send input */}
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">You send</label>
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 px-4 py-3 text-xl font-semibold text-gray-900 outline-none"
            />
            <span className="px-4 py-3 bg-gray-50 text-sm font-semibold text-gray-600 border-l border-gray-200">USD</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">1 USD = {country.rate} {country.code} · Fee: ${fee}</p>
        </div>

        {/* Country selector */}
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">Send to</label>
          <select
            value={country.code}
            onChange={(e) => setCountry(COUNTRIES.find(c => c.code === e.target.value) ?? COUNTRIES[0])}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-900 outline-none bg-white cursor-pointer"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
            ))}
          </select>
        </div>

        {/* Receive input */}
        <div>
          <label className="text-xs font-medium text-gray-500 mb-1 block">They receive</label>
          <div className="flex items-center border-2 border-brand-500 bg-brand-50 rounded-lg overflow-hidden">
            <span className="flex-1 px-4 py-3 text-xl font-semibold text-gray-900">{parseFloat(received).toLocaleString()}</span>
            <span className="px-4 py-3 text-sm font-semibold text-brand-500 border-l border-brand-200">{country.code}</span>
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Send money now →
        </Button>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create `src/components/Hero.tsx`**

```tsx
import { motion } from 'framer-motion'
import Button from './ui/Button'
import Calculator from './ui/Calculator'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-500 flex items-center overflow-hidden pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FF7625 0%, transparent 70%)',
            animation: 'blob 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #E55600 0%, transparent 70%)',
            animation: 'blob 12s ease-in-out infinite reverse',
          }}
        />
      </div>

      <div className="container-width relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Trusted since 1987
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
            >
              Your family gets it in minutes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Send money to 190+ countries with 600,000+ pickup locations. Trusted by millions for 35 years.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Button variant="white" size="lg">Send Money Now</Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white/40 hover:bg-white/10 hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/50 text-sm"
            >
              No hidden fees · 100% satisfaction guarantee · 1B+ transfers completed
            </motion.p>
          </div>

          {/* Right — calculator */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Calculator />
          </motion.div>
        </div>
      </div>

      {/* Blob keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
      `}</style>
    </section>
  )
}
```

- [ ] **Step 3: Add Hero to `src/App.tsx`**

```tsx
import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
```

- [ ] **Step 4: Verify in browser**

```bash
npm run dev
```

Expected: Full-screen orange hero, white headline, calculator widget on the right, animated blobs in background, two CTA buttons, trust micro-copy.

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx src/components/ui/Calculator.tsx
git commit -m "feat: hero section with full-bleed orange bg, animated blobs, and calculator widget"
```

---

## Task 5: Stats Bar

**Files:**
- Create: `src/components/StatsBar.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/StatsBar.tsx`**

```tsx
import CountUp from './ui/CountUp'
import SectionReveal from './ui/SectionReveal'

const STATS = [
  { value: 35,  suffix: '+',  label: 'Years Trusted' },
  { value: 1,   suffix: 'B+', label: 'Transfers Completed', prefix: '' },
  { value: 600, suffix: 'K+', label: 'Locations Worldwide' },
  { value: 190, suffix: '+',  label: 'Countries Served' },
  { value: 49,  suffix: '',   label: 'App Store Rating', prefix: '4.', display: '4.9★' },
]

export default function StatsBar() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-display font-extrabold text-brand-500 leading-none mb-2" style={{ fontSize: 'clamp(40px, 4vw, 64px)' }}>
                  {stat.display ? stat.display : (
                    <>
                      {stat.prefix ?? ''}
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </>
                  )}
                </div>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to `src/App.tsx`**

```tsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
      </main>
    </div>
  )
}

export default App
```

- [ ] **Step 3: Verify — scroll past hero, numbers should animate up on entry**

- [ ] **Step 4: Commit**

```bash
git add src/components/StatsBar.tsx
git commit -m "feat: dark stats bar with scroll-triggered count-up animations"
```

---

## Task 6: Pricing Transparency Section

**Files:**
- Create: `src/components/PricingTable.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/PricingTable.tsx`**

```tsx
import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'

const ROWS = [
  { label: 'Send $500',      ria: '$2.99',       bank: '$18–$45',    wu: '$9.99' },
  { label: 'Exchange rate',  ria: 'Mid-market',  bank: '+3–5% markup', wu: '+2% markup' },
  { label: 'Arrives',        ria: 'Minutes',     bank: '3–5 days',   wu: 'Same day' },
]

export default function PricingTable() {
  return (
    <section className="bg-page section-padding">
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">No surprises</p>
            <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              See exactly what you pay.<br />Nothing more.
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              While banks hide fees in exchange rates, we show you the real number upfront.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                <div className="p-4" />
                {['Ria', 'Your Bank', 'Western Union'].map((col) => (
                  <div key={col} className={`p-4 text-center text-sm font-semibold ${col === 'Ria' ? 'text-brand-500' : 'text-gray-400'}`}>
                    {col}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {ROWS.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`grid grid-cols-4 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <div className="p-4 text-sm font-medium text-gray-700">{row.label}</div>
                  <div className="p-4 text-center text-sm font-bold text-brand-500">{row.ria}</div>
                  <div className="p-4 text-center text-sm text-gray-400">{row.bank}</div>
                  <div className="p-4 text-center text-sm text-gray-400">{row.wu}</div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-8 text-center">
              <Button variant="primary" size="lg">Calculate your transfer</Button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
```

Add missing import at the top:
```tsx
import { motion } from 'framer-motion'
```

- [ ] **Step 2: Add to `src/App.tsx`** (append `<PricingTable />` after `<StatsBar />`)

- [ ] **Step 3: Verify table rows slide in from left on scroll**

- [ ] **Step 4: Commit**

```bash
git add src/components/PricingTable.tsx
git commit -m "feat: pricing transparency section with animated comparison table"
```

---

## Task 7: WhatsApp Feature Section

**Files:**
- Create: `src/components/WhatsAppFeature.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/WhatsAppFeature.tsx`**

```tsx
import { motion } from 'framer-motion'
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

          {/* Right — phone mockup placeholder */}
          <SectionReveal delay={0.15}>
            <div className="relative flex justify-center">
              <div className="w-64 h-[480px] bg-gray-900 rounded-[40px] border-4 border-gray-800 shadow-2xl flex flex-col overflow-hidden">
                {/* WhatsApp-style chat */}
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
```

- [ ] **Step 2: Add to `src/App.tsx`**

- [ ] **Step 3: Verify — green-accented section, WhatsApp phone mockup, 3-step flow**

- [ ] **Step 4: Commit**

```bash
git add src/components/WhatsAppFeature.tsx
git commit -m "feat: WhatsApp feature section with phone mockup and 3-step flow"
```

---

## Task 8: Cash Pickup Network Section

**Files:**
- Create: `src/components/CashPickup.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/CashPickup.tsx`**

```tsx
import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'
import CountUp from './ui/CountUp'

const NETWORK_STATS = [
  { value: 600, suffix: 'K+', label: 'Pickup Locations' },
  { value: 190, suffix: '+',  label: 'Countries' },
  { value: 7,   suffix: '',   label: 'Days a Week' },
]

// SVG world map with pulsing dots for key corridors
function PulsingGlobe() {
  const dots = [
    { cx: 22, cy: 42, label: 'USA' },
    { cx: 28, cy: 55, label: 'Mexico' },
    { cx: 48, cy: 40, label: 'UK' },
    { cx: 52, cy: 45, label: 'Nigeria' },
    { cx: 65, cy: 38, label: 'India' },
    { cx: 75, cy: 50, label: 'Philippines' },
    { cx: 35, cy: 58, label: 'Colombia' },
    { cx: 55, cy: 52, label: 'Kenya' },
  ]

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Simplified world outline */}
      <svg viewBox="0 0 100 60" className="w-full opacity-30" fill="none">
        <ellipse cx="50" cy="30" rx="48" ry="28" stroke="white" strokeWidth="0.3" />
        {/* Grid lines */}
        {[10,20,30,40,50,60,70,80,90].map(x => (
          <line key={x} x1={x} y1="2" x2={x} y2="58" stroke="white" strokeWidth="0.15" strokeOpacity="0.4" />
        ))}
        {[10,20,30,40,50].map(y => (
          <line key={y} x1="2" y1={y} x2="98" y2={y} stroke="white" strokeWidth="0.15" strokeOpacity="0.4" />
        ))}
      </svg>

      {/* Pulsing dots */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <div
            key={dot.label}
            className="absolute"
            style={{ left: `${dot.cx}%`, top: `${dot.cy}%`, transform: 'translate(-50%,-50%)' }}
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <div
                className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"
                style={{ animationDelay: `${Math.random() * 2}s`, animationDuration: '2s' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CashPickup() {
  return (
    <section className="bg-brand-500 section-padding overflow-hidden">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — globe */}
          <SectionReveal>
            <PulsingGlobe />
          </SectionReveal>

          {/* Right — copy */}
          <div>
            <SectionReveal>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">#1 Cash Pickup Network</p>
              <h2 className="font-display font-extrabold text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                Cash in hand.<br />Wherever home is.
              </h2>
              <p className="text-white/70 text-lg mb-10">
                600,000+ pickup locations across 190 countries — at local stores, banks, and pharmacies in the neighborhoods your family actually lives in.
              </p>
            </SectionReveal>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {NETWORK_STATS.map((stat, i) => (
                <SectionReveal key={stat.label} delay={i * 0.1}>
                  <div>
                    <div className="font-display font-extrabold text-white leading-none mb-1" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.3}>
              <Button variant="white" size="lg">Find a location near them</Button>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to `src/App.tsx`**

- [ ] **Step 3: Verify — orange section, globe with pulsing dots, white text and stats**

- [ ] **Step 4: Commit**

```bash
git add src/components/CashPickup.tsx
git commit -m "feat: cash pickup network section with pulsing globe dots"
```

---

## Task 9: Ways to Send / Receive

**Files:**
- Create: `src/components/WaysToSend.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/WaysToSend.tsx`**

```tsx
import { motion } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'

const SEND_METHODS = [
  { icon: '💻', title: 'Online', body: 'Send from any browser in minutes' },
  { icon: '📱', title: 'Mobile App', body: 'iOS & Android, rated 4.9★' },
  { icon: '🏪', title: '600K+ Locations', body: 'Walk in, send in person' },
  { icon: '💬', title: 'WhatsApp', body: 'Send without leaving the chat' },
]

const RECEIVE_METHODS = [
  { icon: '💵', title: 'Cash Pickup', body: 'At 600K+ locations worldwide' },
  { icon: '🏦', title: 'Bank Deposit', body: 'Direct to their account' },
  { icon: '📲', title: 'Digital Wallet', body: 'Mercado Pago, GCash, and more' },
  { icon: '🏧', title: 'ATM Withdrawal', body: 'Card-free cash access' },
  { icon: '🏠', title: 'Home Delivery', body: 'Cash delivered to their door' },
]

export default function WaysToSend() {
  return (
    <section className="bg-page section-padding">
      <div className="container-width">
        <SectionReveal className="text-center mb-14">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Flexibility</p>
          <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Your way or their way —<br />it works either way.
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Send */}
          <div>
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Ways to Send</p>
            </SectionReveal>
            <div className="grid grid-cols-2 gap-4">
              {SEND_METHODS.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-500 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl mb-3 block">{m.icon}</span>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{m.title}</p>
                  <p className="text-gray-500 text-xs">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Receive */}
          <div>
            <SectionReveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Ways to Receive</p>
            </SectionReveal>
            <div className="grid grid-cols-2 gap-4">
              {RECEIVE_METHODS.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-500 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl mb-3 block">{m.icon}</span>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{m.title}</p>
                  <p className="text-gray-500 text-xs">{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to `src/App.tsx`**

- [ ] **Step 3: Commit**

```bash
git add src/components/WaysToSend.tsx
git commit -m "feat: ways to send/receive section with staggered card grid"
```

---

## Task 10: App Showcase

**Files:**
- Create: `src/components/AppShowcase.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/AppShowcase.tsx`**

```tsx
import { motion } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'
import Button from './ui/Button'

const FEATURES = [
  { icon: '🔔', title: 'Live rate alerts', body: 'Get notified when rates are in your favor.' },
  { icon: '📍', title: 'Instant tracking', body: 'From send to pickup — follow every step.' },
  { icon: '⚡', title: 'Saved recipients', body: 'Send again in 2 taps. No re-entering details.' },
]

export default function AppShowcase() {
  return (
    <section className="bg-gray-900 section-padding overflow-hidden">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <SectionReveal>
              <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Mobile App</p>
              <h2 className="font-display font-extrabold text-white leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                Track every peso.<br />Every rupee.<br />Every dirham.
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Real-time tracking, instant notifications, saved recipients, and live exchange rates — all in one app.
              </p>
            </SectionReveal>

            <div className="flex flex-col gap-6 mb-10">
              {FEATURES.map((f, i) => (
                <SectionReveal key={f.title} delay={i * 0.1}>
                  <div className="flex gap-4 items-start">
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <p className="text-white font-semibold mb-0.5">{f.title}</p>
                      <p className="text-gray-400 text-sm">{f.body}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <Button variant="primary" size="md">Download on App Store</Button>
                <Button variant="secondary" size="md" className="border-gray-600 text-gray-300 hover:bg-gray-800">Get on Google Play</Button>
              </div>
              <p className="text-gray-500 text-sm">4.9★ App Store · 4.6★ Google Play · 4.5★ Trustpilot</p>
            </SectionReveal>
          </div>

          {/* Right — floating phone */}
          <SectionReveal delay={0.1}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex justify-center"
            >
              <div className="w-56 h-[480px] bg-gray-800 rounded-[40px] border-4 border-gray-700 shadow-2xl overflow-hidden flex flex-col">
                {/* Status bar */}
                <div className="bg-brand-500 px-5 pt-8 pb-5">
                  <p className="text-white/70 text-xs mb-1">Transfer sent</p>
                  <p className="text-white font-bold text-lg">$250.00 → MXN</p>
                  <p className="text-white/70 text-xs mt-1">4,312.50 MXN · Fee $2.99</p>
                </div>
                {/* Progress */}
                <div className="flex-1 bg-gray-800 p-4 flex flex-col gap-4">
                  {[
                    { label: 'Sent', done: true },
                    { label: 'Processing', done: true },
                    { label: 'Ready for pickup', done: true },
                    { label: 'Collected', done: false },
                  ].map((step) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${step.done ? 'bg-brand-500' : 'bg-gray-600'}`}>
                        {step.done && <span className="text-white text-[8px]">✓</span>}
                      </div>
                      <p className={`text-xs ${step.done ? 'text-white' : 'text-gray-500'}`}>{step.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to `src/App.tsx`**

- [ ] **Step 3: Verify — dark section, floating phone mockup animation, feature list**

- [ ] **Step 4: Commit**

```bash
git add src/components/AppShowcase.tsx
git commit -m "feat: dark app showcase section with floating phone mockup animation"
```

---

## Task 11: Testimonials

**Files:**
- Create: `src/components/Testimonials.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/Testimonials.tsx`**

```tsx
import SectionReveal from './ui/SectionReveal'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: "My mom picks it up at OXXO in 10 minutes. Every time.",
    name: 'Carlos M.',
    corridor: 'US → Mexico',
    flag: '🇲🇽',
    stars: 5,
  },
  {
    quote: "The rate is always fair and it never fails. I've tried others — I always come back.",
    name: 'Adaeze O.',
    corridor: 'UK → Nigeria',
    flag: '🇳🇬',
    stars: 5,
  },
  {
    quote: "3 years, never a late transfer. My parents trust it now as much as I do.",
    name: 'Priya S.',
    corridor: 'Canada → India',
    flag: '🇮🇳',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="container-width">
        <SectionReveal className="text-center mb-14">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Real People. Real Families.</p>
          <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            35 years of showing up for families.
          </h2>
          <p className="text-gray-500 text-lg mt-4">From New York to Mexico City. London to Lagos. Toronto to Manila.</p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-page rounded-2xl p-8 border border-gray-100 hover:border-brand-500 transition-colors duration-200"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-brand-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-800 text-lg font-medium leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-lg">
                  {t.flag}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.corridor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionReveal delay={0.3} className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Rated 4.5★ on Trustpilot · 22,900+ reviews
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to `src/App.tsx`**

- [ ] **Step 3: Commit**

```bash
git add src/components/Testimonials.tsx
git commit -m "feat: testimonials section with corridor-tagged cards"
```

---

## Task 12: Heritage Timeline

**Files:**
- Create: `src/components/Timeline.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create `src/components/Timeline.tsx`**

```tsx
import { motion } from 'framer-motion'
import SectionReveal from './ui/SectionReveal'

const MILESTONES = [
  { year: '1987', event: 'Founded in New York by immigrants, for immigrants.' },
  { year: '2000', event: 'Expanded to 50 countries across 3 continents.' },
  { year: '2010', event: 'Joined the Euronet Worldwide network.' },
  { year: '2015', event: '300,000 pickup locations worldwide.' },
  { year: '2024', event: '600K+ locations, 190+ countries, 1B+ transfers.' },
]

export default function Timeline() {
  return (
    <section className="bg-page section-padding overflow-hidden">
      <div className="container-width">
        <SectionReveal className="max-w-2xl mb-14">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Heritage</p>
          <h2 className="font-display font-extrabold text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Before the apps.<br />Before the fintechs.<br />Ria was already there.
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            Founded in 1987. Not a startup. Not a pivot. This is all we do.
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 hidden md:block" />

          <div className="grid md:grid-cols-5 gap-8">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Dot */}
                <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center mb-4 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <p className="font-display font-extrabold text-brand-500 text-xl mb-2">{m.year}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to `src/App.tsx`**

- [ ] **Step 3: Commit**

```bash
git add src/components/Timeline.tsx
git commit -m "feat: heritage timeline with scroll-staggered milestones"
```

---

## Task 13: Final CTA + Footer

**Files:**
- Create: `src/components/FinalCTA.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx` (add all remaining sections)

- [ ] **Step 1: Create `src/components/FinalCTA.tsx`**

```tsx
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
```

- [ ] **Step 2: Create `src/components/Footer.tsx`**

```tsx
const LINKS = {
  Company: ['About', 'Blog', 'Careers', 'Partnerships', 'Promotions'],
  Support: ['Help Center', 'Track a Transfer', 'Find a Location', 'Contact Us'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Accessibility'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <span className="font-display font-extrabold text-2xl text-brand-500 tracking-tight mb-4 block">ria</span>
            <p className="text-gray-500 text-sm leading-relaxed">Moving money for families since 1987.</p>
            <div className="flex gap-3 mt-4">
              {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  <span className="text-[10px] font-bold">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-white text-sm font-semibold mb-4">{title}</p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2024 Ria Financial Services, Inc. NMLS ID #920968. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400">Privacy</a>
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400">Terms</a>
            <a href="#" className="text-gray-600 text-xs hover:text-gray-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Complete `src/App.tsx` with all sections**

```tsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import PricingTable from './components/PricingTable'
import WhatsAppFeature from './components/WhatsAppFeature'
import CashPickup from './components/CashPickup'
import WaysToSend from './components/WaysToSend'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'
import Timeline from './components/Timeline'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <PricingTable />
        <WhatsAppFeature />
        <CashPickup />
        <WaysToSend />
        <AppShowcase />
        <Testimonials />
        <Timeline />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
```

- [ ] **Step 4: Verify full page renders end-to-end with no console errors**

```bash
npm run dev
```

Scroll from top to bottom. All 12 sections should render, animate on scroll, no TypeScript errors in terminal.

- [ ] **Step 5: Commit**

```bash
git add src/components/FinalCTA.tsx src/components/Footer.tsx src/App.tsx
git commit -m "feat: final CTA, footer, and complete App assembly — all sections wired"
```

---

## Task 14: Mobile Responsiveness Pass

**Files:** All section components (review each)

- [ ] **Step 1: Test on mobile viewport**

In browser devtools, set viewport to 375px wide (iPhone SE). Scroll through all sections.

Check for:
- Text overflowing containers
- Two-column grids that need to collapse to single column (should already have `md:grid-cols-2` pattern — verify)
- Hero headline size — `clamp()` should handle this
- Calculator widget fitting within 375px
- Nav hamburger menu opening and closing

- [ ] **Step 2: Fix any overflow issues**

Common fixes:
- Add `overflow-hidden` to sections with absolute-positioned blobs
- Ensure `container-width` padding is applied (`px-6`)
- Check `gap` values on small screens — reduce if needed

- [ ] **Step 3: Test on tablet viewport (768px)**

Set devtools to 768px. Verify grid breakpoints kick in correctly.

- [ ] **Step 4: Commit**

```bash
git add -u
git commit -m "fix: mobile responsiveness pass — overflow, padding, grid breakpoints"
```

---

## Task 15: Production Build + Final Polish

**Files:** `src/index.css`, individual components as needed

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Outputs to `dist/`. No TypeScript errors. No Vite warnings about large chunks (if there are, it's fine — this is a demo project).

- [ ] **Step 2: Preview production build**

```bash
npm run preview
```

Open `http://localhost:4173`. Verify all sections, animations, fonts load correctly.

- [ ] **Step 3: Polish checklist — fix any of these found**

- [ ] Section transitions feel abrupt → add `section-padding` consistency check
- [ ] Any section missing the eyebrow label (`TRUSTED SINCE 1987` style) → add it
- [ ] Any headline not using Plus Jakarta Sans → add `font-display` class
- [ ] Any button not pill-shaped → ensure `rounded-full` is present
- [ ] Hover states on all interactive elements → check cards, links, buttons
- [ ] Focus states accessible → verify keyboard tab through CTAs

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: production build verified, final polish pass complete"
```

---

## Self-Review Against Spec

**Spec coverage check:**
- ✅ Section 1: Navigation (Task 3)
- ✅ Section 2: Hero + Calculator (Task 4)
- ✅ Section 3: Stats Bar (Task 5)
- ✅ Section 4: Pricing Table (Task 6)
- ✅ Section 5: WhatsApp Feature (Task 7)
- ✅ Section 6: Cash Pickup Network (Task 8)
- ✅ Section 7: Ways to Send/Receive (Task 9)
- ✅ Section 8: App Showcase (Task 10)
- ✅ Section 9: Testimonials (Task 11)
- ✅ Section 10: Heritage Timeline (Task 12)
- ✅ Section 11: Final CTA (Task 13)
- ✅ Section 12: Footer (Task 13)
- ✅ Mobile responsive (Task 14)
- ✅ Production build (Task 15)

**Design system corrections applied:**
- Font: Plus Jakarta Sans (not Clash Display)
- Primary: #FF6100 (not #F5A623)
- Hero bg: orange brand color (not dark charcoal)
- Button shape: pill `rounded-full` 48px height

**Type consistency verified:** `CountUp`, `SectionReveal`, `Button`, `Card` are defined in Task 2 and referenced consistently throughout. No name mismatches detected.
