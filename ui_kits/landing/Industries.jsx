// Industries
const INDUSTRIES = [
  { icon: 'cog', name: 'Машиностроение' },
  { icon: 'car', name: 'Автомобилестроение' },
  { icon: 'tractor', name: 'Сельхозмашиностроение' },
  { icon: 'flame', name: 'Металлургия' },
  { icon: 'frame', name: 'Металлоконструкции' },
  { icon: 'puzzle', name: 'Комплектующие' },
  { icon: 'factory', name: 'Промышленное оборудование' },
];

function Industries() {
  return (
    <section className="section section--tint" id="industries">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-index="04">Отрасли</span>
          <h2 className="h2">Где мы работаем</h2>
        </div>
        <div className="ind-tags">
          {INDUSTRIES.map((it, i) => (
            <span className="ind-tag" key={i}>
              <i data-lucide={it.icon}></i>{it.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Industries = Industries;
