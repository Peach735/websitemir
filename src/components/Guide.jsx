import React from 'react';
import Icon from './Icon.jsx';
import { tel } from './common.jsx';

export default function Guide({ phone }) {
  return (
    <section className="section section--tint" id="about">
      <div className="container guide__grid">
        <div className="guide__body">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow-row"><span className="eyebrow">Почему МИРАСА — ваш мост на рынок</span></div>
            <h2 className="h2">Вы строите производство. Мы помогаем выстроить путь к заказчику</h2>
          </div>
          <p className="lead">МИРАСА обеспечивает локальное представительство производителей на рынках Беларуси и России, 
            сопровождая проекты от первого контакта до исполнения контракта и получения оплаты.</p>
          <p className="body">Наш опыт в сфере промышленных закупок позволяет понимать требования заказчиков, 
            особенности тендерных процедур и факторы, влияющие на принятие решений о закупках.</p>

          <a className="btn btn-primary btn-lg" href={tel(phone)} style={{ marginTop: 8 }}>
            <Icon name="phone" />Обсудить ваш случай
          </a>
        </div>
        <div className="guide__metrics">
          <div className="metric"><div className="num">18+</div><div className="lbl">лет практической экспертизы</div></div>
          <div className="metric"><div className="num">Беларусь и Россия</div><div className="lbl">локальное присутствие и сопровождение проектов</div></div>
          <div className="metric"><div className="num">Тендеры и биржевые торги</div><div className="lbl">сопровождение закупочных процедур и коммерческих сделок</div></div>
          <div className="metric"><div className="num">До результата</div><div className="lbl">контроль исполнения обязательств и расчетов по контракту</div></div>
        </div>
      </div>
    </section>
  );
}
