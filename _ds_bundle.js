/* @ds-bundle: {"format":3,"namespace":"DesignSystem_78559a","components":[],"sourceHashes":{"ui_kits/landing-bridge/app-print.jsx":"9f1d2d58ad6d","ui_kits/landing-bridge/app.jsx":"3ee87f35bed0","ui_kits/landing-bridge/parts-bottom.jsx":"561c01f1a256","ui_kits/landing-bridge/parts-mid.jsx":"49d5eaf1d1bd","ui_kits/landing-bridge/parts-top.jsx":"01d2088f68a7","ui_kits/landing-bridge/tweaks-panel.jsx":"6591467622ed","ui_kits/landing/About.jsx":"854c0d184419","ui_kits/landing/Contacts.jsx":"38ee954ffcf6","ui_kits/landing/CtaBand.jsx":"f978bb30a755","ui_kits/landing/DealCycle.jsx":"a5ec8705d9fe","ui_kits/landing/Footer.jsx":"77bd5af6f457","ui_kits/landing/Formats.jsx":"9c1053f630c5","ui_kits/landing/Header.jsx":"c25631faaa8c","ui_kits/landing/Hero.jsx":"43fa99677906","ui_kits/landing/Industries.jsx":"6aa94166cfeb","ui_kits/landing/Principles.jsx":"f184c14c7032","ui_kits/landing/Services.jsx":"6a21aa76771a","ui_kits/landing/app.jsx":"30cba9587e69"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_78559a = window.DesignSystem_78559a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/landing-bridge/app-print.jsx
try { (() => {
// app-print.jsx — static print build (no Tweaks, fixed settings) for PDF export
const PHONE = '+375 (29) 123-45-67';
const EMAIL = 'info@mirasa.by';
const MESSENGER = '@mirasa';
function PrintApp() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    phone: PHONE
  }), /*#__PURE__*/React.createElement("div", {
    className: "page",
    "data-density": "comfortable",
    "data-images": "on",
    "data-bridge": "on"
  }, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    phone: PHONE,
    variant: "A"
  }), /*#__PURE__*/React.createElement(Empathy, null), /*#__PURE__*/React.createElement(Guide, {
    phone: PHONE
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(CtaBand, {
    phone: PHONE,
    title: "\u041E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u044B\u0445\u043E\u0434 \u0432\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0438 \u0420\u043E\u0441\u0441\u0438\u0438",
    text: "\u041E\u0434\u0438\u043D \u0437\u0432\u043E\u043D\u043E\u043A \u2014 \u043E\u0446\u0435\u043D\u0438\u043C \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B \u0438 \u0440\u0438\u0441\u043A\u0438. \u0411\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432."
  }), /*#__PURE__*/React.createElement(Purpose, null), /*#__PURE__*/React.createElement(Expect, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Formats, null), /*#__PURE__*/React.createElement(Values, null), /*#__PURE__*/React.createElement(Contacts, {
    phone: PHONE,
    email: EMAIL,
    messenger: MESSENGER
  })), /*#__PURE__*/React.createElement(Footer, {
    phone: PHONE
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(PrintApp, null));

// Auto-print once React has mounted and fonts are ready.
(function autoPrint() {
  const ready = () => document.querySelector('#root .page');
  const go = () => {
    const fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    fonts.then(() => setTimeout(() => window.print(), 600));
  };
  const wait = () => ready() ? go() : setTimeout(wait, 100);
  wait();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-bridge/app-print.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-bridge/app.jsx
try { (() => {
// app.jsx — composes the МИРАСА "Мост на рынок" landing + Tweaks

const PHONE = '+375 (29) 123-45-67';
const EMAIL = 'info@mirasa.by';
const MESSENGER = '@mirasa';
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "Сплит",
  "density": "Просторно",
  "images": true,
  "bridge": true
} /*EDITMODE-END*/;
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Re-render Lucide icons after every paint (covers tweak-driven re-renders).
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const variant = t.hero === 'По центру' ? 'B' : 'A';
  const density = t.density === 'Компактно' ? 'compact' : 'comfortable';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    phone: PHONE
  }), /*#__PURE__*/React.createElement("div", {
    className: "page",
    "data-density": density,
    "data-images": t.images ? 'on' : 'off',
    "data-bridge": t.bridge ? 'on' : 'off'
  }, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    phone: PHONE,
    variant: variant
  }), /*#__PURE__*/React.createElement(Empathy, null), /*#__PURE__*/React.createElement(Guide, {
    phone: PHONE
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(CtaBand, {
    phone: PHONE,
    title: "\u041E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u044B\u0445\u043E\u0434 \u0432\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0438 \u0420\u043E\u0441\u0441\u0438\u0438",
    text: "\u041E\u0434\u0438\u043D \u0437\u0432\u043E\u043D\u043E\u043A \u2014 \u043E\u0446\u0435\u043D\u0438\u043C \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B \u0438 \u0440\u0438\u0441\u043A\u0438. \u0411\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432."
  }), /*#__PURE__*/React.createElement(Purpose, null), /*#__PURE__*/React.createElement(Expect, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Formats, null), /*#__PURE__*/React.createElement(Values, null), /*#__PURE__*/React.createElement(Contacts, {
    phone: PHONE,
    email: EMAIL,
    messenger: MESSENGER
  })), /*#__PURE__*/React.createElement(Footer, {
    phone: PHONE
  })), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u0433\u0435\u0440\u043E\u044F",
    value: t.hero,
    options: ['Сплит', 'По центру'],
    onChange: v => setTweak('hero', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u0412\u0451\u0440\u0441\u0442\u043A\u0430"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "\u041F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C",
    value: t.density,
    options: ['Просторно', 'Компактно'],
    onChange: v => setTweak('density', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
    value: t.images,
    onChange: v => setTweak('images', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\u0421\u0445\u0435\u043C\u0430 \xAB\u043C\u043E\u0441\u0442\xBB",
    value: t.bridge,
    onChange: v => setTweak('bridge', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-bridge/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-bridge/parts-bottom.jsx
try { (() => {
// parts-bottom.jsx — CtaBand + Process + Formats + Values + Contacts + Footer

// ---- CTA refrain band (repeated) ----
function CtaBand({
  phone,
  title,
  text
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "ctaband"
  }, /*#__PURE__*/React.createElement("img", {
    className: "ctaband__watermark",
    src: window.__resources.logomark,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container ctaband__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, title), text && /*#__PURE__*/React.createElement("p", null, text)), /*#__PURE__*/React.createElement("div", {
    className: "ctaband__actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: tel(phone)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("a", {
    className: "ctaband__phone",
    href: tel(phone)
  }, phone))));
}

// ---- Process (4 steps) + full deal-cycle ribbon ----
const STEPS = [{
  n: 'Шаг 1',
  t: 'Звонок-знакомство',
  d: 'Вы звоните — мы разбираем продукт, рынок и задачу. Без обязательств.'
}, {
  n: 'Шаг 2',
  t: 'Оценка и план',
  d: 'Анализируем перспективы, риски и требования заказчика, предлагаем маршрут.'
}, {
  n: 'Шаг 3',
  t: 'Представительство и сделка',
  d: 'Ведём тендеры, биржу, испытания, приёмку — от вашего имени на месте.'
}, {
  n: 'Шаг 4',
  t: 'Контроль до оплаты',
  d: 'Контролируем платежи и закрываем сделку по факту оплаты.'
}];
const CYCLE = ['Анализ рынка', 'Поиск клиента', 'Переговоры', 'Коммерческое предложение', 'Тендеры / биржа', 'Испытания', 'Контракт', 'Поставка', 'Приёмка', 'Претензии', 'Контроль оплаты'];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u041A\u0430\u043A \u043C\u044B \u0441\u0442\u0440\u043E\u0438\u043C \u043C\u043E\u0441\u0442")), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u0427\u0435\u0442\u044B\u0440\u0435 \u0448\u0430\u0433\u0430 \u2014 \u043E\u0442 \u0437\u0432\u043E\u043D\u043A\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u044B"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "\u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435, \u043D\u0430 \u043A\u0430\u043A\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0432\u0430\u0448\u0430 \u0441\u0434\u0435\u043B\u043A\u0430.")), /*#__PURE__*/React.createElement("div", {
    className: "proc__grid"
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "proc",
    key: s.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "proc__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "proc__bar"
  }), /*#__PURE__*/React.createElement("h4", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d))))));
}

