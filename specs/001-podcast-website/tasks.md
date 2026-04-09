---
description: "Task list for Podcast Website implementation"
---

# Tasks: Podcast Website

**Input**: Design documents from `specs/001-podcast-website/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/page-routes.md ✅, quickstart.md ✅

**Tests**: Not requested in specification — no test tasks generated.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- All paths are relative to repository root

---

## Phase 1: Setup

**Purpose**: Initialize the Next.js project, configure Tailwind, and establish project structure.

- [x] T001 Initialize Next.js 14+ project with TypeScript and App Router in `frontend/`: `npx create-next-app@latest frontend/ --typescript --tailwind --app --src-dir --import-alias "@/*"` — verify `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, and `package.json` are created
- [x] T002 Configure static export in `frontend/next.config.ts`: set `output: 'export'` and `images: { unoptimized: true }`
- [x] T003 [P] Create `frontend/netlify.toml` with `command = "npm run build"` and `publish = "out"`
- [x] T004 [P] Create `frontend/src/types/index.ts` with `Episode` and `Podcast` TypeScript interfaces from `specs/001-podcast-website/data-model.md`
- [x] T005 [P] Create directory structure: `frontend/src/components/`, `frontend/src/data/`

---

## Phase 2: Foundational

**Purpose**: Shared data and layout that ALL user stories depend on. Must complete before any story work.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T006 Create `frontend/src/data/podcast.ts` exporting a `podcast` constant of type `Podcast` with: name, tagline, description (multi-sentence), hostName, hostBio (2–4 sentences), missionStatement, coverImageUrl (`https://picsum.photos/seed/podcast/600/600`)
- [ ] T007 Create `frontend/src/data/episodes.ts` exporting an `episodes` array of 20 `Episode` objects ordered newest-first (episode 20 first). Each episode must have: id, episodeNumber, title, description, snippet (≤150 chars), publicationDate (YYYY-MM-DD, spanning Sep 2024–Apr 2026), durationMinutes (28–65 range, varied), coverImageUrl (`https://picsum.photos/seed/ep{N}/400/400`), audioUrl (`"#"`). Topics should vary (tech, creativity, entrepreneurship, design).
- [ ] T008 Create `frontend/src/app/layout.tsx` as root layout: `<html lang="en">`, viewport meta, site title using `podcast.name`, render `<Header>` and `<Footer>` around `{children}`
- [ ] T009 [P] Create `frontend/src/components/Header.tsx` as a React Server Component: podcast name/logo on the left, navigation links (Home `/`, Episodes `/episodes`, About `/about`) on the right; mobile-responsive hamburger or stacked nav
- [ ] T010 [P] Create `frontend/src/components/Footer.tsx` as a React Server Component: copyright line with podcast name and current year; minimal styling

**Checkpoint**: Layout renders, header navigation works, and mock data is available — user story work can begin.

---

## Phase 3: User Story 1 — Discover the Podcast on the Landing Page (Priority: P1) 🎯 MVP

**Goal**: Visually striking home page with hero section and one featured episode card.

**Independent Test**: Open `/` — see podcast name + tagline in hero, a featured episode card
with title/snippet/date/duration, and a link to `/episodes`. Works on 375 px viewport.

### Implementation for User Story 1

- [ ] T011 [P] [US1] Create `frontend/src/components/FeaturedEpisode.tsx` accepting `episode: Episode` prop: display episode number badge, cover image (with alt text = episode title), title, description snippet, publication date (human-readable), duration (`N min`), and an `<audio>` element using `episode.audioUrl`
- [ ] T012 [P] [US1] Create `frontend/src/components/AudioPlayer.tsx` as `'use client'` component accepting `audioUrl: string` and `title: string`: renders a native `<audio controls>` element, fully keyboard-accessible with ARIA label `aria-label={title}`
- [ ] T013 [US1] Create `frontend/src/app/page.tsx` (Home): import `podcast` and `episodes[0]`; render a full-width hero section (podcast name, tagline, cover image); render `<FeaturedEpisode episode={episodes[0]} />`; include a prominent "All Episodes" button linking to `/episodes`
- [ ] T014 [US1] Style the Home page hero section in `frontend/src/app/page.tsx` using Tailwind: dark or gradient background, large bold typography, visually striking layout that stands out; ensure mobile-first responsive layout (stacks vertically on small screens, side-by-side on `md:` and up)

**Checkpoint**: Home page (`/`) fully functional — hero visible, featured episode displayed, navigation to `/episodes` works. Test on 375 px viewport.

---

## Phase 4: User Story 2 — Browse All Episodes (Priority: P2)

**Goal**: Episodes page listing all 20 episode cards, newest-first, responsive grid layout.

**Independent Test**: Open `/episodes` — see all 20 cards with correct data, newest episode
first, readable on 375 px viewport. No Home page required.

### Implementation for User Story 2

