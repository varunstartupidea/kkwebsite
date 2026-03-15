# KK Talks — Personal Portfolio Website

Personal portfolio for **Karunakar Taggella** (KK Talks | Real Estate Investment Advisor). Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Static export for GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production (static export)

```bash
npm run build
```

Output is in the `out/` directory.

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `KK_website` or `portfolio`).
2. If the repo name is not `KK_website`, update `basePath` and `assetPrefix` in `next.config.js` to match (e.g. `'/portfolio'`).
3. Push the project to the `main` branch.
4. In the repo: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions** (or **Deploy from a branch** and select branch **gh-pages**).
5. The workflow in `.github/workflows/deploy.yml` runs on push to `main` and publishes the `out/` folder to the `gh-pages` branch (when using the peaceiris action).
6. Live site: `https://<your-username>.github.io/KK_website/` (replace `KK_website` with your repo name if different).

## Content and assets

- **Hero background:** Add `cable-bridge-1.jpg` under `public/images/`.
- **About portrait:** Add `profile.jpg` under `public/images/`.
- **Copy:** Edit `src/data/about.ts` and `src/data/projects.ts` for bio and past roles.
- **Contact form:** Create a form at [Formspree](https://formspree.io), then set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` to your form ID (see `src/lib/contact.ts`). For static deploy, you can rely on the default placeholder or set the env at build time in CI.
- **WhatsApp:** Update the WhatsApp link in `src/components/ContactSection.tsx` (replace `919876543210` with your number).

## Tech stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- Static export (`output: 'export'`) for GitHub Pages
- Formspree for contact form (no backend)

## Project structure

- `src/app/` — layout, page, global CSS
- `src/components/` — Navbar, Hero, About, Projects, Contact, Footer
- `src/data/` — about and projects content
- `src/hooks/` — useScrollSpy for nav highlight
- `src/lib/` — utils, Formspree contact client
- `src/types/` — shared TypeScript types
<<<<<<< HEAD
#testing
=======

### Checking if everything is working or not
>>>>>>> feature/development