// ---- Formats ----
const FORMATS = [{
  icon: 'message-square',
  title: 'Разовая консультация',
  text: 'Точечная экспертиза по конкретному вопросу: рынок, тендер, документация или сделка.'
}, {
  icon: 'route',
  title: 'Проектное сопровождение',
  text: 'Ведение отдельной сделки или проекта — от анализа рынка до контроля оплаты.'
}, {
  icon: 'shield-check',
  title: 'Эксклюзивное представительство',
  text: 'Постоянное локальное представительство производителя на рынках Беларуси и России.'
}];
function Formats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tint",
    id: "formats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u0424\u043E\u0440\u043C\u0430\u0442\u044B \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430")), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043B\u0443\u0431\u0438\u043D\u0443 \u0443\u0447\u0430\u0441\u0442\u0438\u044F")), /*#__PURE__*/React.createElement("div", {
    className: "fmt-grid"
  }, FORMATS.map(f => /*#__PURE__*/React.createElement("div", {
    className: "fmt",
    key: f.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "fmt__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": f.icon
  })), /*#__PURE__*/React.createElement("h3", null, f.title), /*#__PURE__*/React.createElement("p", null, f.text))))));
}

// ---- Values ----
const VALUES = [{
  n: '01',
  t: 'Конфиденциальность',
  d: 'Информация о поставщиках, заказчиках, ценах и условиях не передаётся третьим лицам.'
}, {
  n: '02',
  t: 'Профессионализм',
  d: 'Глубокое знание закупок, тендеров и контроля качества с позиции заказчика.'
}, {
  n: '03',
  t: 'Независимость',
  d: 'Действуем в интересах производителя — без скрытых аффилиаций и конфликта интересов.'
}, {
  n: '04',
  t: 'Ответственность за результат',
  d: 'Доводим сделку до конца — до поставки, приёмки и полной оплаты.'
}, {
  n: '05',
  t: 'Прозрачность',
  d: 'Вы видите каждый этап сделки и понимаете, что и зачем происходит.'
}, {
  n: '06',
  t: 'Долгосрочные отношения',
  d: 'Работаем как постоянный представитель, а не разовый посредник.'
}];
function Values() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "values"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u041F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u0440\u0430\u0431\u043E\u0442\u044B")), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u041D\u0430 \u0447\u0451\u043C \u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0434\u043E\u0432\u0435\u0440\u0438\u0435")), /*#__PURE__*/React.createElement("div", {
    className: "values__grid"
  }, VALUES.map(v => /*#__PURE__*/React.createElement("div", {
    className: "value",
    key: v.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, v.n), /*#__PURE__*/React.createElement("h3", null, v.t), /*#__PURE__*/React.createElement("p", null, v.d))))));
}

