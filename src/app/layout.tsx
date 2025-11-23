import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/index.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { getPersonStructuredData, getWebsiteStructuredData } from '@/lib/structured-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ali İlan - Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, .NET Core, and modern web technologies. Currently working at Gelecek Varlık Yönetimi in Istanbul, Turkey.',
  keywords: ['Full-Stack Developer', 'React', '.NET Core', 'TypeScript', 'Software Engineer', 'Ali İlan'],
  authors: [{ name: 'Ali İlan' }],
  creator: 'Ali İlan',
  publisher: 'Ali İlan',
  metadataBase: new URL('https://aliilan.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'tr': '/tr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['tr_TR'],
    url: 'https://aliilan.com',
    title: 'Ali İlan - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, .NET Core, and modern web technologies.',
    siteName: 'Ali İlan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ali İlan - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali İlan - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, .NET Core, and modern web technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personData = getPersonStructuredData();
  const websiteData = getWebsiteStructuredData();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
