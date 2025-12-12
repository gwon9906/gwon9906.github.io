import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TableOfContents from './components/TableOfContents';
import Resume from './components/Resume';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // Check URL hash for resume page
    const handleHashChange = () => {
      setShowResume(window.location.hash === '#resume');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <LanguageProvider>
      {showResume ? (
        <div className="min-h-screen">
          <Resume />
        </div>
      ) : (
        <div className="min-h-screen">
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
          <TableOfContents />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
