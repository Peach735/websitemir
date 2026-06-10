# UI Kit — МИРАСА Landing

Hi-fidelity recreation of the МИРАСА single-page corporate site (Russian, B2B
industrial consulting). This is the canonical landing layout for the brand.

## Run
Open `index.html`. React 18 + Babel (in-browser) compose the page from the JSX
components below. Tokens come from `../../colors_and_type.css`; component styles
from `landing.css`. Icons via Lucide (CDN).

## Components
| File | Role |
|---|---|
| `Header.jsx` | Sticky header — wordmark + phone + «Позвонить» CTA, blur/shadow on scroll. |
| `Hero.jsx` | Slogan, one-sentence UTP, primary CTA + visible phone. |
| `About.jsx` | Founder story (18+ yrs, MAZ procurement) + stat panel. |
| `Services.jsx` | Four accordion service cards (one open at a time). |
| `DealCycle.jsx` | Horizontal scrolling ribbon of the 11 deal-cycle steps. |
| `Industries.jsx` | Industry tag row. |
| `Principles.jsx` | Dark navy values block — confidentiality emphasized. |
| `Formats.jsx` | Three cooperation-format cards. |
| `Contacts.jsx` | Phone-first contact block + email / messenger rows. |
| `Footer.jsx` | Wordmark, phone, copyright. |
| `app.jsx` | Composes all sections; re-runs `lucide.createIcons()` each render. |

## Placeholders
Phone `[ТЕЛЕФОН]`, email `[EMAIL]`, messenger `[TELEGRAM/WHATSAPP]` are defined
as constants at the top of `app.jsx` — replace there to populate the whole page.

## Conventions
- Single navy accent, white + grey-blue surfaces, flat backgrounds (no gradients/imagery).
- Cards rest on hairline borders; navy-tinted shadow appears on hover only.
- Quiet 150–220ms ease transitions; accordion uses `grid-template-rows` 0fr→1fr.
- Fully responsive (grids collapse at 860px / 540px).
