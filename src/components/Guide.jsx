import React from 'react';
import Icon from './Icon.jsx';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Guide() {
  const { t } = useLanguage();
  const g = t.guide;
  return (
    <section className="section section--tint" id="about">
      <SectionWatermark />
      <div className="container guide__grid">
        <div className="guide__body">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow-row"><span className="eyebrow">{g.eyebrow}</span></div>
            <h2 className="h2">{g.heading}</h2>
          </div>
          <p className="lead">{g.lead}</p>
          <p className="body">{g.body}</p>

          <div className="guide__why">
            <h3>{g.whyTitle}</h3>
            <p className="body">{g.why1}</p>
            <p className="body">{g.why2}</p>
          </div>

          <a className="btn btn-primary btn-lg" href="#contacts" style={{ marginTop: 8 }}>
            <Icon name="arrow-right" />{g.cta}
          </a>
        </div>
        <div className="guide__metrics">
          {g.metrics.map((m) => (
            <div className="metric" key={m.num + m.lbl}><div className="num">{m.num}</div><div className="lbl">{m.lbl}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
