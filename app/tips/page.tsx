import type { Metadata } from 'next';
import { guides } from '@/lib/tips-data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TipsHubGrid from './TipsHubGrid';
import { serviceLinks } from '@/components/services';
import styles from './TipsHub.module.css';

export const metadata: Metadata = {
  title: 'Hudvård Tips & Guider | Dermalaser Stockholm',
  description:
    'Läs guider om akne, pigmentfläckar, Hydrafacial, kemisk peeling, porer, CO2-laser och laser hårborttagning från Dermalaser Studio.',
};

export default function TipsHubPage() {
  return (
    <>
      <Header treatments={serviceLinks} light />

      <div className={`shell ${styles.wrap}`}>
        <p className="eyebrow" style={{ textAlign: 'center' }}>
          Dermalaser Studio
        </p>
        <h1 className={styles.h1}>Tips & guider om hudvård, ansiktsbehandling och laser</h1>
        <p className={styles.subtitle}>
          Här samlar vi guider som hjälper dig att förstå din hud, jämföra behandlingar
          och förbereda dig inför bokning. När du är redo leder varje guide vidare till
          relevant behandling.
        </p>

        <TipsHubGrid guides={guides} />

        <section className={styles.bookingCta} aria-labelledby="tips-booking-title">
          <p className="eyebrow">Personlig vägledning</p>
          <h2 id="tips-booking-title">Behöver du hjälp att välja?</h2>
          <p>
            Guider kan hjälpa dig förstå alternativen, men en individuell hudanalys är
            rätt start om du är osäker på vad huden behöver.
          </p>
          <div className={styles.ctaActions}>
            <a className="button primary" href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" target="_blank" rel="noopener noreferrer">Boka kostnadsfri hudanalys</a>
            <a className="button primary" href="/#behandlingar">Se alla behandlingar</a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}