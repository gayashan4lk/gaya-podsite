# Page Route Contracts: Podcast Website

**Phase 1 output for plan.md**
**Date**: 2026-04-10

This document defines the static page routes and their content contracts.
No API endpoints exist — all data is embedded at build time.

---

## Route: `/` — Home (Landing Page)

**File**: `src/app/page.tsx`
**Render**: Static (build-time)

### Content Contract

| Section          | Required | Data Source          | Notes                                          |
|------------------|----------|----------------------|------------------------------------------------|
| Hero banner      | Yes      | `podcast.name`, `podcast.tagline` | Visually prominent, above the fold  |
| Featured episode | Yes      | `episodes[0]`        | Latest episode; shows title, snippet, date, duration |
| Navigation link  | Yes      | —                    | "View all episodes" → `/episodes`              |

### Navigation

- Header with links to: Home (`/`), Episodes (`/episodes`), About (`/about`)
- Call-to-action button: "All Episodes" → `/episodes`

---

## Route: `/episodes` — Episodes Page

**File**: `src/app/episodes/page.tsx`
**Render**: Static (build-time)

### Content Contract

| Section          | Required | Data Source          | Notes                                          |
|------------------|----------|----------------------|------------------------------------------------|
| Page heading     | Yes      | Static copy          | e.g., "All Episodes"                           |
| Episode list     | Yes      | `episodes` array     | All 20, newest-first                           |
| Episode card     | Yes (×20)| Per `Episode`        | episodeNumber, title, snippet, publicationDate, durationMinutes, coverImageUrl |

### Episode Card Data

Each card MUST display:
- Episode number (e.g., `#20`)
- Cover image (with `alt` text: episode title)
- Title
- Snippet (≤ 150 chars)
- Publication date (human-readable, e.g., `April 2026`)
- Duration (e.g., `42 min`)

---

## Route: `/about` — About Page

**File**: `src/app/about/page.tsx`
**Render**: Static (build-time)

### Content Contract

| Section           | Required | Data Source               | Notes                                     |
|-------------------|----------|---------------------------|-------------------------------------------|
| Podcast name      | Yes      | `podcast.name`            |                                           |
| Podcast description | Yes    | `podcast.description`     | Multi-sentence overview                   |
| Mission statement | Yes      | `podcast.missionStatement`|                                           |
| Host name         | Yes      | `podcast.hostName`        |                                           |
| Host bio          | Yes      | `podcast.hostBio`         | 2–4 sentences                             |
| CTA               | Yes      | —                         | "Listen Now" or "Browse Episodes" → `/episodes` |

---

## Route: `/not-found` — 404 Page

**File**: `src/app/not-found.tsx`
**Render**: Static (build-time)

### Content Contract

| Section     | Required | Notes                             |
|-------------|----------|-----------------------------------|
| Error message | Yes    | Human-friendly "Page not found"   |
| Home link   | Yes      | Back to `/`                       |

---

## Global Layout Contract

**File**: `src/app/layout.tsx`

All pages MUST include:
- `<html lang="en">`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Site `<title>` with podcast name
- `<Header>` component (navigation)
- `<Footer>` component (minimal — copyright or tagline)

## Component Interface Summary

| Component         | Props                                      | Notes                           |
|-------------------|--------------------------------------------|---------------------------------|
| `Header`          | none (reads `podcast.name`)                | Nav links: Home, Episodes, About |
| `Footer`          | none                                       | Copyright line                  |
| `EpisodeCard`     | `episode: Episode`                         | Used on Episodes page           |
| `FeaturedEpisode` | `episode: Episode`                         | Used on Home page               |
| `AudioPlayer`     | `audioUrl: string`, `title: string`        | Client component, native audio  |
