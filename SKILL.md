---
name: mirasa-design
description: Use this skill to generate well-branded interfaces and assets for МИРАСА (MIRASA), a B2B industrial-consulting brand, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content & visual foundations, iconography, index.
- `colors_and_type.css` — all design tokens (color, type scale, semantic classes, spacing, radii, shadows).
- `assets/wordmark.svg` — «МИРАСА» text logo lockup.
- `preview/` — design-system reference cards.
- `ui_kits/landing/` — the canonical landing page (React/JSX + `landing.css`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, copy assets and read the rules here to become an expert in
designing with this brand.

Brand essentials: single deep-navy accent (#1A237E / #1E3A8A) on white and
light grey-blue surfaces; Manrope grotesque; flat backgrounds (no gradients,
no stock imagery); minimal radii (4–10px); delicate navy-tinted shadows;
hairline borders; quiet motion; no emoji. Tone: businesslike, confident,
no filler; Russian language; speaks as «мы». Primary CTA is always a phone
call — «Позвонить».

If the user invokes this skill without other guidance, ask them what they want
to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.
