import React from 'react';

const GEO = ['Беларусь', 'Россия', 'локальное сопровождение на месте'];
const INDUSTRIES = ['Металлопродукция', 'машиностроение', 'промышленное оборудование', 'комплектующие', 'сырьевые поставки'];

function TagRow({ items }) {
  return (
    <div className="geo__tags">
      {items.map((it, i) => (
        <React.Fragment key={it}>
          {i > 0 && <span className="dot">·</span>}
          <span>{it}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function GeoIndustries() {
  return (
    <section className="section" id="geo-industries">
      <div className="container geo__grid">
        <div className="geo__block">
          <div className="eyebrow-row"><span className="eyebrow">География работы</span></div>
          <TagRow items={GEO} />
        </div>
        <div className="geo__block">
          <div className="eyebrow-row"><span className="eyebrow">Отрасли</span></div>
          <TagRow items={INDUSTRIES} />
        </div>
      </div>
    </section>
  );
}
