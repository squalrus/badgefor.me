# Changelog

User-visible changes, newest first. Follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and [semver](https://semver.org/) versioning.

## [0.2.1] — 2026-06-09

### Added

- **Branded Open Graph image.** Replaced the stock badge-scan photo with a purpose-built 1200×630 OG image: dark corporate-blue background, "BadgeFor.Me" wordmark, "Presence-as-a-Service™" eyebrow, tagline, and a "Starting at $20 / week" pricing pill. Source template kept at `assets/og-template.html` for future regeneration. (`assets/images/og-image.png`, `assets/og-template.html`, `index.html`)
- **CONTRIBUTING.md.** New contributor guide covering local setup, project structure, design system tokens, deployment pipeline, and OG image regeneration steps. (`CONTRIBUTING.md`)
- **Footer version.** Version number now displayed in the site footer and kept in sync with each release. (`index.html`)

### Changed

- **README.md.** Rewritten as a lean project overview (what it is, live link, pricing table, pointer to CONTRIBUTING.md) — removed the stale dark-theme description, incorrect deployment notes, and outdated file tree. (`README.md`)

### Removed

- **Unused images.** Deleted `assets/images/hero-badge-scan.jpg` (replaced by `og-image.png`) and `assets/images/diagram.png` (architecture diagram has been code-rendered since v0.1.0).

## [0.2.0] — 2026-06-09

### Added

- **Footer attribution.** Added "Built by Chad Schulz" credit in the footer bottom bar, linking to [squalr.us](https://squalr.us). (`index.html`, `css/styles.css`)

## [0.1.1] — 2026-06-09

### Fixed

- **Pricing toggle width.** Removed an inline `style="display:flex"` that was overriding the CSS `display: inline-flex`, causing the Weekly/Annual toggle pill to stretch full-width. (`index.html`)

## [0.1.0] — 2026-06-09

### Changed

- **Direction A "Compliance Vendor" redesign.** Complete visual overhaul from dark glassmorphic theme to a deadpan enterprise SaaS aesthetic: white/off-white backgrounds, corporate-blue accent (`oklch(0.55 0.16 258)`), Helvetica type stack, and mono labels — styled after B2B compliance platforms (Vanta/Mercury register). (`index.html`, `css/styles.css`)
- **Hero section.** Replaced single-column text hero with a two-column layout: copy left, live attendance-console mockup right (scrolling scan log with timestamps, reader IDs, green "Present" pills, and a pulsing "Compliant" status indicator). (`index.html`)
- **Architecture diagram.** Replaced the static PNG image with a code-rendered four-column node diagram (Intake → Intelligence → Execution → Compliance) with hoverable cards and a dot-grid background. (`index.html`, `css/styles.css`)
- **Copy and brand positioning.** Site now leads with "Presence-as-a-Service™" as the brand eyebrow. Pricing tiers renamed to Minimal Compliance / Full Compliance / Executive Presence. All body copy sharpened to deadpan corporate-speak; over-explanatory passages removed. (`index.html`)
- **Pricing toggle.** Added animated Weekly/Annual billing toggle with a sliding knob; prices update in-place without a page reload. (`index.html`, `js/main.js`)
- **Navigation.** Added sticky frosted-glass nav bar with brand-mark logo, section links (How it works, Platform, Pricing, FAQ), and Sign in / Get started CTAs. (`index.html`, `css/styles.css`)
- **Trust bar.** Added "Compatible with the badge readers at companies you would rather not name" section with fictitious enterprise logos between the hero and How It Works. (`index.html`)
- **FAQ rebuild.** Accordion now built from a data array with smooth `max-height` animation on `<details>` elements; first item open by default. (`js/main.js`)
- **Footer.** Replaced single-row centered footer with a three-column grid (brand + tagline, quick links, legal disclaimer); ends with "this is still satire". (`index.html`, `css/styles.css`)
- **Scroll reveals.** All major sections and cards animate in via `IntersectionObserver` with a load-time safety fallback. (`js/main.js`)

### Added

- **SEO and social meta tags.** Added `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`), and Twitter Card tags for rich social sharing previews targeting RTO/WFH search traffic. (`index.html`)
- **CLAUDE.md.** Project documentation covering brand voice, local dev, deployment pipeline, architecture, and design tokens. (`CLAUDE.md`)
