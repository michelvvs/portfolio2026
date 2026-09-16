import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiExpo,
  SiStorybook,
  SiRadixui,
  SiShadcnui,
  SiStyledcomponents,
  SiMui,
  SiRedux,
  SiReactquery,
  SiJest,
  SiCypress,
  SiTestinglibrary,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiVite,
  SiDocker,
  SiFigma,
  SiPuppeteer,
  SiJsonwebtokens,
  SiPhp,
  SiAntdesign,
  SiBootstrap,
  SiWordpress,
  SiSwagger,
} from 'react-icons/si';
import {
  TbBrandZulip,
  TbChartLine,
  TbInfinity,
  TbComponents,
  TbApi,
  TbLanguage,
  TbCode,
  TbSparkles,
} from 'react-icons/tb';

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const getTechIcon = (name: string): React.ReactElement => {
  const normalized = name.toLowerCase().trim();

  // Frameworks & Libs
  if (normalized.includes('react native')) return <SiReact className="text-[#61DAFB]" />;
  if (normalized.includes('react query') || normalized.includes('tanstack')) return <SiReactquery className="text-[#FF4154]" />;
  if (normalized.includes('react testing') || normalized.includes('rtl')) return <SiTestinglibrary className="text-[#E33332]" />;
  if (normalized.includes('react')) return <SiReact className="text-[#61DAFB]" />;
  if (normalized.includes('next')) return <SiNextdotjs className="text-white" />;
  if (normalized.includes('expo')) return <SiExpo className="text-white" />;
  if (normalized.includes('micro front')) return <TbComponents className="text-[#A78BFA]" />;
  
  // Languages
  if (normalized.includes('typescript')) return <SiTypescript className="text-[#3178C6]" />;
  if (normalized.includes('javascript') || normalized.includes('js')) return <SiJavascript className="text-[#F7DF1E]" />;
  if (normalized.includes('html')) return <SiHtml5 className="text-[#E34F26]" />;
  if (normalized.includes('sass')) return <SiSass className="text-[#CC6699]" />;
  if (normalized.includes('css')) return <SiCss className="text-[#1572B6]" />;
  if (normalized.includes('php')) return <SiPhp className="text-[#777BB4]" />;

  // Styling & UI
  if (normalized.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4]" />;
  if (normalized.includes('emotion')) return <TbSparkles className="text-[#D36AC2]" />;
  if (normalized.includes('storybook')) return <SiStorybook className="text-[#FF4785]" />;
  if (normalized.includes('radix')) return <SiRadixui className="text-white" />;
  if (normalized.includes('shadcn')) return <SiShadcnui className="text-white" />;
  if (normalized.includes('styled')) return <SiStyledcomponents className="text-[#DB7093]" />;
  if (normalized.includes('material') || normalized === 'mui') return <SiMui className="text-[#007FFF]" />;
  if (normalized.includes('ant design') || normalized === 'antdesign') return <SiAntdesign className="text-[#0170FE]" />;
  if (normalized.includes('bootstrap')) return <SiBootstrap className="text-[#7952B3]" />;
  if (normalized.includes('wordpress')) return <SiWordpress className="text-[#21759B]" />;

  // State
  if (normalized.includes('zustand')) return <TbBrandZulip className="text-[#8B5CF6]" />;
  if (normalized.includes('redux')) return <SiRedux className="text-[#764ABC]" />;

  // Testing
  if (normalized.includes('jest')) return <SiJest className="text-[#C21325]" />;
  if (normalized.includes('cypress')) return <SiCypress className="text-[#69D3A7]" />;

  // Backend & DB
  if (normalized.includes('nest')) return <SiNestjs className="text-[#E0234E]" />;
  if (normalized.includes('node')) return <SiNodedotjs className="text-[#5FA04E]" />;
  if (normalized.includes('express')) return <SiExpress className="text-white" />;
  if (normalized.includes('postgres')) return <SiPostgresql className="text-[#4169E1]" />;
  if (normalized.includes('prisma')) return <SiPrisma className="text-white" />;
  if (normalized.includes('swagger')) return <SiSwagger className="text-[#85EA2D]" />;
  if (normalized.includes('jwt') || normalized.includes('sso')) return <SiJsonwebtokens className="text-[#D63AFF]" />;
  if (normalized.includes('api')) return <TbApi className="text-emerald-400" />;

  // Tools & DevOps
  if (normalized.includes('github')) return <SiGithub className="text-white" />;
  if (normalized.includes('git')) return <SiGit className="text-[#F05032]" />;
  if (normalized.includes('bitbucket')) return <SiBitbucket className="text-[#0052CC]" />;
  if (normalized.includes('vite')) return <SiVite className="text-[#646CFF]" />;
  if (normalized.includes('docker')) return <SiDocker className="text-[#2496ED]" />;
  if (normalized.includes('ci/cd') || normalized.includes('ci')) return <TbInfinity className="text-[#38BDF8]" />;
  if (normalized.includes('figma')) return <SiFigma className="text-[#F24E1E]" />;
  if (normalized.includes('puppeteer')) return <SiPuppeteer className="text-[#00D8A2]" />;
  if (normalized.includes('apexcharts') || normalized.includes('chart')) return <TbChartLine className="text-[#00E396]" />;

  // Languages / Others
  if (normalized.includes('inglês') || normalized.includes('português') || normalized.includes('idioma')) {
    return <TbLanguage className="text-neutral-400" />;
  }

  return <TbCode className="text-neutral-400" />;
};

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  className = '',
  size = 'sm',
}) => {
  const icon = getTechIcon(name);

  if (size === 'md') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-neutral-300 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800/90 rounded-md transition-all duration-150 hover:border-neutral-700 hover:text-white ${className}`}
      >
        <span className="flex-shrink-0 text-sm">{icon}</span>
        <span>{name}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono text-neutral-300 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800/80 rounded transition-colors ${className}`}
    >
      <span className="flex-shrink-0 text-xs">{icon}</span>
      <span>{name}</span>
    </span>
  );
};
