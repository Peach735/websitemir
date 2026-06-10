// Header — sticky, wordmark + phone CTA
function Header({ phone }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const call = () => { window.location.href = 'tel:' + phone.replace(/\s/g, ''); };
  return (
    <header className={'header' + (scrolled ? ' header--scrolled' : '')}>
      <div className="container header__inner">
        <span className="brand-lockup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img className="brand-mark" src="../../assets/logo.svg" alt="МИРАСА" />
        </span>
        <div className="header__right">
          <div className="header__phone">
            <span className="k">Звоните</span>
            <span className="v">{phone}</span>
          </div>
          <button className="btn btn-primary" onClick={call}>
            <i data-lucide="phone"></i>Позвонить
          </button>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
