import React from 'react';
import Icon from './Icon.jsx';

export default function Guide({ email }) {
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

          <div className="guide__why">
            <h3>Почему это работает</h3>
            <p className="body">Мы понимаем, как принимаются решения о закупках: требования технических служб,
              логика тендерных комиссий и критерии выбора поставщиков.</p>
            <p className="body">Это позволяет заранее учитывать реальные факторы, влияющие на допуск продукции,
              победу в закупке и успешное исполнение контракта.</p>
          </div>

          <a className="btn btn-primary btn-lg" href={'mailto:' + email} style={{ marginTop: 8 }}>
            <Icon name="mail" />Запросить консультацию
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