- [ ] T015 [P] [US2] Create `frontend/src/components/EpisodeCard.tsx` accepting `episode: Episode` prop: display episode number badge, cover image (alt = episode title), title, snippet, publication date (human-readable month + year), duration (`N min`); include `<AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />`
- [ ] T016 [US2] Create `frontend/src/app/episodes/page.tsx`: import full `episodes` array (already ordered newest-first); render page heading "All Episodes"; map over array rendering `<EpisodeCard>` for each episode
- [ ] T017 [US2] Style the Episodes page in `frontend/src/app/episodes/page.tsx` using Tailwind: responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`), consistent card spacing, clear visual hierarchy between episode number/title/meta

**Checkpoint**: Episodes page (`/episodes`) shows all 20 cards, newest-first, responsive grid on all viewport sizes. Cards are scannable.

---

## Phase 5: User Story 3 — Learn About the Podcast (Priority: P3)

**Goal**: About page with podcast story, host bio, and CTA back to episodes.

**Independent Test**: Open `/about` — see podcast description, host name and bio, mission
statement, and a "Browse Episodes" CTA link. No other pages required.

### Implementation for User Story 3

- [ ] T018 [US3] Create `frontend/src/app/about/page.tsx`: import `podcast`; render podcast name, description, missionStatement, hostName, hostBio; include a "Browse Episodes" CTA button linking to `/episodes`
- [ ] T019 [US3] Style the About page in `frontend/src/app/about/page.tsx` using Tailwind: readable prose layout, host section with name prominently displayed, CTA button styled consistently with the rest of the site; mobile-first responsive

**Checkpoint**: About page (`/about`) renders all podcast and host info; CTA links to `/episodes`. Readable on 375 px viewport.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: 404 page, accessibility pass, progressive enhancement verification, and final smoke test.

- [ ] T020 Create `frontend/src/app/not-found.tsx`: friendly "Page Not Found" message, link back to `/`; styled consistently with the site
- [ ] T021 [P] Accessibility audit: verify all images across `EpisodeCard`, `FeaturedEpisode` have descriptive `alt` text; verify all interactive elements (`<audio>`, nav links, CTA buttons) are keyboard-focusable; fix any issues found
- [ ] T022 [P] Progressive enhancement check: disable JavaScript in browser DevTools and verify Home (`/`), Episodes (`/episodes`), and About (`/about`) still render meaningful content (episode list, podcast info)
- [ ] T023 Run full manual smoke test checklist from `specs/001-podcast-website/quickstart.md` against dev server (`npm run dev`)
- [ ] T024 Run `npm run build` and verify static export to `out/` completes without errors; run `npx serve out` and re-run smoke test checklist against static build

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — **BLOCKS all user stories**
- **User Stories (Phases 3–5)**: All depend on Foundational completion; can proceed in priority order or in parallel
- **Polish (Phase 6)**: Depends on all desired user story phases being complete

### User Story Dependencies

- **US1 (P1)**: Depends on Phase 2 — no cross-story dependencies
- **US2 (P2)**: Depends on Phase 2 — `EpisodeCard` is independent from `FeaturedEpisode`
- **US3 (P3)**: Depends on Phase 2 — fully independent from US1 and US2

### Within Each User Story

- Components (T011, T012, T015) before pages (T013, T016, T018)
- Page structure before styling (T013 before T014, T016 before T017, T018 before T019)

### Parallel Opportunities

- T003, T004, T005 can run in parallel (Phase 1)
- T009, T010 can run in parallel (Phase 2)
- T011, T012 can run in parallel (Phase 3)
- T015 can run in parallel with T016 setup (Phase 4)
- T021, T022 can run in parallel (Phase 6)

---

## Parallel Example: Phase 2

```bash
# Run simultaneously (different files, no dependencies):
Task: "Create Header.tsx in src/components/Header.tsx"        # T009
Task: "Create Footer.tsx in src/components/Footer.tsx"        # T010
```

## Parallel Example: User Story 1

```bash
# Run simultaneously:
Task: "Create FeaturedEpisode.tsx in src/components/"         # T011
Task: "Create AudioPlayer.tsx in src/components/"             # T012
# Then sequentially:
Task: "Create Home page src/app/page.tsx"                     # T013
Task: "Style Home hero section in src/app/page.tsx"           # T014
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1 (Home page)
4. **STOP and VALIDATE**: Smoke test Home page independently
5. Demo or deploy if ready

### Incremental Delivery

1. Setup + Foundational → project scaffolded, data ready
2. US1 (Home) → validate independently → **MVP!**
3. US2 (Episodes) → validate independently → deploy
4. US3 (About) → validate independently → deploy
5. Polish → final smoke test → production-ready

---

## Notes

- [P] = different files, no shared dependencies — safe to run in parallel
- [Story] label maps each task to a specific user story for traceability
- Tests are not included (not requested in spec)
- Run `npm run build` before any deploy to verify static export succeeds
- Audio player renders controls UI only — no real audio files exist (`audioUrl: "#"`)
- All cover images use `picsum.photos` placeholder service — no local image assets required
