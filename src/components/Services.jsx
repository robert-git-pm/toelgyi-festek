import { useTranslation } from 'react-i18next';
import { serviceKeys } from '../data/services';

const icons = {
  interior: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  exterior: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 21V9h6v12" />
    </svg>
  ),
  wallpaper: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v18M3 9h18M3 15h18" />
    </svg>
  ),
  lacquer: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  decorative: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  consultation: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-terracotta-500 font-medium uppercase tracking-widest text-sm mb-3">
            {t('services.title')}
          </p>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key) => (
            <article
              key={key}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="w-12 h-12 bg-terracotta-50 text-terracotta-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-terracotta-500 group-hover:text-white transition-colors duration-200">
                {icons[key]}
              </div>
              <h3 className="font-serif text-lg font-semibold text-bark-900 mb-2">
                {t(`services.items.${key}.title`)}
              </h3>
              <p className="text-bark-700 text-sm leading-relaxed">
                {t(`services.items.${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
