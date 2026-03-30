import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n/index.js';
import { detectLanguage } from './i18n/index.js';
import i18n from './i18n/index.js';
import App from './App.jsx';

async function init() {
  // Check URL param first (manual override, e.g. ?lang=hu)
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const supported = ['ro', 'hu', 'de', 'en'];
  if (urlLang && supported.includes(urlLang)) {
    await i18n.changeLanguage(urlLang);
  } else {
    const lang = await detectLanguage();
    await i18n.changeLanguage(lang);
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

init();
