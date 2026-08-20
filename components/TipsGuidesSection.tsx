'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { guides } from '@/lib/tips-data';
import styles from './TipsGuidesSection.module.css';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export default function TipsGuidesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 280 + 20;
    el.scrollBy({ left: direction === 'left' ? -cardWidth * 2 : cardWidth * 2, behavior: 'smooth' });
  };

  return (
    <section className={`section shell ${styles.tips}`} id="tips-guider">
      <p className="eyebrow">Tips, fakta och inspiration</p>
      <h2 className={styles.heading}>Inspireras och utforska mer om vår bransch och klinik</h2>

      <div className={styles.scrollerWrap}>
        <button type="button" className={styles.navArrow} data-dir="left" onClick={() => scroll('left')} aria-label="Föregående">
          <ChevronLeft size={18} strokeWidth={1.6} />
        </button>

        <div className={styles.scroller} ref={scrollerRef}>
          <div className={styles.grid}>
            {guides.map((guide) => (
              <Link href={`/tips/${guide.slug}`} key={guide.slug} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image src={guide.image} alt={guide.title} fill sizes="280px" />
                </div>
                <span className={styles.cardCluster}>{guide.cluster}</span>
                <h3>{guide.title}</h3>
                <div className={styles.cardFooter}>
                  <span>{formatDate(guide.date)}</span>
                  <span className={styles.arrowWrap}>
                    <ArrowRight size={15} strokeWidth={1.6} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <button type="button" className={styles.navArrow} data-dir="right" onClick={() => scroll('right')} aria-label="Nästa">
          <ChevronRight size={18} strokeWidth={1.6} />
        </button>
      </div>

      <div className={styles.moreRow}>
      <Link
  href="/tips"
  className="button outline"
  style={{
    borderColor: 'var(--gold)',
    backgroundColor: 'var(--gold)',
    color: 'white',
    padding: '14px 28px',
    fontSize: '10px',
  }}
>
  Se alla guider
</Link>
      </div>
    </section>
  );
}