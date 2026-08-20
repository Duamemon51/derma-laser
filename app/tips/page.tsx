import type { Metadata } from 'next';
import { guides } from '@/lib/tips-data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TipsHubGrid from './TipsHubGrid';
import styles from './TipsHub.module.css';

export const metadata: Metadata = {
  title: 'Skin Care Tips & Guides | Dermalaser Stockholm',
  description:
    'Read guides about acne, pigmentation, Hydrafacial, chemical peels, pores, laser hair removal and skin care from Dermalaser Studio.',
};

export default function TipsHubPage() {
  return (
    <>
      <Header treatments={[]} light />

      <div className={`shell ${styles.wrap}`}>
        <p className="eyebrow" style={{ textAlign: 'center' }}>
          Citylaser
        </p>
        <h1 className={styles.h1}>Skin Care Tips & Treatment Guides</h1>
        <p className={styles.subtitle}>
          Här vill vi inspirera, informera och berätta om vad som händer på kliniken.
        </p>

        <TipsHubGrid guides={guides} />
      </div>

      <Footer />
    </>
  );
}