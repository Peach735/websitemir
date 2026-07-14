import React from 'react';

const STEPS = [
  { n: 'Шаг 1', t: 'Звонок-знакомство', d: 'Вы звоните — мы разбираем продукт, рынок и задачу. Без обязательств.' },
  { n: 'Шаг 2', t: 'Оценка и план', d: 'Анализируем перспективы, риски и требования заказчика, предлагаем маршрут.' },
  { n: 'Шаг 3', t: 'Представительство и сделка', d: 'Ведём тендеры, биржу, испытания, приёмку — от вашего имени на месте.' },
  { n: 'Шаг 4', t: 'Контроль до оплаты', d: 'Контролируем платежи и закрываем сделку по факту оплаты.' },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Как мы строим мост</span></div>
          <h2 className="h2">Четыре шага — от звонка до оплаты</h2>
          <p className="lead">Вы всегда видите, на каком этапе ваша сделка.</p>
        </div>
        <div className="proc__grid">
          {STEPS.map((s) => (
            <div className="proc" key={s.n}>
              <span className="proc__n">{s.n}</span>
              <div className="proc__bar"></div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
