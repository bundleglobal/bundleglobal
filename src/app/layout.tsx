import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bundle.global',
  description: 'Contact us at contact@bundle.global',
  metadataBase: new URL('https://bundle.global'),
  openGraph: {
    title: 'bundle.global',
    description: 'Contact us at contact@bundle.global',
    type: 'website',
    locale: 'en_US',
    url: 'https://bundle.global',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'bundle.global',
      },
    ],
  },
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#45207b' },
  ],
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#45207b',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#45207b',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={'overflow-y-auto ' + inter.className}>{children}</body>
    </html>
  );
}
