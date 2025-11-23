'use client';

import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { SOCIAL_LINKS } from '../../constants/data';
import { useTranslation } from '../../hooks/useTranslation';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-start pt-10">
      <RevealOnScroll>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {t.hero.availableBadge}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {t.hero.title} <br />
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <Github size={20} />
            <span>{t.hero.github}</span>
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <Linkedin size={20} />
            <span>{t.hero.linkedin}</span>
          </a>
          <a
            href={SOCIAL_LINKS.email}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <Mail size={20} />
            <span>{t.hero.email}</span>
          </a>
        </div>
      </RevealOnScroll>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};
