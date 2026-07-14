import React from 'react';
import Icon from './Icon.jsx';
import { tel, Ph, Bridge, Refrain } from './common.jsx';
import logo from '../../assets/logo.svg';
import heroProduction from '../../assets/photos/hero-production.jpg';
import heroLogistics from '../../assets/photos/hero-logistics.jpg';

export default function Hero({ phone, variant }) {
  const eyebrow = (
    <div className="eyebrow-row"><span className="eyebrow">Представительство иностранных производителей · Беларусь и Россия</span></div>
  );
  const headline = (
    <h1>Мост между вашим производством <span className="ink">и рынками Беларуси и&nbsp;России</span></h1>
  );
  const lead = (
    <p className="hero__lead">
      Вы делаете продукт. Мы проводим его на рынок — от первого контакта
      до получения оплаты. Локальное представительство с опытом закупок изнутри.
    </p>
  );
  const cta = (
    <div className="hero__cta">
      <a className="btn btn-primary btn-lg" href={tel(phone)}><Icon name="phone" />Позвонить</a>
      <a className="callrow" href={tel(phone)}><Icon name="phone-call" />{phone}</a>
    </div>
  );

  if (variant === 'B') {
    return (
      <section className="hero hero-b center">
        <img className="hero__watermark" src={logo} alt="" aria-hidden="true" />
        <div className="container hero__main">
          {eyebrow}
          {headline}
          {lead}
          {cta}
          <Refrain className="hero__refrain" />
        </div>
        <div className="container hero__bridge-wrap"><Bridge /></div>
        <div className="container hero__wide">
          <Ph
            label="фото · продукция в цехе производителя"
            src={heroProduction} />
        </div>
      </section>
    );
  }

  // Variant A — split
  return (
    <section className="hero hero-a">
      <img className="hero__watermark" src={logo} alt="" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__main">
          {eyebrow}
          {headline}
          {lead}
          {cta}
          <Refrain className="hero__refrain" />
        </div>
        <aside className="hero__aside">
          <div className="hero__photo-frame">
            <Ph
              label="фото · отгрузка / логистика"
              src={heroLogistics} />
          </div>
          <div className="hero__aside-bridge">
            <Bridge />
          </div>
        </aside>
      </div>
    </section>
  );
}
