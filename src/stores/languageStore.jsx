// src/stores/languageStore.js
import {create} from 'zustand';
import i18n from '../i18n';

const useLanguageStore = create((set, get) => ({
  language: 'en', // Default language
  setLanguage: (newLanguage) => {
    i18n.changeLanguage(newLanguage); // Update i18n language
    localStorage.setItem('language', newLanguage); // Persist the language to localStorage
    set({ language: newLanguage }); // Update Zustand state
  },
  initializeLanguage: () => {
    const storedLanguage = localStorage.getItem('language') || 'en'; // Fetch from localStorage
    set({ language: storedLanguage }); // Initialize Zustand state with stored language
    i18n.changeLanguage(storedLanguage); // Set i18n language
  },
}));

export default useLanguageStore;
