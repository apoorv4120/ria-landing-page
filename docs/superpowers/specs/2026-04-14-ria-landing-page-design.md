# Ria Money Transfer — Landing Page Redesign Spec

**Date:** 2026-04-14
**Context:** Interview project for Ria Money Transfer. Demonstrating visual language skills and frontend coding ability. The Chile redesign (`/en-cl/`) is the reference floor — this design pushes significantly beyond it.

---

## Product Overview

Ria Money Transfer is a 35-year-old global remittance company (founded 1987) with 600,000+ cash pickup locations across 190+ countries. Key differentiators: massive physical network, WhatsApp transfers, 35-year heritage, and deep partnerships with local banks/stores (OXXO, Mercado Pago, Nequi, Yape, Turbus). Owned by Euronet Worldwide.

**Primary audience:** Diaspora communities sending money home — US→Mexico, UK→Nigeria, Canada→India, and similar corridors.

---

## Design Direction

**Theme:** Cinematic Dark + Human Warmth
**Brief:** Premium fintech energy, immigrant family heart.

**Core visual choices:**
- Dark charcoal base (`#0D0D0D`) with warm amber (`#F5A623`) primary accent
- Teal (`#00C9A7`) secondary accent for WhatsApp + success states
- Clash Display (or Plus Jakarta Sans) for display type — bold, tight letterspacing
- Inter/DM Sans for body
- Lifestyle photography with warm overlay treatment
- Scroll-triggered animations: count-up stats, fade-up sections, staggered cards
- Alternating dark/light section rhythm

Full visual spec: invoke `ria-visual` skill.

---

## Section Architecture (in order)

### 1. Navigation
- Logo left, nav links center (Money Transfers, Find Location, Track Transfer, Resources)
- Right: Log in (ghost) + Send Money (amber filled CTA)
- Transparent on hero, solid dark on scroll
- Mobile: hamburger

### 2. Hero (full viewport)
- Headline: **"Your family gets it in minutes."** (96px, Clash Display, white)
- Subheadline: "Send money to 190+ countries with 600,000+ pickup locations. Trusted by millions for 35 years."
- Primary CTA: Send Money Now (amber)
- Secondary CTA: Send via WhatsApp (teal, with WhatsApp icon)
- Transfer calculator widget inline (amount → destination country → see rate + fee)
- Trust micro-copy below CTAs: "No hidden fees · 100% satisfaction guarantee · 1B+ transfers completed"
- Background: dark with warm radial gradient glow + optional full-bleed photo at low opacity

### 3. Trust / Stats Bar
- Animated count-up on viewport entry
- 5 stats: 35+ Years · 1B+ Transfers · 600K+ Locations · 190+ Countries · 4.9★ App Store
- Dark background, amber numbers, muted white labels

### 4. Pricing Transparency
- Headline: "See exactly what you pay. Nothing more."
- Comparison table: Ria vs. Bank vs. Western Union (fee, exchange rate, speed)
- CTA: Calculate your transfer
- Light section (#F8F7F4 background)

### 5. WhatsApp Feature Spotlight
- Headline: "Send money the way you already talk."
- 3-step visual flow: Open WhatsApp → Tell us the amount → Done
- Teal accent throughout this section
- CTA: Try it on WhatsApp
- Dark section

### 6. Cash Pickup Network (Map)
- Headline: "Cash in hand. Wherever home is."
- Globe or map visualization with pulsing location dots
- 3 stat callouts: #1 network globally · 190+ countries · Open 7 days
- CTA: Find a location near them
- Light section

### 7. Ways to Send / Receive
- Headline: "Your way or their way — it works either way."
- Visual two-column flow (not a list): Send methods ↔ Receive methods
- Dark section

### 8. App Showcase
- Headline: "Track every peso. Every rupee. Every dirham."
- App UI screenshots (mockup)
- 3 feature callouts: Live rate alerts · Instant tracking · Saved recipients
- App store ratings inline
- Light section

### 9. Testimonials by Corridor
- Headline: "35 years of showing up for families."
- Testimonials tagged by corridor: US→MX, UK→NG, CA→IN
- Carousel or 3-column grid
- Dark section

### 10. Heritage / Trust Timeline
- Headline: "Before the apps. Before the fintechs. Ria was already there."
- Visual timeline: 1987 → 2000 → 2010 → 2015 → 2024
- Progressive reveal on scroll
- Light section

### 11. Final CTA
- Headline: "Start your first transfer in 2 minutes."
- Primary + Secondary CTAs
- Trust footnote: NMLS Licensed · 256-bit encryption · 100% satisfaction guarantee
- Dark section

### 12. Footer
- Links: Company, Support, Legal, Social
- App store badges
- Copyright + NMLS ID

---

## Content Copy
Full copy for all sections: invoke `ria-content` skill.

---

## Technical Stack (to be confirmed)
- React + Tailwind CSS
- Framer Motion for scroll-triggered animations
- Fonts: Clash Display (display) + Inter (body) via Google Fonts / Fontshare
- Component-based architecture, one component per section

---

## Success Criteria
- Visual differentiation from Ria's existing Chile redesign
- Shows mastery of: typography hierarchy, dark-mode design, motion/animation, component layout
- All 10 content sections implemented
- Mobile responsive
- Runs without errors, clean production build

---

## What This Design Proves in an Interview Context
1. Product thinking — gaps analysis, competitive research, not just visual execution
2. Visual judgment — dark mode premium direction vs. safe white template
3. Frontend craft — scroll animations, count-up stats, glassmorphism cards
4. Copywriting — content hierarchy that tells an emotional story, not just features
