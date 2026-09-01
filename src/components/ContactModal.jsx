import React from 'react';
import Icon from './Icon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ContactModal({ open, onClose, email }) {
  const { t } = useLanguage();
  const m = t.modal;

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-heading"
        onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" aria-label={m.close} onClick={onClose}>
          <Icon name="x" />
        </button>
        <h3 id="contact-modal-heading">{m.heading}</h3>
        <p className="modal__sub">{m.sub}</p>
        <a className="btn btn-primary btn-lg modal__email" href={'mailto:' + email}>
          <Icon name="mail" />{m.emailCta}
        </a>
        <a className="modal__alt" href="#contacts" onClick={onClose}>{m.altLink}</a>
      </div>
    </div>
  );
}
