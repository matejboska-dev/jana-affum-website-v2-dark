import type { MetadataRoute } from 'next';

const base = 'https://janaaffum.com';
const pages = [
  { path: '', priority: 1 },
  { path: '/recruitment', priority: 0.9 },
  { path: '/coaching', priority: 0.9 },
  { path: '/privacy', priority: 0.3 },
  { path: '/candidate-privacy', priority: 0.3 },
  { path: '/cookies', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(({ path, priority }) => ({ url: `${base}${path}`, lastModified, changeFrequency: priority > 0.5 ? 'monthly' : 'yearly', priority }));
}
