# gaya-podsite Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-04-10

## Active Technologies

- **Framework**: Next.js 14+ (App Router, `output: 'export'` static export)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v3
- **Runtime**: Node.js 20 LTS
- **Hosting**: Netlify (auto-deploy from `main`)
- **Data**: Mocked, embedded in `src/data/` — no database, no external API

## Project Structure

```text
src/
├── app/
│   ├── page.tsx              # Home / landing page
│   ├── episodes/
│   │   └── page.tsx          # All episodes listing
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── layout.tsx            # Root layout (Header + Footer)
│   └── not-found.tsx         # Custom 404
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── EpisodeCard.tsx
│   ├── FeaturedEpisode.tsx
│   └── AudioPlayer.tsx       # Client component ('use client')
├── data/
│   ├── episodes.ts           # 20 mocked episodes
│   └── podcast.ts            # Podcast metadata
└── types/
    └── index.ts              # Episode and Podcast interfaces
```

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Static export to out/
npx serve out      # Preview static build locally
```

## Code Style

- TypeScript strict mode enabled
- React Server Components by default; use `'use client'` only for interactive elements
- Tailwind utility classes; no inline `style` props
- Mobile-first responsive design (Tailwind `sm:` / `md:` / `lg:` prefixes)

## Constitution Principles (summary)

1. **Static-First** — pre-rendered HTML, no server at runtime
2. **Simplicity** — minimal dependencies, YAGNI
3. **Performance** — LCP ≤ 2.5 s, CLS ≤ 0.1
4. **Accessibility** — WCAG 2.1 AA, keyboard navigation, ARIA labels
5. **Deployability** — CI/CD only, no manual uploads

Full constitution: `.specify/memory/constitution.md`

## Recent Changes

- 001-podcast-website: Initial project — 3-page static podcast site with 20 mocked episodes

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
