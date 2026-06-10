// app-print.jsx — static print build (no Tweaks, fixed settings) for PDF export
const PHONE = '+375 (29) 123-45-67';
const EMAIL = 'info@mirasa.by';
const MESSENGER = '@mirasa';

function PrintApp() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <React.Fragment>
      <Header phone={PHONE} />
      <div className="page" data-density="comfortable" data-images="on" data-bridge="on">
        <main>
          <Hero phone={PHONE} variant="A" />
          <Empathy />
          <Guide phone={PHONE} />
          <Services />
          <CtaBand phone={PHONE}
            title="Обсудим выход вашей продукции на рынки Беларуси и России"
            text="Один звонок — оценим перспективы и риски. Без обязательств." />
          <Purpose />
          <Expect />
          <Process />
          <Formats />
          <Values />
          <Contacts phone={PHONE} email={EMAIL} messenger={MESSENGER} />
        </main>
        <Footer phone={PHONE} />
      </div>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PrintApp />);

// Auto-print once React has mounted and fonts are ready.
(function autoPrint() {
  const ready = () => document.querySelector('#root .page');
  const go = () => {
    const fonts = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    fonts.then(() => setTimeout(() => window.print(), 600));
  };
  const wait = () => ready() ? go() : setTimeout(wait, 100);
  wait();
})();
