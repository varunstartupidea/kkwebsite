# Cursor Instruction: Generate Personal Realtor Website

## Context

You are building a **personal brand website for a real estate consultant/realtor**.

The goal of the website is **NOT to build a property listing platform**, but to create a **professional profile website** that showcases:

* The consultant’s profile
* Professional experience
* Past projects
* Media presence (YouTube + Instagram)
* Contact information
* Social credibility
* Lead/contact opportunities

This website should feel **professional, minimal, and premium**, focusing on **trust, expertise, and easy contact**.

The website will initially be hosted on **GitHub Pages**, therefore the output must be a **static website**.

---

# Input Files Provided to You

You will receive the following files in the repository:

### 1. `linkedin_profile.txt`

Contains:

* professional summary
* work experience
* achievements
* projects
* skills
* certifications

Use this file to extract:

* bio
* expertise
* career highlights
* consulting focus areas
* credibility content

### 2. `/images/`

Contains professional images such as:

* profile photos
* project images
* working photos

Use these images appropriately across the website.

### 3. `past_projects.txt` (optional)

Contains descriptions of real estate projects the consultant worked on.

### 4. `youtube_links.txt`

Contains YouTube video links to showcase on the website.

### 5. `instagram_links.txt`

Contains Instagram profile or reels.

---

# Your Responsibilities

You must automatically:

1. Analyze the LinkedIn profile and generate **clean website content**
2. Decide **how many pages are needed**
3. Structure the website layout
4. Generate **SEO-friendly text**
5. Embed YouTube videos
6. Provide Instagram links or embeds
7. Organize images properly
8. Create a clean UI structure

---

# Website Design Principles

The design must be:

* minimal
* modern
* professional
* consultant-focused
* fast loading
* mobile responsive

Avoid:

* overly complex layouts
* heavy animations
* property portal features
* cluttered UI

The website should feel like a **personal consulting brand website**.

---

# Typography

Use:

Headings:
Playfair Display

Body text:
Inter

Font rules:

* clear hierarchy
* readable line spacing
* strong section titles
* minimal font weights

---

# Color Theme

Use a professional palette:

Primary Background:
White or Off White

Text:
Dark Charcoal

Accent Color:
Navy Blue

Buttons:
Solid Navy

Links:
Navy or slightly darker blue

Avoid bright or neon colors.

---

# Technology Stack (Mandatory)

The website must be built with:

Frontend:

* React
* TypeScript
* Vite
* Tailwind CSS

Optional UI libraries:

* React Icons
* Framer Motion (light animations only)

Deployment target:
GitHub Pages (static site)

Therefore the project must support:

```
npm run build
```

and produce static output in `/dist`.

---

# Website Structure

You must decide the number of pages automatically based on the content provided.

However typical structure should include:

Home
About
Experience / Projects
Media (Videos)
Testimonials (if possible)
Contact

You may combine some sections if content is limited.

---

# Homepage Structure

Create a modern homepage with the following sections:

## Hero Section

Display:

* profile photo
* consultant name
* professional title
* tagline extracted from LinkedIn summary
* CTA buttons:

  * Contact
  * Watch Videos

---

## About Section

Use LinkedIn data to generate:

* short professional bio
* years of experience
* specialization areas
* service locations

---

## Experience Highlights

Extract from LinkedIn:

* major roles
* consulting areas
* achievements

Display them as clean cards or timeline.

---

## Past Projects Section

If project information exists:

Display each project with:

* project title
* location
* role
* short description
* project image

---

## Media Section (Important)

Create a **Videos section** that embeds:

* YouTube videos from `youtube_links.txt`

Display videos in a responsive grid.

Each card should include:

* video thumbnail
* title
* embedded player or clickable video card

---

## Social Media Section

Display icons with links to:

* YouTube
* Instagram
* LinkedIn

If Instagram reels are provided, embed them or show links.

---

## Testimonials Section

If testimonials can be inferred from LinkedIn recommendations or provided files, create testimonial cards.

If none exist, this section may be skipped.

---

## Contact Section

Provide multiple contact options:

* phone
* email
* WhatsApp link if available
* LinkedIn message

Optional simple contact form (static form service).

---

# Navbar Requirements

Create a sticky top navigation with links to sections:

Home
About
Experience
Projects
Videos
Contact

Smooth scroll between sections.

---

# Footer Requirements

Footer should contain:

* consultant name
* social media links
* copyright
* quick navigation

---

# Responsiveness

The website must be:

* fully responsive
* optimized for mobile
* optimized for tablets
* readable on small screens

---

# Performance

Ensure:

* optimized images
* lazy loaded videos
* minimal JS bundle
* fast load time

---

# SEO Requirements

Automatically generate:

* meta title
* meta description
* open graph tags
* page title
* structured headings

Use keywords derived from LinkedIn content such as:

* real estate consultant
* property advisor
* investment advisor

---

# Project Folder Structure

Create this structure:

```
src
  components
    Navbar
    Hero
    About
    Experience
    Projects
    Videos
    Testimonials
    Contact
    Footer

  pages
    Home.tsx

  assets
    images

  styles
    globals.css

App.tsx
main.tsx
```

---

# Video Implementation

For YouTube videos:

Use iframe embeds.

Example:

```
<iframe
 src="https://www.youtube.com/embed/VIDEO_ID"
 allowFullScreen
></iframe>
```

Make videos responsive.

---

# Image Usage

Use images from `/images` folder.

Suggested placements:

* hero profile image
* about section image
* project cards
* background visuals

Optimize them for web.

---

# Final Deliverables

You must generate:

1. full React project
2. clean component structure
3. responsive layout
4. content derived from LinkedIn
5. embedded videos
6. social links
7. deployable static site

The project must run with:

```
npm install
npm run dev
npm run build
```

---

# Important Instruction

You must **automatically generate meaningful content from the LinkedIn profile** instead of leaving placeholders.

Avoid generic filler text.

Write content that sounds professional and authentic.

---

# End of Instructions
