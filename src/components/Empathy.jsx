import React from 'react';
import Icon from './Icon.jsx';

const PAINS = [
  { icon: 'languages', t: 'Другой язык и правила', d: 'Документы, переписка и требования заказчика — на чужом для вас рынке.' },
  { icon: 'gavel', t: 'Тендеры и биржа', d: 'Госзакупки и торги на БУТБ со своими процедурами и сроками.' },
  { icon: 'clipboard-check', t: 'Сертификация и приёмка', d: 'Испытания, квалификация продукции, акты — где легко ошибиться.' },
  { icon: 'wallet', t: 'Риск по оплате', d: 'Дебиторская задолженность и сроки платежа без контроля на месте.' },
];

export default function Empathy() {
  return (
    <section className="section" id="problem">
      <div className="container empathy__grid">
        <div className="empathy__lead">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <div className="eyebrow-row"><span className="eyebrow">Знакомая ситуация</span></div>
            <h2 className="h2">Выход на чужой рынок может казаться неподъёмным</h2>
          </div>
          <p>Расстояние, незнакомые процедуры и отсутствие людей на месте — каждая сделка требует усилий, которых могло бы не быть.</p>
          <ul className="empathy__questions">
            <li>Дойдёт ли продукция до заказчика в срок?</li>
            <li>Пройдём ли мы тендер и приёмку?</li>
            <li>Получу ли я оплату — и когда?</li>
          </ul>
          <div className="empathy__turn">
            <strong>Мы понимаем. И мы рядом, чтобы помочь.</strong>
          </div>
        </div>
        <div className="empathy__pains">
          {PAINS.map((p) => (
            <div className="pain" key={p.t}>
              <span className="pain__ic"><Icon name={p.icon} /></span>
              <div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
