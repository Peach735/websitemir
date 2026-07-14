import React from 'react';
import Icon from './Icon.jsx';
import { tel } from './common.jsx';

export default function Contacts({ phone, email, messenger }) {
  return (
    <section className="section contacts" id="contacts">
      <div className="container contacts__inner">
        <div>
          <div className="eyebrow-row"><span className="eyebrow">Контакты</span></div>
          <div className="contacts__phone">{phone}</div>
          <a className="btn btn-primary btn-lg" href={tel(phone)}><Icon name="phone" />Позвонить</a>
        </div>
        <div className="contacts__rows">
          <a className="crow" href={tel(phone)}>
            <span className="crow__ic"><Icon name="phone" /></span>
            <span><span className="k">Телефон</span><span className="v">{phone}</span></span>
          </a>
          <a className="crow" href={'mailto:' + email}>
            <span className="crow__ic"><Icon name="mail" /></span>
            <span><span className="k">Email</span><span className="v">{email}</span></span>
          </a>
          <div className="crow">
            <span className="crow__ic"><Icon name="send" /></span>
            <span><span className="k">Telegram / WhatsApp</span><span className="v">{messenger}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
