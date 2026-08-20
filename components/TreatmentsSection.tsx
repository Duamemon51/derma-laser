'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const treatmentSlugs: Record<string, string> = {
  Hudanalys: 'hudanalys-stockholm',

  'Akne & oren hud': 'aknebehandling-stockholm',

  'Känslig & reaktiv hud': 'kanslig-hud-stockholm',

  'Pigmentering & ojämn hudton': 'pigmentering-stockholm',

  'Signature Premium Hudbehandling':
    'signature-hudbehandling-stockholm',

  'Klassisk Hudbehandling':
    'ansiktsbehandling-stockholm',

  'Kemisk peeling':
    'kemisk-peeling-stockholm',

  Hydrafacial:
    'hydrafacial-stockholm',

  'Carbon Peel':
    'carbon-peel-stockholm',

  'Diodlaser hårborttagning':
    'laser-harborttagning-stockholm',

  'CO2 Laser Resurfacing':
    'co2-laser-stockholm',
};

const treatments = [
  [
    'Hudanalys',
    '30 min, gratis. Personlig analys av hudens behov och mål.',
  ],
  [
    'Akne & oren hud',
    '45 min, 795 kr. För akne, finnar och orenheter.',
  ],
  [
    'Känslig & reaktiv hud',
    '45 min, 695 kr. Lugnar och stärker hudbarriären.',
  ],
  [
    'Pigmentering & ojämn hudton',
    '30 min, 795 kr. För en jämnare hudton och mer lyster.',
  ],
  [
    'Signature Premium Hudbehandling',
    '45 min, 1 999 kr. Avancerad behandling med personlig anpassning.',
  ],
  [
    'Klassisk Hudbehandling',
    '45 min, 795 kr. Rengör, återfuktar och ger huden ny lyster.',
  ],
  [
    'Kemisk peeling',
    '45 min, 1 195 kr. Exfolierar huden och förbättrar struktur och lyster.',
  ],
  [
    'Hydrafacial',
    '30 min, 895 kr. Djuprengör, exfolierar och återfuktar huden.',
  ],
  [
    'Carbon Peel',
    '45 min, 1 095 kr. Ger lyster och en jämnare hudstruktur.',
  ],
  [
    'Diodlaser hårborttagning',
    'Från 495 kr. Effektiv hårborttagning med diodlaser.',
  ],
  [
    'CO2 Laser Resurfacing',
    '60 min, 4 500 kr. För förbättrad hudstruktur och hudförnyelse.',
  ],
];

export default function TreatmentsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;

    if (!el) return;

    const cardWidth = 260 + 16;

    el.scrollBy({
      left:
        direction === 'left'
          ? -cardWidth * 2
          : cardWidth * 2,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section shell" id="behandlingar">
      <p className="eyebrow center">Behandlingar</p>

      <h2 className="sectionTitle">
        Behandlingar för din hud och ditt välmående.
      </h2>

      <div className="treatmentScrollerWrap">
        <button
          type="button"
          className="scrollArrow scrollArrowLeft"
          onClick={() => scroll('left')}
          aria-label="Föregående"
        >
          <ChevronLeft size={18} strokeWidth={1.6} />
        </button>

        <div className="treatmentScroller" ref={scrollerRef}>
          <div className="treatmentGrid">
            {treatments.map(([title, text]) => {
              const slug = treatmentSlugs[title];

              return (
                <article className="treatmentCard" key={title}>
                  <span className="cardIcon">◇</span>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <Link
                    className="cardArrow"
                    href={`/behandlingar/${slug}`}
                    aria-label={`Läs mer om ${title}`}
                  >
                    →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="scrollArrow scrollArrowRight"
          onClick={() => scroll('right')}
          aria-label="Nästa"
        >
          <ChevronRight size={18} strokeWidth={1.6} />
        </button>
      </div>
    </section>
  );
}