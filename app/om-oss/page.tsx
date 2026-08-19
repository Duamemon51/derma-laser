import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { serviceLinks } from '../../components/services';
import styles from './page.module.css';

export const metadata = {
  title: 'Om oss',
  description: 'Lär känna Derma Laser Studio och vårt team i Göteborg.',
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
          <h1 id="about-title">Om Derma Laser Studio</h1>
        </div>
      </section>

      <section className={`${styles.intro} shell`}>
        <p className={styles.introText}>
          Derma Laser Studio är din skönhetsklinik i Göteborg. Vi startade med fokus på
          avancerad laserbehandling och har sedan dess utvecklats till en klinik som
          erbjuder ett brett utbud av hudvård, injektioner och estetiska behandlingar –
          alltid med din hud och dina mål i centrum.
        </p>

        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.eyebrow}>Vårt utbud</p>
            <h2>Skräddarsydda behandlingar för din hud.</h2>
            <p>
              Vi erbjuder laserbehandlingar, hudföryngring, injektioner och medicinsk
              hudvård utförda av kvalificerad personal. Varje behandlingsplan tas fram
              individuellt utifrån din hudtyp och dina mål, så att resultatet alltid
              känns som du. Välkommen till oss.
            </p>
          </div>
          <div className={styles.column}>
            <p className={styles.eyebrow}>Våra kärnvärden</p>
            <h2>En klinik där du som kund alltid är i centrum.</h2>
          </div>
        </div>
      </section>

      <section className={`${styles.columns} shell`}>
        <div className={styles.column}>
          <h2>Personligt bemötande i en lugn miljö.</h2>
          <p>
            Vi vet att ett klinikbesök ska kännas tryggt från första kontakt. Därför
            erbjuder vi kostnadsfria konsultationer, ett diskret läge centralt i
            Göteborg och personal som tar sig tid att lyssna. Vårt mål är att varje
            person som kliver in hos oss ska känna sig prioriterad, sedd och bekväm
            genom hela sitt besök.
          </p>
        </div>
        <div className={styles.column}>
          <h2>Kompetens och trygghet i varje steg.</h2>
          <p>
            Vår personal arbetar löpande med beprövade metoder och håller sig
            uppdaterad inom sina respektive områden för att du ska få ett säkert och
            hållbart resultat. Skulle något ändå inte bli som du tänkt dig är du
            alltid välkommen tillbaka till oss – det viktigaste för oss är att du
            som kund är nöjd med behandlingen du fått.
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