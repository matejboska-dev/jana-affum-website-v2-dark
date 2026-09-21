import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const alt = 'Jana Affum — International Recruitment & Private Coaching';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const photo = await readFile(path.join(process.cwd(), 'src/app/og-portrait.png'));
  const src = `data:image/png;base64,${photo.toString('base64')}`;
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', background: 'linear-gradient(135deg, #1C1710, #0E0C09)', color: '#fff', fontFamily: 'serif', position: 'relative' }}>
      <div style={{ position: 'absolute', right: 40, top: -60, width: 620, height: 620, borderRadius: 620, background: 'radial-gradient(circle, rgba(211,175,101,.35), rgba(211,175,101,0) 70%)', display: 'flex' }}/>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 0 0 72px', width: 700 }}>
        <div style={{ fontSize: 22, letterSpacing: 4, textTransform: 'uppercase', color: '#D3AF65', marginBottom: 28, display: 'flex' }}>Prague · English &amp; Czech</div>
        <div style={{ fontSize: 88, fontStyle: 'italic', fontWeight: 700, lineHeight: 1, display: 'flex' }}>Jana Affum</div>
        <div style={{ fontSize: 34, lineHeight: 1.3, color: 'rgba(255,255,255,.82)', marginTop: 28, display: 'flex' }}>International recruitment &amp; private coaching for important decisions</div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={470} height={604} style={{ position: 'absolute', right: 30, bottom: 0, objectFit: 'contain' }}/>
    </div>,
    size,
  );
}
