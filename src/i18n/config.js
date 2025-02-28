// src/i18n/config.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import jaTranslations from './locales/ja.json';
import enTranslations from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: {
        translation: jaTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: 'ja',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;