import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";
import translationTH from "./locales/th.json";
import translationJA from "./locales/ja.json";
import translationES from "./locales/es.json";
import translationKO from "./locales/ko.json";

// CV-specific translations (structured content like arrays/objects)
import cvEN from "./locales/cv-en.json";
import cvFR from "./locales/cv-fr.json";
import cvES from "./locales/cv-es.json";
import cvKO from "./locales/cv-ko.json";
import cvJA from "./locales/cv-ja.json";
import cvTH from "./locales/cv-th.json";
const resources = {
  en: {
    // Merge cv-en.json into the main translation namespace so t('cvData.*') works
    translation: { ...translationEN, ...cvEN },
  },
  fr: {
    translation: { ...translationFR, ...cvFR },
  },
  th: {
    translation: { ...translationTH, ...cvTH },
  },
  ja: {
    translation: { ...translationJA, ...cvJA },
  },
  es: {
    translation: { ...translationES, ...cvES },
  },
  ko: {
    translation: { ...translationKO, ...cvKO },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // Default language
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
