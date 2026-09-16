import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechBadge } from './TechBadge';
import { Layers, Palette, Cpu, Server } from 'lucide-react';

export const Skills: React.FC = () => {
  const { data } = useLanguage();

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-4 h-4 text-[#8be9fd]" />;
      case 1:
        return <Palette className="w-4 h-4 text-[#ff79c6]" />;
      case 2:
        return <Cpu className="w-4 h-4 text-[#bd93f9]" />;
      case 3:
      default:
        return <Server className="w-4 h-4 text-[#50fa7b]" />;
    }
  };

  return (
    <section id="skills" className="space-y-5 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono font-medium uppercase tracking-wider text-[#6272a4]">
          {data.sections.skills.title}
        </h2>
        <span className="text-xs font-mono text-[#6272a4]/80">
          {data.sections.skills.subtitle}
        </span>
      </div>

      {/* 2x2 Responsive Card Grid for High Scannability and Visual Hierarchy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.skills.map((skillGroup, index) => (
          <div
            key={index}
            className="group relative p-4 sm:p-5 rounded-2xl bg-[#202230]/40 hover:bg-[#202230]/80 border border-[#6272a4]/25 hover:border-[#bd93f9]/40 transition-all duration-300 flex flex-col justify-between space-y-3.5 shadow-sm"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between gap-2 border-b border-[#6272a4]/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#15161e]/70 border border-[#6272a4]/25">
                  {getCategoryIcon(index)}
                </div>
                <h3 className="text-sm font-semibold text-[#f8f8f2] group-hover:text-[#bd93f9] transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              <span className="text-[11px] font-mono text-[#6272a4] bg-[#15161e]/80 px-2 py-0.5 rounded-full border border-[#6272a4]/15">
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
                  className="bg-[#15161e]/80 hover:bg-[#282a36] border-[#6272a4]/25 hover:border-[#bd93f9]/40 text-[#f8f8f2] hover:shadow-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
