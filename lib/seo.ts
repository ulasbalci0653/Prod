import { STORE_INFO } from './constants';

export const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: STORE_INFO.name,
  image: 'https://prodcoffeeroastery.com/images/prod-storefront.jpg',
  '@id': STORE_INFO.maps.url,
  url: 'https://prodcoffeeroastery.com',
  telephone: STORE_INFO.phone,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahçelievler, 49. Sk. No:14',
    addressLocality: 'Çankaya',
    addressRegion: 'Ankara',
    postalCode: '06490',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: STORE_INFO.coordinates.lat,
    longitude: STORE_INFO.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '00:00',
    },
  ],
  sameAs: [STORE_INFO.instagram.url],
  servesCuisine: ['Specialty Coffee', 'Coffee Roastery', 'Cold Brew', 'Nitro Brew'],
};
