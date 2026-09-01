import React from 'react';
import Icon from './Icon.jsx';
import { Ph, SectionWatermark } from './common.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { tel } from './common.jsx';
import contactsPhoto from '../../assets/photos/contacts-email.jpg';

export default function Contacts({ email, wechat, telegram, whatsapp, phone }) {
  const { t } = useLanguage();
  const c = t.contacts;
  return (
    <section className="section contacts" id="contacts">
      <SectionWatermark />
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">{c.eyebrow}</span></div>
          <h2 className="h2">{c.heading}</h2>
        </div>
        <div className="contacts__inner">
          <div className="contacts__photo-frame">
            <Ph label={c.photoLabel} src={contactsPhoto} />
          </div>
          <div className="contacts__rows">
            <a className="crow crow--lead" href={'mailto:' + email}>
              <span className="crow__ic"><Icon name="mail" /></span>
              <span><span className="k">{c.emailLabel}</span><span className="v">{email}</span></span>
            </a>
            <div className="crow">
              <span className="crow__ic"><Icon name="message-square" /></span>
              <span><span className="k">{c.wechatLabel}</span><span className="v">{wechat}</span></span>
            </div>
            <div className="crow">
              <span className="crow__ic"><Icon name="send" /></span>
              <span><span className="k">{c.telegramLabel}</span><span className="v">{telegram}</span></span>
            </div>
            <div className="crow">
              <span className="crow__ic"><Icon name="message-circle" /></span>
              <span><span className="k">{c.whatsappLabel}</span><span className="v">{whatsapp}</span></span>
            </div>
            <a className="contacts__phone-plain" href={tel(phone)}>
              <span className="k">{c.phoneLabel}</span>
              <span className="v">{phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
