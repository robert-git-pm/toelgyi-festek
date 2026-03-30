import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://robert-git-pm.github.io/tolgyi-festek';

const descriptions = {
  ro: 'János Tölgyi — zugrav profesionist în Satu Mare cu peste 30 de ani experiență. Zugrăveli interioare și exterioare, tapete, finisaje decorative. Ofertă gratuită.',
  hu: 'Tölgyi János — professzionális festő-mázoló Szatmárnémetiben, 30+ éves tapasztalattal. Bel- és kültéri festés, tapétázás, dekoratív felületek. Ingyenes árajánlat.',
  de: 'János Tölgyi — professioneller Maler in Satu Mare mit über 30 Jahren Erfahrung. Innen- und Außenmalerarbeiten, Tapezieren, Dekorputze. Kostenloses Angebot.',
  en: 'János Tölgyi — professional painter in Satu Mare, Romania with 30+ years of experience. Interior & exterior painting, wallpapering, decorative finishes. Free quote.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'János Tölgyi – Zugrav / Festő / Maler',
  description: descriptions.ro,
  url: BASE_URL,
  telephone: '+40761234567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Strada Mihai Eminescu 14',
    addressLocality: 'Satu Mare',
    postalCode: '440014',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.7961,
    longitude: 22.8657,
  },
  areaServed: {
    '@type': 'City',
    name: 'Satu Mare',
  },
  priceRange: '$$',
  image: `${BASE_URL}/og-image.jpg`,
  sameAs: ['https://www.facebook.com'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicii zugrav',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zugrăveli interioare / Beltéri festés / Innenmalerei' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zugrăveli exterioare / Kültéri festés / Außenmalerei' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tapete / Tapétázás / Tapezieren' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lacuri și vopsitorii lemn/metal / Fa- és fémmázolás / Holz- & Metallarbeiten' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Finisaje decorative / Dekoratív felületek / Dekorputze' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '4',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Maria Kovács' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'János a făcut o treabă impecabilă. Profesionalism și calitate excelentă!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ioan Moldovan' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Profesionalism rar întâlnit, materiale de calitate și un rezultat care durează.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cât costă o lucrare de zugrăvire în Satu Mare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prețul variază în funcție de suprafață, starea pereților și tipul de vopsea ales. János oferă consultanță și ofertă gratuită la domiciliu, fără nicio obligație.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât timp durează o zugrăvire completă a unui apartament?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un apartament de 2-3 camere durează de obicei 3-5 zile, în funcție de starea suprafețelor și lucrările necesare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce materiale folosiți pentru zugrăveli?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'János folosește exclusiv materiale de calitate premium de la producători recunoscuți (Caparol, Kober, Baumit).',
      },
    },
    {
      '@type': 'Question',
      name: 'Oferiți garanție pentru lucrări de zugrăvire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, toate lucrările sunt executate cu garanție. János revine dacă apare orice problemă după finalizare.',
      },
    },
  ],
};

const titles = {
  ro: 'János Tölgyi – Zugrav Profesionist Satu Mare | 30 ani experiență',
  hu: 'Tölgyi János – Professzionális Festő Szatmárnémeti | 30 év tapasztalat',
  de: 'János Tölgyi – Professioneller Maler Satu Mare | 30 Jahre Erfahrung',
  en: 'János Tölgyi – Professional Painter Satu Mare | 30 Years Experience',
};

export default function SeoHead() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'ro';
  const title = titles[lang] || titles.ro;
  const description = descriptions[lang] || descriptions.ro;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="zugrav Satu Mare, festő Szatmárnémeti, maler Satu Mare, zugrăveli, vopsit, tapete, finisaje, János Tölgyi" />
      <link rel="canonical" href={BASE_URL} />

      {/* hreflang */}
      <link rel="alternate" hrefLang="ro" href={`${BASE_URL}?lang=ro`} />
      <link rel="alternate" hrefLang="hu" href={`${BASE_URL}?lang=hu`} />
      <link rel="alternate" hrefLang="de" href={`${BASE_URL}?lang=de`} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={BASE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={BASE_URL} />
      <meta property="og:locale" content={lang === 'ro' ? 'ro_RO' : lang === 'hu' ? 'hu_HU' : lang === 'de' ? 'de_DE' : 'en_US'} />
      <meta property="og:site_name" content="János Tölgyi – Zugrav / Festő / Maler" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
}
