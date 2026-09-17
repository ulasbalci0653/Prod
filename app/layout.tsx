import type { Metadata, Viewport } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { jsonLdData } from '@/lib/seo';
import { STORE_INFO } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#090909',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://prodcoffeeroastery.com'),
  title: `${STORE_INFO.name} | Specialty Coffee Ankara`,
  description:
    'Ankara Bahçelievler\'de specialty coffee, espresso, pour-over, cold brew ve Nitro Brew deneyimi. PROD Coffee & Roastery.',
  keywords: [
    'PROD Coffee',
    'PROD Roastery',
    'Ankara specialty coffee',
    'Bahçelievler kahve',
    'Bahçelievler coffee shop',
    'Ankara coffee roastery',
    'Ankara cold brew',
    'Ankara Nitro Brew',
    'specialty coffee Ankara',
    'Çankaya kahveci',
  ],
  authors: [{ name: 'PROD Coffee & Roastery' }],
  creator: 'PROD Coffee & Roastery',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://prodcoffeeroastery.com',
    title: `${STORE_INFO.name} | Specialty Coffee Ankara`,
    description:
      'Ankara Bahçelievler\'de specialty coffee, espresso, pour-over, cold brew ve Nitro Brew deneyimi. PROD Coffee & Roastery.',
    siteName: STORE_INFO.name,
    images: [
      {
        url: '/images/prod-storefront.jpg',
        width: 1200,
        height: 630,
        alt: 'Prod Coffee & Roastery dış cephesi Bahçelievler Ankara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${STORE_INFO.name} | Specialty Coffee Ankara`,
    description:
      'Ankara Bahçelievler\'de specialty coffee, espresso, pour-over, cold brew ve Nitro Brew deneyimi.',
    images: ['/images/prod-storefront.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://prodcoffeeroastery.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#090909] text-[#F8F7F3] antialiased selection:bg-[#A51F24] selection:text-white">
        {children}
      </body>
    </html>
  );
}
