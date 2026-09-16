import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs font-mono select-none ${className}`}
      role="group"
      aria-label="Selecionar Idioma / Language Selector"
    >
      <div className="pl-1.5 pr-1 text-neutral-500 flex items-center">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-2 py-1 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
          language === 'pt-BR'
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
            : 'text-neutral-400 hover:text-white'
        }`}
        title="Português (Brasil)"
        aria-pressed={language === 'pt-BR'}
      >
        PT
      </button>

      <button
        onClick={() => setLanguage('en-US')}
        className={`px-2 py-1 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
          language === 'en-US'
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
            : 'text-neutral-400 hover:text-white'
        }`}
        title="English (US)"
        aria-pressed={language === 'en-US'}
      >
        EN
      </button>
    </div>
  );
};
