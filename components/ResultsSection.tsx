'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ResultsSection.module.css';

const reviews = [
  ['Anne L.', 'Jag är jättenöjd med min behandling och det bemötande jag fick.', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'],
  ['Alexandra H.', 'Exceptionellt! Jag rekommenderar varmt Derma Laser Studio.', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces'],
  ['Michaela S.', 'Smidigt besök, fint resultat och hög kvalitet varje gång.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces'],
  ['Sofia B.', 'Professionellt bemötande och fantastiska resultat redan efter första besöket.', 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces'],
  ['Linnea K.', 'Bästa kliniken jag varit på — personalen är kunnig och lyhörd.', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces'],
  ['Josefine A.', 'Jag känner mig alltid trygg och väl omhändertagen här.', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces'],
  ['Camilla T.', 'Resultatet överträffade mina förväntningar. Rekommenderas starkt!', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces'],
];

const gallery = [
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=650&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=750&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=780&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500&h=600&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&h=520&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&h=760&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&h=600&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&h=780&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&h=610&fit=crop', tall: false },
];

export default function ResultsSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Single shared control: scrolls the gallery and the reviews together,
  // so there's only one pair of arrows for the whole section.
  const scroll = (direction: 'left' | 'right') => {
    const galleryEl = galleryRef.current;
    const galleryStep = (240 + 16) * 2;
    if (galleryEl) {
      galleryEl.scrollBy({ left: direction === 'left' ? -galleryStep : galleryStep, behavior: 'smooth' });
    }

    const reviewsEl = scrollerRef.current;
    const reviewsStep = (340 + 0) * 2;
    if (reviewsEl) {
      reviewsEl.scrollBy({ left: direction === 'left' ? -reviewsStep : reviewsStep, behavior: 'smooth' });
    }
  };

  return (
    <section className={`section shell ${styles.results}`}>
      <p className="eyebrow center">Äkta resultat</p>
      <h2 className="sectionTitle">Verkliga resultat. Verkliga människor.</h2>

      <div className={styles.galleryFrame}>
        <div className={styles.galleryScroller} ref={galleryRef}>
          <div className={styles.galleryRow}>
            {gallery.map((img, i) => (
              <div key={i} className={`${styles.galleryItem} ${img.tall ? styles.galleryItemTall : ''}`}>
                <Image src={img.src} alt="Behandlingsresultat" fill sizes="320px" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.reviewsWrap}>
        <article className={styles.score}>
          <span className={styles.scoreStars}>★★★★★</span>
          <strong>4.6/5</strong>
          <small>Nöjda kunder sedan 2000</small>
          <p>+1000 omdömen på PECO</p>
        </article>

        <div className={styles.reviewsFrame}>
          <button type="button" className={styles.scrollArrow} data-dir="left" onClick={() => scroll('left')} aria-label="Föregående">
            <ChevronLeft size={18} strokeWidth={1.6} />
          </button>

          <div className={styles.reviewsScroller} ref={scrollerRef}>
            <div className={styles.reviews}>
              {reviews.map(([name, text, photo]) => (
                <article key={name} className={styles.reviewCard}>
                  <div className={styles.stars}>★★★★★</div>
                  <p>{text}</p>
                  <div className={styles.reviewFooter}>
                    <span className={styles.avatar}>
                      <img src={photo} alt={name} />
                    </span>
                    <div>
                      <b>{name}</b>
                      <small>Verifierad kund</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button type="button" className={styles.scrollArrow} data-dir="right" onClick={() => scroll('right')} aria-label="Nästa">
            <ChevronRight size={18} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div className={styles.ctaRow}>
        <Link href="/omdomen" className="button primary">
          Se våra omdömen
        </Link>
      </div>
    </section>
  );
}