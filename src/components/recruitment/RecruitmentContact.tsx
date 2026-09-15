'use client';

import React, { useState } from 'react';

export default function RecruitmentContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleDetails: '',
    language: 'English',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(
      `Recruitment Inquiry: ${formData.company || 'Hiring Mandate'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPreferred language: ${formData.language}\n\nRole & Search Details:\n${formData.roleDetails}`
    );
    window.location.href = `mailto:janaaffum@gmail.com?subject=${subject}&body=${body}`;

    setSending(false);
    setSubmitted(true);
  };

  return (
    <div id="hiring-inquiry" className="section-final-cta" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="final-cta-card" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            className="case-study-badge"
            style={{ color: 'var(--primary)', marginBottom: '12px' }}
          >
            Start a Search Mandate
          </div>
          <h2 className="final-cta-title">
            Let&apos;s discuss the role you need to{' '}
            <span className="h2-span" style={{ color: 'var(--primary)', fontStyle: 'italic' }}>
              fill with certainty.
            </span>
          </h2>
          <p className="final-cta-sub" style={{ maxWidth: '620px', margin: '0 auto 40px auto' }}>
            A 20-minute direct conversation to map your search requirements, technical bar,
            and timeline. No sales pitches, no obligation.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="final-cta-form"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                maxWidth: '640px',
                margin: '0 auto',
                textAlign: 'left',
              }}
            >
              <div style={{ gridColumn: '1 / 2' }}>
                <label
                  htmlFor="rec-name"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Your Name
                </label>
                <input
                  id="rec-name"
                  name="name"
                  type="text"
                  required
                  className="form-input w-input"
                  placeholder="e.g. Thomas Weber"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                  }}
                />
              </div>

              <div style={{ gridColumn: '2 / 3' }}>
                <label
                  htmlFor="rec-email"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Work E-mail
                </label>
                <input
                  id="rec-email"
                  name="email"
                  type="email"
                  required
                  className="form-input w-input"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / 2' }}>
                <label
                  htmlFor="rec-company"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Company Name
                </label>
                <input
                  id="rec-company"
                  name="company"
                  type="text"
                  required
                  className="form-input w-input"
                  placeholder="e.g. Acme Tech GmbH"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                  }}
                />
              </div>

              <div style={{ gridColumn: '2 / 3' }}>
                <label
                  htmlFor="rec-language"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Preferred Language
                </label>
                <select
                  id="rec-language"
                  name="language"
                  className="form-input w-input"
                  value={formData.language}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                    appearance: 'auto',
                  }}
                >
                  <option value="English">English</option>
                  <option value="Czech">Czech</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label
                  htmlFor="rec-details"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Tell me about the role you need to fill (Seniority, technology, challenges)
                </label>
                <textarea
                  id="rec-details"
                  name="roleDetails"
                  className="form-input w-input"
                  rows={4}
                  placeholder="e.g. We are looking for a Senior Cloud Architect in Prague/remote, struggle to find active candidates with production Kubernetes experience..."
                  value={formData.roleDetails}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(36,30,20,0.18)',
                    fontSize: 'var(--t-body)',
                    background: '#fff',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '8px' }}>
                <button
                  type="submit"
                  className="primary-button w-button"
                  disabled={sending}
                  style={{ fontSize: '17px', padding: '16px 40px' }}
                >
                  {sending ? 'Sending…' : 'Submit recruitment inquiry'}
                </button>
              </div>
            </form>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '32px',
                background: 'rgba(34,139,34,0.08)',
                borderRadius: '12px',
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              <p
                style={{
                  fontSize: 'var(--t-body)',
                  fontWeight: 600,
                  color: '#2e7d32',
                  marginBottom: '8px',
                }}
              >
                ✓ Thank you! Your hiring inquiry has been received.
              </p>
              <p style={{ fontSize: 'var(--t-meta)', color: 'var(--par-color)' }}>
                Jana will review your requirements and respond within one business day.
              </p>
            </div>
          )}

          {/* Calendly direct option */}
          <div
            style={{
              marginTop: '32px',
              borderTop: '1px solid rgba(36,30,20,0.1)',
              paddingTop: '24px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: 'var(--t-meta)',
                color: 'var(--par-color)',
                marginBottom: '12px',
                fontWeight: 500,
              }}
            >
              Want to skip the form and discuss your mandate directly?
            </p>
            <a
              href="https://calendly.com/janaaffum"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pill-secondary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Book a 20-minute briefing via Calendly</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <p className="final-cta-guarantee" style={{ marginTop: '24px' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Confidential senior search &bull; Transparent terms &bull; Zero spam</span>
          </p>
        </div>
      </div>
    </div>
  );
}
