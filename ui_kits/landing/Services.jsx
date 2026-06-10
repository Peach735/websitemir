// Services — 4 accordion cards
const SERVICES = [
  {
    icon: 'compass', title: 'Выход на рынок',
    items: ['Оценка перспектив продукции на рынке', 'Анализ конкурентов и цен',
      'Сертификация и подготовка документации', 'Стратегия вывода продукта',
      'Коммерческие предложения'],
  },
  {
    icon: 'handshake', title: 'Продажи и представительство',
    items: ['Поиск клиентов и каналов сбыта', 'Локальное представительство производителя',
      'Деловая переписка и переговоры'],
  },
  {
    icon: 'file-check', title: 'Сопровождение сделки',
    items: ['Тендеры и государственные закупки', 'Биржевые торги (БУТБ)',
      'Испытания и квалификация продукции', 'Приёмка продукции',
      'Работа с рекламациями и претензиями'],
  },
  {
    icon: 'wallet', title: 'Финансовый контроль',
    items: ['Контроль платежей и сроков оплаты', 'Работа с дебиторской задолженностью'],
  },
];

function ServiceCard({ data, open, onToggle }) {
  return (
    <div className={'svc' + (open ? ' svc--open' : '')}>
      <div className="svc__hd" onClick={onToggle}>
        <span className="svc__ic"><i data-lucide={data.icon}></i></span>
        <span className="svc__ti">{data.title}</span>
        <span className="svc__chev"><i data-lucide="chevron-down"></i></span>
      </div>
      <div className="svc__panel">
        <div className="svc__panel-inner">
          <ul className="svc__list">
            {data.items.map((it, i) => (
              <li key={i}><i data-lucide="check"></i>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section section--tint" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-index="02">Услуги</span>
          <h2 className="h2">Четыре направления — полное сопровождение</h2>
          <p className="lead">Раскройте блок, чтобы увидеть состав работ по каждому направлению.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} data={s} open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
