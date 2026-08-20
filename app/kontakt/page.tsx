import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { serviceLinks } from '@/components/services';
import DirectionsAccordion from '../../components/Directionsaccordion';
import styles from './page.module.css';

export const metadata = {
  title: 'Kontakt | Dermalaser Studio Stockholm - Midsommarkransen',
  description: 'Kontakta Dermalaser Studio på Midsommarvägen 66 i Hägersten. Frågor om hudvård, ansiktsbehandling eller laser? Kontakta oss eller boka online.',
};

const clinicAddress = 'Midsommarvägen 66, 126 35 Hägersten, Stockholm';
const bookingUrl = 'https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089';
const mapQuery = encodeURIComponent('Derma Laser Studio, ' + clinicAddress);

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <video
          src="/videos/6815065-uhd_4096_1974_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.heroVideo}
          aria-label="Derma Laser Studio klinikmiljö"
        />
        <div className={styles.overlay} />
        <Header treatments={serviceLinks} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Kontakt</p>
          <h1 id="contact-title">Kontakta Dermalaser Studio Stockholm</h1>
        </div>
      </section>

      <section className={`${styles.intro} shell`}>
        <p className={styles.introText}>
          Har du frågor om våra hudbehandlingar, laserbehandlingar eller vilken tjänst
          som passar dig? Kontakta oss eller boka direkt online. Är du osäker på vad du
          ska välja rekommenderar vi kostnadsfri hudanalys som första steg.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCol}>
            <p className={styles.eyebrow}>Kontaktuppgifter</p>

            <p className={styles.strong}>Besök oss</p>
            <p>Dermalaser Studio Stockholm</p>
            <p>{clinicAddress}</p>

            <p className={styles.spaced}>
              För kundfrågor och frågor kring behandlingar:<br />
              <a href="mailto:info@dermalaser.se">info@dermalaser.se</a>
            </p>

            <p className={styles.spaced}>
              Frågor om hudvård, ansiktsbehandling eller laser? Kontakta oss eller boka
              online via Bokadirekt.
            </p>
            <p>
              Följ oss på Instagram:{' '}
              <a href="https://www.instagram.com/dermalaserstudiosthlm/" target="_blank" rel="noopener noreferrer">
                @dermalaserstudiosthlm
              </a>
            </p>
            <a className="button primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">Se lediga tider</a>
          </div>

          <div className={styles.contactCol}>
            <p className={styles.eyebrow}>Våra öppettider</p>
            <dl className={styles.hoursList}>
              <div><dt>Måndag</dt><dd>10.00–17.00</dd></div>
              <div><dt>Tisdag</dt><dd>10.00–17.30</dd></div>
              <div><dt>Onsdag</dt><dd>10.00–17.30</dd></div>
              <div><dt>Torsdag</dt><dd>10.00–17.30</dd></div>
              <div><dt>Fredag</dt><dd>10.00–17.00</dd></div>
              <div><dt>Lördag–Söndag</dt><dd>Stängt</dd></div>
            </dl>

            <p className={`${styles.eyebrow} ${styles.spacedTop}`}>Boka online</p>
            <p className={styles.findUsText}>
              Alla tillgängliga tider och aktuella priser finns via Bokadirekt. Är du ny
              kund och osäker på vilken behandling du ska välja rekommenderar vi
              kostnadsfri hudanalys som första steg.
            </p>
            <a className="button primary" href={bookingUrl} target="_blank" rel="noopener noreferrer">Boka tid online</a>

            <p className={`${styles.eyebrow} ${styles.spacedTop}`}>Hitta till oss</p>
            <p className={styles.findUsText}>
              Vi finns på Midsommarvägen 66 i Hägersten, i Midsommarkransen, Stockholm.
            </p>

            <DirectionsAccordion
              items={[
                {
                  question: 'Med tåg eller buss?',
                  body: (
                    <>
                      <p>
                        Besöksadressen är Midsommarvägen 66, 126 35 Hägersten, Stockholm.
                      </p>
                      <p>
                        Som bokad kund får du en portkod till oss i ett
                        påminnelse-sms 24 timmar före din behandling.
                      </p>
                    </>
                  ),
                },
                {
                  question: 'Visa karta',
                  body: (
                    <div className={styles.mapBody}>
                      <iframe
                        title="Karta till Derma Laser Studio"
                        className={styles.mapFrame}
                        src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                        loading="lazy"
                      />
                    </div>
                  ),
                },
                {
                  question: 'Hur bokar jag en behandling?',
                  body: <p>Boka online via Dermalasers Bokadirekt-sida. Alla tillgängliga tider och aktuella priser finns där.</p>,
                },
                {
                  question: 'Vad bokar jag om jag är osäker?',
                  body: <p>Boka kostnadsfri hudanalys. Den passar nya kunder och dig som vill ha vägledning innan du väljer behandling.</p>,
                },
                {
                  question: 'Har du hittat rätt behandling?',
                  body: <p>Se lediga tider online och boka när det passar dig.</p>,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}