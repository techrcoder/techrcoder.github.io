# Design System — "Signal & Ledger"

A market-terminal × editorial visual system. It signals both sides of Rohan's profile at once:
the **finance track** (hedge fund / VC / PE / IB exposure — Capstone, Bank of Ireland LAF, TVP, TIS)
and the **AI/builder track** (AI for Business, Assisty, Read-Rack, LLM tooling).

The metaphor: a premium financial publication typeset on a trading terminal.
Editorial serif headlines over an ink-dark canvas, with monospace "market data" accents.

---

## Goals (unchanged from previous iterations)

1. Signal professional credibility to finance recruiters (clean, substantive, easy to reach Experience)
2. Show the full picture — projects, photography, journal, personality

---

## Core Tokens (`styles/tokens.css` is the single source of truth)

| Role | Token | Value | Notes |
|---|---|---|---|
| Canvas | `--ink-0` | `#060809` | page background + faint chart-grid texture |
| Band | `--ink-1` | `#0b0f12` | ticker, footer, alternate sections |
| Surface | `--ink-2` | `#10161b` | cards |
| Elevated | `--ink-3` | `#182029` | card hover |
| Text | `--paper` | `#ede6d8` | warm ivory — never pure white |
| Muted | `--paper-dim` | `#a9a498` | body text |
| Faint | `--paper-faint` | `#737065` | mono micro-labels ONLY (too low-contrast for body) |
| Accent | `--green` | `#34d399` | market green: up-ticks, links, live states, active nav |
| Accent 2 | `--gold` | `#d9a441` | editorial gold: `<em>` serif italics, pull-quote rule |
| Hairlines | `--hairline` / `--hairline-strong` | 10% / 24% ivory | all borders |

**Typography**
- Display: **Fraunces** (variable, optical sizing) — all h1/h2/h3, footer name, stat values, detail-view body prose
- Body/UI: **Inter**
- Data: **IBM Plex Mono** — every label, date, tag, nav link, ticker item, status chip (uppercase + `--tracking-mono`)
- `<em>` renders as gold Fraunces italic — the signature emphasis. Use on 1–2 words max per headline.

**Fonts load via `style.css` @imports** (rsms Inter + Google Fonts Fraunces/IBM Plex Mono).

---

## Signature Components (`styles/components.css`)

- **Ticker** — thin marquee strip at the very top of every page; mono uppercase "positions"
  (`.ticker > .ticker-track > .ticker-item`, ▲ in `.up`). JS duplicates the track for a seamless loop;
  paused on hover; disabled under `prefers-reduced-motion`. Same items on every page.
- **Section head** — `.section-head`: mono green index (`01 —`), serif title, right-aligned mono note,
  hairline rule. Section names carry the motif: Current Positions / Track Record / The Lab / Field Notes / The Ledger.
- **Cards** — `.card`: ink-2 surface, hairline border, hover lift + green corner crop-marks + `.card-arrow` ↗.
- **Status chips** — `.now-card-meta .status` (CURRENT) and similar mono chips (IN PROGRESS, SHIPPED, BETA LIVE).
- **Stat row** — `.stat-row`/`.stat`: serif figures + mono keys with hairline separators.
- **Pull quote** — `.pull-quote`: gold left rule, italic Fraunces, mono cite.
- **Footer** — italic serif name, mono links with ↗, colophon, and the `· · · END OF TAPE · · ·` line.
- **Reveal** — `.reveal` (+ `.reveal-delay-1/2/3`) scroll-in via `assets/js/site.js` IntersectionObserver.
  No-JS and reduced-motion safe (content always visible without JS).

## Page Modules

One CSS file per page area, imported by `style.css`:
`hero.css` `now.css` `links.css` (home) · `experience.css` · `projects.css` · `photography.css` ·
`feed.css` (journal) · `detail-views.css` (dossier template shared by detail views + journal articles).

Homepage extras: animated SVG **sparkline** (career trajectory with mono era labels) and the
**portrait card** (mono caption "FIG. 01 / NYC · SUMMER 2026") — slight rotation, straightens on hover.

---

## Content Voice Rules (as important as the visual rules)

Rohan's direction, July 2026 — these override any visual instinct:

1. **No em dashes anywhere user-facing.** Prose uses commas/colons/periods; mono data labels
   use `·` or `/`; date ranges use en dashes (`Jun–Aug 2026`). Docs like this one are exempt.
2. **Show, don't tell.** State roles, firms, cities, dates and let the reader conclude the
   identity. Never self-label ("The Analyst") or run slogan headlines ("Fluent in markets &
   machines"). The homepage H1 is his name, nothing else.
3. **Recruiter scan first.** Name → degree/year → current role → resume within one screen.
   Evidence (past roles) beats aspiration (thesis quotes) on the homepage.
4. **Wit stays micro.** Small mono corners only: `END OF TAPE`, status chips, ticker up-ticks.
   Never in headlines or leads. (Post-council, July 2026: "OUTLOOK: LONG" was retired as too
   self-narrated for the HF/IB/PE reader; keep the dial at or below the current level.)
5. **No AI-tell patterns** in copy: no "not just X, it's Y", no rhetorical triplets, no empty
   intensifiers (deeply/truly/seamlessly), no LLM verbs (leverage/delve/foster/harness).
   Journal articles are Rohan's own writing: punctuation fixes only, never reword.

## Rules to Preserve

- Dark canvas + ivory type. Never hardcode colors in page modules — tokens only.
- Mono labels are always uppercase with `--tracking-mono`; dates in mono.
- Hover affordance on link-cards = lift + green ↗. Active nav = green + underline.
- Detail-view/article body text is serif (Fraunces); everything else Inter.
- No emoji in page content. No pure white, no pure black.
- Finance motifs stay *tasteful*: chips, indices, ticks — never gimmicky charts for their own sake.
- Every page carries ticker + nav + footer identically (adjust `../` prefixes in subdirectories).
- Accessibility: single h1/page, `aria-label` on nav, alt text everywhere, reduced-motion coverage
  for every infinite animation, `:focus-visible` outlines.

---

## Content Architecture (unchanged)

> **If it's a state → Now section ("Current Positions").**
> **If it's an event or reflection → Journal ("The Ledger").**

- Home: hero + max-3 Current Positions + "Previously" track-record strip + connect
- Experience: recruiter-facing track record (timeline), education, skills
- Projects: featured Assisty + project grid with status chips
- Photography: jigsaw gallery ("Field Notes")
- Journal: dated ledger rows, most recent first
- Detail views (`detail-views/`) + journal articles (`journal-articles/`) share the dossier template

See `AGENT_RULES.md` for how agents should apply content updates.
