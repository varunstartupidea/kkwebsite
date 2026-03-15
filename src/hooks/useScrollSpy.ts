'use client';

import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'projects', 'media', 'contact'];

export function useScrollSpy(): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (SECTION_IDS.includes(id)) setActiveId(id);
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    elements.forEach((el) => el && observer.observe(el));
    const first = elements[0] as HTMLElement;
    if (first) setActiveId(first.id);

    return () => observer.disconnect();
  }, []);

  return activeId;
}
