import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
          alt="Painter at work"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bark-900/80 via-bark-900/60 to-terracotta-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Experience badge */}
        <span className="inline-block bg-ochre-500/90 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          ✦ {t('hero.badge')} ✦
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
          {t('hero.title')}
        </h1>

        <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo('contact')} className="btn-primary text-base px-8 py-4">
            {t('hero.cta')}
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="border-2 border-white/70 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-lg transition-colors duration-200"
          >
            {t('hero.ctaSecondary')}
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { value: '30+', label: { ro: 'Ani experiență', hu: 'Év tapasztalat', de: 'Jahre Erfahrung', en: 'Years experience' } },
            { value: '200+', label: { ro: 'Proiecte finalizate', hu: 'Befejezett projekt', de: 'Projekte', en: 'Projects done' } },
            { value: '100%', label: { ro: 'Clienți mulțumiți', hu: 'Elégedett ügyfél', de: 'Zufriedenheit', en: 'Satisfaction' } },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl font-bold text-ochre-500">{stat.value}</div>
              <div className="text-white/75 text-sm mt-0.5">{stat.label.ro}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
