// parts-bottom.jsx — CtaBand + Process + Formats + Values + Contacts + Footer

// ---- CTA refrain band (repeated) ----
function CtaBand({ phone, title, text }) {
  return (
    <section className="ctaband">
      <img className="ctaband__watermark" src={window.__resources.logomark} alt="" aria-hidden="true" />
      <div className="container ctaband__inner">
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <div className="ctaband__actions">
          <a className="btn btn-primary btn-lg" href={tel(phone)}><i data-lucide="phone"></i>Позвонить</a>
          <a className="ctaband__phone" href={tel(phone)}>{phone}</a>
        </div>
      </div>
    </section>
  );
}

// ---- Process (4 steps) + full deal-cycle ribbon ----
const STEPS = [
  { n: 'Шаг 1', t: 'Звонок-знакомство', d: 'Вы звоните — мы разбираем продукт, рынок и задачу. Без обязательств.' },
  { n: 'Шаг 2', t: 'Оценка и план', d: 'Анализируем перспективы, риски и требования заказчика, предлагаем маршрут.' },
  { n: 'Шаг 3', t: 'Представительство и сделка', d: 'Ведём тендеры, биржу, испытания, приёмку — от вашего имени на месте.' },
  { n: 'Шаг 4', t: 'Контроль до оплаты', d: 'Контролируем платежи и закрываем сделку по факту оплаты.' },
];

const CYCLE = [
  'Анализ рынка', 'Поиск клиента', 'Переговоры', 'Коммерческое предложение',
  'Тендеры / биржа', 'Испытания', 'Контракт', 'Поставка', 'Приёмка',
  'Претензии', 'Контроль оплаты',
];

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Как мы строим мост</span></div>
          <h2 className="h2">Четыре шага — от звонка до оплаты</h2>
          <p className="lead">Вы всегда видите, на каком этапе ваша сделка.</p>
        </div>
        <div className="proc__grid">
          {STEPS.map((s) => (
            <div className="proc" key={s.n}>
              <span className="proc__n">{s.n}</span>
              <div className="proc__bar"></div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ---- Formats ----
const FORMATS = [
  { icon: 'message-square', title: 'Разовая консультация', text: 'Экспертная оценка продукции, рынка и перспектив сотрудничества.' },
  { icon: 'route', title: 'Проектное сопровождение', text: 'Полное сопровождение отдельной сделки, тендера или поставки.' },
  { icon: 'shield-check', title: 'Эксклюзивное представительство', text: 'Постоянное представление интересов производителя на рынках Беларуси и России.' },
];

function Formats() {
  return (
    <section className="section section--tint" id="formats">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Форматы сотрудничества</span></div>
          <h2 className="h2">Выберите глубину участия</h2>
        </div>
        <div className="fmt-grid">
          {FORMATS.map((f) => (
            <div className="fmt" key={f.title}>
              <span className="fmt__ic"><i data-lucide={f.icon}></i></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Values ----
const VALUES = [
  { n: '01', t: 'Конфиденциальность', d: 'Мы гарантируем сохранность коммерческой информации. Данные о клиентах, поставщиках, ценах, условиях сотрудничества и проектах не передаются третьим лицам без согласия клиента.' },
  { n: '02', t: 'Экспертиза', d: 'Многолетний практический опыт в сфере промышленных закупок, тендерных процедур и сопровождения поставок позволяет эффективно представлять интересы производителей на рынках Беларуси и России.' },
  { n: '03', t: 'Независимость', d: 'Мы действуем исключительно в интересах клиента, обеспечивая объективность, прозрачность и отсутствие конфликта интересов.' },
  { n: '04', t: 'Ориентация на результат', d: 'Сопровождаем проект на всех этапах — от анализа рынка и поиска заказчика до исполнения контракта и получения оплаты.' },
  { n: '05', t: 'Прозрачность взаимодействия', d: 'Клиент всегда понимает текущий статус проекта, принятые решения и дальнейшие шаги.' },
  { n: '06', t: 'Долгосрочное партнёрство', d: 'Мы стремимся выстраивать устойчивые деловые отношения и становиться надёжным представителем производителя на целевых рынках.' },
];

function Values() {
  return (
    <section className="section" id="values">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Принципы работы</span></div>
          <h2 className="h2">На чём строится доверие</h2>
        </div>
        <div className="values__grid">
          {VALUES.map((v) => (
            <div className="value" key={v.n}>
              <span className="n">{v.n}</span>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Contacts ----
function Contacts({ phone, email, messenger }) {
  return (
    <section className="section contacts" id="contacts">
      <div className="container contacts__inner">
        <div>
          <div className="eyebrow-row"><span className="eyebrow">Контакты</span></div>
          <div className="contacts__phone">{phone}</div>
          <a className="btn btn-primary btn-lg" href={tel(phone)}><i data-lucide="phone"></i>Позвонить</a>
        </div>
        <div className="contacts__rows">
          <a className="crow" href={tel(phone)}>
            <span className="crow__ic"><i data-lucide="phone"></i></span>
            <span><span className="k">Телефон</span><span className="v">{phone}</span></span>
          </a>
          <a className="crow" href={'mailto:' + email}>
            <span className="crow__ic"><i data-lucide="mail"></i></span>
            <span><span className="k">Email</span><span className="v">{email}</span></span>
          </a>
          <div className="crow">
            <span className="crow__ic"><i data-lucide="send"></i></span>
            <span><span className="k">Telegram / WhatsApp</span><span className="v">{messenger}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Footer ----
function Footer({ phone }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img className="brand-mark brand-mark--light" src={window.__resources.logomark} alt="МИРАСА" />
          <span className="footer__copy">экспертиза без границ</span>
        </div>
        <span className="footer__copy">© 2026 МИРАСА. Все права защищены.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { CtaBand, Process, Formats, Values, Contacts, Footer });
