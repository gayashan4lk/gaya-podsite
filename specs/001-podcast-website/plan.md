# Implementation Plan: Podcast Website

**Branch**: `001-podcast-website` | **Date**: 2026-04-10 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-podcast-website/spec.md`

## Summary

A three-page static podcast website (Home, Episodes, About) built with Next.js static export
and Tailwind CSS. All content is pre-rendered at build time from 20 mocked episodes and
static podcast metadata embedded in TypeScript source files. No database, no external feeds,
no runtime server. Deployed to Netlify via CI/CD on push to `main`.

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 20 LTS
**Primary Dependencies**: Next.js 14+ (App Router, static export), Tailwind CSS v3, React 18
**Storage**: N/A — mocked data embedded in `src/data/` TypeScript modules
**Testing**: Manual smoke tests per `quickstart.md` (automated tests not in scope)
**Target Platform**: Web — static HTML/CSS/JS, hosted on Netlify CDN
**Project Type**: Static website
**Performance Goals**: LCP ≤ 2.5 s, CLS ≤ 0.1 (per Constitution Principle III)
**Constraints**: No runtime server, no database, no real audio files, no external API calls
**Scale/Scope**: 3 pages, 20 mocked episodes, single developer

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle               | Status | Notes                                                      |
|-------------------------|--------|------------------------------------------------------------|
| I. Static-First         | ✅ PASS | `output: 'export'` — all pages pre-rendered at build time |
| II. Simplicity          | ✅ PASS | No DB, no external API, data embedded in TS modules       |
| III. Performance        | ✅ PASS | Static pages + `next/image` lazy loading; LCP target met  |
| IV. Accessibility       | ✅ PASS | WCAG 2.1 AA enforced in implementation; ARIA on player    |
| V. Deployability        | ✅ PASS | Netlify CI/CD on push to `main`; no manual uploads        |

**Post-design re-check**: All principles remain satisfied. No complexity justification required.

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-website/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/
│   └── page-routes.md   # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks — NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx              # Root layout: <html>, Header, Footer
│   ├── page.tsx                # Home: hero + featured episode
│   ├── not-found.tsx           # Custom 404 page
│   ├── episodes/
│   │   └── page.tsx            # Episodes: all 20 cards, newest-first
│   └── about/
│       └── page.tsx            # About: podcast info + host bio
├── components/
│   ├── Header.tsx              # Site navigation (RSC)
│   ├── Footer.tsx              # Copyright footer (RSC)
│   ├── EpisodeCard.tsx         # Episode card for list (RSC)
│   ├── FeaturedEpisode.tsx     # Featured episode spotlight (RSC)
│   └── AudioPlayer.tsx         # Native <audio> wrapper ('use client')
├── data/
│   ├── episodes.ts             # 20 mocked Episode objects, newest-first
│   └── podcast.ts              # Podcast metadata constant
└── types/
    └── index.ts                # Episode and Podcast TypeScript interfaces

public/                         # Static assets (favicon, OG image if any)
netlify.toml                    # Build: `npm run build`, publish: `out/`
next.config.ts                  # output: 'export', images.unoptimized: true
tailwind.config.ts
postcss.config.js
tsconfig.json
package.json
```

**Structure Decision**: Single Next.js project at repository root. App Router with RSC for
all pages; `AudioPlayer` is the only client component. Data in `src/data/` as typed TS modules.

## Complexity Tracking

> No constitution violations — complexity tracking not required.
