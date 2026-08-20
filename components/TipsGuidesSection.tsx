'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import styles from './TipsGuidesSection.module.css';

const guides = [
  {
    cluster: 'Acne & congestion',
    title: 'Vad orsakar hormonell akne — och hur behandlar du den?',
    date: '2025-06-10',
    href: '/tips/hormonal-acne-causes-treatment',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=500&fit=crop',
  },
  {
    cluster: 'Pigmentation',
    title: 'Melasma vs solfläckar: så skiljer du dem åt',
    date: '2025-05-28',
    href: '/tips/melasma-vs-sun-spots',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=500&fit=crop',
  },
  {
    cluster: 'Facials & skin renewal',
    title: 'Hydrafacial förklarat: vad det gör och för vem',
    date: '2025-05-14',
    href: '/tips/hydrafacial-explained',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=500&fit=crop',
  },
  {
    cluster: 'Sensitive skin & skin barrier',
    title: 'Så reparerar du en skadad hudbarriär, steg för steg',
    date: '2025-04-30',
    href: '/tips/repair-skin-barrier',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=500&fit=crop',
  },
  {
    cluster: 'CO2 resurfacing',
    title: 'Fraktionerad CO2-laser – En djupgående guide till hudföryngring',
    date: '2025-06-23',
    href: '/tips/co2-laser-hudforyngring-guide',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=500&fit=crop',
  },
  {
    cluster: 'Laser hair removal',
    title: 'Laserhårborttagning: hur många behandlingar behövs egentligen?',
    date: '2025-04-02',
    href: '/tips/laser-hair-removal-sessions',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=500&fit=crop',
  },
];

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
              <Link href={guide.href} key={guide.href} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image src={guide.image} alt={guide.title} fill sizes="280px" />
                </div>
                <span className={styles.cardCluster}>{guide.cluster}</span>
                <h3>{guide.title}</h3>
                <div className={styles.cardFooter}>
                  <span>{guide.date}</span>
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
        <Link href="/tips" className="button outline" style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}>
          Se alla guider
        </Link>
      </div>
    </section>
  );
}