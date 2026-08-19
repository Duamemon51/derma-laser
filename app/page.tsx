import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serviceLinks } from '../components/services';

const treatments = [
  ['Laserbehandlingar', 'Hårborttagning, pigmentering, kärlbehandling och mer med avancerad laserteknik.'],
  ['Hudföryngring', 'Microneedling, kemisk peeling och andra metoder för att återställa hudens lyster.'],
  ['Injektioner', 'Fillers och anti-aging behandlingar för ett naturligt och fräscht utseende.'],
  ['Medicinsk hudvård', 'Djupgående hudanalyser och behandlingar för vanliga hudproblem.'],
  ['Kroppsvård', 'Avancerad kroppsvård för att forma, strama upp och förbättra din hud.'],
];

const treatmentSlugs: Record<string, string> = {
  Laserbehandlingar: 'laserbehandlingar',
  Hudföryngring: 'hudforengring',
  Injektioner: 'injektioner',
  'Medicinsk hudvård': 'medicinsk-hudvard',
  Kroppsvård: 'kroppsvard',
};

const trust = [
  ['01', 'Nöjda kunder', 'Vi är stolta över våra nöjda kunder och det förtroende de ger oss.'],
  ['02', 'Tydligt', 'Vi kommunicerar på ett tydligt och ärligt sätt så att du alltid vet vad du kan förvänta dig.'],
  ['03', 'Säkert', 'Vi sätter din säkerhet i första hand med noggrant utförda behandlingar och höga standarder.'],
  ['04', 'Tryggt', 'Varmt bemötande med professionell omsorg i en välkomnande och avslappnande miljö.'],
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
          <div className="aboutCopy">
            <p className="eyebrow">Om Derma Laser Studio</p>
            <h2>Din hud är i<br />trygga händer.</h2>
            <p>På Derma Laser Studio kombinerar vi avancerad teknik med personlig omsorg. Vår målsättning är att framhäva din naturliga skönhet genom säkra, effektiva och skräddarsydda behandlingar.</p>
            <div className="miniGrid">
              <div><b>Avancerad teknik</b><span>Vi arbetar med moderna laser- och hudvårdsmetoder.</span></div>
              <div><b>Personlig rådgivning</b><span>Varje behandling anpassas efter din hudtyp och dina mål.</span></div>
              <div><b>Trygg & säker miljö</b><span>Din säkerhet och ditt välmående är vår prioritet.</span></div>
              <div><b>Naturliga resultat</b><span>Vi framhäver din naturliga skönhet – inte förändrar den.</span></div>
            </div>
          </div>
          <div className="aboutImage"><Image src="/images/about-hero.png" alt="Personlig konsultation på kliniken" fill sizes="(max-width: 800px) 100vw, 46vw" /></div>
        </section>

        <section className="consult shell" id="boka">
          <div className="consultImage"><Image src="/images/consultation-room.webp" alt="Lugn behandlingsmiljö på kliniken" fill sizes="260px" /></div>
          <div className="consultCopy"><p className="eyebrow">Behandla din skönhet. Boka nu själv.</p><h2>30 minuter som kan<br />förändra din hud.</h2><p>Vi analyserar din hud, går igenom dina mål och skapar en personlig behandlingsplan – helt utan kostnad.</p></div>
          <div className="consultPoints"><span>✓ 30 min personlig rådgivning med hudanalys</span><span>✓ Individuellt anpassade behandlingsplaner</span><span>✓ Trygg, professionell och diskret miljö</span><a className="button primary" href="#kontakt">Boka 30 min kostnadsfri konsultation</a></div>
        </section>

        <section className="section shell" id="behandlingar">
          <p className="eyebrow center">Behandlingar</p>
          <h2 className="sectionTitle">Behandlingar för din hud och ditt välmående.</h2>
          <div className="treatmentGrid">
            {treatments.map(([title, text]) => (
              <article className="treatmentCard" key={title}>
                <span className="cardIcon">◇</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="cardArrow" href={`/behandlingar/${treatmentSlugs[title]}`} aria-label={`Läs mer om ${title}`}>→</a>
              </article>
            ))}
          </div>
        </section>

        <section className="videoBanner shell" aria-label="Presentation av kliniken">
          <div><h2>Avancerad teknik.<br />Naturliga resultat.</h2><p>Din hud är i säkra och erfarna händer.</p></div>
          <span className="play" aria-hidden="true">▶</span>
          <Image src="/images/video-treatment.webp" alt="Avancerad hudbehandling" fill sizes="100vw" />
        </section>

        <section className="trust shell">
          {trust.map(([num, title, text]) => (
            <div className="trustItem" key={title}>
              <span className="trustSquare">{num}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </section>

        <section className="section shell results">
          <p className="eyebrow center">Äkta resultat</p><h2 className="sectionTitle">Verkliga resultat. Verkliga människor.</h2>
          <div className="resultsImage"><Image src="/images/results.webp" alt="Före- och efterbilder från behandlingar" fill sizes="100vw" /></div>
          <div className="reviews">
            <article className="score"><small>Nöjda kunder sedan 2000</small><strong>4.6/5</strong><span>★★★★★</span><p>+1000 omdömen på PECO</p></article>
            <article><div className="stars">★★★★★</div><p>Jag är jättenöjd med min behandling och det bemötande jag fick.</p><b>Anne L.</b><small>Verifierad kund</small></article>
            <article><div className="stars">★★★★★</div><p>Exceptionellt! Jag rekommenderar varmt Derma Laser Studio.</p><b>Alexandra H.</b><small>Verifierad kund</small></article>
            <article><div className="stars">★★★★★</div><p>Smidigt besök, fint resultat och hög kvalitet varje gång.</p><b>Michaela S.</b><small>Verifierad kund</small></article>
          </div>
        </section>

        <section className="section shell faq" aria-labelledby="faq-title">
          <p className="eyebrow center">Vanliga frågor</p><h2 id="faq-title" className="sectionTitle">Har du frågor? Vi har svaren.</h2>
          <div className="faqGrid">{faqs.map((q, i) => <details key={q}><summary>{q}<span><ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" /></span></summary><p>{i % 2 === 0 ? 'Vi går alltid igenom vad du kan förvänta dig före behandlingen och anpassar upplägget efter dina behov.' : 'Kontakta oss så hjälper vi dig med ett tydligt svar utifrån just din behandling och dina förutsättningar.'}</p></details>)}</div>
        </section>

        <section className="cta shell" id="kontakt">
          <div className="ctaArt leftArt"><Image src="/images/flowers.webp" alt="Blommor och hudvårdsprodukter" fill sizes="220px" /></div>
          <div><h2>Redo att ta nästa steg?</h2><p>Upptäck skräddarsydda behandlingar som ger din hud den glöd den förtjänar. Redo din behandling eller konsultation idag.</p><a className="button primary" href="mailto:info@dermalaser.se">Boka tid online</a></div>
          <div className="ctaArt"><Image src="/images/products.webp" alt="Hudvårdsprodukter" fill sizes="220px" /></div>
        </section>
      </main>

      <Footer />
    </>
  );
}