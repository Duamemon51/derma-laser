import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { serviceLinks } from '@/components/services';
import { ChevronDown } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Boka tid',
  description: 'Boka tid och läs om våra boknings- och avbokningsregler.',
};

export default function BookingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.headerWrap}>
        <Header treatments={serviceLinks} light />
      </div>

      <section className={`${styles.bookingHero} shell`} aria-labelledby="booking-title">
        <h1 id="booking-title">Bokning och avbokning</h1>
        <div className={styles.intro}>
          <p>
            För onlinebokning, vänligen använd bokningssystemet nedan eller gå till bokningssystemet
            (extern länk). Du kan också ringa oss på 031-15 44 55 alternativt maila till
            boka@citylaser.se för att boka en tid.
          </p>
          <p>Vid bokning av onlinekonsultation så får du en länk skickad till dig via SMS när det är dags för ditt möte.</p>
        </div>

        <details className={styles.notice}>
          <summary>Viktigt om onlinebokning<span><ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" /></span></summary>
          <p>Välj den behandling du önskar och följ stegen i bokningssystemet. Kontakta oss gärna om du är osäker på vilken tid eller behandling som passar dig.</p>
        </details>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" target="_blank" rel="noopener noreferrer">Boka tid online</a>
          <Link className={styles.secondaryButton} href="/omdomen">Se våra omdömen</Link>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="booking-faq-title">
        <div className="shell">
          <h2 id="booking-faq-title">Vanliga frågor &amp; svar</h2>
          <div className={styles.faqList}>
            <details>
              <summary>Vilka betalsätt finns hos er?<span><ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" /></span></summary>
              <p>Vi tar emot kort och Swish på plats. Fråga oss gärna om du har frågor inför ditt besök.</p>
            </details>
            <details>
              <summary>Bokningsvillkor<span><ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" /></span></summary>
              <p>Av- och ombokning sker enligt våra bokningsvillkor. Kontakta oss så hjälper vi dig om dina planer ändras.</p>
            </details>
          </div>
          <a className={styles.topButton} href="#booking-title">Scrolla till toppen</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
