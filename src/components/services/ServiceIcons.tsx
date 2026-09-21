import type { ReactNode } from 'react';

/* One icon family: 24px grid, 1.7 stroke, round caps. Matches the homepage stat icons. */
const paths = {
  compass: <><circle cx="12" cy="12" r="9"/><path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1z"/></>,
  chat: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>,
  globe: <><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18z"/></>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8" fill="currentColor"/></>,
  message: <><path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9.5h8M8 12.5h5"/></>,
  listcheck: <><path d="M10 6h11M10 12h11M10 18h11"/><path d="M3.5 6l1.2 1.2L7 4.8M3.5 12l1.2 1.2L7 10.8M3.5 18l1.2 1.2L7 16.8"/></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  flag: <><path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/></>,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>,
  building: <><path d="M4 21V6l8-3v18M12 9l8 3v9M2 21h20"/><path d="M8 9h.01M8 13h.01M8 17h.01M16 15h.01M16 18h.01"/></>,
  swap: <path d="M4 8h14m-4-4 4 4-4 4M20 16H6m4-4-4 4 4 4"/>,
  anchor: <><circle cx="12" cy="5" r="2.2"/><path d="M12 7.2V21M8 11h8M4.5 14a7.5 7.5 0 0 0 15 0"/></>,
  monitor: <><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></>,
  gear: <><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/></>,
  flask: <><path d="M9 3h6M10 3v6L4.8 18a2 2 0 0 0 1.8 3h10.8a2 2 0 0 0 1.8-3L14 9V3"/><path d="M7.5 15h9"/></>,
  heart: <path d="M12 20.5s-8-4.7-8-10.5A4.5 4.5 0 0 1 12 7.6 4.5 4.5 0 0 1 20 10c0 5.8-8 10.5-8 10.5z"/>,
  bank: <><path d="M3 9.5 12 4l9 5.5"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/></>,
  scales: <><path d="M12 4v16M7 20h10M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z"/></>,
  trend: <><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></>,
  megaphone: <><path d="M4 10v4l11 5V5L4 10z"/><path d="M8 14.5V18a2 2 0 0 0 3.6 1.2M19 9.5v5"/></>,
  users: <><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M17.5 14a4.5 4.5 0 0 1 4 4.5"/></>,
  truck: <><path d="M2 6h11v10H2z"/><path d="M13 9h4l4 3.5V16h-8"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></>,
  cap: <><path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v6"/></>,
  car: <><path d="M4 15v-3.5L6.2 7h11.6L20 11.5V15"/><path d="M3 15h18v3.5H3z"/><path d="M6.5 18.5V20M17.5 18.5V20"/></>,
  check: <polyline points="20 6 9 17 4 12"/>,
  chevron: <polyline points="9 6 15 12 9 18"/>,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

/** Bare paths, for placing an icon inside a larger SVG. */
export function IconGlyph({ name }: { name: IconName }) {
  return <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</g>;
}
