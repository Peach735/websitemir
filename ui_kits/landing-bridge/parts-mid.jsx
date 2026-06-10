// parts-mid.jsx — Guide (value) + Services + Purpose + Expect

// ---- Guide / why us (the bridge value prop) ----
function Guide({ phone }) {
  return (
    <section className="section section--tint" id="about">
      <div className="container guide__grid">
        <div className="guide__body">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow-row"><span className="eyebrow">Почему мост — это мы</span></div>
            <h2 className="h2">Мы знаем требования заказчика изнутри</h2>
          </div>
          <p className="lead">С нами вы переходите на новый рынок по готовому мосту —
            а не строите его в одиночку.</p>
          <p className="body">Основатель компании более 18 лет работал в закупках
            металлопродукции на МАЗ — одном из крупнейших машиностроительных
            предприятий Беларуси. Это редкое преимущество: взгляд изнутри
            закупочных служб, тендерных комиссий и контроля качества.</p>

          <a className="btn btn-primary btn-lg" href={tel(phone)} style={{ marginTop: 8 }}>
            <i data-lucide="phone"></i>Обсудить ваш случай
          </a>
        </div>
        <div className="guide__metrics">
          <div className="metric"><div className="num">18+</div><div className="lbl">лет в закупках металлопродукции</div></div>
          <div className="metric"><div className="num">МАЗ</div><div className="lbl">опыт внутри крупнейшего машзавода Беларуси</div></div>
          <div className="metric"><div className="num">БУТБ</div><div className="lbl">тендеры, госзакупки и биржевые торги</div></div>
          <div className="metric"><div className="num">2 рынка</div><div className="lbl">Беларусь и Россия — локальное присутствие</div></div>
        </div>
      </div>
    </section>
  );
}

// ---- Services (alternating image/text rows) ----
const SERVICES = [
  {
    n: '01', title: 'Выход на рынок',
    media: 'фото · аналитика рынка / документы',
    imgSrc: window.__resources.svcAnalytics,
    text: 'Оцениваем перспективы вашей продукции, готовим документацию и стратегию вывода — чтобы выход был просчитанным, а не на удачу.',
    items: ['Оценка перспектив продукции', 'Анализ конкурентов и цен', 'Сертификация и документация', 'Коммерческие предложения'],
  },
  {
    n: '02', title: 'Продажи и представительство',
    media: 'фото · переговоры / встреча',
    imgSrc: window.__resources.svcNegotiation,
    text: 'Становимся вашим локальным представителем: ищем клиентов, ведём переговоры и переписку от вашего имени на месте.',
    items: ['Поиск клиентов и каналов сбыта', 'Локальное представительство', 'Деловая переписка и переговоры'],
  },
  {
    n: '03', title: 'Сопровождение сделки',
    media: 'фото · приёмка / контроль качества',
    imgSrc: window.__resources.svcQuality,
    text: 'Проводим сделку через тендеры, биржу и приёмку. Берём на себя процедуры, в которых легко ошибиться без опыта изнутри.',
    items: ['Тендеры и госзакупки', 'Биржевые торги (БУТБ)', 'Испытания и квалификация', 'Приёмка и работа с претензиями'],
  },
  {
    n: '04', title: 'Финансовый контроль',
    media: 'фото · отчётность / платежи',
    imgSrc: window.__resources.svcFinance,
    text: 'Доводим сделку до денег: контролируем сроки платежей и работаем с задолженностью, пока обязательства не закрыты полностью.',
    items: ['Контроль платежей и сроков', 'Работа с дебиторской задолженностью'],
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Что мы делаем</span></div>
          <h2 className="h2">Четыре опоры моста — полное сопровождение</h2>
          <p className="lead">Каждое направление можно взять отдельно или собрать в полный цикл — от анализа рынка до оплаты.</p>
        </div>
        <div className="svcrows">
          {SERVICES.map((s, i) => (
            <div className={'svcrow' + (i % 2 ? ' svcrow--flip' : '')} key={s.n}>
              <div className="svcrow__media"><Ph label={s.media} src={s.imgSrc} /></div>
              <div>
                <span className="svcrow__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="svcrow__list">
                  {s.items.map((it) => (
                    <li key={it}><i data-lucide="check"></i>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Purpose / mission ----
function Purpose() {
  return (
    <section className="section purpose center">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 36 }}>
          <div className="eyebrow-row"><span className="eyebrow">Наша задача</span></div>
        </div>
        <p className="purpose__text">
          Дать иностранным производителям <em>надёжный мост</em> на рынки Беларуси
          и России — провести их через тендеры, приёмку и расчёты так, чтобы
          каждый шаг был <em>уверенным, прозрачным и доведённым до результата</em>.
        </p>
      </div>
    </section>
  );
}

// ---- What to expect ----
const EXPECT = [
  { icon: 'eye', t: 'Взгляд заказчика изнутри' },
  { icon: 'route', t: 'Сопровождение полного цикла' },
  { icon: 'shield-check', t: 'Контроль до получения оплаты' },
  { icon: 'lock', t: 'Полная конфиденциальность' },
];

function Expect() {
  return (
    <section className="section section--tint" id="expect">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Что вы получаете</span></div>
          <h2 className="h2">С нами на вашей стороне</h2>
        </div>
        <div className="expect__grid">
          {EXPECT.map((e) => (
            <div className="expect" key={e.t}>
              <span className="expect__ic"><i data-lucide={e.icon}></i></span>
              <h4>{e.t}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Guide, Services, Purpose, Expect });
