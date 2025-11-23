import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { en } from '../locales/en';
import { tr } from '../locales/tr';
import type { Translation } from '../types';

const translations: Record<'en' | 'tr', Translation> = {
  en,
  tr,
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const { language, setLanguage } = context;
  const t = translations[language];

  return {
    t,
    language,
    setLanguage,
  };
};