// ---- Contacts ----
function Contacts({
  phone,
  email,
  messenger
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section contacts",
    id: "contacts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contacts__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
    className: "contacts__phone"
  }, phone), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: tel(phone)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "contacts__rows"
  }, /*#__PURE__*/React.createElement("a", {
    className: "crow",
    href: tel(phone)
  }, /*#__PURE__*/React.createElement("span", {
    className: "crow__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, phone))), /*#__PURE__*/React.createElement("a", {
    className: "crow",
    href: 'mailto:' + email
  }, /*#__PURE__*/React.createElement("span", {
    className: "crow__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Email"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, email))), /*#__PURE__*/React.createElement("div", {
    className: "crow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "crow__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "send"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Telegram / WhatsApp"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, messenger))))));
}

// ---- Footer ----
function Footer({
  phone
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "brand-mark brand-mark--light",
    src: window.__resources.logomark,
    alt: "\u041C\u0418\u0420\u0410\u0421\u0410"
  }), /*#__PURE__*/React.createElement("span", {
    className: "footer__copy"
  }, "\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0431\u0435\u0437 \u0433\u0440\u0430\u043D\u0438\u0446")), /*#__PURE__*/React.createElement("span", {
    className: "footer__copy"
  }, "\xA9 2026 \u041C\u0418\u0420\u0410\u0421\u0410. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.")));
}
Object.assign(window, {
  CtaBand,
  Process,
  Formats,
  Values,
  Contacts,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-bridge/parts-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-bridge/parts-mid.jsx
try { (() => {
// parts-mid.jsx — Guide (value) + Services + Purpose + Expect

// ---- Guide / why us (the bridge value prop) ----
function Guide({
  phone
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tint",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container guide__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "guide__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u043E\u0441\u0442 \u2014 \u044D\u0442\u043E \u043C\u044B")), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u041C\u044B \u0437\u043D\u0430\u0435\u043C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0438\u0437\u043D\u0443\u0442\u0440\u0438")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "\u0421 \u043D\u0430\u043C\u0438 \u0432\u044B \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u0435 \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0440\u044B\u043D\u043E\u043A \u043F\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u043C\u0443 \u043C\u043E\u0441\u0442\u0443 \u2014 \u0430 \u043D\u0435 \u0441\u0442\u0440\u043E\u0438\u0442\u0435 \u0435\u0433\u043E \u0432 \u043E\u0434\u0438\u043D\u043E\u0447\u043A\u0443."), /*#__PURE__*/React.createElement("p", {
    className: "body"
  }, "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0431\u043E\u043B\u0435\u0435 18 \u043B\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0432 \u0437\u0430\u043A\u0443\u043F\u043A\u0430\u0445 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u041C\u0410\u0417 \u2014 \u043E\u0434\u043D\u043E\u043C \u0438\u0437 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438. \u042D\u0442\u043E \u0440\u0435\u0434\u043A\u043E\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E: \u0432\u0437\u0433\u043B\u044F\u0434 \u0438\u0437\u043D\u0443\u0442\u0440\u0438 \u0437\u0430\u043A\u0443\u043F\u043E\u0447\u043D\u044B\u0445 \u0441\u043B\u0443\u0436\u0431, \u0442\u0435\u043D\u0434\u0435\u0440\u043D\u044B\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430."), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: tel(phone),
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u0441\u043B\u0443\u0447\u0430\u0439")), /*#__PURE__*/React.createElement("div", {
    className: "guide__metrics"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "18+"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "\u043B\u0435\u0442 \u0432 \u0437\u0430\u043A\u0443\u043F\u043A\u0430\u0445 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "\u041C\u0410\u0417"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "\u043E\u043F\u044B\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u043C\u0430\u0448\u0437\u0430\u0432\u043E\u0434\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "\u0411\u0423\u0422\u0411"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "\u0442\u0435\u043D\u0434\u0435\u0440\u044B, \u0433\u043E\u0441\u0437\u0430\u043A\u0443\u043F\u043A\u0438 \u0438 \u0431\u0438\u0440\u0436\u0435\u0432\u044B\u0435 \u0442\u043E\u0440\u0433\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "2 \u0440\u044B\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u0438 \u0420\u043E\u0441\u0441\u0438\u044F \u2014 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435")))));
}

// ---- Services (alternating image/text rows) ----
const SERVICES = [{
  n: '01',
  title: 'Выход на рынок',
  media: 'фото · аналитика рынка / документы',
  imgSrc: window.__resources.svcAnalytics,
  text: 'Оцениваем перспективы вашей продукции, готовим документацию и стратегию вывода — чтобы выход был просчитанным, а не на удачу.',
  items: ['Оценка перспектив продукции', 'Анализ конкурентов и цен', 'Сертификация и документация', 'Коммерческие предложения']
}, {
  n: '02',
  title: 'Продажи и представительство',
  media: 'фото · переговоры / встреча',
  imgSrc: window.__resources.svcNegotiation,
  text: 'Становимся вашим локальным представителем: ищем клиентов, ведём переговоры и переписку от вашего имени на месте.',
  items: ['Поиск клиентов и каналов сбыта', 'Локальное представительство', 'Деловая переписка и переговоры']
}, {
  n: '03',
  title: 'Сопровождение сделки',
  media: 'фото · приёмка / контроль качества',
  imgSrc: window.__resources.svcQuality,
  text: 'Проводим сделку через тендеры, биржу и приёмку. Берём на себя процедуры, в которых легко ошибиться без опыта изнутри.',
  items: ['Тендеры и госзакупки', 'Биржевые торги (БУТБ)', 'Испытания и квалификация', 'Приёмка и работа с претензиями']
}, {
  n: '04',
  title: 'Финансовый контроль',
  media: 'фото · отчётность / платежи',
  imgSrc: window.__resources.svcFinance,
  text: 'Доводим сделку до денег: контролируем сроки платежей и работаем с задолженностью, пока обязательства не закрыты полностью.',
  items: ['Контроль платежей и сроков', 'Работа с дебиторской задолженностью']
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u0427\u0442\u043E \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C")), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u0427\u0435\u0442\u044B\u0440\u0435 \u043E\u043F\u043E\u0440\u044B \u043C\u043E\u0441\u0442\u0430 \u2014 \u043F\u043E\u043B\u043D\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "\u041A\u0430\u0436\u0434\u043E\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u0432\u0437\u044F\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0438\u043B\u0438 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u2014 \u043E\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0440\u044B\u043D\u043A\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u044B.")), /*#__PURE__*/React.createElement("div", {
    className: "svcrows"
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: 'svcrow' + (i % 2 ? ' svcrow--flip' : ''),
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "svcrow__media"
  }, /*#__PURE__*/React.createElement(Ph, {
    label: s.media,
    src: s.imgSrc
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "svcrow__n"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.text), /*#__PURE__*/React.createElement("ul", {
    className: "svcrow__list"
  }, s.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }), it)))))))));
}

