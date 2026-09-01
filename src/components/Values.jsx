import React from 'react';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Values() {
  const { t } = useLanguage();
  const v = t.values;
  return (
    <section className="section" id="values">
      <SectionWatermark />
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">{v.eyebrow}</span></div>
          <h2 className="h2">{v.heading}</h2>
        </div>
        <div className="values__grid">
          {v.items.map((it) => (
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
