'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Experience' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy();

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-[var(--color-dark)]/90 backdrop-blur-sm'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="#"
          className="text-lg font-semibold tracking-tight text-[var(--color-gold)] no-underline hover:text-[var(--color-gold)]/90"
        >
          KK Talks
        </Link>

        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isActive
                      ? 'text-[var(--color-gold)]'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={cn('h-0.5 w-6 bg-white transition', open && 'rotate-45 translate-y-2')} />
          <span className={cn('h-0.5 w-6 bg-white transition', open && 'opacity-0')} />
          <span className={cn('h-0.5 w-6 bg-white transition', open && '-rotate-45 -translate-y-2')} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[var(--color-dark)] px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-white/90 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
