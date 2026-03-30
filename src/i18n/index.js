import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ro from './ro.json';
import hu from './hu.json';
import de from './de.json';
import en from './en.json';

const SUPPORTED = ['ro', 'hu', 'de', 'en'];

function getBrowserLang() {
  const lang = (navigator.language || navigator.userLanguage || 'ro').toLowerCase();
  for (const code of SUPPORTED) {
    if (lang.startsWith(code)) return code;
  }
  return 'ro';
}

export async function detectLanguage() {
  const browserLang = getBrowserLang();

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeout);
    const data = await res.json();

    // Whether inside or outside Romania, we use the browser/device language.
    // The IP country is available as a hook for future geo-specific logic.
    // If the browser language is not supported, fall back to Romanian.
    void data; // country = data.country_code
    return browserLang;
  } catch {
    // IP lookup failed or timed out — use browser language
    return browserLang;
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: { ro: { translation: ro }, hu: { translation: hu }, de: { translation: de }, en: { translation: en } },
    lng: 'ro', // will be overridden in main.jsx after IP detection
    fallbackLng: 'ro',
    interpolation: { escapeValue: false },
  });

export default i18n;
