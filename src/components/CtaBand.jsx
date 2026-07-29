import React from 'react';
import Icon from './Icon.jsx';
import logo from '../../assets/logo.svg';

export default function CtaBand({ email, title, text }) {
  return (
    <section className="ctaband">
      <img className="ctaband__watermark" src={logo} alt="" aria-hidden="true" />
      <div className="container ctaband__inner">
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <div className="ctaband__actions">
          <a className="btn btn-primary btn-lg" href={'mailto:' + email}><Icon name="mail" />Запросить консультацию</a>
        </div>
      </div>
    </section>
  );
}
