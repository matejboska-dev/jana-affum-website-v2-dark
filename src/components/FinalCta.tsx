'use client';

import React, { useState } from 'react';

export default function FinalCta() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent('Website inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:janaaffum@gmail.com?subject=${subject}&body=${body}`;

    setSending(false);
    setSubmitted(true);
  };

  return (
    <div id="booking" className="section-final-cta">
      <div className="base-container w-container">
        <div
          className="final-cta-card"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            textAlign: 'left',
            alignItems: 'stretch',
          }}
        >
          {/* ── Two-column layout ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }}
            className="final-cta-split"
          >
            {/* ─── LEFT: Copy + CTA ─── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <span className="eyebrow">Start a conversation</span>

              <h2
                className="final-cta-title"
                style={{
                  textAlign: 'left',
                  margin: '0 0 20px 0',
                }}
              >
                Let&apos;s find out if we&apos;re{' '}
                <span
                  className="h2-span"
                  style={{ color: 'var(--primary)', fontStyle: 'italic' }}
                >
                  a natural fit.
                </span>
              </h2>

              <p
                className="final-cta-sub"
                style={{
                  textAlign: 'left',
                  margin: '0 0 36px 0',
                  maxWidth: '44ch',
                }}
              >
                Twenty minutes. No cost. No pitch. Whether you are hiring or
                navigating a personal crossroads, the first step is a
                straightforward conversation.
              </p>

              {/* Primary CTA — Calendly booking */}
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button w-button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '17px',
                  padding: '18px 36px',
                  textDecoration: 'none',
                  width: 'fit-content',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book your free 20-min consultation</span>
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              {/* Trust line */}
              <p
                className="final-cta-guarantee"
                style={{ marginTop: '20px', textAlign: 'left' }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Zero sales pressure&ensp;·&ensp;Confidential &amp; direct</span>
              </p>
            </div>

            {/* ─── RIGHT: Contact form ─── */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                paddingTop: '8px',
              }}
            >
              {/* Section label */}
              <p
                style={{
                  fontSize: 'var(--t-meta)',
                  fontWeight: 600,
                  color: 'var(--primary)',
                  margin: '0 0 20px 0',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Or send a message
              </p>

              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label
                        htmlFor="fc-name"
                        style={{
                          display: 'block',
                          fontSize: 'var(--t-meta)',
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.55)',
                          marginBottom: '6px',
                        }}
                      >
                        Name
                      </label>
                      <input
                        id="fc-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid rgba(211,175,101,0.25)',
                          fontSize: 'var(--t-body)',
                          background: 'rgba(255,255,255,0.06)',
                          color: '#fff',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = 'var(--primary)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            'rgba(211,175,101,0.25)')
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fc-email"
                        style={{
                          display: 'block',
                          fontSize: 'var(--t-meta)',
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.55)',
                          marginBottom: '6px',
                        }}
                      >
                        E-mail
                      </label>
                      <input
                        id="fc-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid rgba(211,175,101,0.25)',
                          fontSize: 'var(--t-body)',
                          background: 'rgba(255,255,255,0.06)',
                          color: '#fff',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = 'var(--primary)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            'rgba(211,175,101,0.25)')
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="fc-message"
                      style={{
                        display: 'block',
                        fontSize: 'var(--t-meta)',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.55)',
                        marginBottom: '6px',
                      }}
                    >
                      What would make this conversation valuable?
                    </label>
                    <textarea
                      id="fc-message"
                      name="message"
                      rows={3}
                      placeholder="A sentence or two is enough…"
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid rgba(211,175,101,0.25)',
                        fontSize: 'var(--t-body)',
                        background: 'rgba(255,255,255,0.06)',
                        color: '#fff',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--primary)')
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          'rgba(211,175,101,0.25)')
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      marginTop: '4px',
                      padding: '14px 28px',
                      borderRadius: '8px',
                      border: '1px solid rgba(211,175,101,0.4)',
                      background: 'rgba(211,175,101,0.12)',
                      color: 'var(--primary)',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--green)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(211,175,101,0.12)';
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                  >
                    {sending ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              ) : (
                <div
                  style={{
                    padding: '28px',
                    background: 'rgba(211,175,101,0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(211,175,101,0.25)',
                  }}
                >
                  <p
                    style={{
                      fontSize: 'var(--t-body)',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      marginBottom: '6px',
                    }}
                  >
                    ✓ Thank you — your message is on its way.
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--t-meta)',
                      color: 'rgba(255,255,255,0.6)',
                      margin: 0,
                    }}
                  >
                    Jana will respond within one working day.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
