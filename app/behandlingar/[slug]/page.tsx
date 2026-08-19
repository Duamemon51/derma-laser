import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Faq from '../../../components/Faq';
import { services, serviceLinks } from "../../../components/services";
import styles from './page.module.css';

type FaqItem = { question: string; answer: string };

const defaultFaq: FaqItem[] = [
  { question: 'Hur går behandlingen till?', answer: 'Vi börjar med en personlig konsultation och anpassar behandlingen efter dina behov och mål.' },
  { question: 'Gör behandlingen ont?', answer: 'De flesta upplever behandlingen som bekväm. Vi berättar alltid vad du kan förvänta dig före start.' },
  { question: 'När syns resultatet?', answer: 'Resultatet varierar beroende på behandling och hud. Du får tydlig information under konsultationen.' },
  { question: 'Hur bokar jag en tid?', answer: 'Klicka på boka-knappen på sidan eller kontakta kliniken för att boka en konsultation.' },
];

const treatments = [
  {
    slug: 'laserbehandlingar',
    title: 'Laserbehandlingar',
    summary: 'Avancerad laserteknik för en klarare, jämnare och mer balanserad hud.',
    intro: 'Vi anpassar varje laserbehandling efter din hud, dina mål och det resultat du vill uppnå. Under konsultationen går vi igenom hudens behov och skapar en trygg behandlingsplan.',
    points: ['Hårborttagning och permanent hårreduktion', 'Behandling av pigmenteringar och ytliga kärl', 'Hudföryngring med moderna laserplattformar'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85',
    // Fill these in per treatment — see services-data-additions.md for the pattern
    faq: defaultFaq,
  },
  {
    slug: 'hudforengring',
    title: 'Hudföryngring',
    summary: 'Effektiva behandlingar som återställer hudens lyster och spänst.',
    intro: 'Hudföryngring handlar om att stärka hudens egna processer. Vi kombinerar beprövade metoder för att förbättra struktur, ton och känsla utan att kompromissa med det naturliga uttrycket.',
    points: ['Microneedling för stimulerad kollagenproduktion', 'Kemisk peeling för klarare hudton', 'Personlig plan för långsiktiga resultat'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85',
    faq: defaultFaq,
  },
  {
    slug: 'injektioner',
    title: 'Injektioner',
    summary: 'Varsamma estetiska behandlingar med fokus på naturliga resultat.',
    intro: 'Med noggrann konsultation och erfaren hand arbetar vi med ansiktets form och balans. Målet är ett fräscht resultat som fortfarande känns som du.',
    points: ['Fillers för volym och ansiktsbalans', 'Anti-aging behandlingar med individuell dosering', 'Tydlig rådgivning före och efter behandlingen'],
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=1800&q=85',
    faq: defaultFaq,
  },
  {
    slug: 'medicinsk-hudvard',
    title: 'Medicinsk hudvård',
    summary: 'Djupgående hudanalyser och behandlingar för vanliga hudproblem.',
    intro: 'Vi hjälper dig att förstå din hud och vad den behöver. Tillsammans tar vi fram en genomtänkt rutin och behandling som passar både hudens tillstånd och din vardag.',
    points: ['Hudanalys och personlig rådgivning', 'Behandling av orenheter och känslig hud', 'Produktråd som följer din behandlingsplan'],
    image: '/images/hero-clinic.webp',
    faq: defaultFaq,
  },
  {
    slug: 'kroppsvard',
    title: 'Kroppsvård',
    summary: 'Avancerad kroppsvård för att forma, strama upp och förbättra huden.',
    intro: 'Kroppens hud förtjänar samma personliga omsorg som ansiktet. Vi kombinerar modern teknik med realistiska mål för en jämnare och mer välmående hud.',
    points: ['Huduppstramning och förbättrad hudstruktur', 'Behandlingar anpassade efter kroppens områden', 'Trygg uppföljning genom hela behandlingsplanen'],
    image: '/images/results.webp',
    faq: defaultFaq,
  },
] as const;
const treatmentDetails = treatments.map(({ slug, title, summary, intro, points, image, faq }) => ({
  slug,
  title,
  summary,
  intro,
  points,
  image,
  faq,
}));

const serviceDetails = services.map(({ slug, title, summary, items, image }) => ({
  slug,
  title,
  summary,
  intro: 'Välj den behandling som passar dina behov och boka en tid för personlig rådgivning hos oss.',
  points: items,
  image,
  faq: defaultFaq,
}));

const allDetails = [...treatmentDetails, ...serviceDetails];
const treatmentLinks = [...treatments.map(({ title, summary }) => [title, summary]), ...serviceLinks];

export function generateStaticParams() {
  return allDetails.map(({ slug }) => ({ slug }));
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = allDetails.find((item) => item.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <Image src={treatment.image} alt={treatment.title} fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <Header treatments={treatmentLinks} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Derma Laser Studio</p>
          <h1>{treatment.title}</h1>
          <p>{treatment.summary}</p>
        </div>
      </section>

      <main>
        <section className={`${styles.intro} shell`}>
          <div>
            <p className={styles.eyebrow}>Personlig behandling</p>
            <h2>Trygg väg till ett resultat som känns som du.</h2>
          </div>
          <p>{treatment.intro}</p>
        </section>

        <section className={`${styles.details} shell`}>
          <div className={styles.detailsImage}>
            <Image src={treatment.image} alt={`Behandling: ${treatment.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
          <div className={styles.detailsCopy}>
            <p className={styles.eyebrow}>Det här ingår</p>
            <h2>En plan anpassad efter din hud.</h2>
            <ul>
              {treatment.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <a className="button primary" href="#boka">Boka konsultation</a>
          </div>
        </section>

        <section className={`${styles.facts} shell`}>
          <p className={styles.eyebrow}>Bra att veta</p>
          <h2>Fakta om {treatment.title.toLowerCase()}.</h2>
          <div className={styles.factsGrid}>
            <div><strong>Personligt upplägg</strong><span>Behandlingen anpassas efter dina behov och mål.</span></div>
            <div><strong>Trygg konsultation</strong><span>Vi går igenom frågor, förväntningar och eftervård.</span></div>
            <div><strong>Professionell vägledning</strong><span>Du får tydliga råd före och efter din behandling.</span></div>
          </div>
        </section>

        <section className={styles.process}>
          <div className="shell">
            <p className={styles.eyebrow}>Så går det till</p>
            <h2>Från första mötet till uppföljning.</h2>
            <div className={styles.processGrid}>
              <article><span>01</span><h3>Konsultation</h3><p>Vi lyssnar på dina mål och analyserar hudens behov.</p></article>
              <article><span>02</span><h3>Behandlingsplan</h3><p>Du får tydliga rekommendationer och en plan som passar dig.</p></article>
              <article><span>03</span><h3>Uppföljning</h3><p>Vi följer resultatet och justerar planen när det behövs.</p></article>
            </div>
          </div>
        </section>

        {treatment.faq && treatment.faq.length > 0 && (
          <Faq items={treatment.faq} title={treatment.title} />
        )}

        <section className={`${styles.booking} shell`} id="boka">
          <div>
            <p className={styles.eyebrow}>Redo att börja?</p>
            <h2>Boka en kostnadsfri konsultation.</h2>
            <p>Vi går igenom dina önskemål och svarar på alla frågor innan du bestämmer dig.</p>
          </div>
          <a className="button primary" href="mailto:info@dermalaser.se">Boka tid online</a>
        </section>
      </main>

      <Footer />
    </>
  );
}