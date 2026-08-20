import styles from './IntroStatement.module.css';

type IntroStatementProps = {
  eyebrow?: string;
  statement?: string;
};

export default function IntroStatement({
  eyebrow = 'Personlig skönhetsklinik i Göteborg',
  statement = 'Citylaser är inte bara en skönhetsklinik; vi är specialister på behandlingar och ingrepp som skapar känslan av naturlig skönhet. Vi prioriterar säkerhet, trygghet och personligt bemötande.',
}: IntroStatementProps) {
  return (
    <section className={`shell ${styles.wrap}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <p className={styles.statement}>{statement}</p>
    </section>
  );
}