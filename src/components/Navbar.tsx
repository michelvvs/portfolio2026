import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const Navbar: React.FC = () => {
  const { data } = useLanguage();
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: data.nav.about, href: '#about' },
    { label: data.nav.experience, href: '#experience' },
    { label: data.nav.skills, href: '#skills' },
    { label: data.nav.formation, href: '#formation' },
    { label: data.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'skills', 'formation', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d0e]/85 backdrop-blur-md border-b border-neutral-800/60 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand Logo: HTML tag "<michelvvs />" */}
        <a
          href="#"
          className="text-base sm:text-lg font-mono font-bold tracking-tight text-white flex items-center group flex-shrink-0 transition-transform hover:scale-105"
        >
          <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">&lt;</span>
          <span className="text-neutral-100 group-hover:text-white px-0.5">michelvvs</span>
          <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors"> /&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Language Selector + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <LanguageSelector />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-400 hover:text-white rounded-lg focus:outline-none cursor-pointer"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d0e]/95 backdrop-blur-lg border-b border-neutral-800 px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-neutral-300 hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
