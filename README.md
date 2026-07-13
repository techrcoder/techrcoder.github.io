# techrcoder.github.io — Rohan Patel

Personal website: portfolio, photography, experience, and journal.
Design system: **"Signal & Ledger"** — a market-terminal × editorial aesthetic (dark ink canvas,
Fraunces serif display, IBM Plex Mono data accents, market-green + gold highlights).

## Key Documents

- [`DESIGN.md`](DESIGN.md) — The visual design system: tokens, signature components, page modules, and rules to preserve
- [`AGENT_RULES.md`](AGENT_RULES.md) — Rules for AI agents maintaining this site: how to classify content, handle natural language directions, and preserve system integrity

## Site Structure

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero + Current Positions (Now section, max 3 entries) |
| Experience | `experience.html` | Finance & professional track record |
| Projects | `projects.html` | Software & tech portfolio |
| Photography | `photography.html` | Photo portfolio |
| Journal | `journal.html` | Dated writing, reflections, recaps |
| Detail Views | `detail-views/` | Deep-dive pages per project or role |
| Journal Articles | `journal-articles/` | Full journal entry pages |

## Styles & Behavior

All styles live in `styles/` and are imported via `style.css` at the root — `tokens.css` is the
single source of truth, `base.css` + `components.css` + `nav-bar.css` are shared, and each page
area has its own module (`hero.css`, `now.css`, `feed.css`, etc.). Shared JS (ticker loop,
scroll reveals) lives in `assets/js/site.js`; the site works fully without JavaScript.

## Local Preview

```
python3 -m http.server 4173
```
