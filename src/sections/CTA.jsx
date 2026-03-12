import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import styles from './CTA.module.css';

const CONTACT_EMAIL = 'contact@zappisoft.com';
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : null;

export default function CTA() {
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_URL) return;

    setStatus('sending');
    const form = e.target;
    const formData = new FormData(form);

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
    <Section id="contact" background="elevated">
      <Container>
        <div className={styles.content}>
          <h2 className={styles.headline}>Let&apos;s build something that performs.</h2>
          <p className={styles.description}>
            Share a few details about your project and we&apos;ll follow up within 24 hours.
          </p>

          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
            {CONTACT_EMAIL}
          </a>

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
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              action={FORMSPREE_URL || '#'}
              method="POST"
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
                  className={styles.input}
                  placeholder="Your name"
                  disabled={status === 'sending'}
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
                  rows={4}
                  className={styles.textarea}
                  placeholder="Tell us about your project..."
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'error' && (
                <p className={styles.feedbackError}>
                  Something went wrong. Please try emailing us directly.
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
          )}
        </div>
      </Container>
    </Section>
  );
}
