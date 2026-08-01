# Changelog

User-visible changes, newest first. Follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and [semver](https://semver.org/) versioning.

## [0.3.0] — 2026-07-31

### Added

- **Suite bar.** A dark sticky bar above the main nav links BadgeFor.Me to the rest of the squalr.us product suite (shrnkr.dev, "+ more soon"), matching the shared suite-bar pattern used across squalr.us sites with the site's accent color substituted in. Pulls in the JetBrains Mono webfont via preconnected Google Fonts links. (`index.html`, `css/styles.css`)

### Changed

- **`--ink-3` darkened slightly.** `oklch(0.6 0.012 262)` → `oklch(0.55 0.012 262)` for better contrast. (`css/styles.css`)
- **Nav bar is no longer independently sticky.** The main nav now sits inside the sticky `.site-topstack` wrapper alongside the new suite bar rather than being sticky on its own. (`css/styles.css`)

## [0.2.3] — 2026-06-10

### Added

- **`robots.txt` and `sitemap.xml`.** New root-level files allowing all crawlers and pointing to the sitemap, which lists the homepage. (`robots.txt`, `sitemap.xml`)
- **FAQPage structured data.** The FAQ accordion now also emits `FAQPage` JSON-LD (generated from the same `faqs` array, so there's one source of truth), surfacing the satirical Q&A — including RTO-mandate-adjacent questions like "Is this legal?" and "What if my employer asks why I wasn't physically present?" — to search engines. (`js/main.js`)

### Changed

- **SEO meta tags retargeted at "return to office" search intent.** Title and meta description now lead with "return-to-office mandate" instead of the abbreviation "RTO"; expanded `keywords` with more long-tail RTO phrases; OG/Twitter descriptions spell out "return-to-office (RTO)"; added explicit `robots: index, follow` and `og:locale`. (`index.html`)
- **Fixed invalid `WebSite` JSON-LD.** Removed a `SearchAction` that pointed at `#pricing` without a valid URL template or `query-input`, which could trigger Search Console structured-data errors. (`index.html`)

## [0.2.2] — 2026-06-10

### Changed

- **CTA and "buy" links now point to squalr.us.** "Sign in" and the three pricing-card "Select plan" buttons (Minimal Compliance, Full Compliance, Executive Presence) were placeholder `#` links — they now point to [squalr.us](https://squalr.us), opening in a new tab. (`index.html`)

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
