import React from 'react';
import Icon from './Icon.jsx';

const EXPECT = [
  { icon: 'eye', t: 'Экспертизу закупок и принятия решений' },
  { icon: 'route', t: 'Полное сопровождение сделки от рынка до контракта' },
  { icon: 'shield-check', t: 'Контроль исполнения и оплаты' },
  { icon: 'lock', t: 'Конфиденциальность на всех этапах' },
];

export default function Expect() {
  return (
    <section className="section section--tint" id="expect">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Что вы получаете</span></div>
          <h2 className="h2">С МИРАСА на вашей стороне</h2>
        </div>
        <div className="expect__grid">
          {EXPECT.map((e) => (
            <div className="expect" key={e.t}>
              <span className="expect__ic"><Icon name={e.icon} /></span>
              <h4>{e.t}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
