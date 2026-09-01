import React from 'react';
import Icon from './Icon.jsx';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Formats() {
  const { t } = useLanguage();
  const f = t.formats;
  return (
    <section className="section section--tint" id="formats">
      <SectionWatermark />
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">{f.eyebrow}</span></div>
          <h2 className="h2">{f.heading}</h2>
        </div>
        <div className="fmt-grid">
          {f.items.map((it) => (
            <div className="fmt" key={it.title}>
              <span className="fmt__ic"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
