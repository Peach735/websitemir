import React from 'react';
import Icon from './Icon.jsx';
import logo from '../../assets/logo.svg';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { LANGUAGES } from '../i18n/translations.js';

export default function Header({ email }) {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Single source of truth: desktop nav and the mobile panel render the same links.
  const NAV = [
    { href: '#services', label: t.nav.services },
    { href: '#process', label: t.nav.process },
    { href: '#formats', label: t.nav.formats },
    { href: '#values', label: t.nav.values },
    { href: '#contacts', label: t.nav.contacts },
  ];

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the panel is open: lock page scroll and let Escape close it.
  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  // A resize past the breakpoint must not leave the panel stuck open.
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 981px)');
    const onChange = (e) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const LangSwitch = ({ className }) => (
    <div className={'lang-switch' + (className ? ' ' + className : '')} role="group" aria-label="Language">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          className={'lang-switch__btn' + (lang === l.code ? ' is-active' : '')}
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}>
          {l.label}
        </button>
      ))}
    </div>
  );

  return (
    <>
    <header className={'header' + (scrolled ? ' header--scrolled' : '')}>
      <div className="container header__inner">
        <button
          type="button"
          className="brand-lockup"
          aria-label={t.header.brandAria}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img className="brand-mark" src={logo} alt="МИРАСА" />
        </button>
        <nav className="header__nav">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="header__right">
          <a className="header__phone" href={'mailto:' + email}>
            <div className="k">{t.header.emailLabel}</div>
            <div className="v">{email}</div>
          </a>
          <LangSwitch className="header__lang" />
          <a className="btn btn-primary" href="#contacts">
            <Icon name="arrow-right" />
            <span className="btn__label">{t.header.consultation}</span>
            <span className="btn__label--short">{t.header.consultationShort}</span>
          </a>
          <button
            type="button"
            className="header__burger"
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'x' : 'menu'} />
          </button>
        </div>
      </div>

      <div
        className={'mobnav' + (menuOpen ? ' mobnav--open' : '')}
        id="mobile-nav"
        hidden={!menuOpen}>
        <nav className="mobnav__list">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
              <Icon name="arrow-right" />
            </a>
          ))}
        </nav>
        <LangSwitch className="mobnav__lang" />
      </div>
    </header>
    {/* Outside <header>: its backdrop-filter would make it the containing
        block for position:fixed children, collapsing the scrim to nothing. */}
    {menuOpen && (
      <div className="mobnav__scrim" onClick={() => setMenuOpen(false)} aria-hidden="true" />
    )}
    </>
  );
}
