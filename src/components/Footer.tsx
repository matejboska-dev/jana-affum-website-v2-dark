import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="new-footer-ersti">
      <div className="base-container w-container">
        <div className="footer-top-wrap">
          <div className="footer-con">
            <div className="footer-info">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/jana-logo-mark.png"
                  loading="lazy"
                  alt="Jana Affum logo"
                  height={40}
                  style={{ display: 'block', width: 'auto' }}
                />
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: '22px',
                    color: '#FFFFFF',
                    letterSpacing: '0.02em',
                  }}
                >
                  Jana Affum
                </span>
              </div>
              <p
                style={{
                  fontSize: 'var(--t-body)',
                  lineHeight: 'var(--lh-body)',
                  color: 'rgba(255,255,255,0.75)',
                  maxWidth: 'var(--measure)',
                  marginBottom: '24px',
                }}
              >
                International recruitment for companies hiring key talent, alongside
                private coaching for professionals navigating important decisions and change.
              </p>
              <div className="links-socials">
                <div className="links-container">
                  <Link href="/" className="footer-project-link">
                    Home
                  </Link>
                  <Link href="/recruitment" className="footer-project-link">
                    Recruitment
                  </Link>
                  <Link href="/coaching" className="footer-project-link">
                    Coaching
                  </Link>
                  <a href="#proof" className="footer-project-link">
                    Results
                  </a>
                  <a href="#booking" className="footer-project-link">
                    Contact
                  </a>
                </div>
                <div
                  className="social-networks"
                  style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
                >
                  <a
                    href="https://www.linkedin.com/in/jana-affum-0aa979197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-socials"
                    style={{
                      fontSize: 'var(--t-meta)',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/janaaffum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-socials"
                    style={{
                      fontSize: 'var(--t-meta)',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div className="footer-contact-row">
                <a href="mailto:janaaffum@gmail.com" className="footer-contact-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 6-10 7L2 6"></path>
                  </svg>
                  janaaffum@gmail.com
                </a>
                <span className="footer-contact-link" style={{ cursor: 'default' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  Prague &middot; English &amp; Czech
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '28px',
            fontSize: 'var(--t-meta)',
            lineHeight: 'var(--lh-meta)',
            color: 'var(--white-50)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div className="footer-copyright-5">
            <div>
              Jana Affum &bull; Business ID: 13956248 &bull; VAT ID: CZ8952264651 &bull; Registered office: tř. Dukelských hrdinů 3789/84, 695 01 Hodonín, Czech Republic
            </div>
            <div style={{ marginTop: '4px', opacity: 0.85 }}>
              Registered in the Czech Trade Register.
            </div>
          </div>
          <div className="footer-bottom-col-right" style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <Link href="/privacy" className="footer-copyright-5">Privacy &amp; GDPR</Link>
              <Link href="/candidate-privacy" className="footer-copyright-5">Candidate GDPR</Link>
              <Link href="/cookies" className="footer-copyright-5">Cookies</Link>
              <Link href="/terms" className="footer-copyright-5">Terms</Link>
            </div>
            <div>&copy; 2026 Jana Affum. All rights reserved.</div>
            <div className="footer-ai-note">
              Certain images on this website were created or enhanced using artificial intelligence.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
