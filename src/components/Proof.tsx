import React from 'react';

const testimonials = [
  {
    name: 'George Bakkeren',
    role: 'Founder & Owner, Deliver-IT Switzerland',
    image: '/images/testimonials/george-bakkeren.jpg',
    quote:
      'Jana combines professionalism with genuine care for both clients and candidates. She is highly proactive, communicates clearly, and always follows through. I highly recommend her services.',
  },
  {
    name: 'Zoltan Erdely',
    role: 'Senior NetDevOps Engineer',
    image: '/images/testimonials/zoltan-erdely.png',
    quote:
      'Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough.',
  },
  {
    name: 'Danica Miller',
    role: 'Global Sr. Manager TA, STADA',
    image: '/images/testimonials/danica-miller.png',
    quote:
      'You are one of our LinkedIn Superusers! Active for 158 days, viewed 1,394 profiles, sent 1,113 InMails. These numbers illustrate your dedication to finding the right talent.',
  },
];

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
            Europe and Switzerland.
          </p>
        </div>

        <div className="quote-grid">
          {testimonials.map((item) => (
            <div key={item.name} className="card quote-card">
              <div className="quote-mark" aria-hidden="true">
                &ldquo;
              </div>
              <p className="quote-text">{item.quote}</p>
              <div className="quote-author">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  loading="lazy"
                  alt={item.name}
                  className="quote-avatar"
                />
                <div>
                  <h4 className="quote-name">{item.name}</h4>
                  <p className="quote-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study: the deeper-dive evidence, after the quotes it supports */}
        <div className="card" style={{ padding: '40px 36px', marginTop: '20px' }}>
          <div
            className="case-study-badge"
            style={{ color: 'var(--primary)', marginBottom: '14px' }}
          >
            Case Study
          </div>
          <h3
            style={{
              fontSize: 'var(--t-subhead)',
              lineHeight: 'var(--lh-head)',
              color: '#fff',
              marginBottom: '14px',
              maxWidth: '20ch',
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
              margin: 0,
            }}
          >
            A senior infrastructure specialist entered a multi-round international selection
            process. Through consistent feedback and structured preparation at every stage,
            Jana prevented the uncertainty that typically causes strong candidates to
            disengage. The result: a confident candidate, a decisive hiring committee, and a
            placement that held.
          </p>
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
