# Quickstart: Podcast Website

**How to run and validate the project locally**
**Date**: 2026-04-10

## Prerequisites

- Node.js 20 LTS or later
- npm 10+ (or pnpm / yarn — project uses npm by default)

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`.

## Manual Smoke Test Checklist

Run through these checks after any significant change, and before merging to `main`.

### Home Page (`/`)

- [ ] Page loads without errors in browser console
- [ ] Podcast name and tagline are visible in the hero section
- [ ] One featured episode card is displayed (title, snippet, date, duration)
- [ ] "All Episodes" / navigation link routes to `/episodes`
- [ ] Page is readable on a 375 px wide viewport (iPhone SE size)

### Episodes Page (`/episodes`)

- [ ] All 20 episode cards are rendered
- [ ] Each card shows: episode number, cover image, title, snippet, date, duration
- [ ] Episodes are ordered newest-first (Episode 20 first, Episode 1 last)
- [ ] Page is scrollable and cards stack cleanly on 375 px viewport

### About Page (`/about`)

- [ ] Podcast name, description, and mission statement are present
- [ ] Host name and bio are displayed
- [ ] Call-to-action link routes back to `/episodes`
- [ ] Page renders correctly on 375 px viewport

### Navigation

- [ ] Header appears on all three pages
- [ ] All three nav links (Home, Episodes, About) function correctly
- [ ] Footer appears on all three pages

### 404 Page

- [ ] Visiting `/nonexistent` renders the custom 404 page
- [ ] 404 page includes a link back to `/`

### Accessibility Quick Check

- [ ] All images have descriptive `alt` text
- [ ] Navigation links are keyboard-focusable (Tab key)
- [ ] No obvious colour-contrast failures (run browser DevTools contrast checker)

### Progressive Enhancement

- [ ] Disable JavaScript in DevTools → Home, Episodes, and About pages still render
  episode/podcast content without JS

## Build & Static Export

```bash
# Build and export static files
npm run build

# The output is in the `out/` directory
# Preview the static build locally
npx serve out
```

Verify the same smoke test checklist passes against the static export at `http://localhost:3000`
(or the port `serve` uses).

## Deploy to Netlify

Netlify auto-deploys on push to `main`. The `netlify.toml` (to be created) should specify:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

After deploy, re-run the smoke test checklist against the live Netlify URL.
