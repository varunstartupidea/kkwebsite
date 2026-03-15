'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '@/lib/contact';
import { aboutData } from '@/data/about';
import type { ContactStatus } from '@/types';

export default function ContactSection() {
  const [status, setStatus] = useState<ContactStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get('name') as string)?.trim() || '';
    const email = (fd.get('email') as string)?.trim() || '';
    const message = (fd.get('message') as string)?.trim() || '';

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setStatus('sending');
    const result = await submitContactForm({ name, email, message });
    if (result.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
      setError(result.error ?? 'Something went wrong.');
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-[var(--color-navy)] py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          className="text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-white/90">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                placeholder="Your name"
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-white/90">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                placeholder="your@email.com"
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-white/90">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                placeholder="Your message"
                disabled={status === 'sending'}
              />
            </div>
            {error && <p className="text-sm text-red-300">{error}</p>}
            {status === 'success' && (
              <p className="text-sm text-green-300">Thank you. Your message has been sent.</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-md bg-[var(--color-gold)] px-6 py-3 font-semibold text-[var(--color-dark)] transition hover:bg-[var(--color-gold)]/90 disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
          </motion.form>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-gold)]">LinkedIn</h3>
              <a
                href={aboutData.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline hover:text-white"
              >
                linkedin.com/in/tdkarunakar-72765111
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-gold)]">Location</h3>
              <p className="text-white/90">{aboutData.location}</p>
            </div>
            {aboutData.phone && (
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-gold)]">Phone</h3>
                <a
                  href={`tel:${aboutData.phone.replace(/\s/g, '')}`}
                  className="text-white/90 underline hover:text-white"
                >
                  {aboutData.phone}
                </a>
              </div>
            )}
            <div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green-600 px-5 py-3 font-semibold text-white no-underline transition hover:bg-green-700"
              >
                <span>WhatsApp</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <p className="mt-2 text-xs text-white/70">
                Replace the number in the link with your WhatsApp number for the CTA.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
