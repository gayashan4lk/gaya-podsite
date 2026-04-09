# Research: Podcast Website

**Phase 0 output for plan.md**
**Date**: 2026-04-10

## Decisions & Rationale

### Rendering Strategy

**Decision**: Next.js 14+ with static export (`output: 'export'`)
**Rationale**: User explicitly specified this. Static export pre-renders all pages to
plain HTML at build time — no Node.js server at runtime. Aligns with Constitution
Principle I (Static-First) and enables deployment to any CDN (Netlify).
**Alternatives considered**: Astro (simpler for static, but user-specified Next.js),
plain HTML (no component model), Gatsby (larger bundle, slower builds).

### Data Layer

**Decision**: Mocked episode data embedded as a TypeScript module (`src/data/episodes.ts`)
**Rationale**: User explicitly ruled out databases and external feeds. Embedding data
in source as a typed TS module gives compile-time safety, zero runtime fetching, and
trivial editing. Constitution Principle II (Simplicity) — no ORM, no DB client.
**Alternatives considered**: JSON files loaded at build time (workable but less type-safe),
MDX files (overkill for structured episode data).

### Styling

**Decision**: Tailwind CSS v3
**Rationale**: Constitution Technology Stack mandates Tailwind; no CSS-in-JS runtime
allowed. Utility-first CSS is well-suited to Next.js and produces small, optimised
stylesheets after build.
**Alternatives considered**: CSS Modules (valid alternative, but Tailwind already mandated).

### Component Architecture

**Decision**: Next.js App Router with React Server Components (RSC) for all data-fetching
pages; client components (`'use client'`) only for interactive elements (audio player controls).
**Rationale**: RSC renders page content server-side at build time (compatible with static
export), reducing client-side JS. Supports Constitution Principle V (Progressive Enhancement)
— core content renders without JS.
**Note on static export + RSC**: `output: 'export'` is fully compatible with RSC in Next.js 14.
Dynamic server features (cookies, headers) are unavailable, but those are not needed here.

### Audio Player

**Decision**: Native `<audio>` HTML element wrapped in a thin React client component for
styling. No third-party audio player library.
**Rationale**: No real audio files exist — placeholder `audioUrl` values only. Full player
libraries (Plyr, react-h5-audio-player) add unnecessary bundle weight for a demo. A native
`<audio>` element gracefully degrades if JS is unavailable.
**Alternatives considered**: react-h5-audio-player (unnecessary dependency per Principle II).

### Routing

**Decision**: Next.js App Router file-based routing. Three static routes: `/` (home),
`/episodes` (all episodes), `/about`.
**Rationale**: Matches the three pages defined in spec FR-001. No dynamic routes needed
(no individual episode detail pages in scope).

### Responsive Design

**Decision**: Tailwind responsive prefix utilities (`sm:`, `md:`, `lg:`). Mobile-first approach.
**Rationale**: Tailwind's responsive utilities are the standard approach. Mobile-first ensures
the 320 px minimum viewport requirement (FR-009, SC-005) is the default.

### Performance

**Decision**: Next.js built-in image optimisation (`next/image`) with static export mode;
images served from public/ or external placeholder CDN.
**Rationale**: `next/image` handles lazy loading and correct sizing automatically — supports
Constitution LCP ≤ 2.5 s target. With `output: 'export'`, `unoptimized: true` must be set
or a custom loader used (we will use `unoptimized: true` for simplicity since images are
placeholders).

### No NEEDS CLARIFICATION items

All unknowns were resolved by: (a) user input specifying Next.js + no database + embedded data,
(b) constitution mandating Tailwind + Netlify, (c) spec scoping out real audio and complex features.
