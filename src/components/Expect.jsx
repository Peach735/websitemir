import React from 'react';
import Icon from './Icon.jsx';

const EXPECT = [
  { icon: 'eye', t: 'Взгляд заказчика изнутри' },
  { icon: 'route', t: 'Сопровождение полного цикла' },
  { icon: 'shield-check', t: 'Контроль до получения оплаты' },
  { icon: 'lock', t: 'Полная конфиденциальность' },
];

export default function Expect() {
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
              <span className="expect__ic"><Icon name={e.icon} /></span>
              <h4>{e.t}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
