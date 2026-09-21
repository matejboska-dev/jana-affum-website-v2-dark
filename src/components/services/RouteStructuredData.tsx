'use client';
import { usePathname } from 'next/navigation';

// Preserve the homepage graph, but do not repeat its FAQ and service copy
// on the rebuilt service pages, which publish their own page-specific graph.
export default function RouteStructuredData({ data }: { data: { '@context': string; '@graph': Record<string, unknown>[] } }) {
  const pathname = usePathname();
  const isService = pathname === '/recruitment' || pathname === '/coaching';
  const graph = isService ? { ...data, '@graph': data['@graph'].filter(item => item['@type'] === 'Person') } : data;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}/>;
}
