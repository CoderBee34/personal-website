'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants/data';
import { useTranslation } from '../../hooks/useTranslation';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-20 pb-10 border-t border-slate-800 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {t.footer.copyright}
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href={SOCIAL_LINKS.github}
          className="text-slate-500 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          className="text-slate-500 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={18} />
        </a>
        <a href={SOCIAL_LINKS.email} className="text-slate-500 hover:text-white transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
};
