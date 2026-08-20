'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const treatmentSlugs: Record<string, string> = {
  Laserbehandlingar: 'laserbehandlingar',
  Hudföryngring: 'hudforengring',
  Injektioner: 'injektioner',
  'Medicinsk hudvård': 'medicinsk-hudvard',
  Kroppsvård: 'kroppsvard',
  'Klassisk massage': 'klassisk-massage',
  'Lyxbehandling för 1/2': 'lyxbehandling-1-2',
  'Spaavdelning med bubbelpool & privat IR-bastu': 'spa-och-ir-bastu',
  'Fotbehandling/Pedikyr': 'fotbehandling-pedikyr',
  'Hudvård/Ansikte': 'hudvard-ansikte',
  Övrigt: 'ovrigt',
};

const treatments = [
  ['Laserbehandlingar', 'Hårborttagning, pigmentering, kärlbehandling och mer med avancerad laserteknik.'],
  ['Hudföryngring', 'Microneedling, kemisk peeling och andra metoder för att återställa hudens lyster.'],
  ['Injektioner', 'Fillers och anti-aging behandlingar för ett naturligt och fräscht utseende.'],
  ['Medicinsk hudvård', 'Djupgående hudanalyser och behandlingar för vanliga hudproblem.'],
  ['Kroppsvård', 'Avancerad kroppsvård för att forma, strama upp och förbättra din hud.'],
  ['Klassisk massage', 'Skön avslappnande massage som lindrar spänningar och stress i kroppen.'],
  ['Lyxbehandling för 1/2', 'En exklusiv upplevelse för dig själv eller tillsammans med en vän.'],
  ['Spaavdelning med bubbelpool & privat IR-bastu', 'Koppla av i vår privata spaavdelning med bubbelpool och infravärmebastu.'],
  ['Fotbehandling/Pedikyr', 'Professionell fotvård och pedikyr för mjuka, välvårdade fötter.'],
  ['Hudvård/Ansikte', 'Skräddarsydda ansiktsbehandlingar anpassade efter din hudtyp.'],
  ['Övrigt', 'Fler behandlingar och tjänster för din skönhet och ditt välmående.'],
];

export default function TreatmentsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 260 + 16; // card width + gap
    el.scrollBy({ left: direction === 'left' ? -cardWidth * 2 : cardWidth * 2, behavior: 'smooth' });
  };

  return (
    <section className="section shell" id="behandlingar">
      <p className="eyebrow center">Behandlingar</p>
      <h2 className="sectionTitle">Behandlingar för din hud och ditt välmående.</h2>

      <div className="treatmentScrollerWrap">
        <button type="button" className="scrollArrow scrollArrowLeft" onClick={() => scroll('left')} aria-label="Föregående">
          <ChevronLeft size={18} strokeWidth={1.6} />
        </button>

        <div className="treatmentScroller" ref={scrollerRef}>
          <div className="treatmentGrid">
            {treatments.map(([title, text]) => (
              <article className="treatmentCard" key={title}>
                <span className="cardIcon">◇</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className="cardArrow" href={`/behandlingar/${treatmentSlugs[title]}`} aria-label={`Läs mer om ${title}`}>→</Link>
              </article>
            ))}
          </div>
        </div>

        <button type="button" className="scrollArrow scrollArrowRight" onClick={() => scroll('right')} aria-label="Nästa">
          <ChevronRight size={18} strokeWidth={1.6} />
        </button>
      </div>
    </section>
  );
}