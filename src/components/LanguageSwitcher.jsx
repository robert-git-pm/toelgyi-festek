import { useTranslation } from 'react-i18next';

const langs = [
  { code: 'ro', label: 'RO' },
  { code: 'hu', label: 'HU' },
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {langs.map(({ code, label }, idx) => (
        <span key={code} className="flex items-center">
          <button
            onClick={() => i18n.changeLanguage(code)}
            className={`text-sm font-medium px-1.5 py-0.5 rounded transition-colors duration-150 ${
              current === code
                ? 'text-terracotta-500 font-semibold'
                : 'text-bark-700 hover:text-terracotta-500'
            }`}
            aria-label={`Switch to ${label}`}
          >
            {label}
          </button>
          {idx < langs.length - 1 && (
            <span className="text-bark-700/30 text-xs">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
