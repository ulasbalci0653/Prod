export const STORE_INFO = {
  name: 'PROD Coffee & Roastery',
  tagline: 'Specialty Coffee & Roastery',
  city: 'Ankara',
  district: 'Bahçelievler',
  address: 'Bahçelievler, 49. Sk. No:14, 06490 Çankaya / Ankara',
  phone: '+90 532 227 01 71',
  phoneRaw: 'tel:+905322270171',
  hours: 'Pazartesi – Pazar: 10:00 – 00:00',
  coordinates: {
    lat: 39.9281364,
    lng: 32.824486,
    label: '39.9281° N — 32.8245° E',
  },
  instagram: {
    handle: '@prodcoffeeroastery',
    url: 'https://www.instagram.com/prodcoffeeroastery/',
  },
  maps: {
    url: 'https://www.google.com/maps/place/Prod+Coffee+%26+Roastery/@39.9281364,32.8219111,17z/data=!3m1!4b1!4m6!3m5!1s0x14d34f1f4274628b:0x95392f30003704f2!8m2!3d39.9281364!4d32.824486!16s%2Fg%2F11cjg93s9l',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.038758832049!2d32.8219111!3d39.9281364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f1f4274628b%3A0x95392f30003704f2!2sProd%20Coffee%20%26%20Roastery!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str',
  },
};

export const NAV_LINKS = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#roastery', label: 'Roastery' },
  { href: '#methods', label: 'Kahveler' },
  { href: '#experience', label: 'Mekân' },
  { href: '#location', label: 'İletişim' },
];

export const COFFEE_METHODS = [
  {
    id: 'espresso',
    title: 'ESPRESSO BAZLI',
    subtitle: 'Yoğun, dengeli ve karakterli ekstraksiyon.',
    desc: 'Hassas gramaj ve ideal ekstraksiyonla hazırlanan espresso; Cortado, Flat White ve zengin sütlü reçetelerin güçlü temeli.',
    badge: 'CRAFT EXTRACTION',
  },
  {
    id: 'pourover',
    title: 'POUR OVER / V60',
    subtitle: 'Çekirdeğin nüanslarını öne çıkaran berraklık.',
    desc: 'Özel seçilmiş single-origin çekirdeklerin tüm çiçeksi, meyvemsi ve aromatik notalarını fincana taşıyan elle demleme sanatı.',
    badge: 'SINGLE ORIGIN',
  },
  {
    id: 'filter',
    title: 'FİLTRE KAHVE',
    subtitle: 'Günün her anına eşlik eden taze kavurum.',
    desc: 'Taze öğütülmüş nitelikli çekirdeklerden günlük olarak demlenen, temiz gövdeli ve içimi ferahlatıcı filtre kahve seçeneği.',
    badge: 'DAILY FRESH BREW',
  },
  {
    id: 'craft-specialty',
    title: 'SPECIALTY SEÇKİLER',
    subtitle: 'Özel mikrolotlar ve sezonluk kavurumlar.',
    desc: 'Dünyanın seçkin kahve tarlalarından sınırlı miktarda getirilen ve roastery ekibimiz tarafından özel kavurma profiliyle işlenen çekirdekler.',
    badge: 'ROASTERY SELECTION',
  },
];

export const BRAND_VALUES = [
  {
    num: '01',
    title: 'ROAST',
    subtitle: 'KAVURMA',
    desc: 'Çekirdeğin doğal potansiyelini öne çıkaran özel kavurma profilleri.',
  },
  {
    num: '02',
    title: 'BREW',
    subtitle: 'DEMLEME',
    desc: 'Her yönteme uygun su mineralizasyonu, derece ve mikro hassasiyette ekstraksiyon.',
  },
  {
    num: '03',
    title: 'SERVE',
    subtitle: 'SUNUM',
    desc: 'Bahçelievler’in sıcak ve şehirli atmosferinde samimi fincanlar.',
  },
];
