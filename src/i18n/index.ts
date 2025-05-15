import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationTH from './locales/th.json';
import translationJA from './locales/ja.json';
import translationES from './locales/es.json';
import translationKO from './locales/ko.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  th: {
    translation: translationTH
  },
  ja: {
    translation: translationJA
  },
  es: {
    translation: translationES
  },
  ko: {
    translation: translationKO
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;