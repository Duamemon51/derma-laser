import styles from './TrustSection.module.css';

const trustItems = [
  ['Nöjda kunder', 'En skönhetsklinik som du kan lita på och känna dig trygg hos, med många nöjda kunder. Se fler omdömen på vår Reco-kanal.'],
  ['Tydligt', 'Vid konsultation gör vi processen tydlig för dig och du äger alltid ditt beslut baserat på rätt information.'],
  ['Säkert', 'Vi sätter din säkerhet i främsta ledet oavsett behandling. Eventuella risker kommuniceras tydligt.'],
  ['Tryggt', 'Kompetent personal med kvalitativa referenser, certifieringar och avklarade utbildningar.'],
];

function HeartPlusIcon() {
  return (
    <svg viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 36C24 36 4 25.5 4 12.8C4 6.6 8.9 2 14.6 2C18.2 2 21.4 3.9 24 7.3C26.6 3.9 29.8 2 33.4 2C39.1 2 44 6.6 44 12.8C44 16 42.8 19 41 21.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="37" cy="30" r="8" fill="#fff" stroke="currentColor" strokeWidth="1.6" />
      <path d="M37 26.5V33.5M33.5 30H40.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function TrustSection() {
  return (
    <section className={`section shell ${styles.whySection}`}>
      <p className="eyebrow">Varför Derma Laser Studio</p>
      <div className={styles.whyGrid}>
        {trustItems.map(([title, text], i) => (
          <div className={styles.whyItem} key={title}>
            <span className={styles.whyIcon}>
              <HeartPlusIcon />
            </span>
            <span className={styles.whyIndex}>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}