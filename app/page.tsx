import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrustSection from '../components/TrustSection';
import ResultsSection from '../components/ResultsSection';
import TreatmentCategoriesSection from '../components/TreatmentCategoriesSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import TipsGuidesSection from '@/components/TipsGuidesSection';
import IntroStatement from '@/components/IntroStatement';
import FaqSection from '@/components/FaqSection';

const treatments = [
  ['Hudanalys', '30 min, gratis. Personlig analys av hudens behov och mål.'],
  ['Akne & oren hud', '45 min, 795 kr. För akne, finnar och orenheter.'],
  ['Känslig & reaktiv hud', '45 min, 695 kr. Lugnar och stärker hudbarriären.'],
  ['Pigmentering & ojämn hudton', '30 min, 795 kr. För en jämnare hudton och mer lyster.'],
  ['Signature Premium Hudbehandling', '45 min, 1 999 kr. Avancerad behandling med personlig anpassning.'],
  ['Klassisk Hudbehandling', '45 min, 795 kr. Rengör, återfuktar och ger huden ny lyster.'],
  ['Kemisk peeling', '45 min, 1 195 kr. Exfolierar huden och förbättrar struktur och lyster.'],
  ['Hydrafacial', '30 min, 895 kr. Djuprengör, exfolierar och återfuktar huden.'],
  ['Carbon Peel', '45 min, 1 095 kr. Ger lyster och en jämnare hudstruktur.'],
  ['Diodlaser hårborttagning', 'Från 495 kr. Effektiv hårborttagning med diodlaser.'],
  ['CO2 Laser Resurfacing', '60 min, 4 500 kr. För förbättrad hudstruktur och hudförnyelse.'],
];
const faqs = [
  'Gör behandlingarna ont?',
  'Hur lång återhämtningstid är det?',
  'När ser jag resultat?',
  'Är behandlingarna säkra?',
  'Hur bokar jag en konsultation?',
  'Vilka betalningsalternativ erbjuder ni?',
  'Kan jag kombinera flera behandlingar?',
  'Avbokningsregler',
];

