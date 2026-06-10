// Hero — slogan + UTP + call CTA, with credential panel & trust strip
function Hero({ phone }) {
  const call = () => { window.location.href = 'tel:' + phone.replace(/\s/g, ''); };
  return (
    <section className="hero">
      <img className="hero__watermark" src="../../assets/logo.svg" alt="" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__main">
          <span className="eyebrow">Представительство иностранных производителей · Беларусь и Россия</span>
          <h1>МИРАСА — <span className="accent">экспертиза без&nbsp;границ</span></h1>
          <p className="hero__lead">
            Локальное представительство иностранных производителей промышленной продукции
            на рынках Беларуси и России — от первого контакта до получения оплаты.
          </p>
          <div className="hero__cta">
            <button className="btn btn-primary btn-lg" onClick={call}>
              <i data-lucide="phone"></i>Позвонить
            </button>
            <a className="hero__phone" href={'tel:' + phone.replace(/\s/g, '')}>
              <i data-lucide="phone-call"></i>{phone}
            </a>
          </div>
        </div>
        <aside className="hero__panel">
          <span className="hero__panel-eyebrow">Экспертиза основателя</span>
          <ul className="hero__facts">
            <li><span className="num">18+</span><span className="txt">лет в закупках металлопродукции</span></li>
            <li><span className="num">МАЗ</span><span className="txt">взгляд изнутри тендерных комиссий и контроля качества</span></li>
            <li><span className="num">БУТБ</span><span className="txt">тендеры, госзакупки и биржевые торги</span></li>
          </ul>
        </aside>
      </div>
      <div className="container">
        <div className="hero__strip">
          <span className="hero__strip-item"><i data-lucide="globe"></i>Китай · Европа · др. страны</span>
          <span className="hero__strip-item"><i data-lucide="map-pin"></i>Беларусь и Россия</span>
          <span className="hero__strip-item"><i data-lucide="route"></i>Полный цикл сделки</span>
          <span className="hero__strip-item"><i data-lucide="shield-check"></i>До получения оплаты</span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
