# Client Feedback (Ирина) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement items 1, 2, 3, 5, 6(partial) of `CLIENT_FEEDBACK.md` — wider grid + H1 fix, repeating "M" watermark across sections, phone→email/messenger lead-gen pivot with a contact modal, verify the already-fixed card-overflow bug, and add the missing English-i18n gaps needed to support the new copy. **Item 4 (Z-pattern text/image rework) is explicitly OUT of scope** — blocked on Ирина's content-mapping file per `CLIENT_FEEDBACK.md`. **Chinese (zh) translation is explicitly OUT of scope for this plan** — user said hold off.

**Architecture:** Static Vite + React 18 SPA, no router, no test framework (no vitest/jest/playwright configured — this repo's actual QA practice, visible in prior commits, is: `npm run build` + manual/Playwright-MCP visual check across a width sweep). Verification steps in this plan follow that existing practice instead of inventing a unit-test suite that doesn't fit a copy/CSS-heavy landing page.

**Tech Stack:** React 18, Vite 6, lucide-react icons, plain CSS (`colors_and_type.css` tokens + `src/styles/bridge.css` page styles), `src/i18n` context-based i18n (ru/en).

**Spec:** `CLIENT_FEEDBACK.md` (repo root)

## Global Constraints

- No test framework exists — do not add one. Verify via `npm run build` (must stay clean) and a Playwright width sweep (320–1920px, matching the pattern used in commits `8958023`, `f0cb7fd`, `d91c440`).
- Every new/changed user-facing string must be added to **both** `ru` and `en` blocks in `src/i18n/translations.js` with identical key shape. Do not touch `zh` — it doesn't exist yet, out of scope.
- Do not touch `Process.jsx`, `Formats.jsx`, `Expect.jsx`, `Values.jsx` layouts (item 4 — blocked, waiting on Ирина's file). Copy inside them is untouched too.
- Phone number: real one not available. Use placeholder `+375 29 000-00-00` (Belarus format, matches the brand's BY/RU market) — user approved "any fake number" 2026-09-01. Telegram and WhatsApp both use handle `@mirasa` (user-approved, same as existing WeChat placeholder pattern) — user approved 2026-09-01.
- All new decorative elements (`section-watermark`) must be `aria-hidden="true"` and `pointer-events: none` — purely decorative, must never intercept clicks or be read by screen readers.

---

## File Structure

- Modify `colors_and_type.css` — widen `--container` token (1160px → 1440px).
- Modify `src/styles/bridge.css` — hero H1/grid tuning, new reusable `.section-watermark` rules, `.section` gets `position:relative;overflow:hidden` (so every section can host a watermark for free), new contact-row styles (5-row hierarchy incl. plain-text phone row), new modal styles, header cleanup (drop now-unused `.header__phone` value-styling if orphaned).
- Modify `src/components/common.jsx` — add `export function SectionWatermark({ inverted })`.
- Modify `src/components/Hero.jsx` — reposition/shrink the existing watermark (shift left, more subtle), tune H1 grid ratio.
- Create `src/components/ContactModal.jsx` — popup shown on Header CTA click, leads with email.
- Modify `src/components/Header.jsx` — drop the visible email row, CTA opens `ContactModal` instead of anchoring to `#contacts`.
- Modify `src/components/Contacts.jsx` — rebuild row order: Email, WeChat, Telegram, WhatsApp, Phone (plain text, unstyled).
- Modify `src/components/Icon.jsx` — add `MessageCircle` (WhatsApp row icon).
- Modify `src/App.jsx` — add `TELEGRAM`, `WHATSAPP`, `PHONE` constants; pass to `Contacts` and `ContactModal`.
- Modify `src/components/Empathy.jsx`, `Services.jsx`, `Process.jsx`, `Values.jsx`, `GeoIndustries.jsx`, `Formats.jsx`, `Expect.jsx`, `Guide.jsx`, `WhoNotFor.jsx`, `Contacts.jsx`, `Purpose.jsx` — add `<SectionWatermark />` (Purpose gets `inverted`).
- Modify `src/i18n/translations.js` — add `modal` namespace, split `contacts.messengerLabel` into `telegramLabel` + `whatsappLabel`, add `contacts.phoneLabel`, in both `ru` and `en`.
- Modify `README.md` — the "primary conversion goal: phone call" section is now false (item 3 pivot); update the two stale lines so the doc doesn't mislead future readers.

---

## Task 1: Widen the grid, fix the H1 wrap

**Files:**
- Modify: `colors_and_type.css:92`
- Modify: `src/styles/bridge.css:234` (`.hero-a .hero__grid`), `src/styles/bridge.css:223` (`.hero h1` font clamp)

**Interfaces:** none (pure CSS, no JS surface).

- [ ] **Step 1: Widen the container**

`colors_and_type.css:92`, change:
```css
--container: 1160px;
```
to:
```css
--container: 1440px;
```

- [ ] **Step 2: Give the H1 more room and cap its max size so it settles into ≤2 lines**

`src/styles/bridge.css:234`, change:
```css
.hero-a .hero__grid { position: relative; display: grid; grid-template-columns: 1.35fr 1fr; gap: 56px; align-items: stretch; }
```
to:
```css
.hero-a .hero__grid { position: relative; display: grid; grid-template-columns: 1.55fr 1fr; gap: 56px; align-items: stretch; }
```

`src/styles/bridge.css:223`, change:
```css
  font-size: clamp(38px, 5vw, 66px); line-height: 1.04; letter-spacing: -0.025em;
```
to:
```css
  font-size: clamp(38px, 4.4vw, 58px); line-height: 1.08; letter-spacing: -0.025em;
```

- [ ] **Step 3: Build and visually verify**

Run: `npm run build` — expect clean output, no errors.

Then start `npm run dev`, open via Playwright MCP at widths 1280, 1440, 1600, 1920. At each width, snapshot the hero and confirm:
- The H1 ("Мост между вашим производством и рынками Беларуси и Росcии") renders in 2 lines, not 3+.
- No section's content touches the viewport edge or looks starved — 1440px container should read as "content using more of the screen," not "text glued to the edges." If any section (`.section-head`, `.metric` grid, etc.) looks awkwardly stretched at 1920px, that's expected — `.container` centers with margin auto, the extra width just gives more visible page background either side, which is the client's actual ask (max-width 1440, not 100vw).

If the H1 still wraps to 3 lines at 1440px, reduce the clamp max further (try 52px) and re-check — iterate until ≤2 lines holds at 1280px and up (this is the narrowest width the split hero layout is expected to hold at; below ~980px the grid already collapses to 1 column per the existing `@media (max-width: 980px)` rule).

- [ ] **Step 4: Commit**

```bash
git add colors_and_type.css src/styles/bridge.css
git commit -m "Расширен контейнер сайта и заголовок хиро в 2 строки"
```

---

## Task 2: Reusable section watermark + reposition Hero's

**Files:**
- Modify: `src/components/common.jsx`
- Modify: `src/styles/bridge.css` (new `.section-watermark` rules, `.section` gets `position:relative;overflow:hidden`, `.hero__watermark` repositioned)
- Modify: `src/components/Hero.jsx`

**Interfaces:**
- Produces: `SectionWatermark({ inverted?: boolean })` — a decorative `<img>` importable from `./common.jsx`, used by every later task in this plan that adds a watermark to a section.

- [ ] **Step 1: Add the shared component**

In `src/components/common.jsx`, add near the top (after the existing `logo`-less imports — this file currently has no `logo` import, add one):

```jsx
import logo from '../../assets/logo.svg';
```

And add the component (anywhere after the imports, e.g. right before `Bridge`):

```jsx
// Recurring "M" background mark used on every content section per brand
// guidance — subtle on light sections, inverted to white on dark ones
// (.purpose, .ctaband). Purely decorative.
export function SectionWatermark({ inverted }) {
  return (
    <img
      className={'section-watermark' + (inverted ? ' section-watermark--inverted' : '')}
      src={logo}
      alt=""
      aria-hidden="true"
    />
  );
}
```

- [ ] **Step 2: CSS for the shared mark, and make every `.section` a valid host**

In `src/styles/bridge.css`, find:
```css
.section { padding: var(--sec-pad) 0; }
```
replace with:
```css
.section { padding: var(--sec-pad) 0; position: relative; overflow: hidden; }
```

Then add, right after the `.hero__watermark` rule (`src/styles/bridge.css:219`):
```css
.section-watermark {
  position: absolute; top: 50%; right: -70px; transform: translateY(-50%);
  height: 300px; width: auto; opacity: 0.05;
  pointer-events: none; user-select: none;
}
.section-watermark--inverted { filter: brightness(0) invert(1); opacity: 0.07; }
@media (max-width: 900px) { .section-watermark { display: none; } }
```

(The `@media (max-width:900px)` hide keeps small screens uncluttered — same width `Header.jsx`'s burger menu already treats as "narrow".)

- [ ] **Step 3: Make Hero's own watermark less dominant and shift it left**

`src/styles/bridge.css:219`, change:
```css
.hero__watermark { position: absolute; top: -70px; right: -80px; height: 540px; width: auto; opacity: 0.045; pointer-events: none; user-select: none; }
```
to:
```css
.hero__watermark { position: absolute; top: -40px; left: -60px; right: auto; height: 420px; width: auto; opacity: 0.05; pointer-events: none; user-select: none; }
```

(Moves it off the right edge — where it currently competes with the hero photo and the eye's natural left-to-right reading path — to a quiet spot behind the headline's own left margin, smaller and just as subtle.)

- [ ] **Step 4: Build and visually verify**

Run: `npm run build` — expect clean output.

Open via Playwright MCP at 1440px: confirm the hero's "M" now sits faint, upper-left, not fighting the headline or photo for attention. No other section shows a watermark yet (added task-by-task below) — that's expected at this point.

- [ ] **Step 5: Commit**

```bash
git add src/components/common.jsx src/components/Hero.jsx src/styles/bridge.css
git commit -m "Убрана массивная буква М из центра хиро, добавлен переиспользуемый водяной знак секций"
```

---

## Task 3: Apply the watermark to every remaining content section

**Files:**
- Modify: `src/components/Empathy.jsx`, `src/components/Services.jsx`, `src/components/Process.jsx`, `src/components/Guide.jsx`, `src/components/Formats.jsx`, `src/components/Expect.jsx`, `src/components/Values.jsx`, `src/components/WhoNotFor.jsx`, `src/components/GeoIndustries.jsx`, `src/components/Purpose.jsx`

**Interfaces:**
- Consumes: `SectionWatermark` from `./common.jsx` (Task 2).

- [ ] **Step 1: Light-background sections — import + render `<SectionWatermark />` as the first child of the `<section>`**

Applies identically to `Empathy.jsx`, `Services.jsx`, `Process.jsx`, `Guide.jsx`, `Formats.jsx`, `Expect.jsx`, `Values.jsx`, `WhoNotFor.jsx`, `GeoIndustries.jsx` (all render on white or `--surface-1` tint — same subtle style works for both, they're too close in value to need different opacity).

For each file:
1. Add the import: `import { SectionWatermark } from './common.jsx';` (or add `SectionWatermark` to the existing `common.jsx` import line if one already exists, e.g. `Services.jsx` and `Process.jsx`'s `Bridge`/`Ph` imports don't apply here since they import from `common.jsx` already only in `Services.jsx`/`Hero.jsx` — check each file's current imports before adding a duplicate).
2. Render `<SectionWatermark />` as the very first element inside `<section ...>`, before the `<div className="container ...">`.

Example (`src/components/Empathy.jsx`), change:
```jsx
import React from 'react';
import Icon from './Icon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Empathy() {
  const { t } = useLanguage();
  const e = t.empathy;
  return (
    <section className="section" id="problem">
      <div className="container empathy__grid">
```
to:
```jsx
import React from 'react';
import Icon from './Icon.jsx';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Empathy() {
  const { t } = useLanguage();
  const e = t.empathy;
  return (
    <section className="section" id="problem">
      <SectionWatermark />
      <div className="container empathy__grid">
```

Apply the same shape of change (import + `<SectionWatermark />` as first child of `<section>`) to:
- `Services.jsx` — `<section className="section" id="services">`
- `Process.jsx` — `<section className="section" id="process">`
- `Guide.jsx` — `<section className="section section--tint" id="about">`
- `Formats.jsx` — `<section className="section section--tint" id="formats">`
- `Expect.jsx` — `<section className="section section--tint" id="expect">`
- `Values.jsx` — `<section className="section" id="values">`
- `WhoNotFor.jsx` — `<section className="section section--tint" id="who-not-for">`
- `GeoIndustries.jsx` — `<section className="section section--compact" id="geo-industries">`

- [ ] **Step 2: Dark-background section — `Purpose.jsx` gets the inverted variant**

`src/components/Purpose.jsx`, change:
```jsx
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Purpose() {
  const { t } = useLanguage();
  const p = t.purpose;
  return (
    <section className="section purpose center">
      <div className="container">
```
to:
```jsx
import React from 'react';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Purpose() {
  const { t } = useLanguage();
  const p = t.purpose;
  return (
    <section className="section purpose center">
      <SectionWatermark inverted />
      <div className="container">
```

(`CtaBand.jsx` and `Contacts.jsx` are handled separately — `CtaBand.jsx` already has its own equivalent watermark, leave it as-is; `Contacts.jsx` gets its watermark in Task 5 alongside its layout rebuild, to avoid touching it twice.)

- [ ] **Step 3: Build and visually verify**

Run: `npm run build` — expect clean output, no unused-import warnings.

Open via Playwright MCP, scroll the full page at 1440px and at 375px (mobile). Confirm:
- Desktop: every section (Empathy through GeoIndustries, Purpose) shows a faint "M" on the right edge, alternating imperceptibly in tone between white and tint sections, clearly visible (white) against Purpose's navy background.
- Mobile (≤900px): no watermark visible anywhere (hidden by the media query) and no horizontal scrollbar introduced by any section (the `overflow:hidden` added to `.section` in Task 2 should prevent this, but confirm — a watermark bleeding past the section edge would be clipped, not cause overflow).

- [ ] **Step 4: Commit**

```bash
git add src/components/Empathy.jsx src/components/Services.jsx src/components/Process.jsx \
        src/components/Guide.jsx src/components/Formats.jsx src/components/Expect.jsx \
        src/components/Values.jsx src/components/WhoNotFor.jsx src/components/GeoIndustries.jsx \
        src/components/Purpose.jsx
git commit -m "Буква М добавлена водяным знаком на все смысловые блоки"
```

---

## Task 4: Header — drop the email line, wire CTA to a contact modal

**Files:**
- Create: `src/components/ContactModal.jsx`
- Modify: `src/components/Header.jsx`
- Modify: `src/styles/bridge.css` (modal styles, drop now-orphaned `.header__phone` value styling if any becomes unused)
- Modify: `src/i18n/translations.js` (new `modal` namespace, ru + en)
- Modify: `src/App.jsx` (render `<ContactModal>` state is owned by `Header.jsx` itself — no App.jsx change needed here, confirmed by Step design below)

**Interfaces:**
- Produces: `ContactModal({ open: boolean, onClose: () => void, email: string })` default export from `src/components/ContactModal.jsx`.
- Consumes: `Icon` from `./Icon.jsx` (`'x'` already registered), `useLanguage` from `../i18n/LanguageContext.jsx`.

- [ ] **Step 1: Add the `modal` translation namespace**

In `src/i18n/translations.js`, inside the `ru` object, right after the `header: {...}` block (after line 19's closing `},`), add:
```js
  modal: {
    heading: 'Свяжитесь с нами',
    sub: 'Самый быстрый способ — email. Отвечаем в течение рабочего дня.',
    emailCta: 'Написать на email',
    altLink: 'Другие способы связи',
    close: 'Закрыть',
  },
```

In the `en` object, in the same position (after `header: {...}`), add:
```js
  modal: {
    heading: 'Get in touch',
    sub: 'Email is the fastest way to reach us. We reply within one business day.',
    emailCta: 'Email us',
    altLink: 'Other ways to reach us',
    close: 'Close',
  },
```

- [ ] **Step 2: Build the modal component**

Create `src/components/ContactModal.jsx`:
```jsx
import React from 'react';
import Icon from './Icon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ContactModal({ open, onClose, email }) {
  const { t } = useLanguage();
  const m = t.modal;

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-heading"
        onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" aria-label={m.close} onClick={onClose}>
          <Icon name="x" />
        </button>
        <h3 id="contact-modal-heading">{m.heading}</h3>
        <p className="modal__sub">{m.sub}</p>
        <a className="btn btn-primary btn-lg modal__email" href={'mailto:' + email}>
          <Icon name="mail" />{m.emailCta}
        </a>
        <a className="modal__alt" href="#contacts" onClick={onClose}>{m.altLink}</a>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Wire it into `Header.jsx` — drop the email row, CTA opens the modal**

`src/components/Header.jsx`, change the imports:
```jsx
import React from 'react';
import Icon from './Icon.jsx';
import logo from '../../assets/logo.svg';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { LANGUAGES } from '../i18n/translations.js';
```
to:
```jsx
import React from 'react';
import Icon from './Icon.jsx';
import logo from '../../assets/logo.svg';
import ContactModal from './ContactModal.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { LANGUAGES } from '../i18n/translations.js';
```

Add modal-open state next to the existing `menuOpen` state:
```jsx
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
```

Remove the email row and rewire both CTA buttons (desktop header CTA and the one inside the mobile nav panel, if present — check the file for how many `header.consultation` buttons exist; wire all of them to open the modal instead of anchoring). Change:
```jsx
          <a className="header__phone" href={'mailto:' + email}>
            <div className="k">{t.header.emailLabel}</div>
            <div className="v">{email}</div>
          </a>
          <LangSwitch className="header__lang" />
          <a className="btn btn-primary" href="#contacts">
            <Icon name="arrow-right" />
            <span className="btn__label">{t.header.consultation}</span>
            <span className="btn__label--short">{t.header.consultationShort}</span>
          </a>
```
to:
```jsx
          <LangSwitch className="header__lang" />
          <button type="button" className="btn btn-primary" onClick={() => setModalOpen(true)}>
            <Icon name="arrow-right" />
            <span className="btn__label">{t.header.consultation}</span>
            <span className="btn__label--short">{t.header.consultationShort}</span>
          </button>
```

(`<a href="#contacts">` becomes a `<button onClick>` — same visual `btn btn-primary` class, no anchor navigation. Verified: this is the site's only CTA button — the mobile nav panel (`.mobnav`) has no CTA of its own, only nav links and the language switcher — so no second swap is needed.)

Render the modal once, right before the closing `</>` fragment at the end of the component's returned JSX:
```jsx
    <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} email={email} />
    </>
```

`email` is already a prop `Header` receives from `App.jsx` (`<Header email={EMAIL} />`) — no `App.jsx` change needed.

- [ ] **Step 4: Modal CSS**

Add to `src/styles/bridge.css` (near the end, after the `.footer` rules):
```css
/* ---------- Contact modal ---------- */
.modal-scrim {
  position: fixed; inset: 0; z-index: 60;
  background: rgba(16, 22, 45, 0.5);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.modal {
  position: relative; background: #fff; border-radius: var(--radius-lg);
  max-width: 440px; width: 100%; padding: 40px 32px;
  box-shadow: var(--shadow-lg);
}
.modal__close {
  position: absolute; top: 16px; right: 16px;
  width: 36px; height: 36px; border-radius: 50%; border: 0;
  background: var(--surface-1); color: var(--fg2);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
}
.modal h3 { margin: 0 0 10px; font-size: 22px; font-weight: 800; color: var(--fg1); }
.modal__sub { margin: 0 0 24px; font-size: 15px; line-height: 1.5; color: var(--fg2); }
.modal__email { width: 100%; justify-content: center; }
.modal__alt {
  display: block; text-align: center; margin-top: 18px;
  font-size: 14px; font-weight: 600; color: var(--action);
}
```

- [ ] **Step 5: Build and visually verify**

Run: `npm run build` — expect clean output.

Via Playwright MCP: click the header's "Запросить консультацию" button — confirm the modal opens, shows the email prominently, Escape closes it, clicking the scrim closes it, clicking "Другие способы связи" scrolls to `#contacts` and closes the modal. Repeat at a mobile width (≤980px) via the burger menu's CTA if one exists there.

- [ ] **Step 6: Commit**

```bash
git add src/components/ContactModal.jsx src/components/Header.jsx src/styles/bridge.css src/i18n/translations.js
git commit -m "Хедер: убран email из шапки, CTA открывает модалку со связью по email"
```

---

## Task 5: Contacts section — 5-row hierarchy (Email, WeChat, Telegram, WhatsApp, Phone)

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Contacts.jsx`
- Modify: `src/components/Icon.jsx`
- Modify: `src/styles/bridge.css` (plain-text phone row style)
- Modify: `src/i18n/translations.js` (`contacts.telegramLabel`, `contacts.whatsappLabel`, `contacts.phoneLabel`, drop `contacts.messengerLabel`)

**Interfaces:**
- Consumes: `SectionWatermark` from `./common.jsx` (Task 2).

- [ ] **Step 1: Add the WhatsApp icon**

`src/components/Icon.jsx`, add `MessageCircle` to the lucide-react import:
```jsx
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Eye,
  Gavel,
  Languages,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  PhoneCall,
  Route,
  Send,
  ShieldCheck,
  Wallet,
  X,
} from 'lucide-react';
```
and register it in the map:
```js
  mail: Mail,
  menu: Menu,
  'message-circle': MessageCircle,
  'message-square': MessageSquare,
```

- [ ] **Step 2: Update translations — split messenger into telegram/whatsapp, add phone label**

`src/i18n/translations.js`, in the `ru.contacts` block, change:
```js
  contacts: {
    eyebrow: 'Контакты',
    lead: 'Свяжитесь удобным для вас способом — ответим в течение рабочего дня.',
    emailLabel: 'Email',
    messengerLabel: 'Telegram / WhatsApp',
    wechatLabel: 'WeChat',
  },
```
to:
```js
  contacts: {
    eyebrow: 'Контакты',
    lead: 'Свяжитесь удобным для вас способом — ответим в течение рабочего дня.',
    emailLabel: 'Email',
    wechatLabel: 'WeChat',
    telegramLabel: 'Telegram',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Телефон',
  },
```

`src/i18n/translations.js`, in the `en.contacts` block, change:
```js
  contacts: {
    eyebrow: 'Contacts',
    lead: 'Reach out however’s convenient — we reply within one business day.',
    emailLabel: 'Email',
    messengerLabel: 'Telegram / WhatsApp',
    wechatLabel: 'WeChat',
  },
```
to:
```js
  contacts: {
    eyebrow: 'Contacts',
    lead: 'Reach out however’s convenient — we reply within one business day.',
    emailLabel: 'Email',
    wechatLabel: 'WeChat',
    telegramLabel: 'Telegram',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Phone',
  },
```

- [ ] **Step 3: Add real constants in `App.jsx`**

`src/App.jsx`, change:
```jsx
const EMAIL = 'mirasametby@gmail.com';
const MESSENGER = '@mirasa';
const WECHAT = '@mirasa';
```
to:
```jsx
const EMAIL = 'mirasametby@gmail.com';
const WECHAT = '@mirasa';
const TELEGRAM = '@mirasa';
const WHATSAPP = '@mirasa';
const PHONE = '+375 29 000-00-00';
```

and change:
```jsx
        <Contacts email={EMAIL} messenger={MESSENGER} wechat={WECHAT} />
```
to:
```jsx
        <Contacts email={EMAIL} wechat={WECHAT} telegram={TELEGRAM} whatsapp={WHATSAPP} phone={PHONE} />
```

- [ ] **Step 4: Rebuild `Contacts.jsx` in the required order**

Replace `src/components/Contacts.jsx` entirely with:
```jsx
import React from 'react';
import Icon from './Icon.jsx';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { tel } from './common.jsx';

export default function Contacts({ email, wechat, telegram, whatsapp, phone }) {
  const { t } = useLanguage();
  const c = t.contacts;
  return (
    <section className="section contacts" id="contacts">
      <SectionWatermark />
      <div className="container contacts__inner">
        <div>
          <div className="eyebrow-row"><span className="eyebrow">{c.eyebrow}</span></div>
          <p className="contacts__lead">{c.lead}</p>
        </div>
        <div className="contacts__rows">
          <a className="crow crow--lead" href={'mailto:' + email}>
            <span className="crow__ic"><Icon name="mail" /></span>
            <span><span className="k">{c.emailLabel}</span><span className="v">{email}</span></span>
          </a>
          <div className="crow">
            <span className="crow__ic"><Icon name="message-square" /></span>
            <span><span className="k">{c.wechatLabel}</span><span className="v">{wechat}</span></span>
          </div>
          <div className="crow">
            <span className="crow__ic"><Icon name="send" /></span>
            <span><span className="k">{c.telegramLabel}</span><span className="v">{telegram}</span></span>
          </div>
          <div className="crow">
            <span className="crow__ic"><Icon name="message-circle" /></span>
            <span><span className="k">{c.whatsappLabel}</span><span className="v">{whatsapp}</span></span>
          </div>
          <a className="contacts__phone-plain" href={tel(phone)}>
            <span className="k">{c.phoneLabel}</span>
            <span className="v">{phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
```

(`tel()` already exists as an exported helper at the top of `common.jsx` — `export const tel = (p) => 'tel:' + p.replace(/[^\d+]/g, '');` — reused here rather than duplicated.)

- [ ] **Step 5: Style the hierarchy — email biggest, phone unstyled**

`src/styles/bridge.css`, right after the existing `.crow__ic svg { ... }` rule (end of the current contacts block), add:
```css
.crow--lead { border-color: var(--navy-800); }
.crow--lead .crow__ic { background: var(--navy-800); color: #fff; }
.crow--lead .v { font-size: 19px; font-weight: 800; }
.contacts__phone-plain {
  display: flex; align-items: baseline; gap: 8px; padding: 4px 20px;
  color: var(--fg2); text-decoration: none; font-size: 14px;
}
.contacts__phone-plain .k { font-weight: 500; }
.contacts__phone-plain .v { font-weight: 500; }
```

(`.crow .v` and `.crow .k` already have base styles from the existing `.crow` rules earlier in the file — confirm those still apply by inspecting `src/styles/bridge.css` around the current `.crow` block before adding; if `.crow .v`/`.crow .k` aren't already defined there, add them too matching the pattern used by `.header__phone .k`/`.v`.)

- [ ] **Step 6: Build and visually verify**

Run: `npm run build` — expect clean output.

Via Playwright MCP at 1440px and 375px: confirm the Contacts section shows, top to bottom: Email (visually the biggest/most prominent row), WeChat, Telegram, WhatsApp, then Phone as a plain unstyled text line with no card/icon/border. Confirm the section's watermark (added in this task) renders like the others from Task 3.

- [ ] **Step 7: Commit**

```bash
git add src/App.jsx src/components/Contacts.jsx src/components/Icon.jsx src/styles/bridge.css src/i18n/translations.js
git commit -m "Contacts: новая иерархия Email/WeChat/Telegram/WhatsApp/Телефон"
```

---

## Task 6: Verify item 5 (card overflow) is actually fixed, and item 1's grid didn't regress it

**Files:** none expected to change — verification-only task. If a regression is found, fix inline in the relevant file and note it.

- [ ] **Step 1: Confirm the historical fix**

`git show c762e01 --stat` already shows this exact bug ("слово вылезало за карточку" — a word overflowed its card) was fixed for the bridge/metric cards (`.metric` in `src/styles/bridge.css:295-300`, uses `overflow-wrap: break-word` and a fluid `clamp()` font, no fixed `height`). This matches item 5's description almost exactly (the client called it "фиолетовые карточки" — the metric cards aren't purple, but the overflow symptom and fix are identical; no other card in the codebase currently has a fixed `height` — confirmed by grepping `src/styles/bridge.css` for `height:` and finding only `min-height` / component-specific fixed heights unrelated to text cards).

- [ ] **Step 2: Re-verify live, at the new 1440px container width from Task 1**

Via Playwright MCP, open the built site at widths 320, 375, 768, 1024, 1280, 1440, 1600, 1920. Scroll to the `Guide` section's metrics grid (id `about`, contains the `num: 'До результата'` card) and to the `Bridge` component instances (Hero strip, `common.jsx`'s `Bridge`). At every width, confirm no text clips or overflows its card border.

- [ ] **Step 3: If (and only if) a regression is found**

Fix inline (most likely a `min-height` or `overflow-wrap: break-word` addition to the specific offending selector — follow the exact pattern already used in `.metric .num`), then re-run Step 2 at all widths, then commit:
```bash
git add src/styles/bridge.css
git commit -m "Фикс переполнения карточки после расширения контейнера"
```
If no regression is found, skip the commit — nothing changed.

---

## Task 7: Update the stale README

**Files:**
- Modify: `README.md:30`, `README.md:71`

**Interfaces:** none — documentation only.

- [ ] **Step 1: Fix the conversion-goal line**

`README.md:30`, change:
```
- **Primary conversion goal:** a **phone call**. The phone number is sticky in
```
to:
```
- **Primary conversion goal:** an **email**. The phone call model was dropped per client direction — see `CLIENT_FEEDBACK.md` item 3. The CTA opens a contact modal that leads with email.
```

(Read the full surrounding paragraph first — `README.md:30` is a fragment of a longer sentence/bullet; adjust the rest of that bullet's wording to stay grammatically consistent instead of leaving a dangling clause.)

- [ ] **Step 2: Fix the CTA description line**

`README.md:71`, change:
```
- CTA: *«Позвонить»* (always paired with the visible phone number).
```
to:
```
- CTA: *«Запросить консультацию»* (opens a contact modal leading with email — see `CLIENT_FEEDBACK.md` item 3).
```

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "README: убрано устаревшее описание phone-first CTA"
```

---

## Self-Review Notes (completed during planning, not a task to execute)

- **Item 4 coverage:** intentionally no task — blocked per `CLIENT_FEEDBACK.md`, confirmed with the user this stays out of scope.
- **Item 6 (i18n) coverage:** intentionally partial — `zh` is explicitly deferred per user instruction 2026-09-01. The `LANGUAGES` array and language switcher already exist (shipped ahead of this plan) with `ru`/`en`; no task changes that. New copy added by this plan (Task 4's `modal` namespace, Task 5's contact labels) is added to both existing languages so nothing breaks for current visitors — when `zh` is picked up later, those two namespaces need the same treatment as everything else.
- **Type/shape consistency check:** `Contacts` component's prop shape changes from `{email, messenger, wechat}` to `{email, wechat, telegram, whatsapp, phone}` — Task 5 Steps 3–4 change both the caller (`App.jsx`) and the component in the same task, so there's no intermediate broken state to land mid-plan.
- **No placeholder scan:** every step above contains real, pasteable code — the only intentional placeholder-looking value is the phone number, which is explicitly a user-approved placeholder, not a plan gap.
