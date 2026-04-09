<!--
SYNC IMPACT REPORT
==================
Version change: (unversioned template) → 1.0.0
Modified principles: N/A — initial ratification, all placeholders replaced
Added sections:
  - Core Principles (5 principles for a static web app)
  - Technology Stack
  - Development Workflow
  - Governance
Removed sections: N/A
Templates checked:
  - .specify/templates/plan-template.md  ✅ aligned (Constitution Check gate present)
  - .specify/templates/spec-template.md  ✅ aligned (no constitution-specific constraints to add)
  - .specify/templates/tasks-template.md ✅ aligned (tests marked optional, consistent with principle V)
  - .specify/templates/commands/         ✅ skipped (directory does not exist)
  - README.md                            ✅ skipped (does not exist yet)
Deferred TODOs: none
-->

# Gaya Podsite Constitution

## Core Principles

### I. Static-First

All pages MUST be pre-rendered to static HTML at build time.
Client-side rendering is only permitted for interactive enhancements that cannot
be achieved statically (e.g., audio playback controls, search).

### II. Simplicity

The tech stack MUST remain minimal. A dependency MUST NOT be added unless the
problem cannot be reasonably solved without it. YAGNI applies to all decisions.

### III. Performance

Every public page MUST meet Core Web Vitals thresholds (LCP ≤ 2.5 s, CLS ≤ 0.1)
on a median mobile connection. Assets MUST be optimised before deployment.

### IV. Accessibility

All pages MUST meet WCAG 2.1 AA contrast and keyboard-navigation requirements.
Interactive elements MUST carry appropriate ARIA labels.

### V. Deployability

Deployment MUST be fully automated via CI/CD. No manual file uploads.
The build process MUST complete without errors before any merge to `main`.

## Technology Stack

- **Rendering**: Static site generator Next.js static export.
- **Styling**: Tailwind. No CSS-in-JS runtime.
- **Hosting**: Netlify with automated deploy on push to `main`.
- New tools MUST be documented in the relevant feature plan before adoption.

## Development Workflow

- Features MUST start with a spec and plan before code is written.
- All work MUST be done on feature branches; direct commits to `main` are not
  permitted except for hotfixes.
- Each feature MUST pass a manual smoke test before merging.
- All PRs MUST verify compliance with the five Core Principles before merging.

## Governance

This constitution supersedes all other conventions for this project.
Amendments require a written rationale, a version bump, and propagation to any
affected templates or guidance files.

**Versioning policy**:
- MAJOR: Removal or redefinition of an existing principle.
- MINOR: New principle or section added.
- PATCH: Clarifications, wording fixes, no semantic change.

**Version**: 1.0.0 | **Ratified**: 2026-04-10 | **Last Amended**: 2026-04-10
