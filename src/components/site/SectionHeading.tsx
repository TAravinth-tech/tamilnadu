import { ArrowRight } from 'lucide-react';

export function SectionHeading({ kicker, title, action = 'View all', actionHref = '/shop/#/products' }: { kicker: string; title: string; action?: string; actionHref?: string }) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow">{kicker}</span><h2>{title}</h2></div>
      {action && <a href={actionHref} className="text-link">{action} <ArrowRight size={16} /></a>}
    </div>
  );
}