export default function HomePage() {
    const schema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Derma Laser Studio',
    url: 'https://www.dermalaserstudio.se',
    description: 'Avancerad hudvård, laserbehandlingar och estetiska behandlingar med naturliga resultat.',
    priceRange: '$$',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', reviewCount: '1000' },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO + HEADER — header floats transparent over the hero image, like a hairline over glass */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="heroBg">
          <video
            className="heroImg"
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-clinic.webp"
            aria-hidden="true"
          />
          <div className="heroScrim" />
        </div>
        <Header treatments={treatments} />
        <div className="heroCopy shell" id="top">
         <h1 id="hero-title">Hudvård & avancerade <br /> hudbehandlingar i Stockholm.</h1>
          <p>På Dermalaser Studio möter vi varje hud individuellt. Vi hjälper dig med akne, tilltäppta porer, känslig hud, pigmentering, ojämn hudstruktur, glåmighet och oönskad hårväxt.</p>

          <div className="buttonRow">
          <a
  className="button primary"
  href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089"
  target="_blank"
  rel="noopener noreferrer"
>
  Boka tid online
</a>

            <a className="button outline" href="#behandlingar">Behandlingar</a>
            <a className="button link" href="#om-oss">Utforska</a>
          </div>

          <div className="rating">
           <span className="ratingLabel">Verifierat 20 aug 2026</span>

            <div className="ratingScore">
              <span className="ratingStars" aria-label="4,6 av 5 stjärnor">★★★★<span>★</span></span>
              <strong>4.9/5</strong>
            </div>
            <small>572 betyg på Bokadirekt</small>
            <div className="ratingLinks">
              <a href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089">Se på Peco (extern)</a>
              <span className="dot" aria-hidden="true">·</span>
              <a href="/omdomen">Mer om omdömen</a>
            </div>
          </div>
        </div>

        <div className="floatingMark" aria-hidden="true">D</div>
      </section>

      <main>
      <section className="about shell section" id="om-oss">
  <div className="aboutCopy center">
    <p className="eyebrow">Om Derma Laser Studio</p>
    <h2>Börja med din hud - inte med behandlingsnamnet.</h2>
    <p className="aboutIntro">Det är vanligt att veta vad man vill förbättra men inte vilken behandling man ska boka. Därför kan nya kunder börja med en kostnadsfri hudanalys. Vi går igenom huden, dina mål och eventuella hudutmaningar och hjälper dig att välja ett rimligt behandlingsupplägg.</p>
  </div>
  <div className="miniGrid">
    <div><b>Hudanalys - 30 min, gratis</b><span>Vi analyserar hudens aktuella tillstånd och dina mål.</span></div>
    <div><b>Personlig rådgivning</b><span>Varje behandling anpassas efter hudtyp, tolerans och behov.</span></div>
    <div><b>Trygg & säker miljö</b><span>Du får tydlig vägledning genom hela behandlingen.</span></div>
    <div><b>Långsiktigt perspektiv</b><span>Vi stärker huden utan att stressa den i onödan.</span></div>
  </div>
</section>

       <section className="consult" id="boka">
  <div className="consultCopy">
    <p className="eyebrow">
      Kostnadsfri hudanalys i Stockholm
    </p>
    <h2>Hitta rätt behandling</h2>
    <p>
      Vi analyserar din hud, går igenom dina mål och skapar en personlig
      behandlingsplan - helt utan kostnad.
    </p>
  </div>

  <div className="consultPoints">
    <span>✓ Personlig hudanalys av utbildad hudterapeut</span>
    <span>✓ Skräddarsydd behandlingsplan efter dina mål</span>
    <span>✓ Inga bindningstider eller dolda kostnader</span>
    <a href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" className="button" target="_blank" rel="noopener noreferrer">
      Boka kostnadsfri analys
    </a>
  </div>
</section>
<TreatmentsSection />

        <section className="videoBanner" aria-label="Presentation av kliniken">
          <video
            src="/videos/5659273-hd_1080_1920_30fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Avancerad hudbehandling"
          />
          <div className="videoBannerOverlay">
            <h2>Avancerad teknik.<br />Naturliga resultat.</h2>
            <p>Din hud är i säkra och erfarna händer.</p>
          </div>
        </section>

        <TrustSection />
<IntroStatement
  eyebrow="Personlig hudvård i Stockholm"
  statement="Bra hudvård handlar inte enbart om hur huden ser ut direkt efter en behandling. Vi arbetar med hudens helhet och väljer metod efter tillstånd, tolerans och mål - oavsett om du behöver lugna hudbarriären, djuprengöra, exfoliera, behandla pigmentering eller återfukta."
/>
        <ResultsSection />

      <FaqSection />

          <TreatmentCategoriesSection treatments={treatments} />

    <section className="cta" id="kontakt" style={{ minHeight: '380px', padding: '20px',borderRadius: 0, }}>
  <div style={{ gridColumn: '1 / -1', maxWidth: '700px', margin: '0 auto', padding: '0 20px' }}>
    <h2 style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', marginBottom: '20px' }}>
      Boka din behandling
    </h2>
    <p style={{ fontSize: '16px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
      Välj behandling direkt eller börja med en kostnadsfri hudanalys om du vill ha hjälp att hitta rätt. Vi hjälper dig att ta nästa steg mot en starkare och friskare hud.
    </p>
    <Link
      className="button primary"
      href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089"
      target="_blank"
      rel="noopener noreferrer"
      style={{ minHeight: '58px', padding: '0 44px', fontSize: '13px' }}
    >
      Boka tid online
    </Link>
  </div>
</section>
<TipsGuidesSection />
      </main>

      <Footer />
    </>
  );
}