// ---- Purpose / mission ----
function Purpose() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section purpose center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u041D\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430"))), /*#__PURE__*/React.createElement("p", {
    className: "purpose__text"
  }, "\u0414\u0430\u0442\u044C \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C ", /*#__PURE__*/React.createElement("em", null, "\u043D\u0430\u0434\u0451\u0436\u043D\u044B\u0439 \u043C\u043E\u0441\u0442"), " \u043D\u0430 \u0440\u044B\u043D\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0438 \u0420\u043E\u0441\u0441\u0438\u0438 \u2014 \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0438\u0445 \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u043D\u0434\u0435\u0440\u044B, \u043F\u0440\u0438\u0451\u043C\u043A\u0443 \u0438 \u0440\u0430\u0441\u0447\u0451\u0442\u044B \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u043A\u0430\u0436\u0434\u044B\u0439 \u0448\u0430\u0433 \u0431\u044B\u043B ", /*#__PURE__*/React.createElement("em", null, "\u0443\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C \u0438 \u0434\u043E\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u043C \u0434\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430"), ".")));
}

// ---- What to expect ----
const EXPECT = [{
  icon: 'eye',
  t: 'Взгляд заказчика изнутри'
}, {
  icon: 'route',
  t: 'Сопровождение полного цикла'
}, {
  icon: 'shield-check',
  t: 'Контроль до получения оплаты'
}, {
  icon: 'lock',
  t: 'Полная конфиденциальность'
}];
function Expect() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tint",
    id: "expect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u0427\u0442\u043E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435")), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u0421 \u043D\u0430\u043C\u0438 \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435")), /*#__PURE__*/React.createElement("div", {
    className: "expect__grid"
  }, EXPECT.map(e => /*#__PURE__*/React.createElement("div", {
    className: "expect",
    key: e.t
  }, /*#__PURE__*/React.createElement("span", {
    className: "expect__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": e.icon
  })), /*#__PURE__*/React.createElement("h4", null, e.t))))));
}
Object.assign(window, {
  Guide,
  Services,
  Purpose,
  Expect
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-bridge/parts-mid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-bridge/parts-top.jsx
try { (() => {
// parts-top.jsx — shared helpers + Header + Hero (variants A/B) + Empathy

// ---- Reusable image placeholder — renders real photo when src is provided ----
function Ph({
  label,
  style,
  src
}) {
  const [failed, setFailed] = React.useState(false);
  if (src && !failed) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ph ph--img",
      style: style
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: label,
      onError: () => setFailed(true)
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ph__tag"
  }, label));
}

// ---- Bridge motif: Производитель → МИРАСА → Рынок ----
function Bridge({
  vertical
}) {
  const Arrow = () => /*#__PURE__*/React.createElement("span", {
    className: "bridge__link"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: 'bridge' + (vertical ? ' bridge--v' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "bridge__node"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u041A\u0438\u0442\u0430\u0439 \xB7 \u0415\u0432\u0440\u043E\u043F\u0430"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C")), /*#__PURE__*/React.createElement(Arrow, null), /*#__PURE__*/React.createElement("div", {
    className: "bridge__node bridge__node--mid"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u041C\u043E\u0441\u0442"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "\u041C\u0418\u0420\u0410\u0421\u0410")), /*#__PURE__*/React.createElement(Arrow, null), /*#__PURE__*/React.createElement("div", {
    className: "bridge__node"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \xB7 \u0420\u043E\u0441\u0441\u0438\u044F"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "\u0420\u044B\u043D\u043E\u043A")));
}
const REFRAIN = ['Уверенно', 'Прозрачно', 'До результата'];
function Refrain({
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, REFRAIN.map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: w
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, w))));
}
const tel = p => 'tel:' + p.replace(/[^\d+]/g, '');

// ---- Header ----
function Header({
  phone
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: 'header' + (scrolled ? ' header--scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "container header__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-lockup",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, /*#__PURE__*/React.createElement("img", {
    className: "brand-mark",
    src: window.__resources.logomark,
    alt: "\u041C\u0418\u0420\u0410\u0421\u0410"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "header__nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "#process"
  }, "\u041F\u0440\u043E\u0446\u0435\u0441\u0441"), /*#__PURE__*/React.createElement("a", {
    href: "#values"
  }, "\u041F\u0440\u0438\u043D\u0446\u0438\u043F\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#contacts"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
    className: "header__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header__phone"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u0417\u0432\u043E\u043D\u0438\u0442\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, phone)), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: tel(phone)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"))));
}

// ---- Hero ----
function Hero({
  phone,
  variant
}) {
  const eyebrow = /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \xB7 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u0438 \u0420\u043E\u0441\u0441\u0438\u044F"));
  const headline = /*#__PURE__*/React.createElement("h1", null, "\u041C\u043E\u0441\u0442 \u043C\u0435\u0436\u0434\u0443 \u0432\u0430\u0448\u0438\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C ", /*#__PURE__*/React.createElement("span", {
    className: "ink"
  }, "\u0438 \u0440\u044B\u043D\u043A\u0430\u043C\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0438\xA0\u0420\u043E\u0441\u0441\u0438\u0438"));
  const lead = /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "\u0412\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442. \u041C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0435\u0433\u043E \u043D\u0430 \u0440\u044B\u043D\u043E\u043A \u2014 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u0434\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B. \u041B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0441 \u043E\u043F\u044B\u0442\u043E\u043C \u0437\u0430\u043A\u0443\u043F\u043E\u043A \u0438\u0437\u043D\u0443\u0442\u0440\u0438.");
  const cta = /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg",
    href: tel(phone)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("a", {
    className: "callrow",
    href: tel(phone)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone-call"
  }), phone));
  if (variant === 'B') {
    return /*#__PURE__*/React.createElement("section", {
      className: "hero hero-b center"
    }, /*#__PURE__*/React.createElement("img", {
      className: "hero__watermark",
      src: window.__resources.logomark,
      alt: "",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "container hero__main"
    }, eyebrow, headline, lead, cta, /*#__PURE__*/React.createElement(Refrain, {
      className: "hero__refrain"
    })), /*#__PURE__*/React.createElement("div", {
      className: "container hero__bridge-wrap"
    }, /*#__PURE__*/React.createElement(Bridge, null)), /*#__PURE__*/React.createElement("div", {
      className: "container hero__wide"
    }, /*#__PURE__*/React.createElement(Ph, {
      label: "\u0444\u043E\u0442\u043E \xB7 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F \u0432 \u0446\u0435\u0445\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F",
      src: window.__resources.heroProduction
    })));
  }

  // Variant A — split
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero-a"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__watermark",
    src: window.__resources.logomark,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__main"
  }, eyebrow, headline, lead, cta, /*#__PURE__*/React.createElement(Refrain, {
    className: "hero__refrain"
  })), /*#__PURE__*/React.createElement("aside", {
    className: "hero__aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__photo-frame"
  }, /*#__PURE__*/React.createElement(Ph, {
    label: "\u0444\u043E\u0442\u043E \xB7 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0430 / \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430",
    src: window.__resources.heroLogistics
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__aside-bridge"
  }, /*#__PURE__*/React.createElement(Bridge, null)))));
}

