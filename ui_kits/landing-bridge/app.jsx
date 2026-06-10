// app.jsx — composes the МИРАСА "Мост на рынок" landing + Tweaks

const PHONE = '+375 (29) 123-45-67';
const EMAIL = 'info@mirasa.by';
const MESSENGER = '@mirasa';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "Сплит",
  "density": "Просторно",
  "images": true,
  "bridge": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Re-render Lucide icons after every paint (covers tweak-driven re-renders).
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const variant = t.hero === 'По центру' ? 'B' : 'A';
  const density = t.density === 'Компактно' ? 'compact' : 'comfortable';

  return (
    <React.Fragment>
      <Header phone={PHONE} />
      <div className="page" data-density={density}
           data-images={t.images ? 'on' : 'off'}
           data-bridge={t.bridge ? 'on' : 'off'}>
        <main>
          <Hero phone={PHONE} variant={variant} />
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

      <TweaksPanel>
        <TweakSection label="Главный экран" />
        <TweakRadio label="Вариант героя" value={t.hero}
          options={['Сплит', 'По центру']}
          onChange={(v) => setTweak('hero', v)} />
        <TweakSection label="Вёрстка" />
        <TweakRadio label="Плотность" value={t.density}
          options={['Просторно', 'Компактно']}
          onChange={(v) => setTweak('density', v)} />
        <TweakToggle label="Изображения" value={t.images}
          onChange={(v) => setTweak('images', v)} />
        <TweakToggle label="Схема «мост»" value={t.bridge}
          onChange={(v) => setTweak('bridge', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
