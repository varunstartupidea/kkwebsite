'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import { getBasePath } from '@/lib/utils';
import { cn } from '@/lib/utils';

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? projectsData[activeIndex] : null;
  const basePath = getBasePath();

  return (
    <section id="projects" className="scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          className="text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="mt-12 flex min-h-[300px] flex-col gap-6 md:flex-row md:items-stretch md:gap-6">
          {/* Left: Experience list (always visible); hover or click shows details */}
          <ul className="flex shrink-0 flex-col gap-1 md:w-52">
            {projectsData.map((card, i) => (
              <li key={card.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  className={cn(
                    'w-full rounded-lg border-l-4 px-4 py-3 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2',
                    activeIndex === i
                      ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-[var(--color-navy)]'
                      : 'border-transparent bg-[var(--color-bg)] text-[var(--color-dark)]/80 hover:bg-[var(--color-blue)]/10 hover:text-[var(--color-navy)]'
                  )}
                >
                  {card.company}
                </button>
              </li>
            ))}
          </ul>

          {/* Middle: Details panel (always visible); shows selected role on hover or click */}
          <div className="min-h-[200px] flex-1 min-w-0 rounded-lg border border-[var(--color-blue)]/20 bg-[var(--color-bg)] p-6 shadow-sm">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                <h3 className="text-lg font-bold text-[var(--color-navy)]">{active.company}</h3>
                <p className="text-sm font-medium text-[var(--color-blue)]">{active.role}</p>
                <p className="mt-1 text-xs text-[var(--color-dark)]/70">{active.period}</p>
                <p className="mt-4 text-sm text-[var(--color-dark)]/90">{active.description}</p>
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-[var(--color-dark)]/80">
                  {active.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <p className="flex h-full min-h-[180px] items-center text-sm text-[var(--color-dark)]/50">
                Hover or click a role on the left to see details.
              </p>
            )}
          </div>

          {/* Right: Sitting image */}
          <div className="relative w-full shrink-0 overflow-hidden rounded-lg bg-[var(--color-bg)] md:w-56 md:min-w-[14rem]">
            <div className="relative aspect-[3/4] w-full min-h-[200px] md:min-h-[260px]">
              <Image
                src={`${basePath}/images/sitting.png`}
                alt="Experience"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 14rem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
