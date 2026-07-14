import React from 'react';
import Icon from './Icon.jsx';
import { tel } from './common.jsx';
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
        <span className="brand-lockup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img className="brand-mark" src={logo} alt="МИРАСА" />
        </span>
        <nav className="header__nav">
          <a href="#services">Услуги</a>
          <a href="#process">Процесс</a>
          <a href="#values">Принципы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="header__right">
          <div className="header__phone">
            <span className="k">Звоните</span>
            <span className="v">{phone}</span>
          </div>
          <a className="btn btn-primary" href={tel(phone)}>
            <Icon name="phone" />Позвонить
          </a>
        </div>
      </div>
    </header>
  );
}
