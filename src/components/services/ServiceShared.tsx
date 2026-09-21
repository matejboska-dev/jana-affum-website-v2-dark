import type { ReactNode } from 'react';
import { Arrow } from './ServiceArt';
import s from './services.module.css';

type Variant = 'pill' | 'hero' | 'ghost' | 'link';
const variantClass: Record<Variant, string> = {
  pill: 'cta-pill-button',
  hero: 'primary-button hero-v2-cta-primary',
  ghost: 'hero-v2-cta-secondary',
  link: s.textLink,
};

/** 'pill' and 'hero' draw their arrow chip in CSS (globals.css), so no icon is rendered here. */
export function Button({ children, href = '#booking', variant = 'pill', topic }: { children: ReactNode; href?: string; variant?: Variant; topic?: string }) {
  const chip = variant === 'pill' || variant === 'hero';
  return <a className={variantClass[variant]} href={href} data-enquiry-topic={topic}><span>{children}</span>{!chip && <Arrow diagonal={variant === 'link'}/>}</a>;
}

/** Numbered section marker, the structural device of the service pages. */
export function Kicker({ n, children }: { n: string; children: ReactNode }) {
  return <span className={s.kicker} style={{ gridColumn: '1 / -1' }}><b>{n}</b><i/>{children}</span>;
}

export function SkipLink() {
  return <a className={s.skip} href="#main-content">Skip to content</a>;
}

export function ServiceSchema({ kind, title, description }: { kind: 'recruitment' | 'coaching'; title: string; description: string }) {
  const url = `https://janaaffum.com/${kind}`;
  const graph = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, inLanguage: 'en', mainEntity: { '@id': `${url}#service` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'Service', '@id': `${url}#service`, name: kind === 'recruitment' ? 'International Recruitment & Executive Search' : 'Private Coaching & Thinking Partnership', url, description, provider: { '@id': 'https://janaaffum.com/#person' }, areaServed: ['Europe', 'International'], availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${url}#booking`, availableLanguage: ['English', 'Czech'] } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://janaaffum.com/' }, { '@type': 'ListItem', position: 2, name: kind === 'recruitment' ? 'Recruitment' : 'Private Coaching', item: url } ] },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}/>;
}
