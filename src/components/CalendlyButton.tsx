const icon = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

/** Primary "book a free 15-minute call" button, linking straight to Jana's Calendly. */
export default function CalendlyButton({ children = 'Book your free 15-min consultation' }: { children?: string }) {
  return <a href="https://calendly.com/janaaffum/15min" target="_blank" rel="noopener noreferrer" className="primary-button w-button" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 17, padding: '18px 36px', textDecoration: 'none', width: 'fit-content' }}>
    <svg width={20} height={20} {...icon}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    <span>{children}</span>
    <svg width={18} height={18} {...icon}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </a>;
}
