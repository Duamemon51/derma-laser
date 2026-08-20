import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const siteUrl = 'https://www.dermalaserstudio.se';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hudvård Stockholm | Ansiktsbehandling & Laser | Dermalaser',
    template: '%s | Derma Laser Studio',
  },
  description:
    'Hudvård och avancerade ansiktsbehandlingar i Stockholm. Akne, Hydrafacial, peeling, pigmentering, Carbon Peel, CO2-laser och diodlaser. Boka online.',
  keywords: [
    'hudvård Stockholm',
    'ansiktsbehandling Stockholm',
    'hudterapeut Stockholm',
    'hudvård Hägersten',
    'hudföryngring',
    'estetiska behandlingar',
    'medicinsk hudvård',
    'kroppsvård',
    'Derma Laser Studio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: siteUrl,
    siteName: 'Derma Laser Studio',
    title: 'Hudvård Stockholm | Ansiktsbehandling & Laser | Dermalaser',
    description:
      'Hudvård och avancerade ansiktsbehandlingar i Stockholm. Boka din behandling eller kostnadsfria hudanalys online.',
    images: [{ url: '/images/hero-clinic.webp', width: 1200, height: 630, alt: 'Behandling på Derma Laser Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hudvård Stockholm | Dermalaser',
    description: 'Avancerad hudvård, ansiktsbehandlingar och laser i Stockholm.',
    images: ['/images/hero-clinic.webp'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
