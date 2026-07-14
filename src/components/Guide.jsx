import React from 'react';
import Icon from './Icon.jsx';
import { tel } from './common.jsx';

export default function Guide({ phone }) {
  return (
    <section className="section section--tint" id="about">
      <div className="container guide__grid">
        <div className="guide__body">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow-row"><span className="eyebrow">Почему мост — это мы</span></div>
            <h2 className="h2">Мы знаем требования заказчика изнутри</h2>
          </div>
          <p className="lead">С нами вы переходите на новый рынок по готовому мосту —
            а не строите его в одиночку.</p>
          <p className="body">Основатель компании более 18 лет работал в закупках
            металлопродукции на МАЗ — одном из крупнейших машиностроительных
            предприятий Беларуси. Это редкое преимущество: взгляд изнутри
            закупочных служб, тендерных комиссий и контроля качества.</p>

          <a className="btn btn-primary btn-lg" href={tel(phone)} style={{ marginTop: 8 }}>
            <Icon name="phone" />Обсудить ваш случай
          </a>
        </div>
        <div className="guide__metrics">
          <div className="metric"><div className="num">18+</div><div className="lbl">лет в закупках металлопродукции</div></div>
          <div className="metric"><div className="num">МАЗ</div><div className="lbl">опыт внутри крупнейшего машзавода Беларуси</div></div>
          <div className="metric"><div className="num">БУТБ</div><div className="lbl">тендеры, госзакупки и биржевые торги</div></div>
          <div className="metric"><div className="num">2 рынка</div><div className="lbl">Беларусь и Россия — локальное присутствие</div></div>
        </div>
      </div>
    </section>
  );
}
