# Ria Landing Page — V1 Build State & Findings

> Last updated: 2026-04-14 | WhatsApp section redesign + global orange glow + em dash cleanup

Build passes clean (tsc + vite). Dev server: `npm run dev` → http://localhost:5173

---

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS v3 (NOT v4 — explicitly pinned)
- Framer Motion for scroll-triggered animations
- **GSAP + ScrollTrigger** — installed for StatsBar; use for any premium scroll/entry animations going forward
- Fonts: Plus Jakarta Sans Extra Bold (display), Inter (body) — Google Fonts via `index.html`
- Path alias: `@` → `src/`

**Key config files:**
- `tailwind.config.ts` — brand color scale, gray scale, page color, custom radius/spacing
- `src/index.css` — `section-padding` and `container-width` utilities
- `index.html` — Google Fonts preconnect + link

---

## Section Architecture (all implemented)

| # | Component | File | Background |
|---|---|---|---|
| 1 | Nav | Nav.tsx | Transparent → white on scroll |
| 2 | Hero | Hero.tsx | Radial mesh gradient (amber→brand→burnt orange) |
| 3 | StatsBar | StatsBar.tsx | bg-gray-900 |
| 4 | PricingTable | PricingTable.tsx | bg-page (#F8FAFB) |
| 5 | WhatsAppFeature | WhatsAppFeature.tsx | #0D1F1C (dark teal) |
| 6 | CashPickup | CashPickup.tsx | bg-brand-500 |
| 7 | WaysToSend | WaysToSend.tsx | bg-gray-900 (changed from light) |
| 8 | AppShowcase | AppShowcase.tsx | bg-gray-900 |
| 9 | Testimonials | Testimonials.tsx | bg-white |
| 10 | Timeline | Timeline.tsx | bg-page |
| 11 | FinalCTA | FinalCTA.tsx | bg-brand-500 |
| 12 | Footer | Footer.tsx | bg-gray-900 |

---

## Visual Elevation Pass — What Was Fixed

### Globe (CashPickup.tsx)
- **Before:** Flat 100×60 SVG oval with straight vertical/horizontal grid lines
- **After:** Square 100×100 SVG sphere with:
  - Radial gradient fill for 3D depth illusion
  - 7 curved latitude rings (ellipses via `Math.sqrt(R²-dy²)`)
  - 4 curved meridians (vertical ellipses with varying rx)
  - All lat/long lines clipped to sphere boundary
  - Specular highlight ellipse for physical material feel
  - Dots repositioned to continental locations

### Hero (Hero.tsx) — updated 2026-04-14
- **Background:** Three-layer radial mesh gradient: `#FF8C2A` amber highlight (top-right), `#C93D00` burnt orange (bottom-left), `#FF6100→#E55200` fill (center). No photo.
- **Typography:** Headline `clamp(48px, 6.5vw, 88px)`; "in minutes." gets a `bg-white/40` underline accent bar for visual emphasis
- **Calculator card:** No outer glass wrapper. Calculator renders directly with `drop-shadow(0 32px 80px rgba(0,0,0,0.28))` via `filter` for depth.
- **Trust signal pills:** Row of four below CTAs — App Store 4.9★, Google Play 4.6★, Trustpilot 4.5★, Licensed & Regulated shield. Style: `bg-white/15 border-white/20 backdrop-blur-sm rounded-full`.
- **WhatsApp button:** Border raised to `white/50`, hover fill `white/15`, stronger hover border `white/70`.
- **Noise texture:** Subtle SVG fractalNoise overlay at `opacity-[0.03]` on the blobs layer for surface depth.
- **Motion:** `@media (prefers-reduced-motion: reduce)` guard on blob CSS keyframes; `blob-animate` class on blobs.

### Calculator (Calculator.tsx) — updated 2026-04-14
- **Removed:** Orange header band (`bg-brand-500 "How much do you want to send?"`). Eliminated triple-orange layering.
- **Card header:** "Send money" label + "No fees on first send" green badge (`bg-green-50 text-green-700 border-green-100 rounded-full`).
- **You send input:** `overflow-hidden` removed from row. Input has `min-w-0 rounded-l-xl`. USD badge has `shrink-0 whitespace-nowrap rounded-r-xl` — fixes flag+text clipping.
- **USD badge:** Shows `🇺🇸 USD` with flag.
- **Rate info line:** Green checkmark SVG + "1 USD = X · Fee: $Y" between send input and country selector.
- **They receive:** Now a separate labelled row after the country selector.
- **Focus states:** `focus-within:border-brand-500 focus-within:ring-1` on input row; `focus:border-brand-500` on selects.

### Nav (Nav.tsx) — updated 2026-04-14
- **Country selector:** "Sending from" pill added between nav links and CTAs. Shows flag + country code + animated chevron.
- **Dropdown:** Closes on outside click, Escape key, or selection. Active country shows checkmark + brand highlight. 8 countries: US, CA, GB, DE, FR, AU, ES, IT.
- **Styling:** Adapts to scrolled/transparent nav state (white border on orange bg, gray border on white bg).
- **Mobile:** Inline `<select>` at top of mobile menu for country selection.

### WaysToSend (WaysToSend.tsx)
- **Before:** Light bg, 2×2 emoji card grids, visually weak
- **After:** `bg-gray-900` dark section, 3-col layout (`[1fr_auto_1fr]`), glassmorphism rows (`bg-white/5 border border-white/10`), inline SVG icons (no deps), send=orange / receive=green color coding, central arrow connector

### Testimonials (Testimonials.tsx)
- **Before:** Flag emoji avatars in colored circles
- **After:** Real Unsplash portrait photos (w-12 h-12 rounded-full), flag badge overlaid bottom-right of photo, SVG star icons, upgraded card shadows

### PricingTable (PricingTable.tsx) — updated 2026-04-14
- **Section bg:** `bg-[#111111]` (dark, matching StatsBar) — was `bg-page` light
- **Layout:** Elevated column comparison grid (div-based, not a `<table>`) — 4 cols: label | Bank | **Ria** | WU
- **Ria column:** `bg-brand-500` header with "✦ Best value" badge, `pt-6` elevation (no negative margin — avoids clip), orange side borders running full column height, `border-brand-500/40` bottom cap
- **Bank/WU headers:** `self-end` so they align to the bottom of the header row, shorter than Ria's
- **Ria cell subtext:** `text-white/50` — was `text-brand-300/60` (unreadable)
- **Data rows:** 5 rows — Transfer fee, Exchange rate, Arrives in, Cash pickup, App rating. All icon-labelled.
- **Interactive amount input:** User can type any USD amount; Bank/WU hidden markup costs recalculate live. No corridor selector (removed — fee model is corridor-agnostic; also avoids duplicating hero calculator UI).
- **Data honesty:** Bank/WU figures use `~` prefix and "typically" language. Footer row labelled "Typical total cost". Footnote disclaimer added below section.
- **Savings count-up:** `useCountUp` hook animates the "You keep ~$X more" figure from 0 on scroll entry using `useInView`.
- **Proof strip:** Lock icon + "same rate as Google" pill + disclaimer footnote. No CTA button (hero already has one).
- **Dark continuity:** `radial-gradient(ellipse 70% 100% at 50% 0%, rgba(255,97,0,0.10))` anchored at top of PricingTable mirrors StatsBar's bottom glow — creates seamless warm gradient through the seam between both sections.

### StatsBar (StatsBar.tsx) — updated 2026-04-14
- **Removed:** App Store rating stat (duplicated from Hero trust pills — don't repeat)
- **4 stats:** 1B+ Transfers · 190+ Countries · 600K+ Locations · 35+ Years
- **Layout:** `bg-[#181818]` cards with `border-t: 3px solid #FF6100` orange crown + `border border-white/[0.07]` perimeter + `rounded-2xl` + generous `px-8 py-10`
- **Typography:** All numbers uniform `clamp(48px, 5vw, 76px)` — no size hierarchy (consistent = authoritative). Labels use `font-display font-extrabold`.
- **Eyebrow:** "Trusted by millions" centered between two `bg-white/10` horizontal rules, brand orange small-caps. Fades in first before cards.
- **Proof copy:** One-line context under each label (e.g. "More than any competitor", "Founded in New York, 1987")
- **Background:** `bg-[#111111]` — changed from `bg-gray-900` to explicitly match PricingTable
- **Background depth:** Radial orange glow anchored at bottom — `rgba(255,97,0,0.10)` — gives warmth without being obvious; mirrors into PricingTable top for gradient continuity
- **GSAP animations (3 layers):**
  1. Eyebrow fades up first (`power3.out`)
  2. Cards slam in with `y:64 scale:0.94 → y:0 scale:1`, `expo.out`, stagger 0.13s — physical "landing" feel
  3. Count-up fires in parallel (`power3.out`); 1B+ counts through decimals (`0.1B+ → 1B+`)

---

## Accessibility Fixes Applied

| Issue | Fix |
|---|---|
| `text-white/60` on orange bg | → `text-white/90` (CashPickup, Hero eyebrow) |
| `text-white/70` on orange bg | → `text-white/90` (FinalCTA body, Hero para) |
| `text-white/50` on orange bg | → `text-white/75` (Hero trust micro-copy) |
| `text-white/40` on orange bg | → `text-white/65` (FinalCTA NMLS footnote) |
| Mobile nav: no focus trap | Focus trap + Escape handler in Nav.tsx useEffect |
| Mobile nav: missing aria | `aria-expanded`, `aria-haspopup`, dynamic `aria-label` on hamburger |
| Ghost buttons on orange bg | `focus-visible:ring-white` override on Hero + FinalCTA ghost buttons |
| White buttons focus ring | `focus-visible:ring-white focus-visible:ring-offset-brand-500` in Button.tsx |
| Globe SVG no semantics | `role="img"` + `aria-label` on wrapper, `aria-hidden` on dots layer |
| Ping animation ignores motion pref | `motion-safe:animate-ping` on globe dots |

---

### WhatsApp Section (WhatsAppFeature.tsx) — updated 2026-04-14
- **Background:** `#0D1F1C` (dark teal) — distinct from `#111111` dark sections, anchors WhatsApp green palette
- **"Only on Ria" badge:** Pill with green border, `rgba(37,211,102,0.18)` glow, pulsing dot — prominently placed above headline
- **Headline:** Unchanged. White text on dark.
- **Benefit items:** Replaced generic glassmorphism chips with editorial separator rows — numbered `01/02/03` in green monospace, bold white label, muted right-aligned descriptor. `border-t/border-b border-white/10` dividers.
- **Visual:** Local image `images/6D0CC816-49D9-4F24-BEAB-C1F0149BAFB9.jpg` (woman at kitchen counter on phone). `max-w-md`, `h-[460px] object-cover`, `rounded-3xl`. Bottom fade gradient blends into section bg.
- **Chat bubble:** Framer Motion spring animation (`delay: 0.55s`). White card, WhatsApp green header, shows "✓ Transfer complete · $200 → 3,446 MXN · Ready at OXXO." `aria-label` set.
- **Ambient glow:** Radial green gradient behind photo (`rgba(37,211,102,0.22)`), `blur-3xl`.
- **CTA:** Green button (`#25D366`) with static `shadow-[0_0_24px_rgba(37,211,102,0.32)]`. Hover changes bg only.
- **Footnote:** "Available in select countries. More corridors coming soon."

### Global Orange Glow — updated 2026-04-14
- **Button.tsx primary variant:** `shadow-[0_0_24px_rgba(255,97,0,0.42)]` — static, no hover amplification. Hover only changes bg to `brand-600`. Applies to all orange CTAs sitewide.
- **StatsBar numbers:** Text-shadow removed (reverted after review).
- **StatsBar card top-border glow:** Removed after review.

### Em Dash Cleanup — updated 2026-04-14
- All em dashes removed from rendered content across all components.
- Replacements: periods or commas depending on sentence flow.
- Code comments left unchanged.

### Logo System — updated 2026-04-14
- **Component:** `src/components/ui/RiaLogo.tsx` — inline SVG with `fill="currentColor"` (paths from `images/Ria_logo.svg`)
- **Nav transparent** (over orange hero): `text-white` → logo renders white
- **Nav scrolled** (white bg): `text-brand-500` → logo renders orange. Smooth `transition-colors duration-300`.
- **Footer** (dark bg): `text-brand-500` → orange logo on `#111`
- **Favicon:** `index.html` updated to `/ria-logo.png` (PNG copy in `public/`)
- **Rule:** Never use the PNG with white background on non-white surfaces. Always use `RiaLogo` component.

---

## Remaining Known Issues / Next Phase Ideas

**Not yet done:**
- `text-gray-500` on light bg (#697380 on #F8FAFB) — borderline contrast at ~4.1:1 for normal text. Darkening to `text-gray-600` would be safer.
- WhatsApp section: lifestyle photo + animated chat bubble + editorial benefit rows implemented (see above)
- App Showcase section: phone mockup is pure HTML, no actual Ria app screenshots
- PricingTable: uses div grid layout with `role="table/row/cell/columnheader/rowheader"` ARIA — not a semantic `<table>`. Acceptable for this use case but could be improved.
- Footer social icon tap targets: likely < 44px (icon-only links)
- CountUp components: no `aria-live` attribute (numbers change on scroll)
- Hero: country selector in Nav currently only affects display state — not wired to calculator corridor logic

**Visual wins that would further elevate:**
- Add a subtle orange glow/halo behind the globe in CashPickup (CSS box-shadow or a radial gradient div)
- App Showcase: add real Ria app UI screenshots or a higher-fidelity phone mockup
- Timeline section: verify progressive reveal animation looks premium on scroll
- Consider adding a partner logo carousel (OXXO, Mercado Pago, Nequi, Yape) — mentioned in product facts but not implemented

---

## Key Unsplash Photo URLs Used

| Location | URL |
|---|---|
| Hero background | ~~removed~~ — replaced with radial mesh gradient |
| Testimonial — Carlos M. (US→MX) | `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop&q=80` |
| Testimonial — Adaeze O. (UK→NG) | `https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&auto=format&fit=crop&q=80` |
| Testimonial — Priya S. (CA→IN) | `https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&auto=format&fit=crop&q=80` |

---

## Senior Exec / A11y Audit Summary (April 2026)

**Executive verdict before fixes:** Competent skeleton, zero emotional resonance. Globe looked like a flat oval, no photography, glassmorphism promised but absent, WaysToSend was an afterthought.

**After V1 fixes:** Globe is a real 3D sphere, WaysToSend is a premium dark section, testimonials have real faces.

**After Hero & Nav polish pass:** Background photo removed — replaced with a warm radial mesh gradient that has directional depth. Broken double-card fixed (single card, no glass wrapper). Calculator header band removed (no more triple orange). Trust signal pills added (ratings + licensed badge). Country selector in Nav. Calculator USD field no longer clips.

**Remaining gap:** App Showcase section is still weak (HTML mockup, no real screenshots). That's the next section to elevate.
