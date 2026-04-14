---
name: ria-visual
description: Visual strategy, design direction, color palette, typography, and motion guidelines for the Ria Money Transfer landing page redesign. Sourced directly from the Figma design system. Use when making any design decisions, building components, or referencing the visual system for the Ria project.
---

# Ria Money Transfer — Visual Strategy

Sourced from the official Figma design system: `figma.com/design/3rWEHKYuYEQtXd4cC7DPWi`
Design system v1.0 · April 2026 · 30 Primitives · 31 Semantic Tokens · 16 Text Styles · 7 Components

---

## Strategic Direction

**Reference point:** Ria's Chile redesign (`riamoneytransfer.com/en-cl/`) — modular layout, orange accents, lifestyle photography, partner carousels. Good foundation, safe execution.

**Our direction:** Bold Orange-Led with Dark Accents. Light-mode base using the design system faithfully, with two strategic dark sections and a full-bleed brand-orange hero. Scroll-triggered animations, Lottie visuals, and oversized typography push it well beyond the Chile site.

**The one-line brief:** *Premium fintech energy, immigrant family heart.*

---

## Color Palette (from Figma design system — use these exact values)

### Primitive — Brand Orange
| Token | Hex | Use |
|---|---|---|
| `orange/50` | `#FFF8F3` | Subtle tints |
| `orange/100` | `#FFD5E6` | Hover backgrounds |
| `orange/400` | `#FF7625` | Light CTAs |
| `orange/500` | `#FF6100` | **Primary brand — Blaze Orange** |
| `orange/600` | `#E55600` | Button hover state |
| `orange/700` | `#CC4100` | Pressed / active |

### Primitive — Neutral Gray
| Token | Hex | Use |
|---|---|---|
| `gray/50` | `#F6F6F6` | Subtle backgrounds |
| `gray/100` | `#F3F3F4` | — |
| `gray/200` | `#E5E7E8` | Borders |
| `gray/500` | `#697380` | Secondary text |
| `gray/700` | `#333333` | Body text alt |
| `gray/900` | `#111111` | Dark sections bg |

### Semantic Tokens
| Token | Hex | Usage |
|---|---|---|
| `color/bg/page` | `#F8FAFB` | Default page bg |
| `color/bg/surface` | `#FFFFFF` | Cards, panels |
| `color/bg/brand` | `#FF6100` | Brand fill sections |
| `color/bg/brand-subtle` | `#FFFBF3` | Tinted brand areas |
| `color/text/primary` | `#111111` | Headlines, body |
| `color/text/secondary` | `#555555` | Supporting copy |
| `color/text/brand` | `#FF6100` | Brand-colored text |
| `color/text/link` | `#2563EB` | Hyperlinks |
| `color/border/default` | `#E5E7EB` | Default borders |
| `color/border/brand` | `#FF6100` | Brand/focus borders |

### Semantic — Status
| | Hex |
|---|---|
| Success | `#16A34A` |
| Error | `#DC2626` |
| Warning | `#CA8A04` |
| Info | `#2563EB` |

---

## Section Rhythm (light/dark alternation)

| Section | Background | Notes |
|---|---|---|
| Nav | White → transparent on scroll | Solid on scroll |
| Hero | `#FF6100` full bleed | White text, animated blob, Lottie visual |
| Stats bar | `#111111` dark | White/orange count-up counters |
| Pricing | `#F8FAFB` light | Staggered table reveals |
| WhatsApp | `#FFFFFF` white | Teal accent `#2563EB` / green |
| Cash Pickup | `#FF6100` orange | Lottie/Spline globe, white text |
| Ways to send | `#F8FAFB` light | Card grid stagger |
| App showcase | `#111111` dark | Phone mockup float animation |
| Testimonials | `#FFFFFF` white | Carousel fade |
| Heritage timeline | `#F8FAFB` light | Progressive scroll reveal |
| Final CTA | `#FF6100` orange | White text, pill CTAs |
| Footer | `#111111` dark | — |

---

## Typography (from Figma design system)

**Headlines / Display:** **Plus Jakarta Sans Extra Bold**
- Google Fonts: `https://fonts.google.com/specimen/Plus+Jakarta+Sans`
- Use for H1, H2, H3, stat numbers
- Size scale: H1 = 72–96px, H2 = 48–64px, H3 = 32–40px
- Letter-spacing: `-0.02em` to `-0.04em` for impact
- Character: warm, rounded, expressive — not cold or geometric

**Body / UI:** **Inter Regular / Semi Bold / Extra Bold**
- Size: 16–18px body, 14px captions, 12px labels
- Use for all body copy, labels, form inputs, captions

