import type { Metadata } from 'next';
import './index.css';
import React from 'react';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const baseUrl = process.env.NEXT_METADATA_BASE || 'https://twinboxd.me';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Twinboxd | Compare Letterboxd Watchlists',
  description: 'Compare 2 Letterboxd watchlists to find the perfect movie to watch!',
  icons: {
    icon: '/favicon.ico',
  },
  authors: [{ name: 'Julio Barbosa', url: 'https://github.com/juliobsz' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Twinboxd | Compare Letterboxd Watchlists',
    description: 'Compare 2 Letterboxd watchlists to find the perfect movie to watch!',
    url: baseUrl,
    siteName: "Twinboxd",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/twinboxd-banner.png',
        secureUrl: '/twinboxd-banner.png',
        width: 1200,
        height: 630,
        alt: 'twinboxd banner',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Twinboxd | Compare Letterboxd Watchlists',
    description: 'Compare 2 Letterboxd watchlists to find the perfect movie to watch!',
    images: ['/twinboxd-full.png'],
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}

