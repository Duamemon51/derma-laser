'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Guide } from '@/lib/tips-data';
import styles from './TipsHub.module.css';

const clusters = [
  'Alla',
  'Acne & congestion',
  'Pigmentation',
  'Facials & skin renewal',
  'Sensitive skin & skin barrier',
  'CO2 resurfacing',
  'Laser hair removal',
];

const clusterLabels: Record<string, string> = {
  'Alla': 'Alla guider',
  'Acne & congestion': 'Akne & porer',
  Pigmentation: 'Pigmentering & hudstruktur',
  'Facials & skin renewal': 'Ansiktsbehandlingar',
  'Sensitive skin & skin barrier': 'Känslig hud & hudbarriär',
  'CO2 resurfacing': 'CO2-laser',
  'Laser hair removal': 'Laser hårborttagning',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export default function TipsHubGrid({ guides }: { guides: Guide[] }) {
  const [activeCluster, setActiveCluster] = useState('Alla');

  const filtered =
    activeCluster === 'Alla' ? guides : guides.filter((g) => g.cluster === activeCluster);

  return (
    <>
      <nav className={styles.tabs} aria-label="Guidekategorier">
        {clusters.map((cluster) => (
          <button
            key={cluster}
            type="button"
            className={`${styles.tab} ${activeCluster === cluster ? styles.tabActive : ''}`}
            aria-pressed={activeCluster === cluster}
            onClick={() => setActiveCluster(cluster)}
          >
            {clusterLabels[cluster]}
          </button>
        ))}
      </nav>

      {filtered.length === 0 ? (
        <p className={styles.empty}>Inga guider hittades i den här kategorin.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((guide) => (
            <Link href={`/tips/${guide.slug}`} key={guide.slug} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <span className={styles.cardCluster}>{guide.cluster}</span>
              <h2 className={styles.cardTitle}>{guide.title}</h2>
              <div className={styles.cardMeta}>
                <span>{formatDate(guide.date)}</span>
              </div>
              <p className={styles.cardExcerpt}>{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}