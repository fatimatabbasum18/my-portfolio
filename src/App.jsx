import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

// Components
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// Global styles
import './styles/global.css';
import './styles/animations.css';
import './styles/print.css';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(SECTION_IDS, 140);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Ambient Animated Orbs & Grid Overlay */}
      <div className="ambient-background" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      {/* Sticky Responsive Header */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top floating button */}
      <BackToTop />
    </div>
  );
}
