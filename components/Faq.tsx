import { ChevronDown } from 'lucide-react';

type FaqItem = { question: string; answer: string };

export default function Faq({ items, title }: { items: readonly FaqItem[]; title: string }) {
  if (!items.length) return null;

  return (
    <section className="section shell faq" aria-labelledby="detail-faq-title">
      <p className="eyebrow center">Vanliga frågor</p>
      <h2 id="detail-faq-title" className="sectionTitle">Frågor om {title.toLowerCase()}.</h2>
      <div className="faqGrid">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}<span><ChevronDown size={18} strokeWidth={1.5} aria-hidden="true" /></span></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}