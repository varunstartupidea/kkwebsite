import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark)] py-8 text-white/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            © {year} <span className="font-semibold text-[var(--color-gold)]">KK Talks</span> — Karunakar Taggella
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-6">
              <li>
                <Link href="#about" className="text-sm hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm hover:text-white">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#media" className="text-sm hover:text-white">
                  Media
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
