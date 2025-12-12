import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TableOfContents from './components/TableOfContents';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <TableOfContents />
      </div>
    </LanguageProvider>
  );
}

export default App;
