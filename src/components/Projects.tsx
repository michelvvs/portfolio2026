import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TechBadge } from './TechBadge';

export const Projects: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section id="projects" className="space-y-4 scroll-mt-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-400">
          {data.sections.projects.title}
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          {data.projects.length} {data.sections.projects.itemsCount}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {data.projects.map((project, index) => {
          const CardContent = (
            <div className="group relative p-4 rounded-xl bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-800/60 hover:border-neutral-700 transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-400">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.url && (
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                )}
              </div>

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-neutral-800/40">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} size="sm" />
                  ))}
                </div>
              )}
            </div>
          );

          return project.url ? (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="block focus:outline-none"
            >
              {CardContent}
            </a>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}
      </div>
    </section>
  );
};
