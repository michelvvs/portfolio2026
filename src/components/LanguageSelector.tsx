import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-lg bg-[#202230]/90 border border-[#6272a4]/30 text-xs font-mono select-none shadow-sm ${className}`}
      role="group"
      aria-label="Selecionar Idioma / Language Selector"
    >
      <div className="pl-1.5 pr-1 text-[#6272a4] flex items-center">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-2 py-1 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
          language === 'pt-BR'
            ? 'bg-[#bd93f9]/20 text-[#bd93f9] border border-[#bd93f9]/40 shadow-[0_0_8px_rgba(189,147,249,0.25)]'
            : 'text-[#6272a4] hover:text-[#f8f8f2]'
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
            ? 'bg-[#bd93f9]/20 text-[#bd93f9] border border-[#bd93f9]/40 shadow-[0_0_8px_rgba(189,147,249,0.25)]'
            : 'text-[#6272a4] hover:text-[#f8f8f2]'
        }`}
        title="English (US)"
        aria-pressed={language === 'en-US'}
      >
        EN
      </button>
    </div>
  );
};
