import React from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Purpose() {
  const { t } = useLanguage();
  const p = t.purpose;
  return (
    <section className="section purpose center">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 36 }}>
          <div className="eyebrow-row"><span className="eyebrow">{p.eyebrow}</span></div>
        </div>
        <p className="purpose__text">
        <em>{p.text}</em>.
        </p>
      </div>
    </section>
  );
}
