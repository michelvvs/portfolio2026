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
        <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-400">
          {data.sections.formation.title}
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          {data.sections.formation.subtitle}
        </span>
      </div>

      <div className="space-y-3">
        {data.education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-3.5 rounded-xl bg-neutral-900/30 border border-neutral-800/60"
          >
            <div>
              <h3 className="text-sm font-medium text-white">
                {edu.degree}
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                {edu.institution} {edu.status && <span className="text-neutral-500">· {edu.status}</span>}
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400 self-start sm:self-auto">
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
