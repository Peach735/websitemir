import React from 'react';
import logo from '../../assets/logo.svg';

export default function Footer({ phone }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img className="brand-mark brand-mark--light" src={logo} alt="МИРАСА" />
          <span className="footer__copy">экспертиза без границ</span>
        </div>
        <span className="footer__copy">© 2026 МИРАСА. Все права защищены.</span>
      </div>
    </footer>
  );
}
