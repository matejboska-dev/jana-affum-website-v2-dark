'use client';

import React, { useState } from 'react';

interface TestimonialItem {
  name: string;
  role: string;
  image?: string;
  quote: string[];
  moreQuote?: string[];
  isAnonymous?: boolean;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'George Bakkeren',
    role: 'Founder & Owner, Deliver-IT Switzerland',
    image: '/images/testimonials/george-bakkeren.jpg',
    quote: [
      'I have had the pleasure of working closely with Jana and can confidently say that she is one of the most dedicated recruiters I have met. Jana combines professionalism with genuine care for both clients and candidates. She is highly proactive, communicates clearly, and always follows through on her commitments. Her ability to build relationships and identify the right talent is exceptional.',
    ],
    moreQuote: [
      'What I appreciate most is her integrity and determination. She invests the time to understand people, provides valuable guidance, and consistently goes the extra mile to achieve successful outcomes. Jana is not only an excellent recruiter but also a trusted partner who truly cares about helping people advance their careers. I highly recommend her services.',
    ],
  },
  {
    name: 'Senior Infrastructure Specialist',
    role: 'Cloud & NetDevOps · Placed Candidate (Confidential)',
    isAnonymous: true,
    quote: [
      'Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough.',
    ],
  },
  {
    name: 'Danica Miller',
    role: 'Global Senior Manager Talent Acquisition & Employer Branding, STADA Arzneimittel AG',
    image: '/images/testimonials/danica-miller.png',
    quote: [
      'Dear Jana,',
      'Congratulations! You are one of our LinkedIn Superusers! Looking at the data for the past 8 months, you have been active for an astonishing 158 days, viewed 1394 profiles, sent 1113 InMails out of which 297 were accepted. These are some amazing numbers that illustrate your dedication to finding the right talent for STADA and raising the bar, so thank you for that!',
    ],
  },
];

function ProofCard({ item }: { item: TestimonialItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const allParagraphs = [...item.quote, ...(item.moreQuote ?? [])];

  return (
    <div className="card quote-card">
      <div className="quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <div
        className="quote-text"
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <div
          className={isExpanded ? undefined : 'quote-text-clamped'}
          style={{ whiteSpace: 'pre-line', color: 'rgba(255, 255, 255, 0.85)' }}
        >
          {allParagraphs.join('\n\n')}
        </div>

        <div style={{ marginTop: '4px' }}>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            style={{
              background: 'none',
              border: 'none',
              padding: '4px 0',
              color: 'var(--primary)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <span>{isExpanded ? 'Show less' : 'Read more'}</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease',
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      <div className="quote-author">
        {item.isAnonymous ? (
          <div
            className="quote-avatar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(211, 175, 101, 0.15)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              flexShrink: 0,
            }}
            aria-label="Identity protected under NDA"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.image}
            loading="lazy"
            alt={item.name}
            className="quote-avatar"
          />
        )}
        <div>
          <h4 className="quote-name">{item.name}</h4>
          <p className="quote-role">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Proof() {
  return (
    <section id="proof" className="section-reviews">
      <div className="base-container w-container">
        <div className="section-head">
          <span className="eyebrow">Client results</span>
          <h2 id="client-stories" className="h2-hero-title-white">
            <span className="h2-span light">Real partnerships:</span> what clients and
            candidates say
          </h2>
          <p className="item-description-white">
            Authentic references from founders, senior engineers, and talent leaders across
            Europe.
          </p>
        </div>

        <div className="quote-grid">
          {testimonials.map((item) => (
            <ProofCard key={item.name} item={item} />
          ))}
        </div>

        {/* Case Study: the deeper-dive evidence, after the quotes it supports */}
        <div className="card" style={{ padding: '40px 36px', marginTop: '20px' }}>
          <div
            className="case-study-badge"
            style={{ color: 'var(--primary)', marginBottom: '14px' }}
          >
            Case Study &bull; International Search (Confidential)
          </div>
          <h3
            style={{
              fontSize: 'var(--t-subhead)',
              lineHeight: 'var(--lh-head)',
              color: '#fff',
              marginBottom: '14px',
              maxWidth: '28ch',
            }}
          >
            Senior infrastructure candidate in a multi-stage international process
          </h3>
          <p
            style={{
              fontSize: 'var(--t-body)',
              lineHeight: 'var(--lh-body)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 'var(--measure-wide)',
              margin: '0 0 20px 0',
            }}
          >
            A senior infrastructure specialist entered a multi-round international selection
            process. Through consistent feedback and structured preparation at every stage,
            Jana prevented the uncertainty that typically causes strong candidates to
            disengage. The result: a confident candidate, a decisive hiring committee, and a
            placement that held.
          </p>
          <div
            style={{
              borderTop: '1px solid rgba(211, 175, 101, 0.25)',
              paddingTop: '18px',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.92)',
                fontStyle: 'italic',
                margin: '0 0 8px 0',
              }}
            >
              &ldquo;Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough.&rdquo;
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.6)',
                margin: 0,
              }}
            >
              &mdash; Placed Candidate &bull; Senior Infrastructure Specialist (Identity protected under NDA)
            </p>
          </div>
        </div>
      </div>

      {/* Post-Proof CTA Band */}
      <div className="proof-cta-band" style={{ padding: '60px 0 0 0', marginTop: '60px' }}>
        <div className="base-container w-container">
          <div className="proof-cta">
            <p className="proof-cta-text">
              Ready to start a conversation? Twenty minutes, no cost, no obligation.
            </p>
            <a href="#booking" className="primary-button w-button">
              Book a 20-minute conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
