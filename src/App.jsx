import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Empathy from './components/Empathy.jsx';
import Guide from './components/Guide.jsx';
import Services from './components/Services.jsx';
import CtaBand from './components/CtaBand.jsx';
import Purpose from './components/Purpose.jsx';
import Expect from './components/Expect.jsx';
import Process from './components/Process.jsx';
import Formats from './components/Formats.jsx';
import Values from './components/Values.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

const PHONE = '+375 (29) 123-45-67';
const EMAIL = 'info@mirasa.by';
const MESSENGER = '@mirasa';

export default function App() {
  return (
    <>
      <Header phone={PHONE} />
      <div className="page" data-density="comfortable" data-images="on" data-bridge="on">
        <main>
          <Hero phone={PHONE} variant="A" />
          <Empathy />
          <Guide phone={PHONE} />
          <Services />
          <CtaBand phone={PHONE}
            title="Обсудим выход вашей продукции на рынки Беларуси и России"
            text="Один звонок — и вы получите профессиональную оценку возможностей, рисков и дальнейших шагов." />
          <Purpose />
          <Expect />
          <Process />
          <Formats />
          <Values />
          <Contacts phone={PHONE} email={EMAIL} messenger={MESSENGER} />
        </main>
        <Footer phone={PHONE} />
      </div>
    </>
  );
}