**Typographic moments:**
- Hero H1: 80–96px Plus Jakarta Sans Extra Bold, white on orange
- Stats: numbers at 72–96px Plus Jakarta Sans ExtraBold, orange `#FF6100` on dark
- Section eyebrow: 11–12px Inter Semi Bold, uppercase, `letter-spacing: 0.15em`, brand orange
- Example eyebrow: `TRUSTED SINCE 1987`

---

## Spacing (4px base grid)

| Token | Value |
|---|---|
| `spacing/1` | 4px |
| `spacing/2` | 8px |
| `spacing/3` | 12px |
| `spacing/4` | 16px |
| `spacing/6` | 24px |
| `spacing/8` | 32px |
| `spacing/12` | 48px |
| `spacing/16` | 64px |
| `spacing/20` | 80px |
| `spacing/24` | 96px |
| `spacing/32` | 128px |

**Section padding:** 96–128px top/bottom desktop, 64–80px mobile

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `radius/none` | 0px | — |
| `radius/sm` | 4px | Inputs, chips |
| `radius/md` | 8px | Small cards |
| `radius/lg` | 12px | Cards (default) |
| `radius/xl` | 16px | Large cards, calculator |
| `radius/2xl` | 24px | Modal, hero card |
| `radius/full` | ∞ | Buttons (pill shape) |

---

## Component Specs (from Figma)

**Buttons (pill-shaped — `radius/full`):**
- Primary: `#FF6100` fill, white text, 48px min height, 14–16px Semi Bold
- Hover: `#E55600`
- Secondary: transparent, `#FF6100` border, `#FF6100` text
- Ghost: no fill, no border, `#FF6100` text
- On orange bg sections: use white-fill button with dark text

**Cards (`radius/lg` = 12px):**
- Default: white bg, `1px solid #E5E7EB`, subtle shadow
- Hover: shadow lifts, border shifts to `#FF6100`
- Flat: white bg, no shadow, no border
- Selected: `2px solid #FF6100`

**Calculator Widget:**
- Shell: white, `radius/xl` 16px, shadow/lg
- Header band: `#FF6100`, 56px, top corners 16px
- Send input: border `color/border/strong`, `radius/md`
- Receive input: `color/border/brand` border, `color/bg/brand-subtle` bg
- CTA: `color/bg/brand`, `radius/full`, Semi Bold 16px

---

## Motion & Animation

All animations scroll-triggered via `IntersectionObserver` or Framer Motion.

| Element | Animation | Duration |
|---|---|---|
| Stats counters | Count-up 0 → final value on viewport entry | 1.5s ease-out |
| Section headlines | Fade up (Y: 24px → 0, opacity 0→1) | 500ms |
| Cards | Stagger fade-in (80ms delay between each) | 400ms each |
| Hero blob | Animated radial gradient, slow drift | 8s loop |
| CTA buttons | Scale 1→1.03, bg brightens | 150ms |
| Pricing table rows | Slide in from left, staggered | 300ms each |
| Globe/map dots | Pulse (scale + opacity loop) | 2s loop |
| Timeline items | Progressive left→right reveal on scroll | 400ms each |
| App mockup | Subtle float (Y: 0→-8px→0 loop) | 4s loop |

---

## Visual Assets Strategy

| Section | Visual | Source |
|---|---|---|
| Hero | Lifestyle photo (family/phone) or abstract orange blob | Unsplash |
| Cash Pickup | Globe with pulsing location dots | Lottie (lottiefiles.com) or Spline |
| WhatsApp | Phone mockup with WhatsApp chat | Custom SVG or Lottie |
| App showcase | iPhone mockup with Ria app UI | Custom |
| Stats bar | Pure CSS/JS count-up | Built in code |

**Photography style:** Warm, golden-hour. Real moments — hands exchanging, family reactions, phone screens. Search Unsplash: "family remittance", "sending money", "mobile payment".

**Lottie suggestions:** Search lottiefiles.com for "globe network", "money transfer", "phone notification", "location pin".

---

## Layout Principles

- **Max content width:** 1280px centered, 24px horizontal padding on mobile
- **12-column grid**, 24px gutter
- **Hero:** 100vh, full bleed orange
- **Cards:** radius/lg (12px), white bg on light sections; use flat variant on orange sections

---

## What Makes This Stand Out in an Interview

1. **Full-bleed orange hero** — bold, on-brand, zero competitors do this
2. **Two dark sections** (stats, app) — creates visual rhythm and depth without abandoning the DS
3. **Plus Jakarta Sans at 80–96px** — type doing visual work, not just carrying information
4. **Lottie/Spline for the globe** — shows motion design thinking
5. **Scroll-triggered count-up stats** — proves frontend craft
6. **Faithful to the design system** — shows you can work within constraints while still being ambitious
