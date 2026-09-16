import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MarqueeBanner: React.FC = () => {
  const { data } = useLanguage();
  const keywords = data.marqueeKeywords;

  return (
    <div className="w-full overflow-hidden border-y border-neutral-800/80 bg-neutral-950/40 py-3 my-4">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* First repetition */}
        <div className="flex items-center gap-6 px-3">
          {keywords.map((word, idx) => (
            <React.Fragment key={`k1-${idx}`}>
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-neutral-300 hover:text-white transition-colors cursor-default">
                {word}
              </span>
              <span className="text-emerald-400 font-mono font-bold text-xs sm:text-sm select-none">
                /
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Second repetition for seamless loop */}
        <div className="flex items-center gap-6 px-3" aria-hidden="true">
          {keywords.map((word, idx) => (
            <React.Fragment key={`k2-${idx}`}>
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-neutral-300 hover:text-white transition-colors cursor-default">
                {word}
              </span>
              <span className="text-emerald-400 font-mono font-bold text-xs sm:text-sm select-none">
                /
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
