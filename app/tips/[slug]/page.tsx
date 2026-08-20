import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { guides, getGuideBySlug, getRelatedGuides } from '@/lib/tips-data';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styles from './TipsDetail.module.css';
import { serviceLinks } from '@/components/services';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Dermalaser Stockholm`,
    description: guide.excerpt,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      images: [{ url: guide.image }],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function TipsDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(guide.slug, 3);
  const relatedTreatments = guide.cluster === 'Acne & congestion'
    ? [
        ['Aknebehandling', '/behandlingar/aknebehandling-stockholm'],
        ['Hydrafacial', '/behandlingar/hydrafacial-stockholm'],
        ['Kemisk peeling', '/behandlingar/kemisk-peeling-stockholm'],
      ]
    : guide.cluster === 'Pore care & congestion'
      ? [
          ['Hydrafacial', '/behandlingar/hydrafacial-stockholm'],
          ['Carbon Peel', '/behandlingar/carbon-peel-stockholm'],
          ['Aknebehandling', '/behandlingar/aknebehandling-stockholm'],
        ]
      : guide.cluster === 'Pigmentation'
        ? [
            ['Pigmentering', '/behandlingar/pigmentering-stockholm'],
            ['Kemisk peeling', '/behandlingar/kemisk-peeling-stockholm'],
            ['CO2 Laser', '/behandlingar/co2-laser-stockholm'],
          ]
        : guide.cluster === 'Facials & skin renewal'
          ? [
              ['Hydrafacial', '/behandlingar/hydrafacial-stockholm'],
              ['Klassisk ansiktsbehandling', '/behandlingar/ansiktsbehandling-stockholm'],
              ['Signature Premium', '/behandlingar/signature-hudbehandling-stockholm'],
            ]
          : guide.cluster === 'Peels & resurfacing'
            ? [
                ['Kemisk peeling', '/behandlingar/kemisk-peeling-stockholm'],
                ['Pigmentering', '/behandlingar/pigmentering-stockholm'],
                ['Aknebehandling', '/behandlingar/aknebehandling-stockholm'],
              ]
            : guide.cluster === 'CO2 resurfacing'
              ? [
                  ['CO2 Laser', '/behandlingar/co2-laser-stockholm'],
                  ['Aknebehandling', '/behandlingar/aknebehandling-stockholm'],
                  ['Hudanalys', '/behandlingar/hudanalys-stockholm'],
                ]
              : guide.cluster === 'Laser hair removal'
                ? [['Laser hårborttagning', '/behandlingar/laser-harborttagning-stockholm'], ['Kontakt', '/kontakt']]
                : [
                    ['Hudanalys', '/behandlingar/hudanalys-stockholm'],
                    ['Känslig hud', '/behandlingar/kanslig-hud-stockholm'],
                  ];

  return (
    <>
      <Header treatments={serviceLinks} light />
      <div className={`shell ${styles.wrap}`}>
      <nav className={styles.breadcrumbs}>
        <Link href="/">Hem</Link>
        <span>/</span>
        <Link href="/tips">Tips & fakta</Link>
        <span>/</span>
        <span>{guide.cluster}</span>
      </nav>

      <header className={styles.header}>
        <span className={styles.cluster}>{guide.cluster}</span>
        <h1 className={styles.title}>{guide.title}</h1>
        <div className={styles.meta}>
          <span>{formatDate(guide.date)}</span>
          <span className={styles.metaDot} />
          <span>{guide.readTime}</span>
        </div>
      </header>

      <div className={styles.heroImage}>
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          sizes="(max-width: 960px) 100vw, 960px"
          priority
        />
      </div>

      <article className={styles.body}>
        <div className={styles.intro}>
          {guide.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {guide.sections.map((section, i) => (
          <section key={i} className={styles.section}>
            <h2>{section.heading}</h2>
            {section.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </section>
        ))}

        {guide.faq && guide.faq.length > 0 && (
          <div className={styles.faq}>
            <h2>Vanliga frågor</h2>
            {guide.faq.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        )}

        {guide.relatedLinks && guide.relatedLinks.length > 0 && (
          <div className={styles.readMore}>
            <h2>Läs mer</h2>
            <ul className={styles.readMoreList}>
              {guide.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.ctaRow}>
          <p>Vill du diskutera vad som passar just din hud? Boka en kostnadsfri konsultation hos oss.</p>
          <div className={styles.treatmentLinks}>
            <strong>Relaterade behandlingar:</strong>{' '}
            {relatedTreatments.map(([label, href], index) => (
              <span key={href}><Link href={href}>{label}</Link>{index < relatedTreatments.length - 1 ? ' · ' : ''}</span>
            ))}
          </div>
          <a href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" target="_blank" rel="noopener noreferrer" className="button" style={{ background: 'var(--gold)', color: '#fff' }}>
            Boka konsultation
          </a>
        </div>
      </article>

      {related.length > 0 && (
        <div className={styles.related}>
          <h2>Fler guider</h2>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link href={`/tips/${r.slug}`} key={r.slug} className={styles.relatedCard}>
                <div className={styles.relatedImage}>
                  <Image src={r.image} alt={r.title} fill sizes="280px" />
                </div>
                <span className={styles.relatedCluster}>{r.cluster}</span>
                <h3>{r.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  );
}