import { createContext } from 'react';

type Language = 'ko' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ko: string, en: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
