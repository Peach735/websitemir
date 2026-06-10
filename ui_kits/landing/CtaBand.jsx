// CTA band — dark, phone-first conversion block before contacts
function CtaBand({ phone }) {
  const call = () => { window.location.href = 'tel:' + phone.replace(/\s/g, ''); };
  return (
    <section className="ctaband">
      <img className="ctaband__watermark" src="../../assets/logo.svg" alt="" aria-hidden="true" />
      <div className="container ctaband__inner">
        <div>
          <h2>Обсудим выход вашей продукции на рынки Беларуси и России</h2>
          <p>Один звонок — и мы оценим перспективы, риски и следующий шаг. Без обязательств.</p>
        </div>
        <div className="ctaband__actions">
          <button className="btn btn-primary btn-lg" onClick={call}>
            <i data-lucide="phone"></i>Позвонить
          </button>
          <a className="ctaband__phone" href={'tel:' + phone.replace(/\s/g, '')}>{phone}</a>
        </div>
      </div>
    </section>
  );
}
window.CtaBand = CtaBand;
