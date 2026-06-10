// Contacts — phone-first
function Contacts({ phone, email, messenger }) {
  const call = () => { window.location.href = 'tel:' + phone.replace(/\s/g, ''); };
  return (
    <section className="section contacts" id="contacts">
      <div className="container contacts__inner">
        <div>
          <span className="eyebrow" data-index="07">Контакты</span>
          <div className="contacts__phone">{phone}</div>
          <button className="btn btn-primary btn-lg" onClick={call}>
            <i data-lucide="phone"></i>Позвонить
          </button>
        </div>
        <div className="contacts__rows">
          <a className="crow" href={'tel:' + phone.replace(/\s/g, '')}>
            <span className="crow__ic"><i data-lucide="phone"></i></span>
            <span className="col"><span className="k">Телефон</span><span className="v">{phone}</span></span>
          </a>
          <a className="crow" href={'mailto:' + email}>
            <span className="crow__ic"><i data-lucide="mail"></i></span>
            <span className="col"><span className="k">Email</span><span className="v">{email}</span></span>
          </a>
          <div className="crow">
            <span className="crow__ic"><i data-lucide="send"></i></span>
            <span className="col"><span className="k">Telegram / WhatsApp</span><span className="v">{messenger}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contacts = Contacts;
