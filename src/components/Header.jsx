import React from 'react';
import Icon from './Icon.jsx';
import logo from '../../assets/logo.svg';

// Single source of truth: desktop nav and the mobile panel render the same links.
const NAV = [
  { href: '#services', label: 'Услуги' },
  { href: '#process', label: 'Процесс' },
  { href: '#formats', label: 'Форматы' },
  { href: '#values', label: 'Принципы' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header({ phone }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

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

  return (
    <>
    <header className={'header' + (scrolled ? ' header--scrolled' : '')}>
      <div className="container header__inner">
        <button
          type="button"
          className="brand-lockup"
          aria-label="МИРАСА — наверх"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img className="brand-mark" src={logo} alt="МИРАСА" />
        </button>
        <nav className="header__nav">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="header__right">
          <div className="header__phone">
            <div className="k">Звоните</div>
            <div className="v">{phone}</div>
          </div>
          <a className="btn btn-primary" href="#contacts">
            <Icon name="arrow-right" />
            <span className="btn__label">Запросить консультацию</span>
            <span className="btn__label--short">Консультация</span>
          </a>
          <button
            type="button"
            className="header__burger"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
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
