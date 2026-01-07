import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Clients } from './components/Clients';
import { Awards } from './components/Awards';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Language } from './utils/translations';

export default function App() {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Tools language={language} />
      <Services language={language} />
      <Projects language={language} />
      <Clients language={language} />
      <Awards language={language} />
      <Testimonials language={language} />
      <Gallery language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}
