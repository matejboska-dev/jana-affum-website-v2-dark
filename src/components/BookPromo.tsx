import React from 'react';

export default function BookPromo() {
  return (
    <div id="book" className="section-light-bg" style={{ padding: '96px 0' }}>
      <div className="base-container w-container">
        <div className="private-advisory-block">
          <div className="why-content">
            <span className="eyebrow">The book</span>
            <h2 className="flex-title" style={{ textAlign: 'left' }}>
              <span className="h2-span">With every book you buy,</span> hope finds a child in
              Ghana.
            </h2>
            <p className="why-statement">
              Ready to bring more clarity and confidence to your recruitment journey? Order your
              copy by emailing{' '}
              <a href="mailto:janaaffum@gmail.com?subject=Book%20Order">janaaffum@gmail.com</a>{' '}
              with the book title in the subject line.
            </p>
            <p className="why-body">
              You&apos;ll receive the digital version and can start reading right away. Your next
              step is just one message away.
            </p>
            <div className="link-wrap">
              <a href="mailto:janaaffum@gmail.com?subject=Book%20Order" className="cta-pill-button">
                <span>Order the book by email</span>
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
          </div>

          <div className="private-advisory-photo-col">
            <div className="private-advisory-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/book.png" alt="Jana Affum's book" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
