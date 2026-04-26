import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import TableOfContents from './components/TableOfContents';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import NaverLabsDataPlatform from './components/NaverLabsDataPlatform';
import NaverLabsResume from './components/NaverLabsResume';
import AckertonResume from './components/AckertonResume';
import AckertonPortfolio from './components/AckertonPortfolio';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [showCoverLetter, setShowCoverLetter] = useState(false);
  const [showNaverLabsDataPlatform, setShowNaverLabsDataPlatform] = useState(false);
  const [showNaverLabsResume, setShowNaverLabsResume] = useState(false);
  const [showAckertonResume, setShowAckertonResume] = useState(false);
  const [showAckertonPortfolio, setShowAckertonPortfolio] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setShowResume(hash === '#resume');
      setShowCoverLetter(hash.startsWith('#cover-letter-'));
      setShowNaverLabsDataPlatform(hash === '#naverlabs-data-platform' || hash === '#naverlabs');
      setShowNaverLabsResume(hash === '#naverlabs-resume' || hash === '#naverlabs-pdf');
      setShowAckertonResume(hash === '#ackerton-resume');
      setShowAckertonPortfolio(hash === '#ackerton-portfolio' || hash === '#ackerton');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <LanguageProvider>
      {showAckertonResume ? (
        <div className="min-h-screen">
          <AckertonResume />
        </div>
      ) : showAckertonPortfolio ? (
        <div className="min-h-screen">
          <AckertonPortfolio />
        </div>
      ) : showNaverLabsResume ? (
        <div className="min-h-screen">
          <NaverLabsResume />
        </div>
      ) : showNaverLabsDataPlatform ? (
        <div className="min-h-screen">
          <NaverLabsDataPlatform />
        </div>
      ) : showCoverLetter ? (
        <div className="min-h-screen">
          <CoverLetter />
        </div>
      ) : showResume ? (
        <div className="min-h-screen">
          <Resume />
        </div>
      ) : (
        <div className="min-h-screen">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
          <TechStack />
          <Contact />
          <TableOfContents />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
