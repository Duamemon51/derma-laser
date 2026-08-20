'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Vilken ansiktsbehandling ska jag välja?',
    text: 'Om du är osäker rekommenderar vi kostnadsfri hudanalys. Då kan huden bedömas innan behandling väljs.',
    linkText: 'kostnadsfri hudanalys',
    href: '/hudanalys-stockholm/',
  },
  {
    q: 'Behandlar Dermalaser akne?',
    text: 'Ja. Det finns en separat behandling för akne och oren hud som passar både tonårsakne och vuxenakne.',
    linkText: 'behandling för akne och oren hud',
    href: '/behandlingar/aknebehandling-stockholm',
  },
  {
    q: 'Kan pigmentfläckar behandlas?',
    text: 'Dermalaser erbjuder en separat behandling för pigmentering och ojämn hudton samt kemiska peelingar som kan vara relevanta efter bedömning.',
    linkText: 'behandling för pigmentering och ojämn hudton',
    href: '/behandlingar/pigmentering-stockholm',
  },
  {
    q: 'Vad är Hydrafacial?',
    text: 'En behandling som kombinerar rengöring, exfoliering och återfuktning.',
    linkText: 'Hydrafacial',
    href: '/behandlingar/hydrafacial-stockholm',
  },
  {
    q: 'Vad är Carbon Peel?',
    text: 'En behandling med fokus på tilltäppt hud, talg, synliga porer och hudklarhet.',
    linkText: 'Carbon Peel',
    href: '/behandlingar/carbon-peel-stockholm',
  },
  {
    q: 'Vilka kemiska peelingar finns?',
    text: 'Dermalaser listar PRX-T33, BioRePeel Cl3 och glycolic/glykolsyra.',
    linkText: 'kemiska peelingar',
    href: '/behandlingar/kemisk-peeling-stockholm',
  },
  {
    q: 'Vad är CO2 Laser Resurfacing?',
    text: 'En mer avancerad fraktionerad laserbehandling för hudförnyelse och struktur, bland annat vid akneärr.',
    linkText: 'CO2 Laser Resurfacing',
    href: '/behandlingar/co2-laser-stockholm',
  },
  {
    q: 'Erbjuder ni laser hårborttagning?',
    text: 'Ja. Diodlaser erbjuds för små, mellan och större områden.',
    linkText: 'Diodlaser',
    href: '/behandlingar/laser-harborttagning-stockholm',
  },
  {
    q: 'Måste jag raka mig före diodlaser?',
    text: 'Ja. Området ska vara rakat; annars tillkommer en extra avgift på 100 kr för rakning på plats.',
  },
  {
    q: 'Var ligger Dermalaser?',
    text: 'Midsommarvägen 66, 126 35 Hägersten i Midsommarkransen, Stockholm.',
    linkText: 'kontaktuppgifter och öppettider',
    href: '/kontakt/',
  },
];

function Answer({
  text,
  linkText,
  href,
}: {
  text: string;
  linkText?: string;
  href?: string;
}) {
  if (!linkText || !href || !text.includes(linkText)) {
    return <p>{text}</p>;
  }

  const [before, after] = text.split(linkText);

  return (
    <p>
      {before}

      <Link
        href={href}
        style={{
          color: '#c9a227',
          fontWeight: 600,
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
        }}
      >
        {linkText}
      </Link>

      {after}
    </p>
  );
}

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleFaqClick = (question: string) => {
    setOpenFaq((currentFaq) =>
      currentFaq === question ? null : question
    );
  };

  return (
    <section
      className="section shell faq"
      aria-labelledby="faq-title"
      id="vanliga-fragor"
    >
      <p className="eyebrow center">Hudvård frågor</p>

      <h2 id="faq-title" className="sectionTitle">
        Vanliga frågor om hudvård, ansiktsbehandling och laser
      </h2>

      <p className="aboutIntro center">
        Svar på vanliga frågor om Hydrafacial, akne, pigmentering, kemisk
        peeling, Carbon Peel, CO2-laser och laser hårborttagning på
        Dermalaser Studio i Hägersten, Stockholm.
      </p>

      <div className="faqGrid">
        {faqs.map(({ q, text, linkText, href }) => {
          const isOpen = openFaq === q;

          return (
            <details key={q} open={isOpen}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  handleFaqClick(q);
                }}
              >
                {q}

                <span>
                  <ChevronDown
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </summary>

              {isOpen && (
                <Answer
                  text={text}
                  linkText={linkText}
                  href={href}
                />
              )}
            </details>
          );
        })}
      </div>
    </section>
  );
}