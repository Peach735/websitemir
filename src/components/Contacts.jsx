import React from 'react';
import Icon from './Icon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function Contacts({ email, messenger, wechat }) {
  const { t } = useLanguage();
  const c = t.contacts;
  return (
    <section className="section contacts" id="contacts">
      <div className="container contacts__inner">
        <div>
          <div className="eyebrow-row"><span className="eyebrow">{c.eyebrow}</span></div>
          <p className="contacts__lead">{c.lead}</p>
        </div>
        <div className="contacts__rows">
          <a className="crow" href={'mailto:' + email}>
            <span className="crow__ic"><Icon name="mail" /></span>
            <span><span className="k">{c.emailLabel}</span><span className="v">{email}</span></span>
          </a>
          <div className="crow">
            <span className="crow__ic"><Icon name="send" /></span>
            <span><span className="k">{c.messengerLabel}</span><span className="v">{messenger}</span></span>
          </div>
          <div className="crow">
            <span className="crow__ic"><Icon name="message-square" /></span>
            <span><span className="k">{c.wechatLabel}</span><span className="v">{wechat}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
