import React from 'react';
import Icon from './Icon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ContactModal({ open, onClose, email }) {
  const { t } = useLanguage();
  const m = t.modal;
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;
      const modalEl = modalRef.current;
      if (!modalEl) return;
      const focusables = Array.from(
        modalEl.querySelectorAll('button, a[href]')
      ).filter((el) => !el.hasAttribute('disabled'));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first || !modalEl.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const previouslyFocused = document.activeElement;
    const closeBtn = modalRef.current?.querySelector('.modal__close');
    closeBtn?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div
        ref={modalRef}
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
