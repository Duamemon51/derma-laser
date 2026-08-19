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
    default: 'Derma Laser Studio | Avancerad hudvård & laserbehandlingar',
    template: '%s | Derma Laser Studio',
  },
  description:
    'Personlig hudvård, laserbehandlingar och estetiska behandlingar med fokus på naturliga resultat. Boka konsultation hos Derma Laser Studio.',
  keywords: [
    'laserbehandling',
    'hudvård',
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
    title: 'Derma Laser Studio | Avancerad hudvård & laserbehandlingar',
    description:
      'Avancerad skönhet. Naturliga resultat. Personliga behandlingar anpassade efter just dig.',
    images: [{ url: '/images/hero-clinic.webp', width: 1200, height: 630, alt: 'Behandling på Derma Laser Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Derma Laser Studio',
    description: 'Avancerad hudvård och estetiska behandlingar med naturliga resultat.',
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
