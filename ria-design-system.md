# Ria Money Transfer — Design System Documentation
> Extracted from: riamoneytransfer.com | Last updated: April 2026
> Status: ✅ Confirmed = verified from brand sources | 🔍 Inferred = derived from visual analysis

---

## 1. Brand Overview

- **Company:** Ria Money Transfer (part of Euronet Worldwide)
- **Rebranded:** 2020 by Saffron Design Agency
- **Design philosophy:** Warm, inclusive, modern. Centers the individual customer. The orange disc is the cornerstone visual symbol — it evolves from the "i" in Ria.
- **Official Design System:** [Frontify](https://ria-digital-brand.frontify.com/d/1hmBx2H1VeA4/design-system)

---

## 2. Color Tokens

### 2a. Primitives

| Token Name         | Hex       | Notes                            | Status |
|--------------------|-----------|----------------------------------|--------|
| `orange/500`       | `#FF6100` | Blaze Orange — primary brand     | ✅     |
| `orange/600`       | `#E55600` | Darker orange (hover state)      | 🔍     |
| `orange/400`       | `#FF7A2E` | Lighter orange (tinted states)   | 🔍     |
| `orange/100`       | `#FFF0E6` | Pale orange (backgrounds, tints) | 🔍     |
| `orange/50`        | `#FFF8F3` | Near-white orange tint           | 🔍     |
| `gray/900`         | `#111111` | Near-black, primary text         | 🔍     |
| `gray/800`         | `#1F1F1F` | Dark secondary text              | 🔍     |
| `gray/700`         | `#333333` | Body copy dark                   | 🔍     |
| `gray/600`         | `#555555` | Secondary text                   | 🔍     |
| `gray/500`         | `#6B7280` | Placeholder / muted              | 🔍     |
| `gray/400`         | `#9CA3AF` | Disabled text                    | 🔍     |
| `gray/300`         | `#D1D5DB` | Border default                   | 🔍     |
| `gray/200`         | `#E5E7EB` | Border subtle / dividers         | 🔍     |
| `gray/100`         | `#F3F4F6` | Surface / card background        | 🔍     |
| `gray/50`          | `#F9FAFB` | Page background / light surface  | 🔍     |
| `white`            | `#FFFFFF` | Pure white                       | ✅     |
| `black`            | `#000000` | Pure black                       | ✅     |
| `green/500`        | `#16A34A` | Success state                    | 🔍     |
| `green/100`        | `#DCFCE7` | Success background               | 🔍     |
| `red/500`          | `#DC2626` | Error / destructive              | 🔍     |
| `red/100`          | `#FEE2E2` | Error background                 | 🔍     |
| `yellow/500`       | `#CA8A04` | Warning                          | 🔍     |
| `yellow/100`       | `#FEF9C3` | Warning background               | 🔍     |
| `blue/500`         | `#2563EB` | Info / link color                | 🔍     |
| `blue/100`         | `#DBEAFE` | Info background                  | 🔍     |

---

### 2b. Semantic Color Tokens

#### Color / Background
| Token                       | Light Mode Value      | Dark Mode Value       |
|-----------------------------|-----------------------|-----------------------|
| `color/bg/page`             | `gray/50` (#F9FAFB)   | `gray/900` (#111111)  |
| `color/bg/surface`          | `white` (#FFFFFF)     | `gray/800` (#1F1F1F)  |
| `color/bg/surface-raised`   | `white` (#FFFFFF)     | `gray/700` (#333333)  |
| `color/bg/overlay`          | `gray/100` (#F3F4F6)  | `gray/800` (#1F1F1F)  |
| `color/bg/brand`            | `orange/500` (#FF6100)| `orange/500` (#FF6100)|
| `color/bg/brand-subtle`     | `orange/50` (#FFF8F3) | `gray/800` (#1F1F1F)  |
| `color/bg/success`          | `green/100` (#DCFCE7) | `green/100` (#DCFCE7) |
| `color/bg/error`            | `red/100` (#FEE2E2)   | `red/100` (#FEE2E2)   |
| `color/bg/warning`          | `yellow/100` (#FEF9C3)| `yellow/100` (#FEF9C3)|
| `color/bg/info`             | `blue/100` (#DBEAFE)  | `blue/100` (#DBEAFE)  |

#### Color / Text
| Token                       | Light Mode Value      | Dark Mode Value       |
|-----------------------------|-----------------------|-----------------------|
| `color/text/primary`        | `gray/900` (#111111)  | `white` (#FFFFFF)     |
| `color/text/secondary`      | `gray/600` (#555555)  | `gray/400` (#9CA3AF)  |
| `color/text/tertiary`       | `gray/500` (#6B7280)  | `gray/500` (#6B7280)  |
| `color/text/disabled`       | `gray/400` (#9CA3AF)  | `gray/600` (#555555)  |
| `color/text/inverse`        | `white` (#FFFFFF)     | `gray/900` (#111111)  |
| `color/text/brand`          | `orange/500` (#FF6100)| `orange/400` (#FF7A2E)|
| `color/text/link`           | `blue/500` (#2563EB)  | `blue/500` (#2563EB)  |
| `color/text/success`        | `green/500` (#16A34A) | `green/500` (#16A34A) |
| `color/text/error`          | `red/500` (#DC2626)   | `red/500` (#DC2626)   |
| `color/text/warning`        | `yellow/500` (#CA8A04)| `yellow/500` (#CA8A04)|

#### Color / Border
| Token                       | Light Mode Value      | Dark Mode Value       |
|-----------------------------|-----------------------|-----------------------|
| `color/border/default`      | `gray/200` (#E5E7EB)  | `gray/700` (#333333)  |
| `color/border/strong`       | `gray/300` (#D1D5DB)  | `gray/600` (#555555)  |
| `color/border/brand`        | `orange/500` (#FF6100)| `orange/500` (#FF6100)|
| `color/border/error`        | `red/500` (#DC2626)   | `red/500` (#DC2626)   |
| `color/border/focus`        | `orange/500` (#FF6100)| `orange/400` (#FF7A2E)|

#### Color / Icon
| Token                       | Light Mode Value      | Dark Mode Value       |
|-----------------------------|-----------------------|-----------------------|
| `color/icon/primary`        | `gray/900` (#111111)  | `white` (#FFFFFF)     |
| `color/icon/secondary`      | `gray/500` (#6B7280)  | `gray/400` (#9CA3AF)  |
| `color/icon/brand`          | `orange/500` (#FF6100)| `orange/400` (#FF7A2E)|
| `color/icon/inverse`        | `white` (#FFFFFF)     | `gray/900` (#111111)  |
| `color/icon/success`        | `green/500` (#16A34A) | `green/500` (#16A34A) |
| `color/icon/error`          | `red/500` (#DC2626)   | `red/500` (#DC2626)   |

---

## 3. Typography

> **Note:** Ria uses a custom/proprietary sans-serif typeface in their wordmark. The exact web font family is not publicly confirmed — it may be a licensed sans-serif. The fallback stack observed is a modern geometric sans-serif.

### 3a. Font Families

| Token                   | Value                                            | Status |
|-------------------------|--------------------------------------------------|--------|
| `font/family/primary`   | `"Ria Sans", "Inter", sans-serif`                | 🔍     |
| `font/family/secondary` | `"Inter", "Helvetica Neue", Arial, sans-serif`   | 🔍     |
| `font/family/mono`      | `"IBM Plex Mono", "Courier New", monospace`      | 🔍     |

### 3b. Font Size Scale

| Token              | px   | rem    | Usage                            |
|--------------------|------|--------|----------------------------------|
| `font/size/2xs`    | 10px | 0.625  | Legal, footnotes                 |
| `font/size/xs`     | 12px | 0.75   | Labels, captions                 |
| `font/size/sm`     | 14px | 0.875  | Body small, helper text          |
| `font/size/md`     | 16px | 1.0    | Body default (base)              |
| `font/size/lg`     | 18px | 1.125  | Body large, lead text            |
| `font/size/xl`     | 20px | 1.25   | Small heading / subheading       |
| `font/size/2xl`    | 24px | 1.5    | Heading 3                        |
| `font/size/3xl`    | 30px | 1.875  | Heading 2                        |
| `font/size/4xl`    | 36px | 2.25   | Heading 1                        |
| `font/size/5xl`    | 48px | 3.0    | Display / hero heading           |
| `font/size/6xl`    | 60px | 3.75   | Large display                    |

### 3c. Font Weights

| Token                    | Value | CSS Name    |
|--------------------------|-------|-------------|
| `font/weight/regular`    | 400   | Regular     |
| `font/weight/medium`     | 500   | Medium      |
| `font/weight/semibold`   | 600   | Semi Bold   |
| `font/weight/bold`       | 700   | Bold        |
| `font/weight/extrabold`  | 800   | Extra Bold  |

### 3d. Line Heights

| Token                    | Value | Usage                |
|--------------------------|-------|----------------------|
| `font/line-height/tight` | 1.2   | Display / headlines  |
| `font/line-height/snug`  | 1.35  | Large headings       |
| `font/line-height/normal`| 1.5   | Body text            |
| `font/line-height/loose` | 1.75  | Long-form reading    |

### 3e. Letter Spacing

| Token                        | Value     | Usage               |
|------------------------------|-----------|---------------------|
| `font/letter-spacing/tight`  | -0.025em  | Display headings    |
| `font/letter-spacing/normal` | 0em       | Body                |
| `font/letter-spacing/wide`   | 0.025em   | Labels / uppercase  |
| `font/letter-spacing/wider`  | 0.1em     | ALL CAPS labels     |

### 3f. Text Styles (Composite)

| Style Name          | Size | Weight | Line Height | Usage                  |
|---------------------|------|--------|-------------|------------------------|
| Display / Hero      | 60px | 700    | 1.2         | Hero headlines         |
| H1                  | 48px | 700    | 1.2         | Page titles            |
| H2                  | 36px | 700    | 1.35        | Section titles         |
| H3                  | 30px | 600    | 1.35        | Sub-section titles     |
| H4                  | 24px | 600    | 1.4         | Card headings          |
| H5                  | 20px | 600    | 1.4         | Widget headings        |
| H6                  | 18px | 600    | 1.5         | Small headings         |
| Body / Large        | 18px | 400    | 1.75        | Lead paragraph         |
| Body / Default      | 16px | 400    | 1.5         | Standard body text     |
| Body / Small        | 14px | 400    | 1.5         | Helper text, secondary |
| Label / Large       | 16px | 500    | 1.2         | Button, input labels   |
| Label / Default     | 14px | 500    | 1.2         | Form labels            |
| Label / Small       | 12px | 500    | 1.2         | Badges, tags           |
| Caption             | 12px | 400    | 1.4         | Captions, footnotes    |
| Overline            | 10px | 600    | 1.2         | ALL CAPS eyebrows      |

---

## 4. Spacing Scale

| Token           | px   | rem   | Usage                          |
|-----------------|------|-------|--------------------------------|
| `spacing/0`     | 0px  | 0     | No spacing                     |
| `spacing/px`    | 1px  | —     | Hairline borders               |
| `spacing/0.5`   | 2px  | 0.125 | Micro gap                      |
| `spacing/1`     | 4px  | 0.25  | Tight inline gaps              |
| `spacing/1.5`   | 6px  | 0.375 | Small badge padding            |
| `spacing/2`     | 8px  | 0.5   | Compact padding (sm)           |
| `spacing/3`     | 12px | 0.75  | Input inner padding            |
| `spacing/4`     | 16px | 1.0   | Base unit — default padding    |
| `spacing/5`     | 20px | 1.25  | Card padding sm                |
| `spacing/6`     | 24px | 1.5   | Section padding sm             |
| `spacing/8`     | 32px | 2.0   | Component gap / card padding   |
| `spacing/10`    | 40px | 2.5   | Section spacing                |
| `spacing/12`    | 48px | 3.0   | Large section gap              |
| `spacing/16`    | 64px | 4.0   | Section dividers               |
| `spacing/20`    | 80px | 5.0   | Page section vertical padding  |
| `spacing/24`    | 96px | 6.0   | Hero section padding           |
| `spacing/32`    | 128px| 8.0   | Max section padding            |

---

## 5. Border Radius

| Token             | px   | Usage                                 |
|-------------------|------|---------------------------------------|
| `radius/none`     | 0px  | Sharp/no rounding                     |
| `radius/sm`       | 4px  | Subtle rounding (tags, chips)         |
| `radius/md`       | 8px  | Cards, inputs, small containers       |
| `radius/lg`       | 12px | Large cards, modals                   |
| `radius/xl`       | 16px | Prominent card sections               |
| `radius/2xl`      | 24px | Feature banners                       |
| `radius/full`     | 9999px | Pills, badges, avatar circles       |

> **Key observation:** Ria uses rounded, friendly corners — likely `radius/md` (8px) for buttons and inputs, `radius/lg` (12px) for cards.

---

## 6. Shadows / Elevation

| Token              | Value                                             | Usage                     |
|--------------------|---------------------------------------------------|---------------------------|
| `shadow/none`      | `none`                                            | Flat elements             |
| `shadow/xs`        | `0 1px 2px rgba(0,0,0,0.05)`                     | Hairline lift             |
| `shadow/sm`        | `0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)` | Input, small card |
| `shadow/md`        | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)` | Cards, dropdown  |
| `shadow/lg`        | `0 10px 15px rgba(0,0,0,0.10), 0 4px 6px rgba(0,0,0,0.05)` | Modals, overlays |
| `shadow/xl`        | `0 20px 25px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.04)` | Hero components |
| `shadow/brand`     | `0 4px 14px rgba(255,97,0,0.35)`                 | Brand CTA buttons on hover|

---

## 7. Components

### 7a. Button

#### Primary Button
| Property         | Value                                   |
|------------------|-----------------------------------------|
| Background       | `#FF6100` (orange/500)                  |
| Text color       | `#FFFFFF` (white)                       |
| Border           | none                                    |
| Border radius    | `radius/full` (pill) or `radius/md` 8px |
| Font size        | 16px (Label/Large)                      |
| Font weight      | 600 (semibold)                          |
| Padding (Y)      | 12–14px (`spacing/3`)                   |
| Padding (X)      | 24px (`spacing/6`)                      |
| Height           | 48px (default), 40px (sm), 56px (lg)   |
| Hover bg         | `#E55600` (orange/600)                  |
| Active bg        | `#CC4D00`                               |
| Disabled bg      | `gray/200` (#E5E7EB)                    |
| Disabled text    | `gray/400` (#9CA3AF)                    |
| Focus ring       | `2px solid #FF6100` + 2px offset        |

#### Secondary Button (Outlined)
| Property         | Value                                   |
|------------------|-----------------------------------------|
| Background       | `transparent`                           |
| Text color       | `#FF6100` (orange/500)                  |
| Border           | `1.5px solid #FF6100`                   |
| Border radius    | `radius/full` (pill) or `radius/md` 8px |
| Hover bg         | `orange/50` (#FFF8F3)                   |

#### Ghost Button
| Property         | Value                                   |
|------------------|-----------------------------------------|
| Background       | `transparent`                           |
| Text color       | `gray/700` (#333333)                    |
| Border           | none                                    |
| Hover bg         | `gray/100` (#F3F4F6)                    |

#### Danger Button
| Property         | Value                                   |
|------------------|-----------------------------------------|
| Background       | `red/500` (#DC2626)                     |
| Text color       | `white`                                 |

---

### 7b. Input / Form Field

| Property              | Value                                 |
|-----------------------|---------------------------------------|
| Background            | `white` (#FFFFFF)                     |
| Border                | `1px solid gray/300` (#D1D5DB)        |
| Border radius         | `radius/md` (8px)                     |
| Text color            | `gray/900` (#111111)                  |
| Placeholder color     | `gray/400` (#9CA3AF)                  |
| Label color           | `gray/700` (#333333)                  |
| Label font size       | 14px, weight 500                      |
| Input font size       | 16px, weight 400                      |
| Padding               | `12px 16px` (Y: spacing/3, X: spacing/4) |
| Height                | 48px (default), 40px (compact)        |
| Focus border          | `1.5px solid orange/500` (#FF6100)    |
| Focus ring            | `0 0 0 3px rgba(255,97,0,0.15)`       |
| Error border          | `1.5px solid red/500` (#DC2626)       |
| Error text            | `red/500` (#DC2626), 12px, weight 400 |
| Success border        | `1.5px solid green/500` (#16A34A)     |
| Disabled background   | `gray/50` (#F9FAFB)                   |
| Disabled border       | `gray/200` (#E5E7EB)                  |
| Disabled text         | `gray/400` (#9CA3AF)                  |

---

### 7c. Card

| Property          | Value                              |
|-------------------|------------------------------------|
| Background        | `white` (#FFFFFF)                  |
| Border            | `1px solid gray/200` (#E5E7EB)     |
| Border radius     | `radius/lg` (12px)                 |
| Shadow            | `shadow/sm`                        |
| Padding           | 24px (`spacing/6`)                 |
| Hover shadow      | `shadow/md`                        |

---

### 7d. Badge / Chip

| Property        | Default            | Success              | Warning              | Error               |
|-----------------|--------------------|-----------------------|----------------------|---------------------|
| Background      | `orange/100`       | `green/100`           | `yellow/100`         | `red/100`           |
| Text color      | `orange/600`       | `green/500`           | `yellow/500`         | `red/500`           |
| Font size       | 12px               | 12px                  | 12px                 | 12px                |
| Font weight     | 600                | 600                   | 600                  | 600                 |
| Border radius   | `radius/full`      | `radius/full`         | `radius/full`        | `radius/full`       |
| Padding         | `2px 10px`         | `2px 10px`            | `2px 10px`           | `2px 10px`          |

---

### 7e. Navigation / Header

| Property              | Value                                  |
|-----------------------|----------------------------------------|
| Background            | `white` (#FFFFFF)                      |
| Height                | 64–72px                                |
| Border bottom         | `1px solid gray/200` (#E5E7EB)         |
| Logo color            | `black` (#000000) + orange disc        |
| Nav link color        | `gray/700` (#333333)                   |
| Nav link hover        | `orange/500` (#FF6100)                 |
| Nav link active       | `orange/500` (#FF6100)                 |
| Nav link font size    | 14–16px, weight 500                    |
| CTA button            | Primary button (orange/500)            |
| Mobile breakpoint     | 768px (hamburger menu)                 |

---

### 7f. Calculator / Quote Widget

> Key component on Ria homepage — the money transfer quote calculator

| Property              | Value                                  |
|-----------------------|----------------------------------------|
| Background            | `white` (#FFFFFF) or `orange/50`       |
| Border radius         | `radius/xl` (16px) or `radius/2xl`     |
| Shadow                | `shadow/lg`                            |
| Send amount input bg  | `white` or `gray/50`                   |
| Currency selector     | Flag icon + text, dropdown             |
| Rate display text     | `gray/600`, font-size 14px             |
| Submit CTA            | Full-width primary button              |
| Padding               | 24–32px                                |

---

### 7g. Avatar

| Property        | Value                                    |
|-----------------|------------------------------------------|
| Shape           | Circle (`border-radius: 50%`)            |
| Sizes           | 24px (xs), 32px (sm), 40px (md), 48px (lg), 64px (xl) |
| Default bg      | `orange/100` (#FFF0E6)                   |
| Default text    | `orange/600`, font-weight 600            |

---

### 7h. Divider

| Property   | Value                             |
|------------|-----------------------------------|
| Color      | `gray/200` (#E5E7EB)              |
| Height     | 1px                               |
| Style      | `solid`                           |

---

### 7i. Footer

| Property          | Value                              |
|-------------------|------------------------------------|
| Background        | `#111111` (gray/900) or `#1A1A1A`  |
| Text color        | `#F9FAFB` (gray/50) / `white`      |
| Link color        | `gray/300` (#D1D5DB)               |
| Link hover        | `white` or `orange/400`            |
| Section title     | `white`, font-size 14px, weight 600|
| Border top        | `1px solid rgba(255,255,255,0.1)`  |
| Padding           | 48px 0 (top/bottom)                |

---

## 8. Icons

| Property     | Value                                         |
|--------------|-----------------------------------------------|
| Library      | Custom line icons (likely Heroicons-inspired) |
| Style        | Line/outline, 1.5px stroke                    |
| Sizes        | 16px, 20px, 24px, 32px                        |
| Color        | Inherits from `color/icon/*` tokens           |
| Brand usage  | Orange circle disc (Ria "i" motif)            |

---

## 9. Motion / Animation

| Token                    | Value     | Usage                        |
|--------------------------|-----------|------------------------------|
| `duration/fast`          | 100ms     | Micro-interactions, ripple   |
| `duration/normal`        | 200ms     | Standard transitions         |
| `duration/slow`          | 300ms     | Page transitions, modals     |
| `duration/slower`        | 500ms     | Complex animations           |
| `easing/default`         | `ease`    | Standard                     |
| `easing/in`              | `ease-in` | Enter                        |
| `easing/out`             | `ease-out`| Exit                         |
| `easing/spring`          | `cubic-bezier(0.34,1.56,0.64,1)` | Bounce/spring |

---

## 10. Breakpoints

| Token          | px    | Use Case                   |
|----------------|-------|----------------------------|
| `bp/xs`        | 320px | Small mobile               |
| `bp/sm`        | 480px | Mobile landscape            |
| `bp/md`        | 768px | Tablet                     |
| `bp/lg`        | 1024px| Desktop                    |
| `bp/xl`        | 1280px| Large desktop              |
| `bp/2xl`       | 1440px| Wide desktop               |

---

## 11. Z-Index Scale

| Token            | Value | Usage                      |
|------------------|-------|----------------------------|
| `z/behind`       | -1    | Background elements        |
| `z/base`         | 0     | Default                    |
| `z/raised`       | 10    | Cards, slight elevation    |
| `z/dropdown`     | 100   | Dropdowns, selects         |
| `z/sticky`       | 200   | Sticky nav / header        |
| `z/overlay`      | 300   | Overlays, backdrops        |
| `z/modal`        | 400   | Modal dialogs              |
| `z/toast`        | 500   | Notifications / toasts     |
| `z/tooltip`      | 600   | Tooltips                   |

---

## 12. Grid System

| Property         | Value                                   |
|------------------|-----------------------------------------|
| Max width        | 1280px (`bp/xl`)                        |
| Columns          | 12 (desktop), 8 (tablet), 4 (mobile)   |
| Gutter           | 24px (desktop), 16px (tablet/mobile)   |
| Margin           | 32px (desktop), 16px (mobile)          |

---

## Notes for Figma Implementation

1. **Variable Collections to Create:**
   - `Primitives` — all raw values (1 mode: "Value")
   - `Color` — semantic color tokens (2 modes: "Light", "Dark")
   - `Spacing` — spacing scale (1 mode: "Value")
   - `Typography` — font sizes, weights, line heights (1 mode: "Value")

2. **Styles to Create:**
   - Text styles for all 16 composite typography styles
   - Effect styles for all shadow levels

3. **Component Pages (in order):**
   - Foundations → Color, Typography, Spacing, Elevation
   - Button (Primary, Secondary, Ghost, Danger + sizes + states)
   - Input / Form Field (Default, Focus, Error, Success, Disabled)
   - Card
   - Badge / Chip
   - Navigation / Header
   - Calculator Widget (Ria-specific key component)
   - Avatar
   - Footer

4. **Brand-specific notes:**
   - The orange disc is a standalone component — create it as a reusable component
   - The Ria logo wordmark should be imported as an SVG component
   - Orange (#FF6100) is the ONLY primary action color — do not introduce secondary action colors

---

*Sources: [Brandfetch/riamoneytransfer.com](https://brandfetch.com/riamoneytransfer.com) · [Ria Rebranding Blog](https://www.riamoneytransfer.com/en/blog/ria-money-transfer-rebranding) · [Euronet Press Release](https://www.globenewswire.com/news-release/2020/07/01/2056264/0/en/Ria-Money-Transfer-Unveils-New-Logo-and-Launches-New-Brand-Image.html) · [Creative Review / Saffron](https://www.creativereview.co.uk/ria-rebrand-saffron/) · [Ria Frontify Design System](https://ria-digital-brand.frontify.com/d/1hmBx2H1VeA4/design-system)*
