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

const EMAIL = 'mirasametby@gmail.com';
const MESSENGER = '@mirasa';
const WECHAT = '@mirasa';

export default function App() {
  return (
    <>
      <Header email={EMAIL} />
      <div className="page" data-density="comfortable" data-images="on" data-bridge="on">
        <main>
          <Hero variant="A" />
          <Empathy />
          <Services />
          <CtaBand />
          <Process />
          <Formats />
          <Expect />
          <Guide />
          <Purpose />
          <Values />
          <WhoNotFor />
          <GeoIndustries />
          <Contacts email={EMAIL} messenger={MESSENGER} wechat={WECHAT} />
        </main>
        <Footer />
      </div>
    </>
  );
}
