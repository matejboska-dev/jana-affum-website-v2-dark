'use client';

import React, { useState } from 'react';
import { sendEnquiry } from '@/lib/sendEnquiry';

export default function CoachingContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentRole: '',
    navigationNotes: '',
    language: 'English',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const delivered = await sendEnquiry({
        name: formData.name,
        email: formData.email,
        message: `Current role: ${formData.currentRole}\n\n${formData.navigationNotes}`,
        topic: 'Private coaching',
        language: formData.language,
        source: 'coaching-inquiry',
      });
      setSending(false);
      if (delivered) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setSending(false);
      setError(true);
    }
  };

  return (
    <div id="coaching-inquiry" className="section-final-cta" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="final-cta-card" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            className="case-study-badge"
            style={{ color: 'var(--primary)', marginBottom: '12px' }}
          >
            Start a Private Conversation
          </div>
          <h2 className="final-cta-title">
            Begin with one{' '}
            <span className="h2-span" style={{ color: 'var(--primary)', fontStyle: 'italic' }}>
              honest conversation.
            </span>
          </h2>
          <p className="final-cta-sub" style={{ maxWidth: '620px', margin: '0 auto 40px auto' }}>
            A complimentary 15-minute introductory call. We explore where you are, what choice you
            are facing, and whether working together is a natural fit.
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
                  htmlFor="coach-name"
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
                  id="coach-name"
                  name="name"
                  type="text"
                  required
                  className="form-input w-input"
                  placeholder="Your name"
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
                  htmlFor="coach-email"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Private E-mail
                </label>
                <input
                  id="coach-email"
                  name="email"
                  type="email"
                  required
                  className="form-input w-input"
                  placeholder="your.personal@email.com"
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
                  htmlFor="coach-role"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  Current Role or Context
                </label>
                <input
                  id="coach-role"
                  name="currentRole"
                  type="text"
                  className="form-input w-input"
                  placeholder="e.g. Senior Director, Founder, Expat Lead"
                  value={formData.currentRole}
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
                  htmlFor="coach-lang"
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
                  id="coach-lang"
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
                  htmlFor="coach-notes"
                  style={{
                    display: 'block',
                    fontSize: 'var(--t-meta)',
                    fontWeight: 600,
                    color: 'var(--par-color)',
                    marginBottom: '6px',
                  }}
                >
                  What are you navigating right now? (A few sentences are plenty)
                </label>
                <textarea
                  id="coach-notes"
                  name="navigationNotes"
                  className="form-input w-input"
                  rows={4}
                  placeholder="e.g. Considering leaving a corporate role, weighing an international move, or figuring out what comes next..."
                  value={formData.navigationNotes}
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
                  {sending ? 'Sending…' : 'Send confidential inquiry'}
                </button>
                <p
                  style={{
                    fontSize: 'var(--t-meta)',
                    lineHeight: 'var(--lh-meta)',
                    color: 'rgba(255,255,255,0.65)',
                    marginTop: '12px',
                    marginBottom: 0,
                  }}
                >
                  By submitting this form, you acknowledge that your personal data will be used to respond to your enquiry as described in the{' '}
                  <a
                    href="/privacy"
                    style={{
                      color: 'var(--primary)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                    }}
                  >
                    Privacy Policy
                  </a>
                  . Please do not include sensitive personal data or confidential candidate information.
                </p>
                {error && (
                  <div
                    role="alert"
                    style={{
                      marginTop: '16px',
                      padding: '14px 16px',
                      background: 'rgba(220, 38, 38, 0.12)',
                      border: '1px solid rgba(220, 38, 38, 0.35)',
                      borderRadius: '8px',
                      fontSize: 'var(--t-meta)',
                      lineHeight: 1.5,
                      textAlign: 'left',
                    }}
                  >
                    <p style={{ margin: '0 0 6px 0', fontWeight: 600, color: '#fca5a5' }}>
                      Your message could not be sent automatically.
                    </p>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.85)' }}>
                      Please email Jana directly at{' '}
                      <a
                        href={`mailto:janaaffum@gmail.com?subject=${encodeURIComponent(
                          'Private Coaching Inquiry'
                        )}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\nCurrent Role: ${formData.currentRole}\n\nWhat I am navigating:\n${formData.navigationNotes}`
                        )}`}
                        style={{
                          color: 'var(--primary)',
                          textDecoration: 'underline',
                          fontWeight: 600,
                        }}
                      >
                        janaaffum@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                )}
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
                ✓ Thank you. Your confidential note is on its way.
              </p>
              <p style={{ fontSize: 'var(--t-meta)', color: 'var(--par-color)' }}>
                Jana will respond personally within one working day.
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
              Prefer to book your 15-minute conversation directly into the calendar?
            </p>
            <a
              href="https://calendly.com/janaaffum/15min"
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
              <span>Schedule 15-minute fit call via Calendly</span>
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
            <span>Strict professional confidentiality &bull; Zero sales pressure &bull; 15 minutes complimentary</span>
          </p>
        </div>
      </div>
    </div>
  );
}
