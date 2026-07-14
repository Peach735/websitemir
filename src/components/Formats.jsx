import React from 'react';
import Icon from './Icon.jsx';

const FORMATS = [
  { icon: 'message-square', title: 'Разовая консультация', text: 'Экспертная оценка продукции, рынка и перспектив сотрудничества.' },
  { icon: 'route', title: 'Проектное сопровождение', text: 'Полное сопровождение отдельной сделки, тендера или поставки.' },
  { icon: 'shield-check', title: 'Эксклюзивное представительство', text: 'Постоянное представление интересов производителя на рынках Беларуси и России.' },
];

export default function Formats() {
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
              <span className="fmt__ic"><Icon name={f.icon} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
