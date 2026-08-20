'use client';

import { useRef } from 'react';
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

export default function ResultsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 280 + 16;
    el.scrollBy({ left: direction === 'left' ? -cardWidth * 2 : cardWidth * 2, behavior: 'smooth' });
  };

  return (
    <section className={`section shell ${styles.results}`}>
      <p className="eyebrow center">Äkta resultat</p>
      <h2 className="sectionTitle">Verkliga resultat. Verkliga människor.</h2>

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
    </section>
  );
}