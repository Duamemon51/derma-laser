import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { serviceLinks } from '@/components/services';
import styles from './page.module.css';

export const metadata = {
  title: 'Om Dermalaser Studio | Hudterapeut i Stockholm',
  description: 'Lär känna Dermalaser Studio och Nadya, utbildad inom kosmetisk dermatologi. Personligt anpassad hudvård i Midsommarkransen, Stockholm.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <Image
          src="/images/about-hero.png"
          alt="Teamet på Derma Laser Studio"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
        <Header treatments={serviceLinks} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Om oss</p>
          <h1 id="about-title">Om Dermalaser Studio Stockholm</h1>
        </div>
      </section>

      <section className={`${styles.intro} shell`}>
        <p className={styles.introText}>
          Dermalaser Studio Stockholm är en hud- och laserstudio i Midsommarkransen med
          fokus på personliga, skonsamma och resultatinriktade behandlingar. Studion drivs
          av Nadya, utbildad inom kosmetisk dermatologi med flera års erfarenhet av hudvård
          och avancerade hudbehandlingar. Fokus ligger på långsiktiga resultat, trygg
          vägledning och att stärka huden utan att stressa den i onödan.
        </p>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.eyebrow}>Vår filosofi</p>
            <h2>Vi börjar med att förstå huden.</h2>
            <p>
              Ingen hud är exakt likadan. Två personer med akne, pigmentering eller
              känslighet kan därför behöva helt olika upplägg. Vi utgår från hudens
              aktuella tillstånd, tidigare erfarenheter, mål och hur huden brukar reagera
              innan vi rekommenderar behandling.
            </p>
          </div>
          <div className={styles.column}>
            <p className={styles.eyebrow}>Långsiktiga resultat</p>
            <h2>Naturliga resultat får ta tid.</h2>
            <p>
              Målet är inte att göra så mycket som möjligt vid varje besök, utan att välja
              det huden faktiskt behöver. Behandlingen kan därför vara lugnande och
              barriärstärkande vid ett besök och mer aktiv när huden är redo för det.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.columns} shell`}>
        <div className={styles.column}>
          <h2>Hudproblem vi arbetar med.</h2>
          <p>
            Akne, finnar och oren hud. Pormaskar och tilltäppta porer. Känslig och
            reaktiv hud. Pigmentering och solskador. Ojämn hudton och glåmighet.
            Synliga porer och ojämn hudstruktur. Akneärr och förändrad hudstruktur.
            Torr eller fuktfattig hud samt oönskad hårväxt.
          </p>
        </div>
        <div className={styles.column}>
          <h2>Du behöver inte veta vad du ska boka.</h2>
          <p>
            Är du ny kund eller osäker på vad huden behöver kan du börja med en
            kostnadsfri hudanalys. Vi hjälper dig att förstå huden och välja behandling
            utifrån verkligt behov i stället för trend.
          </p>
          <p>
            <strong>Välkommen till Dermalaser Studio</strong><br />
            Besök oss på Midsommarvägen 66 i Hägersten, Midsommarkransen eller boka en
            tid online.
          </p>
          <div className={styles.actions}>
            <a className="button primary" href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" target="_blank" rel="noopener noreferrer">Boka tid</a>
            <a className="button primary" href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" target="_blank" rel="noopener noreferrer">Boka kostnadsfri hudanalys</a>
          </div>
          <p>
            <strong>Läs mer:</strong>{' '}
            <a href="/behandlingar/medicinsk-hudvard">Alla behandlingar</a>{' · '}
            <a href="/behandlingar/medicinsk-hudvard">Hudanalys</a>{' · '}
            <a href="/kontakt">Kontakt</a>
          </p>
        </div>
      </section>

      <section className={styles.banner} aria-label="Derma Laser Studio">
        <video
          src="/videos/citylaser-goteborg-plastikkirurgi-fettsugning-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.bannerVideo}
          aria-label="Derma Laser Studio behandling"
        />
      </section>

      <Footer />
    </main>
  );
}