// App — composes the МИРАСА landing page
// Example values (placeholders) — replace with real contacts before launch.
const PHONE = '+375 (29) 123-45-67';
const EMAIL = 'info@mirasa.by';
const MESSENGER = '@mirasa';

function App() {
  // Re-render Lucide icons after every paint (covers accordion toggles etc.)
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return (
    <React.Fragment>
      <Header phone={PHONE} />
      <main>
        <Hero phone={PHONE} />
        <About />
        <Services />
        <DealCycle />
        <Industries />
        <Principles />
        <Formats />
        <CtaBand phone={PHONE} />
        <Contacts phone={PHONE} email={EMAIL} messenger={MESSENGER} />
      </main>
      <Footer phone={PHONE} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
