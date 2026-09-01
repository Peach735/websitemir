import React from 'react';
import Icon from './Icon.jsx';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Expect() {
  const { t } = useLanguage();
  const e = t.expect;
  return (
    <section className="section section--tint" id="expect">
      <SectionWatermark />
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">{e.eyebrow}</span></div>
          <h2 className="h2">{e.heading}</h2>
        </div>
        <div className="expect__grid">
          {e.items.map((it) => (
            <div className="expect" key={it.t}>
              <span className="expect__ic"><Icon name={it.icon} /></span>
              <h4>{it.t}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
