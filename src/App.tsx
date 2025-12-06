import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TableOfContents from './components/TableOfContents';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <TableOfContents />
    </div>
  );
}

export default App;
