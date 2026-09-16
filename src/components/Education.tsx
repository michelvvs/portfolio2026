import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Education: React.FC = () => {
  const { data } = useLanguage();

  if (!data.education || data.education.length === 0) {
    return null;
  }

  return (
    <section id="formation" className="space-y-4 scroll-mt-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-[#6272a4]">
          {data.sections.formation.title}
        </h2>
        <span className="text-xs font-mono text-[#6272a4]/80">
          {data.sections.formation.subtitle}
        </span>
      </div>

      <div className="space-y-3">
        {data.education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-3.5 rounded-xl bg-[#202230]/35 hover:bg-[#202230]/70 border border-[#6272a4]/25 transition-all shadow-sm"
          >
            <div>
              <h3 className="text-sm font-medium text-[#f8f8f2]">
                {edu.degree}
              </h3>
              <p className="text-xs text-[#6272a4] mt-0.5">
                {edu.institution} {edu.status && <span className="text-[#bd93f9]">· {edu.status}</span>}
              </p>
            </div>
            <span className="text-xs font-mono text-[#6272a4] self-start sm:self-auto">
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
