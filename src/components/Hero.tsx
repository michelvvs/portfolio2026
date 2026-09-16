import React from 'react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiGit,
} from 'react-icons/si';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import avatarImg from '../assets/avatar.jpg';

export const Hero: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section className="pt-24 sm:pt-32 pb-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      {/* Left Column: Circular Cyberpunk/Clean Framed Avatar with </> badge */}
      <div className="relative group flex-shrink-0">
        {/* Glow behind circular frame */}
        <div className="absolute -inset-1 rounded-full bg-[#bd93f9]/20 blur-xl group-hover:bg-[#bd93f9]/35 transition-all duration-500" />

        {/* Circular Frame container */}
        <div className="relative w-52 h-52 sm:w-64 sm:h-64">
          {/* Avatar Image filling the circle to the border */}
          <div className="w-full h-full rounded-full border-2 border-[#bd93f9] overflow-hidden bg-[#1e1f29] shadow-[0_0_30px_rgba(189,147,249,0.22)]">
            <img
              src={avatarImg}
              alt={data.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* </> Code Badge cutting into the bottom right corner of the circle */}
          <div className="absolute -bottom-1.5 -right-1.5 sm:bottom-0.5 sm:right-0.5 bg-[#15161e] border-2 border-[#bd93f9] text-[#bd93f9] font-mono font-bold text-sm sm:text-base px-2.5 py-0.5 rounded-full shadow-xl flex items-center justify-center tracking-tighter select-none z-10">
            &lt;/&gt;
          </div>
        </div>
      </div>

      {/* Right Column: Hero Typography & Info */}
      <div className="space-y-4 text-center md:text-left flex-1 min-w-0">
        {/* Location & Status Pill */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs font-mono text-[#6272a4]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202230]/90 border border-[#6272a4]/30 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[#f8f8f2] font-medium">{data.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#202230]/50 border border-[#6272a4]/25 text-[#6272a4]">
            <MapPin className="w-3.5 h-3.5 text-[#bd93f9]" />
            <span>{data.location}</span>
          </div>
        </div>

        {/* Big Headline */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f8f8f2] leading-tight">
            {data.hero.greeting}
            <span className="text-[#bd93f9]">.</span>
          </h1>

          {/* Role & Level Pill */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-0.5">
            <span className="text-base sm:text-xl lg:text-2xl font-semibold tracking-tight text-[#f8f8f2]">
              {data.hero.rolePrimary}
            </span>
            {data.hero.roleSecondary && (
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs sm:text-sm font-bold tracking-wide shadow-[0_0_12px_rgba(52,211,153,0.15)]">
                {data.hero.roleSecondary}
              </span>
            )}
          </div>
        </div>

        {/* Mini Tech Icons Row */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 py-1 text-[#6272a4]">
          <SiHtml5 className="w-5 h-5 hover:text-[#E34F26] hover:scale-110 transition-all cursor-pointer" title="HTML5" />
          <SiCss className="w-5 h-5 hover:text-[#1572B6] hover:scale-110 transition-all cursor-pointer" title="CSS3" />
          <SiJavascript className="w-5 h-5 hover:text-[#F7DF1E] hover:scale-110 transition-all cursor-pointer" title="JavaScript" />
          <SiTypescript className="w-5 h-5 hover:text-[#3178C6] hover:scale-110 transition-all cursor-pointer" title="TypeScript" />
          <SiReact className="w-5 h-5 hover:text-[#61DAFB] hover:scale-110 transition-all cursor-pointer" title="React / React Native" />
          <SiNextdotjs className="w-5 h-5 hover:text-[#f8f8f2] hover:scale-110 transition-all cursor-pointer" title="Next.js" />
          <SiFigma className="w-5 h-5 hover:text-[#F24E1E] hover:scale-110 transition-all cursor-pointer" title="Figma" />
          <SiGit className="w-5 h-5 hover:text-[#F05032] hover:scale-110 transition-all cursor-pointer" title="Git" />
        </div>

        {/* Short intro bio */}
        <p className="text-xs sm:text-sm text-[#f8f8f2]/75 leading-relaxed max-w-lg">
          {data.hero.shortBio}
        </p>
      </div>
    </section>
  );
};
