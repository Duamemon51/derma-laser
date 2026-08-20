import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrustSection from '../components/TrustSection';
import ResultsSection from '../components/ResultsSection';
import TreatmentCategoriesSection from '../components/TreatmentCategoriesSection';
import { serviceLinks } from '../components/services';
import TreatmentsSection from '@/components/TreatmentsSection';
import TipsGuidesSection from '@/components/TipsGuidesSection';
import IntroStatement from '@/components/IntroStatement';

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
const treatmentSlugs: Record<string, string> = {
  Laserbehandlingar: 'laserbehandlingar',
  Hudföryngring: 'hudforengring',
  Injektioner: 'injektioner',
  'Medicinsk hudvård': 'medicinsk-hudvard',
  Kroppsvård: 'kroppsvard',
};

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
        <Header treatments={[...treatments, ...serviceLinks]} />
        <div className="heroCopy shell" id="top">
          <h1 id="hero-title">En personlig skönhetsklinik i <br /> Göteborg, med dig i fokus.</h1>

          <div className="buttonRow">
            <a className="button primary" href="#boka">Boka tid online</a>
            <a className="button outline" href="#behandlingar">Behandlingar</a>
            <a className="button link" href="#om-oss">Utforska</a>
          </div>

          <div className="rating">
            <span className="ratingLabel">Nöjda kunder sedan 2000</span>
            <div className="ratingScore">
              <span className="ratingStars" aria-label="4,6 av 5 stjärnor">★★★★<span>★</span></span>
              <strong>4,6/5</strong>
            </div>
            <small>+1000 omdömen på Peco</small>
            <div className="ratingLinks">
              <a href="#">Se på Peco (extern)</a>
              <span className="dot" aria-hidden="true">·</span>
              <a href="#">Mer om omdömen</a>
            </div>
          </div>
        </div>

        <div className="floatingMark" aria-hidden="true">D</div>
      </section>

      <main>
      <section className="about shell section" id="om-oss">
  <div className="aboutCopy center">
    <p className="eyebrow">Om Derma Laser Studio</p>
    <h2>Din hud är i trygga händer.</h2>
    <p className="aboutIntro">På Derma Laser Studio kombinerar vi avancerad teknik med personlig omsorg. Vår målsättning är att framhäva din naturliga skönhet genom säkra, effektiva och skräddarsydda behandlingar.</p>
  </div>
  <div className="miniGrid">
    <div><b>Avancerad teknik</b><span>Vi arbetar med moderna laser- och hudvårdsmetoder.</span></div>
    <div><b>Personlig rådgivning</b><span>Varje behandling anpassas efter din hudtyp och dina mål.</span></div>
    <div><b>Trygg & säker miljö</b><span>Din säkerhet och ditt välmående är vår prioritet.</span></div>
    <div><b>Naturliga resultat</b><span>Vi framhäver din naturliga skönhet – inte förändrar den.</span></div>
  </div>
</section>

        <section className="consult shell" id="boka">
          <div className="consultImage"><Image src="/images/consultation-room.webp" alt="Lugn behandlingsmiljö på kliniken" fill sizes="260px" /></div>
          <div className="consultCopy"><p className="eyebrow">Behandla din skönhet. Boka nu själv.</p><h2>30 minuter som kan<br />förändra din hud.</h2><p>Vi analyserar din hud, går igenom dina mål och skapar en personlig behandlingsplan – helt utan kostnad.</p></div>
          <div className="consultPoints"><span>✓ 30 min personlig rådgivning med hudanalys</span><span>✓ Individuellt anpassade behandlingsplaner</span><span>✓ Trygg, professionell och diskret miljö</span><a className="button primary" href="/boka-tid">Boka 30 min kostnadsfri konsultation</a></div>
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
<IntroStatement />
        <ResultsSection />

        <section className="section shell faq" aria-labelledby="faq-title">
          <p className="eyebrow center">Vanliga frågor</p><h2 id="faq-title" className="sectionTitle">Har du frågor? Vi har svaren.</h2>
          <div className="faqGrid">{faqs.map((q, i) => <details key={q}><summary>{q}<span><ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" /></span></summary><p>{i % 2 === 0 ? 'Vi går alltid igenom vad du kan förvänta dig före behandlingen och anpassar upplägget efter dina behov.' : 'Kontakta oss så hjälper vi dig med ett tydligt svar utifrån just din behandling och dina förutsättningar.'}</p></details>)}</div>
        </section>

          <TreatmentCategoriesSection treatments={[...treatments, ...serviceLinks]} />
<TipsGuidesSection />
    <section className="cta" id="kontakt" style={{ minHeight: '380px', padding: '20px',borderRadius: 0, }}>
  <div style={{ gridColumn: '1 / -1', maxWidth: '700px', margin: '0 auto', padding: '0 20px' }}>
    <h2 style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', marginBottom: '20px' }}>
      Redo att ta nästa steg?
    </h2>
    <p style={{ fontSize: '16px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
      Upptäck skräddarsydda behandlingar som ger din hud den glöd den förtjänar. Redo din behandling eller konsultation idag.
    </p>
    <Link
      className="button primary"
      href="/boka-tid"
      style={{ minHeight: '58px', padding: '0 44px', fontSize: '13px' }}
    >
      Boka tid online
    </Link>
  </div>
</section>
      </main>

      <Footer />
    </>
  );
}