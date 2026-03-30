import { useTranslation } from 'react-i18next';

const BADGES = ['badge1', 'badge2', 'badge3', 'badge4'];

const badgeIcons = {
  badge1: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  badge2: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  badge3: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  badge4: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80"
                alt="János Tölgyi – professional painter"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-terracotta-500 text-white rounded-2xl p-5 shadow-lg">
              <div className="text-3xl font-bold font-serif">30+</div>
              <div className="text-xs font-medium uppercase tracking-wide opacity-90">
                ani · év · Jahre
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-terracotta-500 font-medium uppercase tracking-widest text-sm mb-3">
              {t('about.subtitle')}
            </p>
            <h2 className="section-title mb-6">{t('about.title')}</h2>
            <p className="text-bark-700 leading-relaxed mb-5 text-base">
              {t('about.text1')}
            </p>
            <p className="text-bark-700 leading-relaxed mb-8 text-base">
              {t('about.text2')}
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3"
                >
                  <span className="text-terracotta-500 flex-shrink-0">
                    {badgeIcons[badge]}
                  </span>
                  <span className="text-sm font-medium text-bark-800">
                    {t(`about.${badge}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
