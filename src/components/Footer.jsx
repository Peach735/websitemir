import React from 'react';
import logo from '../../assets/logo.svg';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img className="brand-mark brand-mark--light" src={logo} alt="МИРАСА" />
          <span className="footer__copy">{t.footer.tagline}</span>
        </div>
        <span className="footer__copy">{t.footer.copyright}</span>
      </div>
    </footer>
  );
}
