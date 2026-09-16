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
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          {data.bio.aboutTitle}
        </h2>
        <span className="text-emerald-400 font-bold text-2xl sm:text-3xl">.</span>
      </div>

      {/* Editorial Bio with inline interactive links */}
      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-300">
        <p>
          <strong className="text-white font-medium">{data.role}</strong>{' '}
          {data.bio.intro}
        </p>
        <p className="text-neutral-400">
          {data.bio.details}
        </p>
        <p className="text-neutral-400 pt-1">
          {data.bio.inlineLinksPrefix}{' '}
          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-link text-white hover:text-emerald-400"
          >
            LinkedIn
          </a>
          , {data.bio.inlineLinksSuffix}{' '}
          <a
            href={data.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-link text-white hover:text-emerald-400"
          >
            GitHub
          </a>{' '}
          {language === 'en-US' ? 'or send me an' : 'ou me enviar um'}{' '}
          <button
            onClick={handleCopyEmail}
            className="inline-link text-white hover:text-emerald-400 cursor-pointer"
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
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-all"
        >
          <LinkedinIcon className="w-3.5 h-3.5 text-neutral-400" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 text-neutral-500" />
        </a>

        <a
          href={data.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-all"
        >
          <GithubIcon className="w-3.5 h-3.5 text-neutral-400" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 text-neutral-500" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-all cursor-pointer"
        >
          {copiedEmail ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-mono">{data.actions.copiedEmail}</span>
            </>
          ) : (
            <>
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>{data.socials.email}</span>
            </>
          )}
        </button>

        {data.phone && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-all group"
            title={language === 'en-US' ? 'Open WhatsApp conversation' : 'Abrir conversa no WhatsApp'}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>{data.phone}</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
          </a>
        )}

        {data.socials.resumeUrl && (
          <a
            href={data.socials.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-400" />
            <span>{data.socials.resumeLabel}</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
        )}
      </div>
    </section>
  );
};
