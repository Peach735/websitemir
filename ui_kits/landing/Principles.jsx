// Principles — values block (dark, prominent)
const PRINCIPLES = [
  { n: '01', title: 'Конфиденциальность',
    text: 'Информация о поставщиках, заказчиках, ценах и условиях не передаётся третьим лицам.' },
  { n: '02', title: 'Профессионализм',
    text: 'Глубокое знание закупок, тендеров и контроля качества с позиции заказчика.' },
  { n: '03', title: 'Независимость',
    text: 'Действуем в интересах производителя, без скрытых аффилиаций и конфликта интересов.' },
  { n: '04', title: 'Ответственность за результат',
    text: 'Доводим сделку до конца — до поставки, приёмки и полной оплаты.' },
];

function Principles() {
  return (
    <section className="section principles" id="principles">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-index="05">Принципы работы</span>
          <h2 className="h2">На чём держится доверие</h2>
        </div>
        <div className="prin-grid">
          {PRINCIPLES.map((p, i) => (
            <div className="prin" key={i}>
              <span className="n">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Principles = Principles;
