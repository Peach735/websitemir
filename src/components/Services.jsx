import React from 'react';
import Icon from './Icon.jsx';
import { Ph, SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import svcAnalytics from '../../assets/photos/svc-analytics.jpg';
import svcNegotiation from '../../assets/photos/svc-negotiation.jpg';
import svcQuality from '../../assets/photos/svc-quality.jpg';
import svcFinance from '../../assets/photos/svc-finance.jpg';

const IMAGES = [svcAnalytics, svcNegotiation, svcQuality, svcFinance];

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;
  return (
    <section className="section" id="services">
      <SectionWatermark />
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">{s.eyebrow}</span></div>
          <h2 className="h2">{s.heading}</h2>
          <p className="lead">{s.lead}</p>
        </div>
        <div className="svcrows">
          {s.items.map((it, i) => (
            <div className={'svcrow' + (i % 2 ? ' svcrow--flip' : '')} key={it.n}>
              <div className="svcrow__media"><Ph label={it.media} src={IMAGES[i]} /></div>
              <div>
                <span className="svcrow__n">{it.n}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <ul className="svcrow__list">
                  {it.items.map((li) => (
                    <li key={li}><Icon name="check" />{li}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
