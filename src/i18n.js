// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Add the backend plugin
  .use(initReactI18next) // Initialize with React
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    backend: {
      // API endpoint where translations are stored
      loadPath: 'http://127.0.0.1:5000/locales/{{lng}}', // Correctly use {{lng}} for dynamic language
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
