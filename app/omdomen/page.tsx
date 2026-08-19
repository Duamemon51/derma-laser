import Image from 'next/image';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { serviceLinks } from '../../components/services';
import styles from './page.module.css';

export const metadata = {
  title: 'Omdömen',
  description: 'Läs omdömen om Derma Laser Studio.',
};

export default function ReviewsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="reviews-title">
        <video
          src="/videos/citylaser-goteborg-omdomen.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.heroVideo}
          aria-label="Kundomdömen från Derma Laser Studio"
        />
        <div className={styles.overlay} />
        <Header treatments={serviceLinks} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Kundreferenser</p>
          <h1 id="reviews-title">Citylaser omdömen</h1>
        </div>
      </section>

      <section className={`${styles.reviewInfo} shell`} aria-labelledby="review-info-title">
        <p className={styles.lead} id="review-info-title">
          För oss på Citylaser är du som kund viktigast av allt. God service och ett
          personligt bemötande genomsyrar hela kliniken. Vi är därför väldigt stolta
          och glada över alla fina omdömen och recensioner som vi får och har fått.
          Rekommendationssajten Reco har utsett Citylaser till ett rekommenderat företag
          även 2023. Citylaser utsågs även 2016, 2017, 2018, 2019, 2020, 2021 & 2022
          till ett rekommenderat företag av Reco.
        </p>

        <div className={styles.reviewColumns}>
          <article>
            <h2>Varför är omdömen viktiga?</h2>
            <p>
              Omdömen är viktiga i allmänhet, kanske inom vår bransch i synnerhet då det
              faktiskt handlar om behandlingar, ingrepp som även leder till faktiska
              fysiska ändringar på ett eller annat sätt. Vi på Citylaser jobbar ständigt
              med att förbättra oss som klinik, vårt bemötande och våra behandlingar.
              Därför är det viktigt att du ger ditt omdöme och berättar vad du tycker om
              oss och om det är något som vi kan förbättra eller något vi är extra bra på.
            </p>
          </article>
          <article>
            <h2>Var kan jag ge mitt omdöme för Citylaser?</h2>
            <p>
              Vi är självklart glada för alla omdömen, oavsett var de ges. Men för att vi
              ska kunna känna var med och följa upp rekommendationer och feedback på bästa
              sätt så är det lättast för oss om omdömen i nuläget ges på Reco. Klicka på
              länken ovan eller på loggan nedan för att komma till Reco.se. Där kan du
              skriva ett omdöme eller läsa andras. Vi är glada för alla omdömen och
              recensioner.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.reviewImageSection} aria-label="Hudvård på Derma Laser Studio">
        <Image
          src="/images/omdomen.png"
          alt="Hudvårdsprodukter på Derma Laser Studio"
          fill
          sizes="100vw"
          className={styles.reviewImage}
        />
      </section>

      <Footer />
    </main>
  );
}
