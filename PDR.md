PRODUCT
DEVELOPMENT REQUIREMENTS

Personal Portfolio Website
Karunakar Taggella — KK Talks | Real Estate Investment Advisor
Version 1.0  •  March 2026
Document Type	Product Development Requirements (PDR)
Project Name	KK Talks Personal Portfolio Website
Owner	Karunakar Taggella
Framework	Next.js 14 (App Router) + TypeScript
Deployment Target	GitHub Pages (github.io)
Version	1.0 — Initial Release
Date	March 2026
 
1. PROJECT OVERVIEW

This document defines the full product, design, and technical requirements for building Karunakar Taggella's personal portfolio website — a clean, professional single-page application (SPA) that showcases his 16+ year career in sales, business development, and real estate advisory through KK Talks.

The site targets potential clients, investors, and collaborators looking to learn more about Karunakar's background, past achievements, and how to get in touch. It must be deployable as a static site on GitHub Pages with zero backend dependencies.

Goals
•	Establish a credible, professional online presence for KK Talks brand
•	Highlight 16+ years of cross-industry sales & advisory experience
•	Showcase past achievements across Goodyear, Tata Green, Dubai, and Real Estate
•	Provide a clean contact pathway for investors and property buyers
•	Deploy as a static site at username.github.io with zero server costs

Out of Scope
•	No CMS or admin panel in v1
•	No user authentication or login
•	No e-commerce or payment processing
•	No backend API or database

2. TECHNOLOGY STACK

Derived from the .cursor/rules/20-frontend-nextjs.mdc file provided:

Category	Technology	Reason
Framework	Next.js 14 (App Router)	Static export support for GitHub Pages
Language	TypeScript	Per cursor.md rules — all frontend logic
Styling	CSS Modules + Tailwind CSS	Component-scoped, no class collisions
Markup	Semantic HTML5	Accessibility & SEO compliance
Animations	Framer Motion	Hero section & section transitions
Deployment	GitHub Actions + gh-pages	Automated CI/CD to github.io
Linting	ESLint + Prettier	Cursor.md code quality rules
Version Ctrl	Git / GitHub	Source of truth + deployment trigger

3. SITE ARCHITECTURE & FILE STRUCTURE

The project follows the directory structure mandated by cursor.md with Next.js static export configuration:

portfolio/
├── .cursor/rules/20-frontend-nextjs.mdc
├── .github/workflows/deploy.yml          ← GitHub Actions CI/CD
├── public/
│   ├── images/
│   │   ├── cable-bridge-1.jpg            ← Hero background
│   │   └── profile.jpg                   ← About section portrait
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx                    ← Root layout, metadata, fonts
│   │   ├── page.tsx                      ← Home page (renders all sections)
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx                    ← Sticky nav with About/Projects/Contact
│   │   ├── HeroSection.tsx               ← Full-viewport cable bridge background
│   │   ├── AboutSection.tsx              ← Bio from LinkedIn profile
│   │   ├── ProjectsSection.tsx           ← Cards for past experience highlights
│   │   ├── ContactSection.tsx            ← Contact form + social links
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── about.ts                      ← Bio content (from linkedin_profile.txt)
│   │   └── projects.ts                   ← Project cards (from PAST_EXPERIENCE.txt)
│   ├── hooks/
│   │   └── useScrollSpy.ts               ← Active nav highlight on scroll
│   ├── lib/
│   │   └── utils.ts                      ← Shared utility functions
│   └── types/
│       └── index.ts                      ← Shared TypeScript interfaces
├── next.config.js                        ← output: 'export', basePath config
├── tsconfig.json
├── tailwind.config.ts
└── package.json

4. PAGE SECTIONS & UI REQUIREMENTS

