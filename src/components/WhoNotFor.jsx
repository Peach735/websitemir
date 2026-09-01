import React from 'react';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function WhoNotFor() {
  const { t } = useLanguage();
  const w = t.whoNotFor;
  return (
    <section className="section section--tint" id="who-not-for">
      <SectionWatermark />
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">{w.eyebrow}</span></div>
          <h2 className="h2">{w.heading}</h2>
        </div>
        <div className="values__grid">
          {w.items.map((it) => (
            <div className="value" key={it.n}>
              <span className="n">{it.n}</span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
