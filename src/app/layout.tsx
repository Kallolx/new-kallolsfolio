import React from 'react';
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import "../tailwind.css";
import FaviconConfig from '@/components/FaviconConfig';
import SEOOptimization from '@/components/SEOOptimization';

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Kallolsfolio | Expert Tech Talent Solutions',
    template: '%s | Kallolsfolio'
  },
  description: 'Connect with top tech talent for your next big project. Kallolsfolio helps you find and collaborate with the best developers, designers, and tech experts.',
  keywords: ['tech talent', 'hire developers', 'tech recruitment', 'kallolsfolio', 'software engineers', 'UI/UX designers'],
  authors: [{ name: 'Kallolsfolio Team' }],
  creator: 'Kallolsfolio',
  publisher: 'Kallolsfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kallolsfolio.com',
    title: 'Kallolsfolio | Expert Tech Talent Solutions',
    description: 'Connect with top tech talent for your next big project.',
    siteName: 'Kallolsfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kallolsfolio - Connect with top tech talent'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kallolsfolio | Expert Tech Talent Solutions',
    description: 'Connect with top tech talent for your next big project.',
    images: ['/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: 'https://kallolsfolio.com',
  },
  metadataBase: new URL('https://kallolsfolio.com'),
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FaviconConfig />
        <SEOOptimization />
        {/* External stylesheets */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${dmSans.variable} ${inter.variable} antialiased bg-transparent`}
        style={{ backgroundColor: 'transparent' }}
      >
        {children}
      </body>
    </html>
  );
}
