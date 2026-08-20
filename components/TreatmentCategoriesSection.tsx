'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './TreatmentCategoriesSection.module.css';

const treatmentSlugs: Record<string, string> = {
  Hudanalys: 'hudanalys-stockholm',
  'Akne & oren hud': 'aknebehandling-stockholm',
  'Känslig & reaktiv hud': 'kanslig-hud-stockholm',
  'Pigmentering & ojämn hudton': 'pigmentering-stockholm',
  'Signature Premium Hudbehandling': 'signature-hudbehandling-stockholm',
  'Klassisk Hudbehandling': 'ansiktsbehandling-stockholm',
  'Kemisk peeling': 'kemisk-peeling-stockholm',
  Hydrafacial: 'hydrafacial-stockholm',
  'Carbon Peel': 'carbon-peel-stockholm',
  'Diodlaser hårborttagning': 'laser-harborttagning-stockholm',
  'CO2 Laser Resurfacing': 'co2-laser-stockholm',
};

type TreatmentCategoriesSectionProps = {
  treatments: string[][];
};

export default function TreatmentCategoriesSection({ treatments }: TreatmentCategoriesSectionProps) {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="treatment-categories-title">
      <p className="eyebrow center">Våra behandlingar</p>
      <h2 id="treatment-categories-title" className="sectionTitle">Behandlingar för din hud och ditt välmående.</h2>
      <div className={styles.grid}>
        {treatments.map(([title], i) => {
          return (
            <div className={styles.item} key={title}>
              <Link className={styles.trigger} href={`/behandlingar/${treatmentSlugs[title] ?? title.toLowerCase().replaceAll(' ', '-')}`}>
                <span className={styles.left}>
                  <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.label}>{title}</span>
                </span>
                <span className={styles.arrowWrap}>
                  <ChevronRight size={16} strokeWidth={1.6} aria-hidden="true" />
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}