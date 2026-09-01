import React from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Process() {
  const { t } = useLanguage();
  const p = t.process;
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">{p.eyebrow}</span></div>
          <h2 className="h2">{p.heading}</h2>
          <p className="lead">{p.lead}</p>
        </div>
        <div className="proc__grid">
          {p.steps.map((s) => (
            <div className="proc" key={s.n}>
              <span className="proc__n">{s.n}</span>
              <div className="proc__bar"></div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
