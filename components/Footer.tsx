import Link from 'next/link';
import styles from './Footer.module.css';

const treatments = [
  ['Laserbehandlingar', '/behandlingar/laserbehandlingar'],
  ['Hudföryngring', '/behandlingar/hudforengring'],
  ['Injektioner', '/behandlingar/injektioner'],
  ['Medicinsk hudvård', '/behandlingar/medicinsk-hudvard'],
  ['Kroppsvård', '/behandlingar/kroppsvard'],
  ['Klassisk massage', '/behandlingar/klassisk-massage'],
  ['Lyxbehandling för 1/2', '/behandlingar/lyxbehandling-1-2'],
  ['Spa & IR-bastu', '/behandlingar/spa-och-ir-bastu'],
  ['Fotbehandling/Pedikyr', '/behandlingar/fotbehandling-pedikyr'],
  ['Hudvård/Ansikte', '/behandlingar/hudvard-ansikte'],
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerInner} shell`}>
        <div className={styles.footerIntro}>
          <h3>Komplett skönhetsklinik med lång erfarenhet</h3>
          <p>Derma Laser Studio är en personlig och diskret skönhetsklinik i centrala Göteborg. Vi erbjuder avancerad hudvård, laserbehandlingar och estetiska behandlingar.</p>
          <Link className={styles.contactLink} href="/kontakt">Hör av dig</Link>
        </div>

        <div className={styles.footerLinks}>
          <h4>Behandlingar</h4>
          {treatments.map(([title, href]) => <Link href={href} key={title}>{title}</Link>)}
        </div>

        <div className={styles.footerLinks}>
          <h4>Snabblänkar</h4>
          <Link href="/">Hem</Link>
          <Link href="/omdomen">Omdömen</Link>
          <Link href="/boka-tid">Boka tid online</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>

        <div className={styles.footerBrand}>
          <span className={styles.signature}>D</span>
          <b>Derma Laser Studio</b>
        </div>
      </div>

      <div className={`${styles.footerBottom} shell`}>
        <small>© 2026 Derma Laser Studio</small>
        <div><Link href="/kontakt">Kontakt</Link><Link href="/integritetspolicy">Integritetspolicy</Link></div>
        <small>Design / Utveckling</small>
      </div>
    </footer>
  );
}
