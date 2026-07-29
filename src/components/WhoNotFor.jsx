import React from 'react';

const REASONS = [
  { n: '01', t: 'Разовые запросы', d: 'Мы не работаем с разовыми случайными запросами без намерения выходить на рынок системно.' },
  { n: '02', t: 'Перепродажа продукции', d: 'Мы не занимаемся перепродажей продукции и не выступаем торговым посредником без участия в сопровождении сделки.' },
  { n: '03', t: 'Непрозрачные условия', d: 'Мы не берем проекты без прозрачных условий сотрудничества и понятной коммерческой цели.' },
];

export default function WhoNotFor() {
  return (
    <section className="section section--tint" id="who-not-for">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Границы сотрудничества</span></div>
          <h2 className="h2">Кому мы не подходим</h2>
        </div>
        <div className="values__grid">
          {REASONS.map((r) => (
            <div className="value" key={r.n}>
              <span className="n">{r.n}</span>
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
