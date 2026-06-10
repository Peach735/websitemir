# МИРАСА — Design System

> **МИРАСА — экспертиза без границ.**

A design system for **МИРАСА**, a B2B consulting firm that represents foreign
industrial manufacturers (China, Europe and beyond) entering the markets of
**Belarus and Russia** — accompanying them from first contact through to full
settlement of the buyer's financial obligations.

This is a **greenfield brand**. No codebase, Figma, or licensed assets were
provided — the system was authored entirely from the written brief. Everything
here (tokens, type, components, landing UI kit) is original and intended to be
the canonical source going forward.

---

## 1. Company / Product context

- **What МИРАСА does:** local representation for foreign producers of
  industrial goods on the Belarusian and Russian markets — market entry,
  sales & representation, deal support (tenders, exchange trading / БУТБ,
  qualification testing, acceptance, claims), and financial control through
  to payment.
- **Founder edge:** 18+ years in metal-products procurement at MAZ (Минский
  автомобильный завод), one of Belarus's largest machine-building plants. The
  core differentiator is the **inside view** of procurement departments, tender
  committees, and quality control — "we understand the customer's requirements
  from the inside."
- **Primary product:** a single-page corporate landing site (Russian language).
- **Primary conversion goal:** a **phone call**. The phone number is sticky in
  the header and repeated in the hero and footer. Universal CTA: **«Позвонить»**.
  Phone placeholder used throughout: `[ТЕЛЕФОН]`. Other contact placeholders:
  `[EMAIL]`, `[TELEGRAM/WHATSAPP]`.

### Sources given
- A single detailed written brief (no external links, repos, or design files).
- No Figma, no GitHub, no slide decks, no existing screenshots.

---

## 2. Content fundamentals

**Language:** Russian only.

**Tone:** деловой, уверенный, без воды — businesslike, confident, no filler.
Industrial and trustworthy. Clarity over decoration. The reader is a serious
B2B counterpart (a foreign manufacturer or their export manager), not a
consumer.

**Voice & person:** speaks as **«мы»** (the firm) addressing the manufacturer.
Avoids hype, superlatives, and marketing fluff. States capability plainly:
*"Сопровождаем сделку от первого контакта до получения оплаты."*

**Casing:** Sentence case for headings and body. Short, declarative headings
(«О компании», «Услуги», «Полный цикл сделки»). Eyebrow labels may be
UPPERCASE with wide tracking, used sparingly.

**Punctuation:** Russian guillemets «…» for names and quotes. Middle dot ·
to separate value words (Конфиденциальность · Профессионализм · Независимость).
Arrows → for the deal-cycle ribbon.

**Emoji:** none. This is a strict no-emoji brand. No decorative unicode either,
beyond the · separator and → arrow used structurally.

**Example copy:**
- Hero UTP: *«Локальное представительство иностранных производителей
  промышленной продукции на рынках Беларуси и России — от первого контакта
  до получения оплаты.»*
- Confidentiality principle: *«Информация о поставщиках, заказчиках, ценах и
  условиях не передаётся третьим лицам.»*
- CTA: *«Позвонить»* (always paired with the visible phone number).

---

## 3. Visual foundations

**Overall feel:** light, airy, strict grid. Industrial seriousness conveyed
through restraint — generous whitespace, a single deep-navy accent, clean
grotesque type. Simplicity and legibility beat ornament.

**Color**
- Primary brand ink / wordmark: deep navy `--navy-900 #1A237E`.
- Primary action & links: royal navy `--navy-800 #1E3A8A`, hover `--navy-700`.
- Bright royal `--navy-600 #2E5BD8` used very sparingly (focus rings, small accents).
- Text: dark slate `--ink-900 #1E2530` — never pure black. Secondary `--ink-500`.
- Surfaces: white `#FFFFFF` and light grey-blue `#F5F7FA`, deeper section tint `#EEF1F6`.
- Single accent discipline: only navy is used as a color accent. No second hue.

**Typography**
- One family: **Manrope** (geometric grotesque, full Cyrillic). Weights 400/500/600/700/800.
- Large, tight display headings (weight 800, letter-spacing −0.02em).
- Calm body line-height (1.6). Lead paragraphs at 20px / weight 500.
- Type scale runs 13 → 76px (see `colors_and_type.css`).

