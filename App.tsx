
import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Legal } from './components/Legal';
import { AuditPage } from './components/AuditPage';
import { ServicesPage } from './components/ServicesPage';
import { CookieBanner } from './components/CookieBanner';
import { ViewType } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('main');

  // Remonter en haut de page lors du changement de vue
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'main':
        return (
          <main>
            <Hero setView={setCurrentView} />
            <TrustedBy />
            <About />
            <Approach />
            <Services setView={setCurrentView} />
            <CaseStudies />
            <FAQ />
            <Contact />
          </main>
        );
      case 'audit-dedicated':
        return <AuditPage setView={setCurrentView} />;
      case 'services-detail':
        return <ServicesPage setView={setCurrentView} />;
      case 'mentions-legales':
      case 'confidentialite':
      case 'cgv':
        return <Legal view={currentView} setView={setCurrentView} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#111A4D] selection:bg-[#C1F4D8] selection:text-[#111A4D]">
      <Navigation setView={setCurrentView} currentView={currentView} />
      
      {renderContent()}
      
      <Footer setView={setCurrentView} />
      <Chatbot />
      <CookieBanner />
    </div>
  );
}

export default App;
