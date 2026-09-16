import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { portfolioContent, type Language, type PortfolioData } from '../data/portfolioData';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'michelvvs_lang';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === 'pt-BR' || saved === 'en-US') {
        return saved;
      }
      // Check browser preferences
      const navLang = navigator.language;
      if (navLang.startsWith('en')) {
        return 'en-US';
      }
    } catch {
      // Fallback
    }
    return 'pt-BR';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'pt-BR' ? 'en-US' : 'pt-BR';
    setLanguage(nextLang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === 'pt-BR'
        ? 'Michel Victor — Desenvolvedor Front/Mobile Senior'
        : 'Michel Victor — Senior Front-end & Mobile Engineer';
  }, [language]);

  const data = portfolioContent[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        data,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
