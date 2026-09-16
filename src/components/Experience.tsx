import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechBadge } from './TechBadge';

export const Experience: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="experience" className="space-y-6 scroll-mt-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-[#6272a4]">
          {data.sections.experience.title}
        </h2>
        <span className="text-xs font-mono text-[#6272a4]/80">
          {data.sections.experience.subtitle}
        </span>
      </div>

      <div className="space-y-8">
        {data.experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative pl-4 border-l border-[#6272a4]/25 hover:border-[#bd93f9]/50 transition-colors"
          >
            {/* Active / Current indicator dot */}
            {exp.current && (
              <span className="relative flex h-2 w-2 -left-[21px] top-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}

            <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
              <h3 className="font-medium text-[#f8f8f2] group-hover:text-[#bd93f9] transition-colors">
                {exp.role} <span className="text-[#6272a4] font-normal">·</span> {exp.company}
              </h3>
              <span className="text-xs font-mono text-[#6272a4]">{exp.period}</span>
            </div>

            {exp.highlights && exp.highlights.length > 0 ? (
              <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-[#f8f8f2]/80 leading-relaxed list-disc list-inside marker:text-[#bd93f9]">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="pl-1">
                    <span className="-ml-1">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-xs sm:text-sm text-[#f8f8f2]/80 leading-relaxed">
                {exp.description}
              </p>
            )}

            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {exp.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} size="sm" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
