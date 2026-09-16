import React, { useState } from 'react';
import { Mail, FileText, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { data, language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const whatsappLink =
    data.socials.whatsappUrl ||
    `https://wa.me/5521971941397?text=${encodeURIComponent(
      data.socials.whatsappMessage || 'Olá, Michel! Adorei seu portfolio e quero te contratar!'
    )}`;

  return (
    <section id="about" className="space-y-6 scroll-mt-24">
      {/* Section Title matching reference: "About." */}
      <div className="flex items-center gap-1.5">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f8f8f2]">
          {data.bio.aboutTitle}
        </h2>
        <span className="text-[#bd93f9] font-bold text-2xl sm:text-3xl">.</span>
      </div>

      {/* Editorial Bio with inline interactive links */}
      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#f8f8f2]/85">
        <p>
          <strong className="text-[#f8f8f2] font-semibold">{data.role}</strong>{' '}
          {data.bio.intro}
        </p>
        <p className="text-[#6272a4]">
          {data.bio.details}
        </p>
        <p className="text-[#6272a4] pt-1">
          {data.bio.inlineLinksPrefix}{' '}
          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-link text-[#f8f8f2] hover:text-[#bd93f9]"
          >
            LinkedIn
          </a>
          , {data.bio.inlineLinksSuffix}{' '}
          <a
            href={data.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-link text-[#f8f8f2] hover:text-[#bd93f9]"
          >
            GitHub
          </a>{' '}
          {language === 'en-US' ? 'or send me an' : 'ou me enviar um'}{' '}
          <button
            onClick={handleCopyEmail}
            className="inline-link text-[#f8f8f2] hover:text-[#bd93f9] cursor-pointer"
            title={data.actions.copyEmail}
          >
            {data.bio.emailActionText}
          </button>
          .
        </p>
      </div>

      {/* Quick Action Badges */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <a
          href={data.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#202230] hover:bg-[#282a36] text-[#f8f8f2] hover:text-[#bd93f9] border border-[#6272a4]/25 hover:border-[#bd93f9]/40 transition-all shadow-sm group"
        >
          <LinkedinIcon className="w-3.5 h-3.5 text-[#6272a4] group-hover:text-[#bd93f9] transition-colors" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 text-[#6272a4] group-hover:text-[#bd93f9]" />
        </a>

        <a
          href={data.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#202230] hover:bg-[#282a36] text-[#f8f8f2] hover:text-[#bd93f9] border border-[#6272a4]/25 hover:border-[#bd93f9]/40 transition-all shadow-sm group"
        >
          <GithubIcon className="w-3.5 h-3.5 text-[#6272a4] group-hover:text-[#bd93f9] transition-colors" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 text-[#6272a4] group-hover:text-[#bd93f9]" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#202230] hover:bg-[#282a36] text-[#f8f8f2] hover:text-[#bd93f9] border border-[#6272a4]/25 hover:border-[#bd93f9]/40 transition-all cursor-pointer shadow-sm group"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#50fa7b]" />
              <span className="text-[#50fa7b] font-mono">{data.actions.copiedEmail}</span>
            </>
          ) : (
            <>
              <Mail className="w-3.5 h-3.5 text-[#6272a4] group-hover:text-[#bd93f9] transition-colors" />
              <span>{data.socials.email}</span>
            </>
          )}
        </button>

        {data.phone && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#202230] hover:bg-[#282a36] text-[#f8f8f2] hover:text-[#50fa7b] border border-[#6272a4]/25 hover:border-[#50fa7b]/40 transition-all group shadow-sm"
            title={language === 'en-US' ? 'Open WhatsApp conversation' : 'Abrir conversa no WhatsApp'}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#50fa7b] group-hover:scale-110 transition-transform" />
            <span>{data.phone}</span>
            <ArrowUpRight className="w-3 h-3 text-[#6272a4] group-hover:text-[#50fa7b] transition-colors" />
          </a>
        )}

        {data.socials.resumeUrl && (
          <a
            href={data.socials.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#202230] hover:bg-[#282a36] text-[#f8f8f2] hover:text-[#ff79c6] border border-[#6272a4]/25 hover:border-[#ff79c6]/40 transition-all shadow-sm group"
          >
            <FileText className="w-3.5 h-3.5 text-[#6272a4] group-hover:text-[#ff79c6] transition-colors" />
            <span>{data.socials.resumeLabel}</span>
            <ArrowUpRight className="w-3 h-3 text-[#6272a4] group-hover:text-[#ff79c6]" />
          </a>
        )}
      </div>
    </section>
  );
};
