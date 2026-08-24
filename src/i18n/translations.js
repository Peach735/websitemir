// Single source of truth for all site copy in both languages.
// Add a new language by adding a new top-level key with the same shape.

const ru = {
  nav: {
    services: 'Услуги',
    process: 'Процесс',
    formats: 'Форматы',
    values: 'Принципы',
    contacts: 'Контакты',
  },
  header: {
    brandAria: 'МИРАСА — наверх',
    emailLabel: 'Email',
    consultation: 'Запросить консультацию',
    consultationShort: 'Консультация',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
  },
  hero: {
    eyebrow: 'Представительство иностранных производителей · Беларусь и Россия',
    headline: ['Мост между вашим производством ', 'и рынками Беларуси и Росcии'],
    lead: 'От производства — к контракту. МИРАСА помогает иностранным производителям выходить на рынки Беларуси и России, находить промышленных заказчиков и сопровождать продажи на всех этапах — от первого контакта до исполнения контракта и получения оплаты. Локальное представительство. Экспертиза промышленных закупок. Тендерное и контрактное сопровождение.',
    cta: 'Запросить консультацию',
    photoLabel: 'фото · отгрузка / логистика',
    wideLabel: 'фото · продукция в цехе производителя',
  },
  common: {
    refrain: ['Уверенно', 'Прозрачно', 'До результата'],
    bridge: {
      originKey: 'Китай · Европа',
      originVal: 'Производитель',
      midKey: 'Мост',
      midVal: 'МИРАСА',
      destKey: 'Беларусь · Россия',
      destVal: 'Рынок',
    },
  },
  empathy: {
    eyebrow: 'С какими задачами сталкиваются иностранные производители',
    heading: 'Выход на рынок Беларуси и России требует не только конкурентоспособной продукции, но и понимания местных процедур, требований заказчиков и особенностей закупочной деятельности',
    intro: 'Производители часто сталкиваются со следующими вопросами:',
    questions: [
      'Как найти надежного заказчика?',
      'Как пройти тендерную процедуру или биржевые торги?',
      'Как организовать испытания и согласование продукции?',
      'Как обеспечить своевременную оплату поставленного товара?',
    ],
    turn: 'МИРАСА помогает решать эти задачи на каждом этапе сотрудничества.',
    pains: [
      { icon: 'languages', t: 'Другой язык и деловая среда', d: 'Переговоры, документация, технические требования и закупочные процедуры требуют локальной экспертизы и постоянного взаимодействия с заказчиком.' },
      { icon: 'gavel', t: 'Тендеры и биржевые торги', d: 'Сопровождение участия в закупках государственных и промышленных предприятий, а также в биржевых торгах на БУТБ.' },
      { icon: 'clipboard-check', t: 'Испытания и приемка продукции', d: 'Организация испытаний, взаимодействие с техническими службами, сопровождение квалификации и приемки продукции.' },
      { icon: 'wallet', t: 'Контроль исполнения обязательств', d: 'Мониторинг поставок, контроль расчетов и сопровождение урегулирования дебиторской задолженности.' },
    ],
  },
  services: {
    eyebrow: 'Что мы делаем',
    heading: 'Четыре опоры успешного выхода на рынок',
    lead: 'Каждое направление доступно как отдельная услуга или как часть комплексного сопровождения — от анализа рынка до полного исполнения финансовых обязательств по контракту.',
    items: [
      {
        n: '01', title: 'Выход на рынок', media: 'фото · аналитика рынка / документы',
        text: 'Оцениваем потенциал продукции, анализируем рынок и подготавливаем основу для успешного выхода на рынки Беларуси и России.',
        items: ['Оценка перспектив продукции', 'Анализ рынка и конкурентной среды', 'Сертификация и подготовка документации', 'Подготовка коммерческих предложений'],
      },
      {
        n: '02', title: 'Продажи и представительство', media: 'фото · переговоры / встреча',
        text: 'Представляем интересы производителя на территории Беларуси и России, развиваем деловые контакты и сопровождаем переговорный процесс.',
        items: ['Поиск клиентов и новых возможностей продаж', 'Локальное представительство', 'Деловая переписка и переговоры', 'Взаимодействие с заказчиками'],
      },
      {
        n: '03', title: 'Сопровождение сделки', media: 'фото · приёмка / контроль качества',
        text: 'Обеспечиваем профессиональное сопровождение закупочных процедур и поставок на всех этапах реализации проекта.',
        items: ['Тендеры и государственные закупки', 'Биржевые торги на БУТБ', 'Испытания и квалификация продукции', 'Приемка продукции и работа с рекламациями'],
      },
      {
        n: '04', title: 'Финансовое сопровождение', media: 'фото · отчётность / платежи',
        text: 'Контролируем исполнение финансовых обязательств и сопровождаем процесс до полного завершения сделки.',
        items: ['Контроль сроков оплаты', 'Мониторинг исполнения контрактных обязательств', 'Работа с дебиторской задолженностью', 'Сопровождение урегулирования спорных вопросов'],
      },
    ],
  },
  ctaband: {
    title: 'Обсудим выход вашей продукции на рынки Беларуси и России',
    text: 'Одна консультация — и вы получите профессиональную оценку возможностей, рисков и дальнейших шагов.',
    cta: 'Запросить консультацию',
  },
  process: {
    eyebrow: 'Как мы строим мост',
    heading: 'Четыре шага — от первого контакта до исполнения контракта',
    lead: 'Вы всегда понимаете, на каком этапе находится ваш проект.',
    steps: [
      { n: 'Шаг 1', t: 'Первичный контакт', d: 'Обсуждаем вашу продукцию, задачи и рынок. Определяем возможные направления выхода на рынки Беларуси и России.' },
      { n: 'Шаг 2', t: 'Анализ и стратегия', d: 'Оцениваем потенциал продукции, требования заказчиков и риски. Формируем стратегию выхода на рынок и план действий.' },
      { n: 'Шаг 3', t: 'Представительство и сопровождение сделки', d: 'Представляем ваши интересы на месте: тендеры, биржевые торги, испытания продукции, переговоры и приемка.' },
      { n: 'Шаг 4', t: 'Финансовое сопровождение', d: 'Контролируем исполнение контрактных обязательств и сопровождаем процесс до полного завершения сделки и получения оплаты.' },
    ],
  },
  formats: {
    eyebrow: 'Форматы сотрудничества',
    heading: 'Выберите глубину участия',
    items: [
      { icon: 'message-square', title: 'Разовая консультация', text: 'Экспертная оценка продукции, рынка и перспектив сотрудничества.' },
      { icon: 'route', title: 'Проектное сопровождение', text: 'Полное сопровождение отдельной сделки, тендера или поставки.' },
      { icon: 'shield-check', title: 'Эксклюзивное представительство', text: 'Постоянное представление интересов производителя на рынках Беларуси и России.' },
    ],
  },
  expect: {
    eyebrow: 'Что вы получаете',
    heading: 'с МИРАСА на вашей стороне',
    items: [
      { icon: 'eye', t: 'Экспертизу закупок и принятия решений' },
      { icon: 'route', t: 'Полное сопровождение сделки от рынка до контракта' },
      { icon: 'shield-check', t: 'Контроль исполнения и оплаты' },
      { icon: 'lock', t: 'Конфиденциальность на всех этапах' },
    ],
  },
  guide: {
    eyebrow: 'Почему МИРАСА — ваш мост на рынок',
    heading: 'Вы строите производство. Мы помогаем выстроить путь к заказчику',
    lead: 'МИРАСА обеспечивает локальное представительство производителей на рынках Беларуси и России, сопровождая проекты от первого контакта до исполнения контракта и получения оплаты.',
    body: 'Наш опыт в сфере промышленных закупок позволяет понимать требования заказчиков, особенности тендерных процедур и факторы, влияющие на принятие решений о закупках.',
    whyTitle: 'Почему это работает',
    why1: 'Мы понимаем, как принимаются решения о закупках: требования технических служб, логика тендерных комиссий и критерии выбора поставщиков.',
    why2: 'Это позволяет заранее учитывать реальные факторы, влияющие на допуск продукции, победу в закупке и успешное исполнение контракта.',
    cta: 'Запросить консультацию',
    metrics: [
      { num: '20+', lbl: 'лет практической экспертизы' },
      { num: 'Беларусь и Россия', lbl: 'локальное присутствие и сопровождение проектов' },
      { num: 'Тендеры и биржевые торги', lbl: 'сопровождение закупочных процедур и коммерческих сделок' },
      { num: 'До результата', lbl: 'контроль исполнения обязательств и расчетов по контракту' },
    ],
  },
  purpose: {
    eyebrow: 'Наша задача',
    text: 'Быть надёжным мостом между производителем и заказчиком, обеспечивая профессиональное сопровождение на всех этапах — от выхода на рынок до полного исполнения контрактных обязательств',
  },
  values: {
    eyebrow: 'Принципы работы',
    heading: 'На чём строится доверие',
    items: [
      { n: '01', t: 'Конфиденциальность', d: 'Мы гарантируем сохранность коммерческой информации. Данные о клиентах, поставщиках, ценах, условиях сотрудничества и проектах не передаются третьим лицам без согласия клиента.' },
      { n: '02', t: 'Экспертиза', d: 'Многолетний практический опыт в сфере промышленных закупок, тендерных процедур и сопровождения поставок позволяет эффективно представлять интересы производителей на рынках Беларуси и России.' },
      { n: '03', t: 'Независимость', d: 'Мы действуем исключительно в интересах клиента, обеспечивая объективность, прозрачность и отсутствие конфликта интересов.' },
      { n: '04', t: 'Ориентация на результат', d: 'Сопровождаем проект на всех этапах — от анализа рынка и поиска заказчика до исполнения контракта и получения оплаты.' },
      { n: '05', t: 'Прозрачность взаимодействия', d: 'Клиент всегда понимает текущий статус проекта, принятые решения и дальнейшие шаги.' },
      { n: '06', t: 'Долгосрочное партнёрство', d: 'Мы стремимся выстраивать устойчивые деловые отношения и становиться надёжным представителем производителя на целевых рынках.' },
    ],
  },
  whoNotFor: {
    eyebrow: 'Границы сотрудничества',
    heading: 'Кому мы не подходим',
    items: [
      { n: '01', t: 'Разовые запросы', d: 'Мы не работаем с разовыми случайными запросами без намерения выходить на рынок системно.' },
      { n: '02', t: 'Перепродажа продукции', d: 'Мы не занимаемся перепродажей продукции и не выступаем торговым посредником без участия в сопровождении сделки.' },
      { n: '03', t: 'Непрозрачные условия', d: 'Мы не берем проекты без прозрачных условий сотрудничества и понятной коммерческой цели.' },
    ],
  },
  geoIndustries: {
    geoEyebrow: 'География работы',
    geo: ['Беларусь', 'Россия', 'локальное сопровождение на месте'],
    industriesEyebrow: 'Отрасли',
    industries: ['Металлопродукция', 'машиностроение', 'промышленное оборудование', 'комплектующие', 'сырьевые поставки'],
  },
  contacts: {
    eyebrow: 'Контакты',
    lead: 'Свяжитесь удобным для вас способом — ответим в течение рабочего дня.',
    emailLabel: 'Email',
    messengerLabel: 'Telegram / WhatsApp',
    wechatLabel: 'WeChat',
  },
  footer: {
    tagline: 'экспертиза без границ',
    copyright: '© 2026 МИРАСА. Все права защищены.',
  },
};

