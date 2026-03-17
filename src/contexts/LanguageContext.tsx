import { useState, type ReactNode } from 'react';
import { LanguageContext } from './language-context';

type Language = 'ko' | 'en';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (ko: string, en: string) => {
    return language === 'ko' ? ko : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
