import React from 'react';
import { SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

// Separators come from CSS ::after so they stay glued to their word instead of
// dangling alone at the end of a wrapped line.
function TagRow({ items }) {
  return (
    <div className="geo__tags">
      {items.map((it) => (
        <span key={it}>{it}</span>
      ))}
    </div>
  );
}

export default function GeoIndustries() {
  const { t } = useLanguage();
  const g = t.geoIndustries;
  return (
    <section className="section section--compact" id="geo-industries">
      <SectionWatermark />
      <div className="container geo__grid">
        <div className="geo__block">
          <div className="eyebrow-row"><span className="eyebrow">{g.geoEyebrow}</span></div>
          <TagRow items={g.geo} />
        </div>
        <div className="geo__block">
          <div className="eyebrow-row"><span className="eyebrow">{g.industriesEyebrow}</span></div>
          <TagRow items={g.industries} />
        </div>
      </div>
    </section>
  );
}
