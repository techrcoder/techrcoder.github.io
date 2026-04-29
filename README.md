# techrcoder.github.io — Rohan Patel

Personal website: portfolio, photography, experience, and journal.

## Key Documents

- [`DESIGN.md`](DESIGN.md) — Site restructure plan, page-by-page changes, visual design rules, and implementation order
- [`AGENT_RULES.md`](AGENT_RULES.md) — Rules for AI agents maintaining this site: how to classify content, handle natural language directions, and preserve system integrity

## Site Structure

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero + current status (Now section, max 3 entries) |
| Experience | `experience.html` | Finance & professional history |
| Projects | `projects.html` | Software & tech portfolio |
| Photography | `photography.html` | Photo portfolio |
| Journal | `journal.html` | Dated writing, reflections, recaps |
| Detail Views | `Detail-Views/` | Deep-dive pages per project or role |
| Journal Articles | `Feed Articles/` | Full journal entry pages |

## Styles

All styles live in `Styles/` and are imported via `style.css` at the root. Each page area has its own CSS file (`now.css`, `feed.css`, `hero.css`, etc.).
