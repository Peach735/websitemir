// DealCycle — horizontal ribbon of steps
const STEPS = [
  'Анализ рынка', 'Поиск клиента', 'Переговоры', 'Коммерческое предложение',
  'Тендеры / биржа', 'Испытания', 'Контракт', 'Поставка', 'Приёмка',
  'Претензии', 'Контроль оплаты',
];

function DealCycle() {
  return (
    <section className="section" id="cycle">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-index="03">Полный цикл сделки</span>
          <h2 className="h2">От анализа рынка до получения оплаты</h2>
          <p className="lead">Сопровождаем каждый шаг — без разрывов ответственности.</p>
        </div>
      </div>
      <div className="container">
        <div className="cycle__scroll">
          {STEPS.map((s, i) => (
            <div className="cycle__step" key={i}>
              <div className="cycle__card">
                <span className="cycle__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="cycle__name">{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <span className="cycle__arrow"><i data-lucide="arrow-right"></i></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.DealCycle = DealCycle;
