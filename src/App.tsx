import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
// import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0c0d0e] text-neutral-200 antialiased selection:bg-neutral-800 selection:text-white">
      {/* Top ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 flex justify-center z-0 overflow-hidden"
      >
        <div className="w-[700px] h-[400px] bg-emerald-500/8 blur-[160px] rounded-full -top-40 relative" />
      </div>

      {/* Fixed Navbar with brand, language switcher, and smooth section links */}
      <Navbar />

      {/* Main Single-page Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <Hero />
      </div>

      {/* Horizontal Marquee Ticker Banner (as in Reference Image 1) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <MarqueeBanner />
      </div>

      {/* Content Sections */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 pt-10 pb-20 space-y-16">
        <About />
        <Experience />
        <Skills />
        <Education />
        {/* <Projects /> - Ocultado temporariamente conforme solicitado */}
        <Footer />
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
