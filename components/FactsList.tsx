'use client';

import { useState } from 'react';
import styles from './Faq.module.css';

type FaqItem = { question: string; answer: string };

export default function Faq({ items, title }: { items: readonly FaqItem[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items.length) return null;

  return (
    <section className={`${styles.faq} shell`}>
      <p className={styles.eyebrow}>Vanliga frågor och svar om {title.toLowerCase()}</p>
      <div className={styles.list}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className={styles.item}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true">
                  ⌄
                </span>
              </button>
              {isOpen && <p className={styles.answer}>{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}