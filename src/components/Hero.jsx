import React from 'react';
import Icon from './Icon.jsx';
import { Ph, Bridge, Refrain } from './common.jsx';
import logo from '../../assets/logo.svg';
import heroLogistics from '../../assets/photos/hero-logistics.jpg';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Hero({ variant }) {
  const { t } = useLanguage();
  const h = t.hero;

  const eyebrow = (
    <div className="eyebrow-row"><span className="eyebrow">{h.eyebrow}</span></div>
  );
  const headline = (
    <h1>{h.headline[0]}<span className="ink">{h.headline[1]}</span></h1>
  );
  const lead = (
    <p className="hero__lead">{h.lead}</p>
  );
  const cta = (
    <div className="hero__cta">
      <a className="btn btn-primary btn-lg" href="#contacts"><Icon name="arrow-right" />{h.cta}</a>
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
            label={h.wideLabel} />
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
              label={h.photoLabel}
              src={heroLogistics} />
          </div>
        </aside>
      </div>
      {/* Full-width strip: 3 cards in a ~400px column can't fit their labels,
          and the left-to-right metaphor reads better across the page. */}
      <div className="container hero__bridge-strip"><Bridge /></div>
    </section>
  );
}
