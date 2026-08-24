import React from 'react';
import Icon from './Icon.jsx';
import logo from '../../assets/logo.svg';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function CtaBand() {
  const { t } = useLanguage();
  const c = t.ctaband;
  return (
    <section className="ctaband">
      <img className="ctaband__watermark" src={logo} alt="" aria-hidden="true" />
      <div className="container ctaband__inner">
        <div>
          <h2>{c.title}</h2>
          {c.text && <p>{c.text}</p>}
        </div>
        <div className="ctaband__actions">
          <a className="btn btn-primary btn-lg" href="#contacts"><Icon name="arrow-right" />{c.cta}</a>
        </div>
      </div>
    </section>
  );
}
