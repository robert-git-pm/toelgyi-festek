import { useTranslation } from 'react-i18next';
import { testimonials } from '../data/testimonials';

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-ochre-500 fill-ochre-500" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-terracotta-500 font-medium uppercase tracking-widest text-sm mb-3">
            {t('testimonials.title')}
          </p>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map(({ key, avatar }) => (
            <article
              key={key}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <Stars />
              <blockquote className="text-bark-700 leading-relaxed mb-5 italic">
                "{t(`testimonials.items.${key}.text`)}"
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt={t(`testimonials.items.${key}.name`)}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-terracotta-100"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-bark-900 text-sm">
                    {t(`testimonials.items.${key}.name`)}
                  </p>
                  <p className="text-terracotta-500 text-xs">
                    {t(`testimonials.items.${key}.project`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
