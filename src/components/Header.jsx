import React from 'react';
import Icon from './Icon.jsx';
import logo from '../../assets/logo.svg';

export default function Header({ phone }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
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
          <a href="#services">Услуги</a>
          <a href="#process">Процесс</a>
          <a href="#values">Принципы</a>
          <a href="#contacts">Контакты</a>
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
        </div>
      </div>
    </header>
  );
}
