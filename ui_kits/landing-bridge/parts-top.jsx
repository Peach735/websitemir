// parts-top.jsx — shared helpers + Header + Hero (variants A/B) + Empathy

// ---- Reusable image placeholder — renders real photo when src is provided ----
function Ph({ label, style, src }) {
  const [failed, setFailed] = React.useState(false);
  if (src && !failed) {
    return (
      <div className="ph ph--img" style={style}>
        <img src={src} alt={label} onError={() => setFailed(true)} />
      </div>
    );
  }
  return (
    <div className="ph" style={style}>
      <span className="ph__tag">{label}</span>
    </div>
  );
}

// ---- Bridge motif: Производитель → МИРАСА → Рынок ----
function Bridge({ vertical }) {
  const Arrow = () => (
    <span className="bridge__link"><i data-lucide="arrow-right"></i></span>
  );
  return (
    <div className={'bridge' + (vertical ? ' bridge--v' : '')}>
      <div className="bridge__node">
        <span className="k">Китай · Европа</span>
        <span className="v">Производитель</span>
      </div>
      <Arrow />
      <div className="bridge__node bridge__node--mid">
        <span className="k">Мост</span>
        <span className="v">МИРАСА</span>
      </div>
      <Arrow />
      <div className="bridge__node">
        <span className="k">Беларусь · Россия</span>
        <span className="v">Рынок</span>
      </div>
    </div>
  );
}

const REFRAIN = ['Уверенно', 'Прозрачно', 'До результата'];

function Refrain({ className }) {
  return (
    <div className={className}>
      {REFRAIN.map((w, i) => (
        <React.Fragment key={w}>
          {i > 0 && <span className="dot">·</span>}
          <span>{w}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

const tel = (p) => 'tel:' + p.replace(/[^\d+]/g, '');

// ---- Header ----
function Header({ phone }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={'header' + (scrolled ? ' header--scrolled' : '')}>
      <div className="container header__inner">
        <span className="brand-lockup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img className="brand-mark" src={window.__resources.logomark} alt="МИРАСА" />
        </span>
        <nav className="header__nav">
          <a href="#services">Услуги</a>
          <a href="#process">Процесс</a>
          <a href="#values">Принципы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="header__right">
          <div className="header__phone">
            <span className="k">Звоните</span>
            <span className="v">{phone}</span>
          </div>
          <a className="btn btn-primary" href={tel(phone)}>
            <i data-lucide="phone"></i>Позвонить
          </a>
        </div>
      </div>
    </header>
  );
}

// ---- Hero ----
function Hero({ phone, variant }) {
  const eyebrow = (
    <div className="eyebrow-row"><span className="eyebrow">Представительство иностранных производителей · Беларусь и Россия</span></div>
  );
  const headline = (
    <h1>Мост между вашим производством <span className="ink">и рынками Беларуси и&nbsp;России</span></h1>
  );
  const lead = (
    <p className="hero__lead">
      Вы делаете продукт. Мы проводим его на рынок — от первого контакта
      до получения оплаты. Локальное представительство с опытом закупок изнутри.
    </p>
  );
  const cta = (
    <div className="hero__cta">
      <a className="btn btn-primary btn-lg" href={tel(phone)}><i data-lucide="phone"></i>Позвонить</a>
      <a className="callrow" href={tel(phone)}><i data-lucide="phone-call"></i>{phone}</a>
    </div>
  );

  if (variant === 'B') {
    return (
      <section className="hero hero-b center">
        <img className="hero__watermark" src={window.__resources.logomark} alt="" aria-hidden="true" />
        <div className="container hero__main">
          {eyebrow}
          {headline}
          {lead}
          {cta}
          <Refrain className="hero__refrain" />
        </div>
        <div className="container hero__bridge-wrap"><Bridge /></div>
        <div className="container hero__wide">
          <Ph
            label="фото · продукция в цехе производителя"
            src={window.__resources.heroProduction} />
        </div>
      </section>
    );
  }

  // Variant A — split
  return (
    <section className="hero hero-a">
      <img className="hero__watermark" src={window.__resources.logomark} alt="" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__main">
          {eyebrow}
          {headline}
          {lead}
          {cta}
          <Refrain className="hero__refrain" />
        </div>
        <aside className="hero__aside">
          <div className="hero__photo-frame">
            <Ph
              label="фото · отгрузка / логистика"
              src={window.__resources.heroLogistics} />
          </div>
          <div className="hero__aside-bridge">
            <Bridge />
          </div>
        </aside>
      </div>
    </section>
  );
}

// ---- Empathy / problem ----
const PAINS = [
  { icon: 'languages', t: 'Другой язык и правила', d: 'Документы, переписка и требования заказчика — на чужом для вас рынке.' },
  { icon: 'gavel', t: 'Тендеры и биржа', d: 'Госзакупки и торги на БУТБ со своими процедурами и сроками.' },
  { icon: 'clipboard-check', t: 'Сертификация и приёмка', d: 'Испытания, квалификация продукции, акты — где легко ошибиться.' },
  { icon: 'wallet', t: 'Риск по оплате', d: 'Дебиторская задолженность и сроки платежа без контроля на месте.' },
];

function Empathy() {
  return (
    <section className="section" id="problem">
      <div className="container empathy__grid">
        <div className="empathy__lead">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <div className="eyebrow-row"><span className="eyebrow">Знакомая ситуация</span></div>
            <h2 className="h2">Выход на чужой рынок может казаться неподъёмным</h2>
          </div>
          <p>Расстояние, незнакомые процедуры и отсутствие людей на месте — каждая сделка требует усилий, которых могло бы не быть.</p>
          <ul className="empathy__questions">
            <li>Дойдёт ли продукция до заказчика в срок?</li>
            <li>Пройдём ли мы тендер и приёмку?</li>
            <li>Получу ли я оплату — и когда?</li>
          </ul>
          <div className="empathy__turn">
            <strong>Мы понимаем. И мы рядом, чтобы помочь.</strong>
          </div>
        </div>
        <div className="empathy__pains">
          {PAINS.map((p) => (
            <div className="pain" key={p.t}>
              <span className="pain__ic"><i data-lucide={p.icon}></i></span>
              <div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Ph, Bridge, Refrain, Header, Hero, Empathy, tel, REFRAIN });
