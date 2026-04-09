# Data Model: Podcast Website

**Phase 1 output for plan.md**
**Date**: 2026-04-10

## Entities

### Episode

Represents a single podcast episode. All data is static/mocked.

| Field           | Type     | Required | Constraints                              |
|-----------------|----------|----------|------------------------------------------|
| id              | number   | Yes      | Unique, sequential (1–20)                |
| episodeNumber   | number   | Yes      | Same as id for this project              |
| title           | string   | Yes      | Non-empty, ≤ 80 characters               |
| description     | string   | Yes      | Non-empty, plain text                    |
| snippet         | string   | Yes      | ≤ 150 characters (derived from description) |
| publicationDate | string   | Yes      | ISO 8601 date: YYYY-MM-DD                |
| durationMinutes | number   | Yes      | Positive integer                         |
| coverImageUrl   | string   | Yes      | URL string (placeholder CDN or local)    |
| audioUrl        | string   | Yes      | Placeholder string (no real audio)       |

**Notes**:
- `snippet` can be computed from `description` (first 150 chars) or stored separately.
- Episodes are ordered newest-first on the Episodes page; the array in `episodes.ts`
  should be ordered newest-first (ep 20 first, ep 1 last) to simplify rendering.
- The "featured episode" on the landing page is `episodes[0]` (the latest episode).

### Podcast

Top-level metadata for the podcast itself. Stored as a single exported constant.

| Field            | Type   | Required | Constraints          |
|------------------|--------|----------|----------------------|
| name             | string | Yes      | Non-empty             |
| tagline          | string | Yes      | ≤ 100 characters      |
| description      | string | Yes      | Multi-sentence        |
| hostName         | string | Yes      | Non-empty             |
| hostBio          | string | Yes      | 2–4 sentences         |
| missionStatement | string | Yes      | 1–2 sentences         |
| coverImageUrl    | string | Yes      | URL string            |

## TypeScript Interfaces

```typescript
export interface Episode {
  id: number;
  episodeNumber: number;
  title: string;
  description: string;
  snippet: string;
  publicationDate: string; // YYYY-MM-DD
  durationMinutes: number;
  coverImageUrl: string;
  audioUrl: string;
}

export interface Podcast {
  name: string;
  tagline: string;
  description: string;
  hostName: string;
  hostBio: string;
  missionStatement: string;
  coverImageUrl: string;
}
```

## Mock Data Notes

- 20 episodes total.
- Dates span a plausible 20-month range (e.g., Sep 2024 – Apr 2026), one episode per month.
- Durations vary realistically between 28–65 minutes.
- Cover images: `https://picsum.photos/seed/ep{N}/400/400` for per-episode uniqueness.
- Podcast cover: `https://picsum.photos/seed/podcast/600/600`.
- Audio URLs: placeholder string `"#"` (no real audio files).
- Episode topics: technology, creativity, entrepreneurship, design — varied to appear realistic.

## State Transitions

No state transitions apply — all data is read-only static content.

## Relationships

- One `Podcast` → many `Episode` (one-to-many, stored as a typed array)
- No relational joins needed; data is fully flat
