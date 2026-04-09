import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationJA from './locales/ja/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
    ja: {
        translation: translationJA
    },
    en: {
        translation: translationEN
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ja',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