// ---- Empathy / problem ----
const PAINS = [{
  icon: 'languages',
  t: 'Другой язык и правила',
  d: 'Документы, переписка и требования заказчика — на чужом для вас рынке.'
}, {
  icon: 'gavel',
  t: 'Тендеры и биржа',
  d: 'Госзакупки и торги на БУТБ со своими процедурами и сроками.'
}, {
  icon: 'clipboard-check',
  t: 'Сертификация и приёмка',
  d: 'Испытания, квалификация продукции, акты — где легко ошибиться.'
}, {
  icon: 'wallet',
  t: 'Риск по оплате',
  d: 'Дебиторская задолженность и сроки платежа без контроля на месте.'
}];
function Empathy() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "problem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container empathy__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empathy__lead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u0417\u043D\u0430\u043A\u043E\u043C\u0430\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F")), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u0412\u044B\u0445\u043E\u0434 \u043D\u0430 \u0447\u0443\u0436\u043E\u0439 \u0440\u044B\u043D\u043E\u043A \u043C\u043E\u0436\u0435\u0442 \u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043D\u0435\u043F\u043E\u0434\u044A\u0451\u043C\u043D\u044B\u043C")), /*#__PURE__*/React.createElement("p", null, "\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435, \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u044B \u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043B\u044E\u0434\u0435\u0439 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435 \u2014 \u043A\u0430\u0436\u0434\u0430\u044F \u0441\u0434\u0435\u043B\u043A\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0443\u0441\u0438\u043B\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u043E\u0433\u043B\u043E \u0431\u044B \u043D\u0435 \u0431\u044B\u0442\u044C."), /*#__PURE__*/React.createElement("ul", {
    className: "empathy__questions"
  }, /*#__PURE__*/React.createElement("li", null, "\u0414\u043E\u0439\u0434\u0451\u0442 \u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F \u0434\u043E \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0432 \u0441\u0440\u043E\u043A?"), /*#__PURE__*/React.createElement("li", null, "\u041F\u0440\u043E\u0439\u0434\u0451\u043C \u043B\u0438 \u043C\u044B \u0442\u0435\u043D\u0434\u0435\u0440 \u0438 \u043F\u0440\u0438\u0451\u043C\u043A\u0443?"), /*#__PURE__*/React.createElement("li", null, "\u041F\u043E\u043B\u0443\u0447\u0443 \u043B\u0438 \u044F \u043E\u043F\u043B\u0430\u0442\u0443 \u2014 \u0438 \u043A\u043E\u0433\u0434\u0430?")), /*#__PURE__*/React.createElement("div", {
    className: "empathy__turn"
  }, /*#__PURE__*/React.createElement("strong", null, "\u041C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C. \u0418 \u043C\u044B \u0440\u044F\u0434\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C."))), /*#__PURE__*/React.createElement("div", {
    className: "empathy__pains"
  }, PAINS.map(p => /*#__PURE__*/React.createElement("div", {
    className: "pain",
    key: p.t
  }, /*#__PURE__*/React.createElement("span", {
    className: "pain__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, p.t), /*#__PURE__*/React.createElement("p", null, p.d)))))));
}
Object.assign(window, {
  Ph,
  Bridge,
  Refrain,
  Header,
  Hero,
  Empathy,
  tel,
  REFRAIN
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-bridge/parts-top.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-bridge/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-bridge/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/About.jsx
try { (() => {
// About — who we are + founder experience
function About() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container about__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-index": "01"
  }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u043C \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u0438\u0437\u043D\u0443\u0442\u0440\u0438")), /*#__PURE__*/React.createElement("p", {
    className: "body"
  }, "\u041C\u0418\u0420\u0410\u0421\u0410 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u0435\u0442 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u2014 \u0438\u0437 \u041A\u0438\u0442\u0430\u044F, \u0415\u0432\u0440\u043E\u043F\u044B \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0442\u0440\u0430\u043D \u2014 \u043F\u0440\u0438 \u0432\u044B\u0445\u043E\u0434\u0435 \u043D\u0430 \u0440\u044B\u043D\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0438 \u0420\u043E\u0441\u0441\u0438\u0438. \u041C\u044B \u0432\u0435\u0434\u0451\u043C \u043F\u0440\u043E\u0435\u043A\u0442 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u0434\u043E \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u043C."), /*#__PURE__*/React.createElement("p", {
    className: "body"
  }, "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0431\u043E\u043B\u0435\u0435 18 \u043B\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0432 \u0437\u0430\u043A\u0443\u043F\u043A\u0430\u0445 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u041C\u0410\u0417 \u2014 \u043E\u0434\u043D\u043E\u043C \u0438\u0437 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043C\u0430\u0448\u0438\u043D\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438. \u042D\u0442\u043E\u0442 \u043E\u043F\u044B\u0442 \u0434\u0430\u0451\u0442 \u0440\u0435\u0434\u043A\u043E\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E: \u0432\u0437\u0433\u043B\u044F\u0434 \u0438\u0437\u043D\u0443\u0442\u0440\u0438 \u0437\u0430\u043A\u0443\u043F\u043E\u0447\u043D\u044B\u0445 \u0441\u043B\u0443\u0436\u0431, \u0442\u0435\u043D\u0434\u0435\u0440\u043D\u044B\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430."), /*#__PURE__*/React.createElement("p", {
    className: "body"
  }, "\u041C\u044B \u0437\u043D\u0430\u0435\u043C, \u043A\u0430\u043A \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430, \u043A\u0430\u043A\u0438\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u044A\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043A \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C, \u0438 \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u0438\u0441\u0445\u043E\u0434 \u0441\u0434\u0435\u043B\u043A\u0438.")), /*#__PURE__*/React.createElement("div", {
    className: "stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "18+"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "\u043B\u0435\u0442 \u0432 \u0437\u0430\u043A\u0443\u043F\u043A\u0430\u0445 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "\u041C\u0410\u0417"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "\u043E\u043F\u044B\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u043C\u0430\u0448\u0437\u0430\u0432\u043E\u0434\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "2 \u0440\u044B\u043D\u043A\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u0438 \u0420\u043E\u0441\u0441\u0438\u044F \u2014 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435")))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Contacts.jsx
try { (() => {
// Contacts — phone-first
function Contacts({
  phone,
  email,
  messenger
}) {
  const call = () => {
    window.location.href = 'tel:' + phone.replace(/\s/g, '');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section contacts",
    id: "contacts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contacts__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-index": "07"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("div", {
    className: "contacts__phone"
  }, phone), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: call
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "contacts__rows"
  }, /*#__PURE__*/React.createElement("a", {
    className: "crow",
    href: 'tel:' + phone.replace(/\s/g, '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "crow__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  })), /*#__PURE__*/React.createElement("span", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, phone))), /*#__PURE__*/React.createElement("a", {
    className: "crow",
    href: 'mailto:' + email
  }, /*#__PURE__*/React.createElement("span", {
    className: "crow__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail"
  })), /*#__PURE__*/React.createElement("span", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Email"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, email))), /*#__PURE__*/React.createElement("div", {
    className: "crow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "crow__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "send"
  })), /*#__PURE__*/React.createElement("span", {
    className: "col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Telegram / WhatsApp"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, messenger))))));
}
window.Contacts = Contacts;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Contacts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/CtaBand.jsx
try { (() => {
// CTA band — dark, phone-first conversion block before contacts
function CtaBand({
  phone
}) {
  const call = () => {
    window.location.href = 'tel:' + phone.replace(/\s/g, '');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "ctaband"
  }, /*#__PURE__*/React.createElement("img", {
    className: "ctaband__watermark",
    src: "../../assets/logo.svg",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container ctaband__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u041E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u044B\u0445\u043E\u0434 \u0432\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0438 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0438 \u0420\u043E\u0441\u0441\u0438\u0438"), /*#__PURE__*/React.createElement("p", null, "\u041E\u0434\u0438\u043D \u0437\u0432\u043E\u043D\u043E\u043A \u2014 \u0438 \u043C\u044B \u043E\u0446\u0435\u043D\u0438\u043C \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u044B, \u0440\u0438\u0441\u043A\u0438 \u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433. \u0411\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432.")), /*#__PURE__*/React.createElement("div", {
    className: "ctaband__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: call
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("a", {
    className: "ctaband__phone",
    href: 'tel:' + phone.replace(/\s/g, '')
  }, phone))));
}
window.CtaBand = CtaBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CtaBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/DealCycle.jsx
try { (() => {
// DealCycle — horizontal ribbon of steps
const STEPS = ['Анализ рынка', 'Поиск клиента', 'Переговоры', 'Коммерческое предложение', 'Тендеры / биржа', 'Испытания', 'Контракт', 'Поставка', 'Приёмка', 'Претензии', 'Контроль оплаты'];
function DealCycle() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "cycle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-index": "03"
  }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u0441\u0434\u0435\u043B\u043A\u0438"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u041E\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0440\u044B\u043D\u043A\u0430 \u0434\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u0435\u043C \u043A\u0430\u0436\u0434\u044B\u0439 \u0448\u0430\u0433 \u2014 \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u044B\u0432\u043E\u0432 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438."))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cycle__scroll"
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "cycle__step",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "cycle__card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cycle__num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "cycle__name"
  }, s)), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "cycle__arrow"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })))))));
}
window.DealCycle = DealCycle;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/DealCycle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
// Footer
function Footer({
  phone
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "brand-mark brand-mark--light",
    src: "../../assets/logo.svg",
    alt: "\u041C\u0418\u0420\u0410\u0421\u0410"
  }), /*#__PURE__*/React.createElement("span", {
    className: "footer__copy"
  }, "\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0431\u0435\u0437 \u0433\u0440\u0430\u043D\u0438\u0446")), /*#__PURE__*/React.createElement("a", {
    className: "footer__phone",
    href: 'tel:' + phone.replace(/\s/g, '')
  }, phone), /*#__PURE__*/React.createElement("span", {
    className: "footer__copy"
  }, "\xA9 2026 \u041C\u0418\u0420\u0410\u0421\u0410. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Formats.jsx
try { (() => {
// Formats — three cooperation models
const FORMATS = [{
  icon: 'message-square',
  title: 'Разовая консультация',
  text: 'Точечная экспертиза по конкретному вопросу: рынок, тендер, документация или сделка.'
}, {
  icon: 'route',
  title: 'Проектное сопровождение',
  text: 'Ведение отдельного проекта или сделки — от анализа рынка до контроля оплаты.'
}, {
  icon: 'shield-check',
  title: 'Эксклюзивное представительство',
  text: 'Постоянное локальное представительство производителя на рынках Беларуси и России.'
}];
function Formats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "formats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-index": "06"
  }, "\u0424\u043E\u0440\u043C\u0430\u0442\u044B \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442")), /*#__PURE__*/React.createElement("div", {
    className: "fmt-grid"
  }, FORMATS.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "fmt",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "fmt__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": f.icon
  })), /*#__PURE__*/React.createElement("h3", null, f.title), /*#__PURE__*/React.createElement("p", null, f.text))))));
}
window.Formats = Formats;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Formats.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Header.jsx
try { (() => {
// Header — sticky, wordmark + phone CTA
function Header({
  phone
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const call = () => {
    window.location.href = 'tel:' + phone.replace(/\s/g, '');
  };
  return /*#__PURE__*/React.createElement("header", {
    className: 'header' + (scrolled ? ' header--scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "container header__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-lockup",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, /*#__PURE__*/React.createElement("img", {
    className: "brand-mark",
    src: "../../assets/logo.svg",
    alt: "\u041C\u0418\u0420\u0410\u0421\u0410"
  })), /*#__PURE__*/React.createElement("div", {
    className: "header__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header__phone"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u0417\u0432\u043E\u043D\u0438\u0442\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, phone)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: call
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
// Hero — slogan + UTP + call CTA, with credential panel & trust strip
function Hero({
  phone
}) {
  const call = () => {
    window.location.href = 'tel:' + phone.replace(/\s/g, '');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__watermark",
    src: "../../assets/logo.svg",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \xB7 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u0438 \u0420\u043E\u0441\u0441\u0438\u044F"), /*#__PURE__*/React.createElement("h1", null, "\u041C\u0418\u0420\u0410\u0421\u0410 \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0431\u0435\u0437\xA0\u0433\u0440\u0430\u043D\u0438\u0446")), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0430\u0445 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438 \u0438 \u0420\u043E\u0441\u0441\u0438\u0438 \u2014 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u0434\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: call
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("a", {
    className: "hero__phone",
    href: 'tel:' + phone.replace(/\s/g, '')
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone-call"
  }), phone))), /*#__PURE__*/React.createElement("aside", {
    className: "hero__panel"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__panel-eyebrow"
  }, "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/React.createElement("ul", {
    className: "hero__facts"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "18+"), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, "\u043B\u0435\u0442 \u0432 \u0437\u0430\u043A\u0443\u043F\u043A\u0430\u0445 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "\u041C\u0410\u0417"), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, "\u0432\u0437\u0433\u043B\u044F\u0434 \u0438\u0437\u043D\u0443\u0442\u0440\u0438 \u0442\u0435\u043D\u0434\u0435\u0440\u043D\u044B\u0445 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "\u0411\u0423\u0422\u0411"), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, "\u0442\u0435\u043D\u0434\u0435\u0440\u044B, \u0433\u043E\u0441\u0437\u0430\u043A\u0443\u043F\u043A\u0438 \u0438 \u0431\u0438\u0440\u0436\u0435\u0432\u044B\u0435 \u0442\u043E\u0440\u0433\u0438"))))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__strip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__strip-item"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "globe"
  }), "\u041A\u0438\u0442\u0430\u0439 \xB7 \u0415\u0432\u0440\u043E\u043F\u0430 \xB7 \u0434\u0440. \u0441\u0442\u0440\u0430\u043D\u044B"), /*#__PURE__*/React.createElement("span", {
    className: "hero__strip-item"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  }), "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u0438 \u0420\u043E\u0441\u0441\u0438\u044F"), /*#__PURE__*/React.createElement("span", {
    className: "hero__strip-item"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "route"
  }), "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u0441\u0434\u0435\u043B\u043A\u0438"), /*#__PURE__*/React.createElement("span", {
    className: "hero__strip-item"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check"
  }), "\u0414\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Industries.jsx
