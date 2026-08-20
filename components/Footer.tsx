import Link from 'next/link';
import styles from './Footer.module.css';
const treatments = [
  ['Hudanalys', '/behandlingar/hudanalys-stockholm'],
  ['Akne & oren hud', '/behandlingar/aknebehandling-stockholm'],
  ['Känslig & reaktiv hud', '/behandlingar/kanslig-hud-stockholm'],
  ['Pigmentering & ojämn hudton', '/behandlingar/pigmentering-stockholm'],
  [
    'Signature Premium Hudbehandling',
    '/behandlingar/signature-hudbehandling-stockholm',
  ],
  [
    'Klassisk Hudbehandling',
    '/behandlingar/ansiktsbehandling-stockholm',
  ],
  ['Kemisk peeling', '/behandlingar/kemisk-peeling-stockholm'],
  ['Hydrafacial', '/behandlingar/hydrafacial-stockholm'],
  ['Carbon Peel', '/behandlingar/carbon-peel-stockholm'],
  [
    'Diodlaser hårborttagning',
    '/behandlingar/laser-harborttagning-stockholm',
  ],
  [
    'CO2 Laser Resurfacing',
    '/behandlingar/co2-laser-stockholm',
  ],
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
          <a href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" target="_blank" rel="noopener noreferrer">Boka tid online</a>
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
