import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechBadge } from './TechBadge';
import { Layers, Palette, Cpu, Server } from 'lucide-react';

export const Skills: React.FC = () => {
  const { data } = useLanguage();

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Palette className="w-4 h-4 text-emerald-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 3:
      default:
        return <Server className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="space-y-5 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-400">
          {data.sections.skills.title}
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          {data.sections.skills.subtitle}
        </span>
      </div>

      {/* 2x2 Responsive Card Grid for High Scannability and Visual Hierarchy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.skills.map((skillGroup, index) => (
          <div
            key={index}
            className="group relative p-4 sm:p-5 rounded-2xl bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/70 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between space-y-3.5 shadow-sm"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between gap-2 border-b border-neutral-800/60 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-neutral-800/60 border border-neutral-700/40">
                  {getCategoryIcon(index)}
                </div>
                <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              <span className="text-[11px] font-mono text-neutral-500 bg-neutral-800/40 px-2 py-0.5 rounded-full">
                {skillGroup.items.length}
              </span>
            </div>

            {/* Badges Flow */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {skillGroup.items.map((item) => (
                <TechBadge
                  key={item}
                  name={item}
                  size="md"
                  className="bg-neutral-950/70 hover:bg-neutral-800 border-neutral-800/80 hover:border-emerald-500/30 hover:shadow-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
