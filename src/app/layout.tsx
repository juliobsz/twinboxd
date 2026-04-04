import type { Metadata } from 'next';
import './index.css';
import React from 'react';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Letterboxd Match',
  description: 'Find matching movies between two Letterboxd watchlists.',
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

