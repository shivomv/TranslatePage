// src/App.js
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useLanguageStore from './stores/languageStore.jsx';

function App() {
  const { t } = useTranslation();
  const { language, setLanguage, initializeLanguage } = useLanguageStore();

  // Initialize the language when the app mounts
  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  return (
    <div className="App">
      <header>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        <div>
          <label>{t('language')}: </label>
          <button onClick={() => setLanguage('en')} disabled={language === 'en'}>
            English
          </button>
          <button onClick={() => setLanguage('hi')} disabled={language === 'hi'}>
            हिंदी
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
