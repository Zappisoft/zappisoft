'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import RevealCard from '../components/ui/RevealCard';
import styles from './CTA.module.css';

const CONTACT_EMAIL = 'contact@zappisoft.com';
const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm({ name, email, message }) {
  if (!name || name.trim().length < 2) return 'Please enter your name.';
  if (!email || !EMAIL_RE.test(email)) return 'Please enter a valid email address.';
  if (!message || message.trim().length < 10) return 'Please enter a message (at least 10 characters).';
  return null;
}

export default function CTA() {
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'
  const [validationError, setValidationError] = useState('');
  const neonRef = useRef(null);

  useEffect(() => {
    const neonEl = neonRef.current;
    if (!neonEl) return;

    const handleEnd = () => {
      neonEl.classList.remove(styles.powerOn);
      neonEl.classList.add(styles.alive);
      neonEl.removeEventListener('animationend', handleEnd);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            neonEl.classList.add(styles.powerOn);
            neonEl.addEventListener('animationend', handleEnd);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(neonEl.closest('section') || neonEl);

    return () => {
      observer.disconnect();
      neonEl.removeEventListener('animationend', handleEnd);
    };
  }, []);

  const handleNeonClick = () => {
    const neonEl = neonRef.current;
    if (!neonEl || !neonEl.classList.contains(styles.alive)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    neonEl.classList.remove(styles.alive);
    neonEl.classList.add(styles.clickFlicker);

    const onEnd = () => {
      neonEl.classList.remove(styles.clickFlicker);
      neonEl.classList.add(styles.alive);
      neonEl.removeEventListener('animationend', onEnd);
    };
    neonEl.addEventListener('animationend', onEnd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_URL) return;

    const form = e.target;
    const formData = new FormData(form);

    const error = validateForm({
      name: formData.get('name'),
      email: formData.get('_replyto'),
      message: formData.get('message'),
    });

    if (error) {
      setValidationError(error);
      return;
    }

    setValidationError('');
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" background="tier3" className={styles.contactSection}>
      <Container>
        <div className={styles.content}>
          <picture className={styles.neonSignPicture} onClick={handleNeonClick}>
            <source media="(min-width: 769px)" srcSet="/neon-sign-desktop.webp" type="image/webp" />
            <source media="(min-width: 769px)" srcSet="/neon-sign-desktop.png" type="image/png" />
            <source srcSet="/neon-sign-mobile.webp" type="image/webp" />
            <img
              ref={neonRef}
              src="/neon-sign-mobile.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={styles.neonSign}
            />
          </picture>
          <h2 className={styles.headline}>Let&apos;s build something that performs.</h2>
          <p className={styles.description}>
            Share a few details about your project and we&apos;ll follow up within 24 hours.
          </p>

          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
            {CONTACT_EMAIL}
          </a>

          <div aria-live="polite">
          {status === 'success' ? (
            <div className={styles.successState}>
              <svg
                className={styles.checkmark}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path
                  pathLength="1"
                  d="M5 12l5 5L20 7"
                  className={styles.checkPath}
                />
              </svg>
              <p className={styles.feedbackSuccess}>
                Thanks for reaching out. We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <RevealCard>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              action={FORMSPREE_URL || '#'}
              method="POST"
              noValidate
            >
              <input
                type="hidden"
                name="_subject"
                value="New message from Zappisoft website"
              />
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  className={styles.input}
                  placeholder="Your name"
                  disabled={status === 'sending'}
                  aria-invalid={!!validationError}
                  aria-describedby={validationError ? 'form-error' : undefined}
                  onChange={() => validationError && setValidationError('')}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="_replyto"
                  required
                  className={styles.input}
                  placeholder="you@company.com"
                  disabled={status === 'sending'}
                  aria-invalid={!!validationError}
                  aria-describedby={validationError ? 'form-error' : undefined}
                  onChange={() => validationError && setValidationError('')}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  className={styles.textarea}
                  placeholder="Tell us about your project..."
                  disabled={status === 'sending'}
                  aria-invalid={!!validationError}
                  aria-describedby={validationError ? 'form-error' : undefined}
                  onChange={() => validationError && setValidationError('')}
                />
              </div>

              {(validationError || status === 'error') && (
                <p id="form-error" role="alert" className={styles.feedbackError}>
                  {validationError || 'Something went wrong. Please try emailing us directly.'}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className={styles.submit}
                disabled={status === 'sending' || !FORMSPREE_URL}
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send message
                    <ArrowRight size={16} />
                  </>
                )}
              </Button>
            </form>
            </RevealCard>
          )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
