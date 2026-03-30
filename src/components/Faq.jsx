import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const faqKeys = ['q1', 'q2', 'q3', 'q4'];

export default function Faq() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('faq.title')}</h2>
        </div>

        <div className="space-y-3">
          {faqKeys.map((key) => (
            <div key={key} className="bg-cream rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === key ? null : key)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                aria-expanded={open === key}
              >
                <span className="font-medium text-bark-900 text-sm sm:text-base">
                  {t(`faq.items.${key}.question`)}
                </span>
                <svg
                  className={`w-5 h-5 text-terracotta-500 flex-shrink-0 transition-transform duration-200 ${open === key ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === key && (
                <div className="px-5 pb-5 text-bark-700 text-sm leading-relaxed">
                  {t(`faq.items.${key}.answer`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
