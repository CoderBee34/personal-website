import { Languages } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import type { Language } from '../../types';

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  const languageLabels: Record<Language, string> = {
    en: 'EN',
    tr: 'TR',
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-800/50"
      aria-label="Toggle language"
    >
      <Languages size={18} />
      <span className="font-semibold">{languageLabels[language]}</span>
    </button>
  );
};
