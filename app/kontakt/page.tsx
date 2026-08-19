import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { serviceLinks } from '../../components/services';
import DirectionsAccordion from '../../components/Directionsaccordion';
import styles from './page.module.css';

export const metadata = {
  title: 'Kontakt',
  description: 'Kontakta Derma Laser Studio i Göteborg.',
};

// TODO: byt ut adress, org.nummer, bankgiro och telefonnummer mot era riktiga uppgifter.
const clinicAddress = 'Kungsportsavenyen 1, 411 36 Göteborg';
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
          <h1 id="contact-title">Vi finns här för dig.</h1>
        </div>
      </section>

      <section className={`${styles.intro} shell`}>
        <p className={styles.introText}>
          Du är alltid varmt välkommen att höra av dig till oss på Derma Laser Studio.
          Vi erbjuder alltid en kostnadsfri konsultation så att du kan känna dig trygg
          innan du bokar en behandling.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCol}>
            <p className={styles.eyebrow}>Kontaktuppgifter</p>

            <p className={styles.strong}>Derma Laser Studio AB</p>
            <p>{clinicAddress}</p>

            <p className={styles.spaced}>
              Org.nummer: 559XXX-XXXX<br />
              Bankgiro: XXX-XXXX
            </p>

            <p className={styles.spaced}>
              För kundfrågor och frågor kring behandlingar:<br />
              <a href="mailto:info@dermalaser.se">info@dermalaser.se</a>
            </p>

            <p>Telefon: <a href="tel:+4631XXXXXXX">031-XX XX XX</a></p>

            <p className={styles.spaced}>
              Bokning sker enklast via vår <a href="#boka">onlinebokning</a>.
            </p>
          </div>

          <div className={styles.contactCol}>
            <p className={styles.eyebrow}>Våra öppettider</p>
            <dl className={styles.hoursList}>
              <div><dt>Mån–Tis</dt><dd>08:00 – 16:30</dd></div>
              <div><dt>Ons–Tor</dt><dd>10:00 – 18:00</dd></div>
              <div><dt>Fredag</dt><dd>08:00 – 16:30</dd></div>
              <div><dt>Lör–Sön</dt><dd>Stängt</dd></div>
            </dl>

            <p className={`${styles.eyebrow} ${styles.spacedTop}`}>Telefontider</p>
            <dl className={styles.hoursList}>
              <div><dt>Mån–Fre</dt><dd>10:00 – 13:00</dd></div>
              <div><dt>Lördag</dt><dd>Stängt</dd></div>
              <div><dt>Söndag</dt><dd>Stängt</dd></div>
            </dl>

            <p className={`${styles.eyebrow} ${styles.spacedTop}`}>Hitta till oss</p>
            <p className={styles.findUsText}>
              Vi finns centralt i Göteborg, med närhet till kollektivtrafik. Vårt läge
              gör det enkelt för dig att komma till oss, oavsett om du bor i Göteborg
              eller kommer utifrån.
            </p>

            <DirectionsAccordion
              items={[
                {
                  question: 'Med tåg eller buss?',
                  body: (
                    <>
                      <p>
                        Kommer du med tåg eller buss och stannar vid centralstationen
                        tar det bara några minuters promenad till oss.
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
              ]}
            />
          </div>
        </div>
      </section>

      <section className={styles.social}>
        <p className={`${styles.eyebrow} ${styles.center}`}>Derma Laser Studio i andra kanaler</p>
        <div className={styles.socialGrid}>
          <a className={styles.socialCard} href="#" target="_blank" rel="noopener noreferrer">
            <span className={`${styles.socialIcon} ${styles.socialIconFilled}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.5 21v-8.4h2.8l.4-3.3h-3.2V7.1c0-.95.27-1.6 1.63-1.6H17V2.5C16.65 2.45 15.5 2.35 14.15 2.35c-2.8 0-4.7 1.7-4.7 4.85v2.15H6.6v3.3h2.85V21h4.05z"/></svg>
            </span>
            <span>Facebook</span>
          </a>
          <a className={styles.socialCard} href="#" target="_blank" rel="noopener noreferrer">
            <span className={styles.socialIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".8" fill="currentColor" stroke="none"/></svg>
            </span>
            <span>Instagram</span>
          </a>
          <a className={styles.socialCard} href="#" target="_blank" rel="noopener noreferrer">
            <span className={`${styles.socialIcon} ${styles.socialIconFilled}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3.5 9.5h3v11h-3v-11zM9.5 9.5h2.9v1.5h.04c.4-.76 1.4-1.56 2.9-1.56 3.1 0 3.66 2.04 3.66 4.7v6.36h-3v-5.64c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.74h-3v-11z"/></svg>
            </span>
            <span>LinkedIn</span>
          </a>
          <a className={styles.socialCard} href="#" target="_blank" rel="noopener noreferrer">
            <span className={styles.socialIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M8.5 14c.8 1 2 1.6 3.5 1.6s2.7-.6 3.5-1.6" strokeLinecap="round"/><circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".9" fill="currentColor" stroke="none"/></svg>
            </span>
            <span>Reco</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}