# Ayush Yadav — Developer Portfolio

A premium, minimal dark-mode portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-based theme tokens in `src/index.css`)
- Framer Motion (section reveals, hover interactions, nav pill transition)
- React Icons (`react-icons/fi`, `react-icons/si`)
- EmailJS (`@emailjs/browser`) for the contact form

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Content & configuration

- **All copy and stats live in one place:** `src/data/profile.js` — edit this file to update the name, socials, CP ratings, skills, projects, education, and timeline without touching component code.
- **Resume:** replace `public/resume.pdf` with your actual PDF; the download button in the hero links to `/resume.pdf`.
- **Favicon:** `public/favicon.svg` — a simple monogram, swap for your own mark if desired.
- **Open Graph image:** add an `og-image.png` (1200x630) to `public/` — referenced in `index.html`.

## Contact form (EmailJS)

The contact form in `src/components/Contact.jsx` is wired for EmailJS (emailjs.com). To activate it:

1. Create a free EmailJS account, an email service, and a template.
2. In `src/components/Contact.jsx`, replace:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

   with your own values.

Until configured, the form simulates a successful send so the UI remains fully testable.

## Design system

Color, radius, and font tokens are defined once as CSS variables in `src/index.css` under `@theme`:

- `--color-ink` / `--color-charcoal` / `--color-surface*` — near-black backgrounds and card surfaces
- `--color-grey-*` — neutral greys for text and borders
- `--color-moss*` — muted green accent (primary interactive color)
- `--color-gold*` — subtle gold highlight (numbers, ratings, emphasis)
- `--font-sans` — Helvetica Neue with Helvetica/Arial/sans-serif fallbacks

A light theme is included (toggle in the navbar) and overrides the same tokens under `[data-theme="light"]`.

## Structure

```
src/
 |- components/   # Navbar, Hero, About, Skills, CompetitiveProgramming,
 |                # Projects, EducationTimeline, Contact, Footer, and UI atoms
 |- data/         # profile.js - single source of truth for all content
 |- hooks/        # useActiveSection, useScrollProgress, useTheme
 |- utils/        # scrollTo.js - smooth-scroll helper for nav links
```

## Deploying

The build output in `dist/` is a static site - deploy it to Vercel, Netlify, GitHub Pages, or any static host.