try { (() => {
// Industries
const INDUSTRIES = [{
  icon: 'cog',
  name: 'Машиностроение'
}, {
  icon: 'car',
  name: 'Автомобилестроение'
}, {
  icon: 'tractor',
  name: 'Сельхозмашиностроение'
}, {
  icon: 'flame',
  name: 'Металлургия'
}, {
  icon: 'frame',
  name: 'Металлоконструкции'
}, {
  icon: 'puzzle',
  name: 'Комплектующие'
}, {
  icon: 'factory',
  name: 'Промышленное оборудование'
}];
function Industries() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tint",
    id: "industries"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-index": "04"
  }, "\u041E\u0442\u0440\u0430\u0441\u043B\u0438"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u0413\u0434\u0435 \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C")), /*#__PURE__*/React.createElement("div", {
    className: "ind-tags"
  }, INDUSTRIES.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "ind-tag",
    key: i
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon
  }), it.name)))));
}
window.Industries = Industries;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Industries.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Principles.jsx
try { (() => {
// Principles — values block (dark, prominent)
const PRINCIPLES = [{
  n: '01',
  title: 'Конфиденциальность',
  text: 'Информация о поставщиках, заказчиках, ценах и условиях не передаётся третьим лицам.'
}, {
  n: '02',
  title: 'Профессионализм',
  text: 'Глубокое знание закупок, тендеров и контроля качества с позиции заказчика.'
}, {
  n: '03',
  title: 'Независимость',
  text: 'Действуем в интересах производителя, без скрытых аффилиаций и конфликта интересов.'
}, {
  n: '04',
  title: 'Ответственность за результат',
  text: 'Доводим сделку до конца — до поставки, приёмки и полной оплаты.'
}];
function Principles() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section principles",
    id: "principles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-index": "05"
  }, "\u041F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u0440\u0430\u0431\u043E\u0442\u044B"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u041D\u0430 \u0447\u0451\u043C \u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0434\u043E\u0432\u0435\u0440\u0438\u0435")), /*#__PURE__*/React.createElement("div", {
    className: "prin-grid"
  }, PRINCIPLES.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "prin",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, p.n), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.text))))));
}
window.Principles = Principles;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Principles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Services.jsx
try { (() => {
// Services — 4 accordion cards
const SERVICES = [{
  icon: 'compass',
  title: 'Выход на рынок',
  items: ['Оценка перспектив продукции на рынке', 'Анализ конкурентов и цен', 'Сертификация и подготовка документации', 'Стратегия вывода продукта', 'Коммерческие предложения']
}, {
  icon: 'handshake',
  title: 'Продажи и представительство',
  items: ['Поиск клиентов и каналов сбыта', 'Локальное представительство производителя', 'Деловая переписка и переговоры']
}, {
  icon: 'file-check',
  title: 'Сопровождение сделки',
  items: ['Тендеры и государственные закупки', 'Биржевые торги (БУТБ)', 'Испытания и квалификация продукции', 'Приёмка продукции', 'Работа с рекламациями и претензиями']
}, {
  icon: 'wallet',
  title: 'Финансовый контроль',
  items: ['Контроль платежей и сроков оплаты', 'Работа с дебиторской задолженностью']
}];
function ServiceCard({
  data,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'svc' + (open ? ' svc--open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc__hd",
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": data.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "svc__ti"
  }, data.title), /*#__PURE__*/React.createElement("span", {
    className: "svc__chev"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "svc__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc__panel-inner"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "svc__list"
  }, data.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }), it))))));
}
function Services() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tint",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-index": "02"
  }, "\u0423\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "\u0427\u0435\u0442\u044B\u0440\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u2014 \u043F\u043E\u043B\u043D\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "\u0420\u0430\u0441\u043A\u0440\u043E\u0439\u0442\u0435 \u0431\u043B\u043E\u043A, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0441\u043E\u0441\u0442\u0430\u0432 \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E.")), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    data: s,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/app.jsx
try { (() => {
// App — composes the МИРАСА landing page
// Example values (placeholders) — replace with real contacts before launch.
const PHONE = '+375 (29) 123-45-67';
const EMAIL = 'info@mirasa.by';
const MESSENGER = '@mirasa';
function App() {
  // Re-render Lucide icons after every paint (covers accordion toggles etc.)
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    phone: PHONE
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    phone: PHONE
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(DealCycle, null), /*#__PURE__*/React.createElement(Industries, null), /*#__PURE__*/React.createElement(Principles, null), /*#__PURE__*/React.createElement(Formats, null), /*#__PURE__*/React.createElement(CtaBand, {
    phone: PHONE
  }), /*#__PURE__*/React.createElement(Contacts, {
    phone: PHONE,
    email: EMAIL,
    messenger: MESSENGER
  })), /*#__PURE__*/React.createElement(Footer, {
    phone: PHONE
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app.jsx", error: String((e && e.message) || e) }); }

})();
