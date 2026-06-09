# Contributing to BadgeFor.Me

## Running locally

Open `index.html` directly in a browser. No server, no build step, no package manager required.

## Project structure

```text
badgefor.me/
├── index.html              # All content lives here
├── css/styles.css          # Styling via CSS custom properties; light theme
├── js/main.js              # FAQ accordion, pricing toggle, scroll reveals
├── assets/
│   ├── images/og-image.png # Open Graph image (1200×630)
│   └── og-template.html    # Source HTML for regenerating og-image.png
├── favicon.svg
└── CHANGELOG.md            # Source of truth for version number
```

## Design system

- **Theme:** light — `--paper` (#fff) / `--paper-2` / `--paper-3` off-white backgrounds; `--ink` / `--ink-2` / `--ink-3` text hierarchy
- **Accent:** `--accent: oklch(0.55 0.16 258)` (corporate blue); `--green: oklch(0.6 0.13 152)` for status/success
- **Type:** `"Helvetica Neue", Helvetica, Arial` body; `ui-monospace` for labels, timestamps, and the `.eyebrow` class
- **Cards:** white background, `1px solid var(--line)` border, `border-radius: 13–14px`
- **Breakpoints:** 880px (multi-col → 2 col), 520–560px (all → 1 col)

**Brand voice:** deadpan corporate-speak parody. Don't over-explain jokes. Let the copy breathe.

## Deployment

Pushes to `main` auto-deploy to Azure Static Web Apps via GitHub Actions (`.github/workflows/azure-static-web-apps-jolly-dune-09357e91e.yml`). PRs get preview environments; closing a PR tears the preview down.

Version is derived from `CHANGELOG.md` — the latest `## [X.Y.Z]` heading is the current version.

## Regenerating the OG image

Edit `assets/og-template.html`, then re-run the headless screenshot:

```shell
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --screenshot="assets/images/og-image.png" --window-size=1200,630 --hide-scrollbars assets/og-template.html
```
