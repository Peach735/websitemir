import React from 'react';
import Icon from './Icon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Empathy() {
  const { t } = useLanguage();
  const e = t.empathy;
  return (
    <section className="section" id="problem">
      <div className="container empathy__grid">
        <div className="empathy__lead">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <div className="eyebrow-row"><span className="eyebrow">{e.eyebrow}</span></div>
            <h2 className="h2">{e.heading}</h2>
          </div>
          <p>{e.intro}</p>
          <ul className="empathy__questions">
            {e.questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <div className="empathy__turn">
            <strong>{e.turn}</strong>
          </div>
        </div>
        <div className="empathy__pains">
          {e.pains.map((p) => (
            <div className="pain" key={p.t}>
              <span className="pain__ic"><Icon name={p.icon} /></span>
              <div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
