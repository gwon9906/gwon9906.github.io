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
import Portfolio from './components/Portfolio';
import CoverLetter from './components/CoverLetter';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showCoverLetter, setShowCoverLetter] = useState(false);

  useEffect(() => {
    // Check URL hash for resume and cover letter pages
    const handleHashChange = () => {
      const hash = window.location.hash;
      setShowResume(hash === '#resume');
      setShowPortfolio(hash === '#portfolio');
      // Secret URL pattern: #cover-letter-xyz789abc
      setShowCoverLetter(hash.startsWith('#cover-letter-'));
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <LanguageProvider>
      {showCoverLetter ? (
        <div className="min-h-screen">
          <CoverLetter />
        </div>
      ) : showPortfolio ? (
        <div className="min-h-screen">
          <Portfolio />
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
