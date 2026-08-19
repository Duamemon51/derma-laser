'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Directionsaccordion.module.css';

type Item = { question: string; body: React.ReactNode };

export default function DirectionsAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true">
                <ChevronDown size={18} strokeWidth={1.5} />
              </span>
            </button>
            {isOpen && <div className={styles.body}>{item.body}</div>}
          </div>
        );
      })}
    </div>
  );
}