**Spacing & layout**
- 8pt spacing scale. Container max 1160px, narrow 880px.
- Strict, calm grid. Sections separated by large vertical rhythm (96–128px desktop).
- Cards laid out with flex/grid + `gap`, never inline-flow spacing.

**Backgrounds:** flat color only — white and grey-blue tints. **No gradients,
no stock illustration, no photographic hero, no texture or pattern.** Section
differentiation is done with the two surface tints, not imagery.

**Corner radii:** minimal. 4–6px on buttons/inputs/cards, 10px on large
panels, pill only for small status chips. No heavily rounded "friendly" shapes.

**Shadows:** delicate, navy-tinted, low-opacity. `--shadow-sm/md/lg` carry a
faint `rgba(26,35,126,…)` tint rather than neutral grey. Cards rest mostly on
borders (`--line-200/300`) with shadow appearing on hover.

**Borders:** 1px hairline borders in `--line-200`/`--line-300` define most
surfaces. Borders do more work than shadows.

**Cards:** white surface, 1px hairline border, 6–10px radius, no shadow at
rest; on hover the border deepens toward navy and `--shadow-md` fades in.
No colored left-border-accent cards (an explicitly avoided trope).

**Animation:** quiet. 150–220ms ease-out on hover/expand transitions. Accordion
panels expand smoothly. No bounces, no parallax, no infinite loops, no
attention-grabbing motion. Respects `prefers-reduced-motion`.

**Hover states:** links/buttons darken (navy-800 → navy-700); cards raise border
contrast + soft shadow. **Press states:** subtle scale (0.99) and/or deeper navy.

**Transparency & blur:** only the sticky header uses a translucent white
backdrop with light blur when scrolled. Otherwise surfaces are opaque.

**Imagery vibe:** none by default — the brand intentionally avoids stock imagery.
If imagery is ever introduced, it should be cool-toned, restrained, documentary
(real facilities/products), never warm or lifestyle.

---

## 4. Iconography

- **Approach:** minimal, line-based icons used only where they aid scanning
  (service cards, deal-cycle steps, contact rows). Icons are structural, never
  decorative, and never replace text.
- **Set:** **Lucide** (https://lucide.dev) — 1.75px stroke, rounded joins,
  matches the calm grotesque type. Loaded via CDN in the UI kit. This is a
  substitution (no brand icon set was provided) — **flagged for review**.
- **Color:** icons inherit `currentColor`, rendered in `--action` (navy) or
  `--ink-500`. Single-color only; no multi-tone or filled icons.
- **Emoji:** never used.
- **Unicode as icon:** only `→` (deal-cycle arrows) and `·` (value separators)
  are used as structural glyphs.
- **Logo:** the brand currently uses a **standalone logomark** — a stylized
  letter **«М» formed by a handshake** (`assets/logo.svg`), recolored to
  brand navy `--navy-900`. Per the owner's direction the separate «МИРАСА» text
  wordmark is **not shown beside the mark for now** (the mark stands alone in
  the header and footer). The mark was supplied as a **draft (raster)** — treat
  as a placeholder pending a clean vector. `assets/wordmark.svg` keeps a
  text-only lockup on file for contexts that need the typed name.

---

## 5. Index — what's in this folder

| File / folder | Purpose |
|---|---|
| `README.md` | This document — brand context, content & visual foundations, iconography, index. |
| `colors_and_type.css` | All design tokens: color vars, type scale, semantic type classes, spacing, radii, shadows. |
| `SKILL.md` | Agent Skill manifest — makes this system usable as a downloadable Claude skill. |
| `assets/` | Brand assets: `wordmark.svg` (text logo lockup). |
| `preview/` | Design-system cards (colors, type, spacing, components, brand) shown in the Design System tab. |
| `ui_kits/landing/` | The landing-page UI kit: `index.html` (interactive full page) + JSX components. |

### UI kits
- **`ui_kits/landing/`** — the МИРАСА single-page corporate site: sticky header
  with phone CTA, hero, about, services (4 accordion cards), full deal-cycle
  ribbon, industries, principles/values, cooperation formats, contacts.
