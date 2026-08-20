import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Faq from '../../../components/Faq';
import { services, serviceLinks } from '@/components/services';
import styles from './page.module.css';

type FaqItem = { question: string; answer: string };

const defaultFaq: FaqItem[] = [
  { question: 'Hur går behandlingen till?', answer: 'Vi börjar med en personlig konsultation och anpassar behandlingen efter dina behov och mål.' },
  { question: 'Gör behandlingen ont?', answer: 'De flesta upplever behandlingen som bekväm. Vi berättar alltid vad du kan förvänta dig före start.' },
  { question: 'När syns resultatet?', answer: 'Resultatet varierar beroende på behandling och hud. Du får tydlig information under konsultationen.' },
  { question: 'Hur bokar jag en tid?', answer: 'Klicka på boka-knappen på sidan eller kontakta kliniken för att boka en konsultation.' },
];

const treatments = [
  {
    slug: 'laserbehandlingar',
    title: 'Laserbehandlingar',
    summary: 'Avancerad laserteknik för en klarare, jämnare och mer balanserad hud.',
    intro: 'Vi anpassar varje laserbehandling efter din hud, dina mål och det resultat du vill uppnå. Under konsultationen går vi igenom hudens behov och skapar en trygg behandlingsplan.',
    points: ['Hårborttagning och permanent hårreduktion', 'Behandling av pigmenteringar och ytliga kärl', 'Hudföryngring med moderna laserplattformar'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85',
    // Fill these in per treatment — see services-data-additions.md for the pattern
    faq: defaultFaq,
  },
  {
    slug: 'hudforengring',
    title: 'Hudföryngring',
    summary: 'Effektiva behandlingar som återställer hudens lyster och spänst.',
    intro: 'Hudföryngring handlar om att stärka hudens egna processer. Vi kombinerar beprövade metoder för att förbättra struktur, ton och känsla utan att kompromissa med det naturliga uttrycket.',
    points: ['Microneedling för stimulerad kollagenproduktion', 'Kemisk peeling för klarare hudton', 'Personlig plan för långsiktiga resultat'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85',
    faq: defaultFaq,
  },
  {
    slug: 'injektioner',
    title: 'Injektioner',
    summary: 'Varsamma estetiska behandlingar med fokus på naturliga resultat.',
    intro: 'Med noggrann konsultation och erfaren hand arbetar vi med ansiktets form och balans. Målet är ett fräscht resultat som fortfarande känns som du.',
    points: ['Fillers för volym och ansiktsbalans', 'Anti-aging behandlingar med individuell dosering', 'Tydlig rådgivning före och efter behandlingen'],
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=1800&q=85',
    faq: defaultFaq,
  },
  {
    slug: 'kroppsvard',
    title: 'Kroppsvård',
    summary: 'Avancerad kroppsvård för att forma, strama upp och förbättra huden.',
    intro: 'Kroppens hud förtjänar samma personliga omsorg som ansiktet. Vi kombinerar modern teknik med realistiska mål för en jämnare och mer välmående hud.',
    points: ['Huduppstramning och förbättrad hudstruktur', 'Behandlingar anpassade efter kroppens områden', 'Trygg uppföljning genom hela behandlingsplanen'],
    image: '/images/results.webp',
    faq: defaultFaq,
  },
] as const;
const treatmentDetails = treatments.map(({ slug, title, summary, intro, points, image, faq }) => ({
  slug,
  title,
  summary,
  intro,
  points,
  image,
  faq,
}));

const serviceDetails = services.map((service) => ({
  slug: service.slug,
  title: service.pageTitle,
  summary: service.summary,
  intro: service.intro,
  points: service.points,
  image: service.image,
  faq: service.faq,
}));

const allDetails = [...treatmentDetails, ...serviceDetails];
const treatmentLinks = serviceLinks;
const isSkinAnalysisSlug = (slug: string) => slug === 'hudanalys-stockholm' || slug === 'medicinsk-hudvard';
const isAcneSlug = (slug: string) => slug === 'aknebehandling-stockholm';
const isSensitiveSkinSlug = (slug: string) => slug === 'kanslig-hud-stockholm';
const isPigmentationSlug = (slug: string) => slug === 'pigmentering-stockholm';
const isSignatureSlug = (slug: string) => slug === 'signature-hudbehandling-stockholm';
const isClassicFacialSlug = (slug: string) => slug === 'ansiktsbehandling-stockholm';
const isChemicalPeelSlug = (slug: string) => slug === 'kemisk-peeling-stockholm';
const isHydrafacialSlug = (slug: string) => slug === 'hydrafacial-stockholm';
const isCarbonPeelSlug = (slug: string) => slug === 'carbon-peel-stockholm';
const isLaserHairRemovalSlug = (slug: string) => slug === 'laser-harborttagning-stockholm';
const isCo2LaserSlug = (slug: string) => slug === 'co2-laser-stockholm';

const relatedLinksBySlug: Record<string, { label: string; href: string }[]> = {
  'hudanalys-stockholm': [
    { label: 'Aknebehandling', href: '/behandlingar/aknebehandling-stockholm' },
    { label: 'Pigmentering', href: '/behandlingar/pigmentering-stockholm' },
    { label: 'Hydrafacial', href: '/behandlingar/hydrafacial-stockholm' },
    { label: 'Kemisk peeling', href: '/behandlingar/kemisk-peeling-stockholm' },
  ],
  'aknebehandling-stockholm': [
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
    { label: 'Pigmentering', href: '/behandlingar/pigmentering-stockholm' },
    { label: 'Hydrafacial', href: '/behandlingar/hydrafacial-stockholm' },
    { label: 'Kemisk peeling', href: '/behandlingar/kemisk-peeling-stockholm' },
  ],
  'kanslig-hud-stockholm': [
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
    { label: 'Hydrafacial', href: '/behandlingar/hydrafacial-stockholm' },
    { label: 'Klassisk ansiktsbehandling', href: '/behandlingar/ansiktsbehandling-stockholm' },
  ],
  'pigmentering-stockholm': [
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
    { label: 'Aknebehandling', href: '/behandlingar/aknebehandling-stockholm' },
    { label: 'Kemisk peeling', href: '/behandlingar/kemisk-peeling-stockholm' },
  ],
  'signature-hudbehandling-stockholm': [
    { label: 'Hydrafacial', href: '/behandlingar/hydrafacial-stockholm' },
    { label: 'Kemisk peeling', href: '/behandlingar/kemisk-peeling-stockholm' },
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
  ],
  'ansiktsbehandling-stockholm': [
    { label: 'Hydrafacial', href: '/behandlingar/hydrafacial-stockholm' },
    { label: 'Signature Premium', href: '/behandlingar/signature-hudbehandling-stockholm' },
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
  ],
  'kemisk-peeling-stockholm': [
    { label: 'Pigmentering', href: '/behandlingar/pigmentering-stockholm' },
    { label: 'Aknebehandling', href: '/behandlingar/aknebehandling-stockholm' },
    { label: 'Hydrafacial', href: '/behandlingar/hydrafacial-stockholm' },
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
  ],
  'hydrafacial-stockholm': [
    { label: 'Aknebehandling', href: '/behandlingar/aknebehandling-stockholm' },
    { label: 'Kemisk peeling', href: '/behandlingar/kemisk-peeling-stockholm' },
    { label: 'Klassisk ansiktsbehandling', href: '/behandlingar/ansiktsbehandling-stockholm' },
    { label: 'Signature Premium', href: '/behandlingar/signature-hudbehandling-stockholm' },
  ],
  'carbon-peel-stockholm': [
    { label: 'Hydrafacial', href: '/behandlingar/hydrafacial-stockholm' },
    { label: 'Aknebehandling', href: '/behandlingar/aknebehandling-stockholm' },
    { label: 'Kemisk peeling', href: '/behandlingar/kemisk-peeling-stockholm' },
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
  ],
  'laser-harborttagning-stockholm': [
    { label: 'Aknebehandling', href: '/behandlingar/aknebehandling-stockholm' },
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  'co2-laser-stockholm': [
    { label: 'Aknebehandling', href: '/behandlingar/aknebehandling-stockholm' },
    { label: 'Kemisk peeling', href: '/behandlingar/kemisk-peeling-stockholm' },
    { label: 'Pigmentering', href: '/behandlingar/pigmentering-stockholm' },
    { label: 'Hudanalys', href: '/behandlingar/hudanalys-stockholm' },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (isSkinAnalysisSlug(slug)) {
    return {
      title: 'Hudanalys Stockholm | Kostnadsfri konsultation | Dermalaser',
      description: 'Boka kostnadsfri hudanalys i Stockholm. Vi går igenom din hud, dina behov och mål och hjälper dig hitta rätt hudbehandling. 30 minuter, 0 kr.',
    };
  }

  if (isAcneSlug(slug)) {
    return {
      title: 'Aknebehandling Stockholm | Vuxenakne & Oren Hud | Dermalaser',
      description: 'Personligt anpassad aknebehandling i Stockholm för finnar, pormaskar, tilltäppt hud och vuxenakne. 45 min, 795 kr. Boka Dermalaser.',
    };
  }

  if (isSensitiveSkinSlug(slug)) {
    return {
      title: 'Behandling för Känslig Hud Stockholm | Dermalaser',
      description: 'Behandling för känslig, torr och reaktiv hud i Stockholm. Fokus på hudbarriär, rodnad, irritation och balans. 45 min, 695 kr.',
    };
  }

  if (isPigmentationSlug(slug)) {
    return {
      title: 'Pigmentfläckar Stockholm | Behandling av Pigmentering | Dermalaser',
      description: 'Behandling för pigmentfläckar, solskador och ojämn hudton i Stockholm. Individuellt anpassad hudbehandling hos Dermalaser. 30 min, 795 kr.',
    };
  }

  if (isSignatureSlug(slug)) {
    return {
      title: 'Premium Ansiktsbehandling Stockholm | Signature Dermalaser',
      description: 'Komplett premiumbehandling med hudanalys, Hydrafacial, anpassad peeling och vid behov Carbon Peel. 45 min, 1 999 kr.',
    };
  }

  if (isClassicFacialSlug(slug)) {
    return {
      title: 'Ansiktsbehandling Stockholm | Klassisk Hudbehandling 795 kr',
      description: 'Boka klassisk ansiktsbehandling i Stockholm med exfoliering, mask, LED och individuellt anpassad hudvård. 45 minuter, 795 kr.',
    };
  }

  if (isChemicalPeelSlug(slug)) {
    return {
      title: 'Kemisk Peeling Stockholm | PRX-T33 & BioRePeel | Dermalaser',
      description: 'Kemisk peeling i Stockholm med PRX-T33, BioRePeel eller individuellt vald peeling för lyster, struktur, pigmentering och oren hud. 45 minuter, 1 195 kr.',
    };
  }

  if (isHydrafacialSlug(slug)) {
    return {
      title: 'Hydrafacial Stockholm | Djuprengöring & Lyster 895 kr',
      description: 'Boka Hydrafacial i Stockholm för djuprengöring, exfoliering och återfuktning. För porer, glåmig och yttorr hud. 30 min, 895 kr.',
    };
  }

  if (isCarbonPeelSlug(slug)) {
    return {
      title: 'Carbon Peel Stockholm | Hollywood Peel för Porer & Hud | Dermalaser',
      description: 'Carbon Peel i Stockholm för stora porer, fet hud, orenheter och ojämn hudstruktur. Djuprengörande behandling hos Dermalaser. 45 min, 1 095 kr.',
    };
  }

  if (isLaserHairRemovalSlug(slug)) {
    return {
      title: 'Laser Hårborttagning Stockholm | Diodlaser från 495 kr',
      description: 'Diodlaser för långsiktig hårreducering i Stockholm. Behandla ansikte, armhålor, bikini, ben, rygg och fler områden. Priser från 495 kr.',
    };
  }

  if (isCo2LaserSlug(slug)) {
    return {
      title: 'CO2 Laser Stockholm | Akneärr & Hudföryngring | Dermalaser',
      description: 'CO2 Laser Resurfacing i Stockholm för akneärr, ojämn struktur, fina linjer, pigmentförändringar och solskadad hud. Individuell bedömning.',
    };
  }

  return {};
}

export function generateStaticParams() {
  return allDetails.map(({ slug }) => ({ slug }));
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = allDetails.find((item) => item.slug === slug || (slug === 'medicinsk-hudvard' && item.slug === 'hudanalys-stockholm'));

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <Image src={treatment.image} alt={treatment.title} fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <Header treatments={treatmentLinks} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Derma Laser Studio</p>
          <h1>{treatment.title}</h1>
          <p>{treatment.summary}</p>
        </div>
      </section>

      <main>
        <section className={`${styles.intro} shell`}>
          <div>
            <p className={styles.eyebrow}>Personlig behandling</p>
            <h2>{isSkinAnalysisSlug(slug) ? 'När bör jag boka hudanalys?' : isAcneSlug(slug) ? 'Akne ser olika ut hos olika personer' : isSensitiveSkinSlug(slug) ? 'Vad menas med känslig och reaktiv hud' : isPigmentationSlug(slug) ? 'Vad är pigmentering?' : isSignatureSlug(slug) ? 'En behandling som anpassas efter huden' : isClassicFacialSlug(slug) ? 'Vad ingår i behandlingen' : isChemicalPeelSlug(slug) ? 'Vad kan kemisk peeling användas för?' : isHydrafacialSlug(slug) ? 'Vad gör Hydrafacial?' : isCarbonPeelSlug(slug) ? 'Carbon Peel för porer' : isLaserHairRemovalSlug(slug) ? 'Litet område - 495 kr' : isCo2LaserSlug(slug) ? 'Vad kan CO2-laser användas för?' : 'Trygg väg till ett resultat som känns som du.'}</h2>
          </div>
          <p>
            {isSkinAnalysisSlug(slug)
              ? 'Hudanalysen passar särskilt bra om du är ny kund, har flera olika hudproblem eller inte vet var du ska börja. Du får hjälp att förstå huden och välja rätt nästa steg.'
              : isAcneSlug(slug)
                ? 'En person kan främst ha pormaskar och tilltäppt hud medan en annan har inflammerade utbrott. Vuxenakne kan dessutom skilja sig från hudproblem i tonåren. Därför görs behandlingen individuellt.'
                : isSensitiveSkinSlug(slug)
                  ? 'Reaktiv hud kan snabbt bli röd, stram, varm eller irriterad. Hudens tolerans kan också variera från period till period.'
                  : isPigmentationSlug(slug)
                    ? 'Hudens färg påverkas av melanin. När pigmentproduktionen blir ojämn kan vissa områden bli mörkare än omgivande hud. Orsaken kan variera, vilket gör individuell bedömning viktig.'
                    : isSignatureSlug(slug)
                      ? 'Signature bygger inte på ett enda behandlingssteg. Tekniker kombineras efter hudens aktuella tillstånd med mål som renare hud, bättre lyster, jämnare struktur och en mer återfuktad känsla.'
                      : isClassicFacialSlug(slug)
                        ? treatment.intro
                          : isChemicalPeelSlug(slug)
                            ? treatment.intro
                            : isHydrafacialSlug(slug)
                              ? 'Behandlingen rengör och exfolierar samtidigt som huden tillförs fukt. Målet är en renare, mjukare, mer återfuktad hud med förbättrad lyster.'
                                : isCarbonPeelSlug(slug)
                                  ? 'Porers faktiska storlek påverkas av flera faktorer och kan inte lovas minska permanent. Däremot kan porer upplevas mer framträdande när huden är fet eller tilltäppt. Behandlingen fokuserar därför på rengöring, talg och hudklarhet.'
                                  : isLaserHairRemovalSlug(slug)
                                    ? 'Exempel på mindre områden är överläpp, armhåla, haka, polisonger, hals, mellan bryn, kinder och bikinilinje.'
                                  : isCo2LaserSlug(slug)
                                    ? treatment.intro
              : treatment.intro}
          </p>
        </section>

        <section className={`${styles.details} shell`}>
          <div className={styles.detailsImage}>
            <Image src={treatment.image} alt={`Behandling: ${treatment.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
          <div className={styles.detailsCopy}>
            <p className={styles.eyebrow}>Det här ingår</p>
            <h2>{isSkinAnalysisSlug(slug) ? 'Så går hudanalysen till' : isAcneSlug(slug) ? 'Behandling vid vuxenakne' : isSensitiveSkinSlug(slug) ? 'Hudbarriären' : isPigmentationSlug(slug) ? 'Pigmentering efter finnar' : isSignatureSlug(slug) ? 'För dig som vill göra en mer komplett behandling' : isClassicFacialSlug(slug) ? 'För regelbundet underhåll' : isChemicalPeelSlug(slug) ? 'PRX-T33' : isHydrafacialSlug(slug) ? 'Hydrafacial vid pormaskar och tilltäppt hud' : isCarbonPeelSlug(slug) ? 'Carbon Peel vid fet hud' : isLaserHairRemovalSlug(slug) ? 'Mellanområde - 995 kr' : isCo2LaserSlug(slug) ? 'CO2-laser för akneärr' : 'En plan anpassad efter din hud.'}</h2>
            {isSkinAnalysisSlug(slug) && (
              <p>
                Vi går igenom hudens aktuella tillstånd, dina mål, tidigare erfarenheter
                och sådant som påverkar hur huden reagerar. Därefter rekommenderas ett
                rimligt behandlingsupplägg utifrån huden, inte utifrån vilken behandling
                som råkar vara mest populär.
              </p>
            )}
            {isAcneSlug(slug) && (
              <p>
                Vuxenakne kan förekomma runt haka, käklinje, kinder eller andra delar av
                ansiktet och komma i perioder. Målet är inte bara att behandla det som
                syns idag utan att arbeta för bättre hudbalans över tid.
              </p>
            )}
            {isSensitiveSkinSlug(slug) && (
              <p>
                Hudbarriären fungerar som hudens yttersta skydd. När den är stressad kan
                huden lättare förlora fukt och reagera på sådant den tidigare tålt.
              </p>
            )}
            {isPigmentationSlug(slug) && (
              <p>
                Efter inflammation kan mörkare märken finnas kvar efter att själva finnen
                försvunnit. Det är inte alltid samma sak som ett permanent akneärr och kan
                behöva ett annat behandlingsupplägg.
              </p>
            )}
            {isSignatureSlug(slug) && (
              <p>
                Behandlingen passar särskilt dig som inte gjort professionell hudvård på
                länge eller vill samla flera hudvårdande moment i ett besök.
              </p>
            )}
            {isClassicFacialSlug(slug) && (
              <p>
                Behandlingen passar dig som vill ge huden professionell rengöring,
                exfoliering och omvårdnad utan att gå direkt till mer avancerade behandlingar.
              </p>
            )}
            {isChemicalPeelSlug(slug) && (
              <p>
                PRX-T33 är en nålfri biorevitaliserande behandling baserad på TCA.
                Dermalaser använder den med fokus på hudkvalitet, lyster och spänst utan
                att målet är kraftig synlig exfoliering.
              </p>
            )}
            {isHydrafacialSlug(slug) && (
              <p>
                Hydrafacial kan vara relevant när huden snabbt känns tilltäppt. Vid mer
                uttalad aktiv akne eller mycket reaktiv hud kan ett annat upplägg vara lämpligare.
              </p>
            )}
            {isCarbonPeelSlug(slug) && (
              <p>
                När huden producerar mycket talg kan den snabbt kännas blank och tilltäppt.
                Dermalaser beskriver behandlingen som djuprengörande och inriktad på att
                minska överskott av talg och förbättra klarhet och lyster.
              </p>
            )}
            {isLaserHairRemovalSlug(slug) && (
              <p>
                Exempel på mellanområden är brasiliansk bikini, halva armar, halva ben,
                axlar, nacke och mage. Större områden kostar 1 495 kr och omfattar hela
                ben, hela armar, rygg, bröst och större kombinationsområden.
              </p>
            )}
            {isCo2LaserSlug(slug) && (
              <p>
                När akne lämnat förändringar i själva hudstrukturen kan en mer avancerad
                hudförnyande behandling vara aktuell. Fraktionerad CO2-laser skapar
                kontrollerade behandlingszoner och aktiverar hudens reparationsprocess.
              </p>
            )}
            <ul>
              {treatment.points.map((point: string) => <li key={point}>{point}</li>)}
            </ul>
            <a className="button primary" href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" target="_blank" rel="noopener noreferrer">{isSkinAnalysisSlug(slug) ? 'Boka kostnadsfri hudanalys' : isAcneSlug(slug) ? 'Boka aknebehandling - 795 kr' : isSensitiveSkinSlug(slug) ? 'Boka behandling för känslig hud - 695 kr' : isPigmentationSlug(slug) ? 'Boka pigmentbehandling - 795 kr' : isSignatureSlug(slug) ? 'Boka Signature Premium - 1 999 kr' : isClassicFacialSlug(slug) ? 'Boka ansiktsbehandling - 795 kr' : isChemicalPeelSlug(slug) ? 'Boka kemisk peeling - 1 195 kr' : isHydrafacialSlug(slug) ? 'Boka Hydrafacial - 895 kr' : isCarbonPeelSlug(slug) ? 'Boka Carbon Peel - 1 095 kr' : isLaserHairRemovalSlug(slug) ? 'Boka laser hårborttagning från 495 kr' : isCo2LaserSlug(slug) ? 'Boka CO2 Laser Resurfacing - 4 500 kr' : 'Boka konsultation'}</a>
          </div>
        </section>

        <section className={`${styles.facts} shell`}>
          <p className={styles.eyebrow}>Bra att veta</p>
          <h2>{isSkinAnalysisSlug(slug) ? 'En behandlingsplan för just din hud' : isAcneSlug(slug) ? 'Pormaskar och tilltäppta porer' : isSensitiveSkinSlug(slug) ? 'När mindre är mer' : isPigmentationSlug(slug) ? 'Sol och pigmentfläckar' : isSignatureSlug(slug) ? 'Vad som kan ingå' : isClassicFacialSlug(slug) ? 'Klassisk behandling eller Hydrafacial?' : `Fakta om ${treatment.title.toLowerCase()}.`}</h2>
          {isSkinAnalysisSlug(slug) && (
            <p className={styles.factsIntro}>
              Två personer kan uppleva samma problem men behöva olika behandling. Därför
              är hudanalysen ett bra första steg innan mer aktiva behandlingar som kemisk
              peeling, Carbon Peel eller CO2-laser.
            </p>
          )}
          {isAcneSlug(slug) && (
            <p className={styles.factsIntro}>
              När talg och döda hudceller samlas i porerna kan pormaskar och tilltäpptheter
              uppstå. Beroende på huden kan även Hydrafacial, Carbon Peel eller kemisk
              peeling vara relevanta alternativ.
            </p>
          )}
          {isSensitiveSkinSlug(slug) && (
            <p className={styles.factsIntro}>
              När huden redan är stressad är fler aktiva produkter inte alltid lösningen.
              Behandlingen anpassas därför efter hur huden faktiskt mår vid besöket.
            </p>
          )}
          {isPigmentationSlug(slug) && (
            <p className={styles.factsIntro}>
              UV-exponering kan bidra till och förvärra flera typer av pigmentering. Ett
              långsiktigt upplägg behöver därför även ta hänsyn till solskydd och hemvård.
            </p>
          )}
          {isSignatureSlug(slug) && (
            <p className={styles.factsIntro}>
              Hudanalys, Hydrafacial och individuellt vald kemisk peeling ingår. Carbon
              Peel kan läggas till beroende på huden och när den är lämplig.
            </p>
          )}
          {isClassicFacialSlug(slug) && (
            <p className={styles.factsIntro}>
              Den klassiska behandlingen kombinerar flera traditionella hudvårdsmoment.
              Hydrafacial har större fokus på maskinell rengöring, exfoliering och
              återfuktning. Valet bör styras av hudens behov.
            </p>
          )}
          {isChemicalPeelSlug(slug) && (
            <p className={styles.factsIntro}>
              BioRePeelCl3 kombinerar bland annat TCA, salicylsyra, AHA/PHA-syror,
              aminosyror och vitaminer. Hos Dermalaser används den bland annat vid
              pigmentering, akne, förstorade porer och ojämn hudstruktur.
            </p>
          )}
          {isHydrafacialSlug(slug) && (
            <p className={styles.factsIntro}>
              Hydrafacial har större fokus på rengöring, exfoliering och återfuktning.
              Carbon Peel har större fokus på talg, porer, orenheter och hudklarhet.
            </p>
          )}
          {isCarbonPeelSlug(slug) && (
            <p className={styles.factsIntro}>
              Hydrafacial är starkare kopplad till rengöring, exfoliering och återfuktning.
              Carbon Peel är mer inriktad på fet hud, talg, porer och tilltäpptheter.
            </p>
          )}
          {isLaserHairRemovalSlug(slug) && (
            <p className={styles.factsIntro}>
              Större områden kostar 1 495 kr. Priset beror på behandlingsområde och storlek.
            </p>
          )}
          {isCo2LaserSlug(slug) && (
            <p className={styles.factsIntro}>
              Behandlingen kan användas när målet är att förbättra struktur och hudkvalitet.
              Resultatet utvecklas gradvis under läkning och fortsatt kollagenremodellering.
            </p>
          )}
          <div className={styles.factsGrid}>
            <div><strong>Personligt upplägg</strong><span>Behandlingen anpassas efter dina behov och mål.</span></div>
            <div><strong>Trygg konsultation</strong><span>Vi går igenom frågor, förväntningar och eftervård.</span></div>
            <div><strong>Professionell vägledning</strong><span>Du får tydliga råd före och efter din behandling.</span></div>
          </div>
        </section>

        <section className={styles.process}>
          <div className="shell">
            <p className={styles.eyebrow}>Så går det till</p>
            <h2>{isAcneSlug(slug) ? 'Hudvård mellan behandlingarna' : isSensitiveSkinSlug(slug) ? 'Skonsam hudvård över tid' : isPigmentationSlug(slug) ? 'Behandlingar som kan kombineras' : isSignatureSlug(slug) ? 'Ge huden en komplett behandling' : isClassicFacialSlug(slug) ? 'Vill du ge huden professionellt underhåll?' : isChemicalPeelSlug(slug) ? 'Vilken peeling passar mig?' : isHydrafacialSlug(slug) ? 'Hydrafacial eller kemisk peeling?' : isCarbonPeelSlug(slug) ? 'Resultat över tid' : isLaserHairRemovalSlug(slug) ? 'Hur fungerar diodlaser?' : isCo2LaserSlug(slug) ? 'En intensivare behandling' : 'Från första mötet till uppföljning.'}</h2>
            {isAcneSlug(slug) && (
              <p className={styles.processIntro}>
                Professionell behandling är bara en del av helheten. Överdriven
                exfoliering, för många aktiva produkter eller aggressiv rengöring kan
                stressa huden. Ett balanserat upplägg är därför viktigt.
              </p>
            )}
            {isSensitiveSkinSlug(slug) && (
              <p className={styles.processIntro}>
                Målet är att skapa en rutin och behandlingsnivå som huden tolererar. Mer
                intensiva behandlingar bör endast göras när hudens tillstånd gör dem lämpliga.
              </p>
            )}
            {isPigmentationSlug(slug) && (
              <p className={styles.processIntro}>
                Beroende på huden kan kemisk peeling eller andra hudförnyande behandlingar
                vara relevanta. Vid mer avancerade struktur- och pigmentfrågor kan annan
                bedömning behövas.
              </p>
            )}
            {isSignatureSlug(slug) && (
              <p className={styles.processIntro}>
                Boka Signature Premium för ett skräddarsytt upplägg med flera
                behandlingsmoment.
              </p>
            )}
            {isChemicalPeelSlug(slug) && (
              <p className={styles.processIntro}>
                Du behöver inte avgöra det själv. Valet görs efter hudanalys och hudens
                aktuella tolerans. Starkare är inte automatiskt bättre.
              </p>
            )}
            {isHydrafacialSlug(slug) && (
              <p className={styles.processIntro}>
                Kemisk peeling arbetar mer specifikt med kontrollerad kemisk exfoliering.
                Hydrafacial passar när rengöring, fukt och fräschör ligger högre på prioriteringslistan.
              </p>
            )}
            {isCarbonPeelSlug(slug) && (
              <p className={styles.processIntro}>
                Huden kan upplevas renare och mjukare redan efter behandling, men långsiktig
                förbättring beror på hudens förutsättningar och regelbundenhet.
              </p>
            )}
            {isLaserHairRemovalSlug(slug) && (
              <p className={styles.processIntro}>
                Ljusenergi riktas mot pigment i håret. Eftersom endast hår i rätt
                tillväxtfas kan påverkas effektivt vid varje besök krävs en serie behandlingar.
                Inför behandlingen ska området vara rakat. Om rakning behöver göras på plats
                anger Dermalaser en avgift på 100 kr.
              </p>
            )}
            {isCo2LaserSlug(slug) && (
              <p className={styles.processIntro}>
                CO2-resurfacing skiljer sig tydligt från Hydrafacial eller klassisk
                ansiktsbehandling och innebär återhämtningstid. Dermalaser gör därför
                professionell hudbedömning före behandlingen.
              </p>
            )}
            <div className={styles.processGrid}>
              <article><span>01</span><h3>Konsultation</h3><p>Vi lyssnar på dina mål och analyserar hudens behov.</p></article>
              <article><span>02</span><h3>Behandlingsplan</h3><p>Du får tydliga rekommendationer och en plan som passar dig.</p></article>
              <article><span>03</span><h3>Uppföljning</h3><p>Vi följer resultatet och justerar planen när det behövs.</p></article>
            </div>
          </div>
        </section>

        {treatment.faq && treatment.faq.length > 0 && (
          <Faq items={treatment.faq} title={treatment.title} />
        )}

        <section className={`${styles.booking} shell`} id="boka">
          <div>
            <p className={styles.eyebrow}>Redo att börja?</p>
            <h2>{isSkinAnalysisSlug(slug) ? 'Osäker på vad huden behöver?' : isAcneSlug(slug) ? 'Akneärr och märken efter akne' : isSensitiveSkinSlug(slug) ? 'Känns huden ständigt stressad?' : isPigmentationSlug(slug) ? 'Vill du arbeta mot jämnare hudton?' : isSignatureSlug(slug) ? 'Ge huden en komplett behandling' : isClassicFacialSlug(slug) ? 'Vill du ge huden professionellt underhåll?' : isChemicalPeelSlug(slug) ? 'Vill du arbeta med hudförnyelse?' : isHydrafacialSlug(slug) ? 'Ge huden en rengöring och fuktboost' : isCarbonPeelSlug(slug) ? 'Vill du arbeta med porer och hudklarhet?' : isLaserHairRemovalSlug(slug) ? 'Hur många behandlingar behövs?' : isCo2LaserSlug(slug) ? 'Vill du förbättra akneärr eller hudstruktur?' : 'Boka en kostnadsfri konsultation.'}</h2>
            <p>{isAcneSlug(slug) ? 'Efter aktiv akne kan rodnad, pigmentförändringar eller förändrad hudstruktur finnas kvar. Vid mer uttalade strukturförändringar kan en separat bedömning för CO2 Laser Resurfacing vara aktuell.' : isSensitiveSkinSlug(slug) ? 'Få en behandling som utgår från hudens tillstånd och tolerans.' : isPigmentationSlug(slug) ? 'Boka behandling för pigmentering eller börja med hudanalys om du är osäker.' : isSignatureSlug(slug) ? 'Boka Signature Premium för ett skräddarsytt upplägg med flera behandlingsmoment.' : isClassicFacialSlug(slug) ? 'Boka en klassisk ansiktsbehandling anpassad efter huden.' : isChemicalPeelSlug(slug) ? 'Boka kemisk peeling eller börja med hudanalys så hjälper vi dig välja rätt typ.' : isHydrafacialSlug(slug) ? 'Boka Hydrafacial hos Dermalaser Studio i Stockholm.' : isCarbonPeelSlug(slug) ? 'Boka Carbon Peel eller börja med kostnadsfri hudanalys.' : isLaserHairRemovalSlug(slug) ? 'Det finns inget exakt antal som gäller alla. Behandlingsområde, hårtyp, hudtyp och individuella faktorer påverkar resultat och antal sessioner.' : isCo2LaserSlug(slug) ? 'Börja med en professionell bedömning för att se om CO2 Laser Resurfacing är rätt nivå för din hud.' : 'Vi går igenom dina önskemål och svarar på alla frågor innan du bestämmer dig.'}</p>
            {relatedLinksBySlug[slug] && (
              <nav className={styles.relatedLinks} aria-label="Relaterade behandlingar">
                <strong>Relaterade behandlingar:</strong>{' '}
                {relatedLinksBySlug[slug].map((link, index) => (
                  <span key={link.href}>
                    <a href={link.href}>{link.label}</a>{index < relatedLinksBySlug[slug].length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </nav>
            )}
          </div>
          <a className="button primary" href="https://www.bokadirekt.se/places/dermalaser-studio-stockolm-34089" target="_blank" rel="noopener noreferrer">{isSkinAnalysisSlug(slug) ? 'Boka kostnadsfri hudanalys' : isAcneSlug(slug) ? 'Boka aknebehandling - 795 kr' : isSensitiveSkinSlug(slug) ? 'Boka behandling för känslig hud - 695 kr' : isPigmentationSlug(slug) ? 'Boka pigmentbehandling - 795 kr' : isSignatureSlug(slug) ? 'Boka Signature Premium - 1 999 kr' : isClassicFacialSlug(slug) ? 'Boka ansiktsbehandling - 795 kr' : isChemicalPeelSlug(slug) ? 'Boka kemisk peeling - 1 195 kr' : isHydrafacialSlug(slug) ? 'Boka Hydrafacial - 895 kr' : isCarbonPeelSlug(slug) ? 'Boka Carbon Peel - 1 095 kr' : isLaserHairRemovalSlug(slug) ? 'Boka laser hårborttagning från 495 kr' : isCo2LaserSlug(slug) ? 'Boka CO2 Laser Resurfacing - 4 500 kr' : 'Boka tid online'}</a>
        </section>
      </main>

      <Footer />
    </>
  );
}