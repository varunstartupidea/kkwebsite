'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { getBasePath } from '@/lib/utils';
import { aboutData } from '@/data/about';

export default function HeroSection() {
  const basePath = getBasePath();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--color-dark)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/kkwebsite/images/cable-bridge-1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)] [color:white]">
        <motion.h1
          className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {aboutData.name}
        </motion.h1>
        <motion.p
          className="mt-3 text-lg text-white md:text-xl"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {aboutData.title}
        </motion.p>
        <motion.p
          className="mt-2 text-sm text-white/90 md:text-base"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {aboutData.location} • 16+ Years Cross-Industry Experience
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a
            href="#projects"
            className="rounded-md bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-dark)] no-underline transition hover:bg-[var(--color-gold)]/90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-md border-2 border-white/80 bg-transparent px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/90 hover:text-white"
        aria-label="Scroll to About"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <svg className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  );
}
