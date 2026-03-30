import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-terracotta-500 font-medium uppercase tracking-widest text-sm mb-3">
            {t('projects.title')}
          </p>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map(({ key, image, imageAlt }) => (
            <article
              key={key}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-cream"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-bark-900 mb-2">
                  {t(`projects.items.${key}.title`)}
                </h3>
                <p className="text-bark-700 text-sm leading-relaxed mb-4">
                  {t(`projects.items.${key}.description`)}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-bark-600">
                    <svg className="w-4 h-4 text-terracotta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t(`projects.items.${key}.location`)}
                  </span>
                  <span className="flex items-center gap-1.5 bg-terracotta-50 text-terracotta-600 font-medium px-3 py-1 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t(`projects.items.${key}.duration`)} {t('projects.days')}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
