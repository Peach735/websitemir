// Formats — three cooperation models
const FORMATS = [
  { icon: 'message-square', title: 'Разовая консультация',
    text: 'Точечная экспертиза по конкретному вопросу: рынок, тендер, документация или сделка.' },
  { icon: 'route', title: 'Проектное сопровождение',
    text: 'Ведение отдельного проекта или сделки — от анализа рынка до контроля оплаты.' },
  { icon: 'shield-check', title: 'Эксклюзивное представительство',
    text: 'Постоянное локальное представительство производителя на рынках Беларуси и России.' },
];

function Formats() {
  return (
    <section className="section" id="formats">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-index="06">Форматы сотрудничества</span>
          <h2 className="h2">Выберите подходящий формат</h2>
        </div>
        <div className="fmt-grid">
          {FORMATS.map((f, i) => (
            <div className="fmt" key={i}>
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
window.Formats = Formats;
