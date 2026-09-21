'use client';
import CalendlyButton from '@/components/CalendlyButton';
import { useEffect, useState, type FormEvent } from 'react';
import { Arrow } from './ServiceArt';
import { sendEnquiry } from '@/lib/sendEnquiry';
import s from './services.module.css';

export default function ServiceContact({ kind }: { kind: 'recruitment' | 'coaching' }) {
  const recruitment = kind === 'recruitment';
  const [draft, setDraft] = useState('');
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [topic, setTopic] = useState(recruitment ? 'Hiring' : 'Private coaching');
  useEffect(() => {
    setReady(true);
    const selectTopic = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[data-enquiry-topic]');
      if (link?.dataset.enquiryTopic) { setTopic(link.dataset.enquiryTopic); setDraft(''); }
    };
    document.addEventListener('click', selectTopic);
    return () => document.removeEventListener('click', selectTopic);
  }, []);
  async function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSending(true);
    const delivered = await sendEnquiry({ name: String(data.get('name')), email: String(data.get('email')), message: String(data.get('message')), topic: String(data.get('topic')), language: String(data.get('language')), company: String(data.get('company') || ''), source: kind, website: String(data.get('website') || '') });
    setSending(false);
    if (delivered) { setSent(true); setDraft(''); return; }
    const body = `Hello Jana,\n\nI would like to discuss: ${data.get('topic')}\nName: ${data.get('name')}\nEmail: ${data.get('email')}\n${recruitment ? `Company: ${data.get('company') || 'Not specified'}\n` : ''}Preferred language: ${data.get('language')}\n\n${data.get('message')}\n\nI would like to arrange a complimentary 15-minute conversation.`;
    setDraft(body); setCopied(false);
  }
  return <section id="booking" className="section-final-cta" aria-labelledby="contact-heading">
    <div className="base-container w-container">
      <div className="final-cta-card">
        <div className={s.contactMark} aria-hidden="true"><img src="/images/jana-logo-mark.png" alt=""/></div>
        <div className={s.contactGrid}>
          <div className={s.contactIntro}>
            <span className="eyebrow">Start a conversation</span>
            <h2 id="contact-heading" className="final-cta-title" style={{ textAlign: 'left', margin: '12px 0 20px' }}>Start with a <span className="h2-span light">complimentary conversation</span></h2>
            <p className="final-cta-sub" style={{ textAlign: 'left', margin: '0 0 24px' }}>Every collaboration begins with a complimentary 15-minute call. We will briefly discuss what brings you here, what kind of support you may need and whether we feel we are the right fit to work together.</p>
            <p className={s.contactFact}>No commitment. No generic pitch. Just an honest conversation about whether working together makes sense.</p>
            <div style={{ margin: '0 0 24px' }}><CalendlyButton/></div>
            <p className={s.contactFact}>Prefer email? Write to me directly. English or Czech.</p>
            <a className={s.emailLink} href={`mailto:janaaffum@gmail.com?subject=${encodeURIComponent(recruitment ? 'Hiring conversation' : 'Private coaching conversation')}`}>janaaffum@gmail.com <Arrow diagonal/></a>
          </div>
          <div className={s.form}>
            <form onSubmit={prepare} onChange={() => { setDraft(''); setSent(false); }}>
              <div className={s.formRow}>
                <label>Your name<input name="name" autoComplete="name" placeholder="Full name" required maxLength={120}/></label>
                <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/></label>
              </div>
              {recruitment && <label>Company <span className={s.optional}>(optional)</span><input name="company" autoComplete="organization" placeholder="Your company" maxLength={160}/></label>}
              <div className={s.formRow}>
                <label>I’d like to discuss<select name="topic" value={topic} onChange={e => setTopic(e.target.value)}>{(recruitment ? ['Hiring', 'Onboarding Care', 'Recruitment mentoring'] : ['Private coaching', 'Career change', 'Expat & international coaching']).map(t => <option key={t}>{t}</option>)}</select></label>
                <label>Preferred language<select name="language" defaultValue="English"><option>English</option><option>Czech</option></select></label>
              </div>
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}/>
              <label>{recruitment ? 'Tell me about your hiring needs' : 'What would make this conversation valuable?'}<textarea name="message" rows={4} required maxLength={3000} placeholder={recruitment ? 'For example: We need a Finance Director for our European team. The role is hybrid, and finding the right experience has been difficult…' : 'For example: My career looks good on paper, but I am considering a change. I would value an independent perspective…'}/></label>
              <p className={s.formPrivacy}>Your message is sent to me by email, and if that is unavailable the form prepares an email draft on your device instead. Please leave out sensitive personal or candidate information.</p>
              <button className="cta-pill-button" type="submit" disabled={!ready || sending}><span>{sending ? 'Sending…' : 'Send my enquiry'}</span><Arrow/></button>
              <noscript><p className={s.formPrivacy}>Please use the email link to contact Jana. Preparing an enquiry on this page requires JavaScript.</p></noscript>
              {sent && <div className={s.draftResult} role="status"><strong>Thank you. Your message has been sent.</strong><p>I will reply to you by email.</p></div>}
              {draft && <div className={s.draftResult} role="status"><strong>Your email draft is ready.</strong><p>Open it in your email app, review it and press send. Nothing has been sent yet.</p><a className={s.textLinkLight} href={`mailto:janaaffum@gmail.com?subject=${encodeURIComponent(`${topic} — introductory conversation`)}&body=${encodeURIComponent(draft)}`}>Open email draft <Arrow diagonal/></a><details><summary>No email app? Copy your message</summary><textarea readOnly aria-label="Your enquiry draft" value={draft} rows={7}/><button type="button" className={s.textLinkLight} onClick={async () => { try { await navigator.clipboard.writeText(draft); setCopied(true); } catch { setCopied(false); } }}>{copied ? 'Copied to clipboard' : 'Copy message'}</button><p>Send to janaaffum@gmail.com using your preferred email service.</p></details></div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
