# 3D Portfolio — React + Vite + Tailwind + Framer Motion + R3F

A dark-mode, glassmorphism portfolio site with a mouse-tilt 3D hero object,
scroll-reveal animations, and hover-tilt project/skill cards.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # production build -> dist/
```

## Project structure

```
src/
  components/
    Navbar.jsx        sticky glass navbar + mobile slide-in menu
    Hero.jsx           typing effect, CTAs, 3D canvas / photo fallback
    HeroCanvas.jsx      React Three Fiber floating distort-material shape
    About.jsx           bio, stats, highlights
    Skills.jsx           4 categorized skill-card groups with progress bars
    Projects.jsx         glass project card grid
    Resume.jsx            timeline of work/education/certifications
    Contact.jsx            info cards, socials, floating-label form
    Footer.jsx              nav links + back-to-top
    ui/
      GlassPanel.jsx        generic glass container
      TiltCard.jsx           mouse-driven 3D tilt wrapper (CSS only)
      SectionHeading.jsx      shared kicker/title/description block
  hooks/
    useTilt.js            the tilt-on-hover logic used across cards
  data/
    portfolioData.js       ALL editable content lives here
```

## Making it yours

Everything you'd want to change — your name, roles, bio, stats, skills,
projects, work history, contact info, and social links — lives in a single
file: **`src/data/portfolioData.js`**. No component code needs touching for
a content update.

- **Photo**: replace `profile.photo` with a real image URL or a local file
  in `/public` (e.g. `/me.jpg`).
- **Resume/CV**: drop your PDF in `/public/resume.pdf` — the "Download CV"
  button already points at `/resume.pdf`.
- **Project screenshots**: swap the `image` field on each project in
  `portfolioData.js` for real screenshots or mockups.
- **Contact form**: `Contact.jsx`'s `handleSubmit` currently just flips a
  "sent" state. Wire it to Formspree, an API route, EmailJS, or your
  backend of choice.
- **Colors**: the palette (Deep Charcoal, Matte Black, Electric Blue,
  Emerald) is defined in `tailwind.config.js` under `theme.extend.colors`.
- **3D hero shape**: `HeroCanvas.jsx` renders a distort-material torus knot.
  Swap the geometry (`<torusKnotGeometry>`) for any Three.js primitive, or
  replace the whole component with a GLTF model via `@react-three/drei`'s
  `useGLTF`. If WebGL isn't available, Hero.jsx automatically falls back to
  a glowing profile-photo frame.

## Notes

- Reduced-motion preference is respected globally (see `index.css`).
- The mobile menu, typing effect, tilt cards, and scroll-reveal animations
  have no external state — everything is local component state.
- Tailwind's JIT only includes classes it finds in `src/**/*.jsx`, so keep
  new class names as literal strings (already the case throughout).
