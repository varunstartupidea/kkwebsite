'use client';

import { motion } from 'framer-motion';
import { mediaData } from '@/data/media';
import type { MediaItem } from '@/types';

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const v = u.searchParams.get('v') || u.pathname.split('/').pop();
    return v ? `https://www.youtube.com/embed/${v}` : null;
  } catch {
    return null;
  }
}

function MediaCard({ item }: { item: MediaItem }) {
  if (item.type === 'youtube') {
    const embedUrl = getYouTubeEmbedUrl(item.url);
    return (
      <article className="overflow-hidden rounded-lg border border-[var(--color-blue)]/20 bg-[var(--color-bg)] shadow-sm">
        <div className="aspect-video w-full bg-[var(--color-dark)]/10">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center justify-center text-[var(--color-blue)] underline"
            >
              Watch on YouTube
            </a>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[var(--color-navy)]">{item.title}</h3>
          {item.description && (
            <p className="mt-1 text-sm text-[var(--color-dark)]/80">{item.description}</p>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-lg border border-[var(--color-blue)]/20 bg-[var(--color-bg)] shadow-sm">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 transition hover:bg-[var(--color-blue)]/5"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </span>
          <div>
            <h3 className="font-bold text-[var(--color-navy)]">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-[var(--color-dark)]/80">{item.description}</p>
            )}
            <span className="mt-1 inline-block text-xs text-[var(--color-blue)]">View on Instagram →</span>
          </div>
        </div>
      </a>
    </article>
  );
}

export default function MediaSection() {
  const youtubeItems = mediaData.filter((m) => m.type === 'youtube');
  const instagramItems = mediaData.filter((m) => m.type === 'instagram');

  return (
    <section id="media" className="scroll-mt-20 bg-[var(--color-bg)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          className="text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Media
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[var(--color-dark)]/80">
          YouTube videos and Instagram reels on real estate and investment insights.
        </p>

        {youtubeItems.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold text-[var(--color-navy)]">YouTube</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {youtubeItems.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {instagramItems.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold text-[var(--color-navy)]">Instagram Reels</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {instagramItems.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
