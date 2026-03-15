'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { getBasePath } from '@/lib/utils';
import { aboutData } from '@/data/about';

export default function AboutSection() {
  const basePath = getBasePath();

  return (
    <section id="about" className="scroll-mt-20 bg-[var(--color-bg)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          className="text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          About me
        </motion.h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            className="relative aspect-[3/4] max-w-md overflow-hidden rounded-lg bg-[var(--color-navy)]/10"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/kkwebsite/images/standing-image.jpg"
              alt={aboutData.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'flex h-full w-full items-center justify-center bg-[var(--color-navy)]/20 text-[var(--color-navy)] text-lg';
                  fallback.textContent = 'KK Talks';
                  parent.appendChild(fallback);
                }
              }}
            />
          </motion.div>
          <div className="space-y-6">
            {aboutData.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-[var(--color-dark)]/90 leading-relaxed"
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {para}
              </motion.p>
            ))}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {aboutData.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[var(--color-blue)]/15 px-3 py-1 text-sm font-medium text-[var(--color-navy)]"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
            <motion.p
              className="text-sm text-[var(--color-dark)]/80"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span className="font-medium">Languages:</span>{' '}
              {aboutData.languages.join(' • ')}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