4.1  Navigation Bar (Navbar.tsx)
•	Sticky top bar, transparent on hero / solid dark on scroll
•	Logo: 'KK Talks' in gold accent (#C8A84B)
•	Nav links: About  •  Past Projects  •  Contact
•	Active link highlighted via useScrollSpy hook
•	Mobile: hamburger menu collapsing to full-width drawer
•	Smooth scroll to sections on click

4.2  Hero Section (HeroSection.tsx)
•	Full viewport height (100vh)
•	Background: cable-bridge-1.jpg — full cover, darkened overlay (rgba 0,0,0,0.55)
•	Centered content:
◦	Name: 'Karunakar Taggella' — large white bold heading
◦	Tagline: 'Founder – KK Talks | Real Estate Investment Advisor'
◦	Sub-line: 'Hyderabad, Telangana • 16+ Years Cross-Industry Experience'
◦	CTA buttons: 'View My Work' → #projects  |  'Get in Touch' → #contact
•	Scroll-down chevron animation at bottom center

4.3  About Section (AboutSection.tsx)
•	Section ID: #about
•	Two-column layout: left = portrait image, right = bio text
•	Bio drawn from linkedin_profile.txt summary — distilled to 3 key paragraphs:
◦	Opening: 16+ year career across Automobile, FMCG, Mattress & Real Estate
◦	Focus: Founded KK Talks — advisory-first platform for safe property investment
◦	Approach: Trust, transparency, long-term value over short-term speculation
•	Skills chips row: Sales Leadership | Channel Management | Real Estate Advisory | Business Development | Market Expansion | Strategic Planning
•	Languages spoken: Telugu • Kannada • Tamil • Hindi • English • Malayalam • Marathi

4.4  Past Projects / Experience Section (ProjectsSection.tsx)
•	Section ID: #projects
•	Heading: 'Key Achievements & Past Roles'
•	Card grid (2 columns desktop, 1 column mobile) — one card per major employer:
KK Talks — Real Estate  |  2021–Present
Founded advisory platform helping investors navigate Hyderabad growth corridors. Built digital presence across YouTube, Instagram & WhatsApp.
Goodyear Tire & Rubber  |  2009–2013 / 2015–2018
All-India #1 Sales Person H2-2009. Warrior of the Month Jan'10. 125% AOP 2016. Launched 5 exclusive branded outlets. Telangana Police Dept order win.
Tata Green Batteries  |  2018–2019
Grew 2-wheeler market 15% YoY. Expanded distributors 15→25. Highest Growth Champion 2017 South. Fastest Dasara Promo Challenge winner.
Dubai Furniture Mfg (Serta & King Koil)  |  2006–2008
Managed top 2 US mattress brands in Dubai. Key accounts: Atlantis Palm, Royal Mirage, Raffles, Shangri-La, Accor Ibis.
General Mills  |  1999–2003
Grew Karnataka institutional base 0→60 accounts. Secured Air Force Yelanka order (first ever). Supplied Pillsbury Atta to Infosys & Wipro.
•	Each card: company logo placeholder, role title, period, 2-3 achievement bullets
•	'Highlight' badge on Goodyear and Tata Green cards (top awards)

4.5  Contact Section (ContactSection.tsx)
•	Section ID: #contact
•	Left column: contact form — Name, Email, Message fields + Send button
•	Right column: direct contact info
◦	LinkedIn: linkedin.com/in/tdkarunakar-72765111
◦	Location: Hyderabad, Telangana, India
◦	WhatsApp CTA button (KK Talks primary channel)
•	Form submits to Formspree (static-friendly, no backend needed)
•	Success / error states handled explicitly per cursor.md rules

5. DESIGN SYSTEM & VISUAL IDENTITY

Token	Value	Usage
--color-navy	#1E3A5F	Primary brand, headings, navbar bg
--color-blue	#2E6DA4	Links, subheadings, card accents
--color-gold	#C8A84B	Logo, CTA buttons, section dividers
--color-bg	#F2F5F9	Page background
--color-dark	#1A1A2E	Hero overlay, footer bg
--font-heading	Inter / Poppins	All headings (Google Fonts)
--font-body	Inter	Body text, nav links

6. GITHUB PAGES DEPLOYMENT

6.1  next.config.js Configuration
// next.config.js
const nextConfig = {
  output: 'export',           // Static HTML export
  basePath: '/portfolio',     // Replace with your repo name
  assetPrefix: '/portfolio/', // Required for GitHub Pages
  images: {
    unoptimized: true,        // No Next.js image server
  },
};
module.exports = nextConfig;

6.2  GitHub Actions Workflow (.github/workflows/deploy.yml)
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out

6.3  Deployment Steps
•	Create GitHub repo named 'portfolio' (or preferred name)
•	Push local Next.js project to main branch
•	Go to Settings → Pages → Source: 'gh-pages' branch
•	GitHub Actions auto-runs on every push to main
•	Live URL: https://<your-username>.github.io/portfolio

7. CURSOR.MD RULE COMPLIANCE CHECKLIST

Every component and file must satisfy the following rules from 20-frontend-nextjs.mdc:

Rule	Applies To	Status
TypeScript for all frontend logic	All .tsx / .ts files	✅ Required
Small, reusable, focused components	components/	✅ Required
Presentation separate from data-fetching	data/ vs components/	✅ Required
Loading, error, empty states handled	ContactSection form	✅ Required
No hardcoded API URLs in components	lib/utils.ts	✅ Required
No duplicate UI patterns	Shared card component	✅ Required
Accessible semantic HTML markup	All sections	✅ Required
API clients centralized (Formspree)	lib/contact.ts	✅ Required

8. CONTENT SOURCE MAPPING

All website content is pre-populated from the files provided:

•	linkedin_profile.txt → About section bio, skills, languages, LinkedIn URL
•	PAST_EXPERIENCE.txt → Projects section cards with achievement highlights
•	cable-bridge-1.jpg → Hero section full-bleed background image
•	profile.jpg (to be added) → About section portrait photo
•	KK Talks brand identity → Navbar logo, color system, footer tagline

9. DEVELOPMENT MILESTONES

#	Task	Components / Files	Est. Time
1	Project scaffold & config	next.config.js, tsconfig.json, tailwind.config.ts	30 min
2	Data files from context	data/about.ts, data/projects.ts	20 min
3	Navbar + scroll spy	Navbar.tsx, useScrollSpy.ts	45 min
4	Hero section	HeroSection.tsx + CSS	45 min
5	About section	AboutSection.tsx	30 min
6	Projects section	ProjectsSection.tsx	45 min
7	Contact section	ContactSection.tsx, lib/contact.ts	45 min
8	Footer	Footer.tsx	15 min
9	Responsive + a11y audit	All components	60 min
10	GitHub Actions + deploy	.github/workflows/deploy.yml	30 min

Total estimated build time: ~7 hours for a focused solo developer session.

10. OPEN ITEMS & DECISIONS NEEDED

•	GitHub username — needed to set basePath and confirm final URL
•	Profile photo — provide profile.jpg for About section portrait
•	Cable bridge image — confirm cable-bridge-1.jpg filename and path in /public/images/
•	Contact preference — WhatsApp number or Formspree email endpoint for contact form
•	LinkedIn URL — confirm: linkedin.com/in/tdkarunakar-72765111
•	Repo name — 'portfolio', 'kk-talks', or preferred slug
•	Custom domain — optional: if you own a domain, can be pointed at GitHub Pages


KK Talks Personal Portfolio — PDR v1.0  |  Prepared March 2026
