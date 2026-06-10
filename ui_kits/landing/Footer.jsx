// Footer
function Footer({ phone }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img className="brand-mark brand-mark--light" src="../../assets/logo.svg" alt="МИРАСА" />
          <span className="footer__copy">экспертиза без границ</span>
        </div>
        <a className="footer__phone" href={'tel:' + phone.replace(/\s/g, '')}>{phone}</a>
        <span className="footer__copy">© 2026 МИРАСА. Все права защищены.</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