const en = {
  nav: {
    services: 'Services',
    process: 'Process',
    formats: 'Formats',
    values: 'Principles',
    contacts: 'Contacts',
  },
  header: {
    brandAria: 'MIRASA — back to top',
    emailLabel: 'Email',
    consultation: 'Request a consultation',
    consultationShort: 'Consultation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'Representation for foreign manufacturers · Belarus and Russia',
    headline: ['A bridge between your production ', 'and the markets of Belarus and Russia'],
    lead: 'From production to contract. MIRASA helps foreign manufacturers enter the markets of Belarus and Russia, find industrial buyers, and manages sales at every stage — from first contact to contract execution and payment. Local representation. Industrial procurement expertise. Tender and contract support.',
    cta: 'Request a consultation',
    photoLabel: 'photo · shipping / logistics',
    wideLabel: 'photo · products on the manufacturer\u2019s floor',
  },
  common: {
    refrain: ['With confidence', 'With transparency', 'Through to results'],
    bridge: {
      originKey: 'China · Europe',
      originVal: 'Manufacturer',
      midKey: 'Bridge',
      midVal: 'MIRASA',
      destKey: 'Belarus · Russia',
      destVal: 'Market',
    },
  },
  empathy: {
    eyebrow: 'Challenges foreign manufacturers face',
    heading: 'Entering the Belarus and Russia markets takes more than competitive products — it takes an understanding of local procedures, buyer requirements, and the realities of procurement',
    intro: 'Manufacturers commonly run into questions like:',
    questions: [
      'How do we find a reliable buyer?',
      'How do we get through a tender or exchange trading procedure?',
      'How do we organize product testing and approval?',
      'How do we ensure timely payment for delivered goods?',
    ],
    turn: 'MIRASA helps solve these challenges at every stage of the partnership.',
    pains: [
      { icon: 'languages', t: 'A different language and business environment', d: 'Negotiations, documentation, technical requirements, and procurement procedures call for local expertise and ongoing engagement with the buyer.' },
      { icon: 'gavel', t: 'Tenders and exchange trading', d: 'Support through procurement by government and industrial enterprises, as well as exchange trading on BUTB.' },
      { icon: 'clipboard-check', t: 'Testing and product acceptance', d: 'Organizing testing, liaising with technical services, and supporting qualification and acceptance of the product.' },
      { icon: 'wallet', t: 'Contract performance control', d: 'Monitoring deliveries, tracking payments, and supporting resolution of outstanding receivables.' },
    ],
  },
  services: {
    eyebrow: 'What we do',
    heading: 'Four pillars of a successful market entry',
    lead: 'Every workstream is available as a standalone service or as part of full-cycle support — from market analysis through to complete fulfillment of financial obligations under the contract.',
    items: [
      {
        n: '01', title: 'Market entry', media: 'photo · market analytics / documents',
        text: 'We assess product potential, analyze the market, and lay the groundwork for a successful entry into the Belarus and Russia markets.',
        items: ['Product potential assessment', 'Market and competitive landscape analysis', 'Certification and documentation preparation', 'Preparation of commercial proposals'],
      },
      {
        n: '02', title: 'Sales and representation', media: 'photo · negotiations / meeting',
        text: 'We represent the manufacturer\u2019s interests in Belarus and Russia, build business contacts, and manage the negotiation process.',
        items: ['Finding clients and new sales opportunities', 'Local representation', 'Business correspondence and negotiations', 'Working with buyers'],
      },
      {
        n: '03', title: 'Deal support', media: 'photo · acceptance / quality control',
        text: 'We provide professional support for procurement procedures and deliveries at every stage of project delivery.',
        items: ['Tenders and government procurement', 'BUTB exchange trading', 'Product testing and qualification', 'Product acceptance and claims handling'],
      },
      {
        n: '04', title: 'Financial support', media: 'photo · reporting / payments',
        text: 'We monitor the fulfillment of financial obligations and manage the process through to full deal completion.',
        items: ['Payment deadline control', 'Monitoring contract performance', 'Receivables management', 'Support in resolving disputes'],
      },
    ],
  },
  ctaband: {
    title: 'Let\u2019s discuss bringing your products to the Belarus and Russia markets',
    text: 'One consultation gets you a professional assessment of the opportunities, risks, and next steps.',
    cta: 'Request a consultation',
  },
  process: {
    eyebrow: 'How we build the bridge',
    heading: 'Four steps — from first contact to contract execution',
    lead: 'You always know exactly what stage your project is at.',
    steps: [
      { n: 'Step 1', t: 'Initial contact', d: 'We discuss your product, goals, and target market, and outline possible paths into the Belarus and Russia markets.' },
      { n: 'Step 2', t: 'Analysis and strategy', d: 'We assess the product\u2019s potential, buyer requirements, and risks, then build a market-entry strategy and action plan.' },
      { n: 'Step 3', t: 'Representation and deal support', d: 'We represent your interests on the ground: tenders, exchange trading, product testing, negotiations, and acceptance.' },
      { n: 'Step 4', t: 'Financial support', d: 'We monitor fulfillment of contractual obligations and manage the process through to full deal completion and payment.' },
    ],
  },
  formats: {
    eyebrow: 'Ways of working together',
    heading: 'Choose your level of involvement',
    items: [
      { icon: 'message-square', title: 'One-off consultation', text: 'An expert assessment of your product, the market, and the potential for partnership.' },
      { icon: 'route', title: 'Project support', text: 'Full support for a single deal, tender, or delivery.' },
      { icon: 'shield-check', title: 'Exclusive representation', text: 'Ongoing representation of the manufacturer\u2019s interests in the Belarus and Russia markets.' },
    ],
  },
  expect: {
    eyebrow: 'What you get',
    heading: 'with MIRASA on your side',
    items: [
      { icon: 'eye', t: 'Procurement and decision-making expertise' },
      { icon: 'route', t: 'End-to-end deal support, from market to contract' },
      { icon: 'shield-check', t: 'Control over execution and payment' },
      { icon: 'lock', t: 'Confidentiality at every stage' },
    ],
  },
  guide: {
    eyebrow: 'Why MIRASA is your bridge to the market',
    heading: 'You build the product. We help build the path to the buyer',
    lead: 'MIRASA provides local representation for manufacturers in the Belarus and Russia markets, supporting projects from first contact through contract execution and payment.',
    body: 'Our experience in industrial procurement means we understand buyer requirements, the specifics of tender procedures, and the factors that drive purchasing decisions.',
    whyTitle: 'Why it works',
    why1: 'We understand how procurement decisions are made: technical department requirements, tender committee logic, and supplier selection criteria.',
    why2: 'That lets us account in advance for the real factors that affect product approval, winning a tender, and successfully fulfilling a contract.',
    cta: 'Request a consultation',
    metrics: [
      { num: '20+', lbl: 'years of hands-on expertise' },
      { num: 'Belarus and Russia', lbl: 'local presence and project support' },
      { num: 'Tenders and exchange trading', lbl: 'support for procurement procedures and commercial deals' },
      { num: 'Through to results', lbl: 'control over obligations and contract payments' },
    ],
  },
  purpose: {
    eyebrow: 'Our mission',
    text: 'To be a reliable bridge between manufacturer and buyer, providing professional support at every stage — from market entry to the full fulfillment of contractual obligations',
  },
  values: {
    eyebrow: 'How we work',
    heading: 'What trust is built on',
    items: [
      { n: '01', t: 'Confidentiality', d: 'We guarantee the security of commercial information. Data on clients, suppliers, prices, terms of cooperation, and projects is never shared with third parties without the client\u2019s consent.' },
      { n: '02', t: 'Expertise', d: 'Years of hands-on experience in industrial procurement, tender procedures, and delivery support let us effectively represent manufacturers\u2019 interests in the Belarus and Russia markets.' },
      { n: '03', t: 'Independence', d: 'We act solely in the client\u2019s interest, ensuring objectivity, transparency, and no conflicts of interest.' },
      { n: '04', t: 'Results-driven', d: 'We support the project at every stage — from market analysis and finding a buyer through to contract execution and payment.' },
      { n: '05', t: 'Transparent communication', d: 'The client always knows the current status of the project, the decisions made, and the next steps.' },
      { n: '06', t: 'Long-term partnership', d: 'We aim to build lasting business relationships and become a trusted representative of the manufacturer in target markets.' },
    ],
  },
  whoNotFor: {
    eyebrow: 'Where we draw the line',
    heading: 'Who we\u2019re not a fit for',
    items: [
      { n: '01', t: 'One-off requests', d: 'We don\u2019t take on random one-off requests without a genuine intent to enter the market systematically.' },
      { n: '02', t: 'Product resale', d: 'We don\u2019t resell products or act as a trading intermediary without being involved in supporting the deal.' },
      { n: '03', t: 'Opaque terms', d: 'We don\u2019t take on projects without transparent terms of cooperation and a clear commercial goal.' },
    ],
  },
  geoIndustries: {
    geoEyebrow: 'Where we work',
    geo: ['Belarus', 'Russia', 'local on-the-ground support'],
    industriesEyebrow: 'Industries',
    industries: ['Metal products', 'machine building', 'industrial equipment', 'components', 'raw material supply'],
  },
  contacts: {
    eyebrow: 'Contacts',
    lead: 'Reach out however\u2019s convenient — we reply within one business day.',
    emailLabel: 'Email',
    messengerLabel: 'Telegram / WhatsApp',
    wechatLabel: 'WeChat',
  },
  footer: {
    tagline: 'expertise without borders',
    copyright: '\u00a9 2026 MIRASA. All rights reserved.',
  },
};

export const translations = { ru, en };
export const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];
