# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BadgeFor.Me is a satirical static website positioned as "Presence-as-a-Service™" — a fictional service that sends Attendance Engineers to scan your badge while you work from home, parodying RTO mandate culture. Pure HTML/CSS/JS, no build step, no package manager, no framework.

**Brand voice:** deadpan corporate-speak parody. Don't over-explain jokes. Let the copy breathe.

## Running Locally

Open `index.html` directly in a browser — no server required. There are no build, lint, or test commands.

## Deployment

Pushes to `main` auto-deploy to Azure Static Web Apps via the GitHub Actions workflow in [.github/workflows/azure-static-web-apps-jolly-dune-09357e91e.yml](.github/workflows/azure-static-web-apps-jolly-dune-09357e91e.yml). PRs get preview environments; closing a PR tears the preview down.

## Architecture

Single-page static site. All content lives in [index.html](index.html).

- [css/styles.css](css/styles.css) — all styling via CSS custom properties; no preprocessor
- [js/main.js](js/main.js) — FAQ accordion (`<details>` + animated `max-height`), pricing toggle (animated knob), scroll reveals (`IntersectionObserver`)
- [assets/images/](assets/images/) — static images (hero image); architecture diagram is now code-rendered, not an image

The FAQ accordion drives `max-height` on `.ans` based on `.qa[open]` state. The pricing toggle swaps `.amt`/`.per` text content from `data-w`/`data-a` attributes.

## Version tracking

Version is derived from CHANGELOG.md — the latest `## [X.Y.Z]` heading is the current version. No separate version file is maintained.

## Design System

- **Light theme:** `--paper` (#fff) / `--paper-2` / `--paper-3` off-white backgrounds; `--ink` / `--ink-2` / `--ink-3` text hierarchy
- **Accent:** `--accent: oklch(0.55 0.16 258)` (corporate blue); `--green: oklch(0.6 0.13 152)` for status/success states
- **Type:** `"Helvetica Neue", Helvetica, Arial` body; `ui-monospace` for labels, timestamps, eyebrows, and the `.eyebrow` class
- **Cards:** white background, `1px solid var(--line)` border, `border-radius: 13–14px`, subtle box-shadow on hover
- **Responsive breakpoints:** 880px (steps 4→2 col, features 3→2 col, arch 4→2 col), 520–560px (all → 1 col)
- **Highlighted card variant:** `.feat` with `border-color: var(--accent-line); background: var(--accent-wash)` (used for Dashboard Neutralizer full-width card)
