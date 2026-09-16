import React, { useState } from 'react';
import { Mail, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { data } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentYear = new Date().getFullYear();

  const whatsappLink =
    data.socials.whatsappUrl ||
    `https://wa.me/5521971941397?text=${encodeURIComponent(
      data.socials.whatsappMessage || 'Olá, Michel! Adorei seu portfolio e quero te contratar!'
    )}`;

  return (
    <footer id="contact" className="space-y-8 pt-6 border-t border-[#6272a4]/20 scroll-mt-24">
      {/* Contact Callout */}
      <div className="p-5 rounded-2xl bg-[#202230]/40 border border-[#6272a4]/25 space-y-3 shadow-sm">
        <h3 className="text-base font-medium text-[#f8f8f2]">
          {data.sections.contact.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#6272a4] leading-relaxed">
          {data.sections.contact.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#f8f8f2] text-[#15161e] hover:bg-white transition-colors cursor-pointer font-sans shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#50fa7b]" />
                <span className="text-[#50fa7b] font-mono font-semibold">{data.actions.copiedEmail}</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-[#15161e]" />
                <span>{data.actions.copyEmail} ({data.socials.email})</span>
              </>
            )}
          </button>

          {data.phone && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#50fa7b]/10 hover:bg-[#50fa7b]/20 text-[#50fa7b] border border-[#50fa7b]/30 transition-colors group shadow-sm"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#50fa7b] group-hover:scale-110 transition-transform" />
              <span>WhatsApp ({data.phone})</span>
              <ArrowUpRight className="w-3 h-3 text-[#50fa7b] group-hover:text-[#50fa7b]/80" />
            </a>
          )}

          <a
            href={`mailto:${data.socials.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#202230] hover:bg-[#282a36] text-[#f8f8f2] hover:text-emerald-400 border border-[#6272a4]/25 hover:border-emerald-500/40 transition-colors shadow-sm group"
          >
            <span>{data.actions.openEmailClient}</span>
            <ArrowUpRight className="w-3 h-3 text-[#6272a4] group-hover:text-emerald-400" />
          </a>
        </div>
      </div>

      {/* Bottom meta row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6272a4]">
        <div className="flex items-center gap-4">
          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={data.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          {data.phone && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#50fa7b] transition-colors inline-flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#50fa7b]" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>

        <p className="flex items-center gap-1">
          <span>{data.name}</span>
          <span>·</span>
          <span>{currentYear}</span>
        </p>
      </div>
    </footer>
  );
};
