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
import WhoNotFor from './components/WhoNotFor.jsx';
import GeoIndustries from './components/GeoIndustries.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

const PHONE = '+375 (29) 123-45-67';
const EMAIL = 'info@mirasa.by';
const MESSENGER = '@mirasa';
const WECHAT = '@mirasa';

export default function App() {
  return (
    <>
      <Header phone={PHONE} />
      <div className="page" data-density="comfortable" data-images="on" data-bridge="on">
        <main>
          <Hero phone={PHONE} variant="A" />
          <Empathy />
          <Services />
          <CtaBand
            title="Обсудим выход вашей продукции на рынки Беларуси и России"
            text="Одна консультация — и вы получите профессиональную оценку возможностей, рисков и дальнейших шагов." />
          <Process />
          <Formats />
          <Expect />
          <Guide />
          <Purpose />
          <Values />
          <WhoNotFor />
          <GeoIndustries />
          <Contacts phone={PHONE} email={EMAIL} messenger={MESSENGER} wechat={WECHAT} />
        </main>
        <Footer phone={PHONE} />
      </div>
    </>
  );
}
