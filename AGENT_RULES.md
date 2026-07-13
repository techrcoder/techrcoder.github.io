# Agent Rules — Rohan Patel Personal Website

This file governs how AI agents should handle content updates, structural changes, and maintenance of this website. Read this before making any changes.

---

## Site Overview

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero + "What I'm Up to Now" (max 3 entries) |
| Experience | `experience.html` | Finance/professional history for recruiters |
| Projects | `projects.html` | Software/tech project portfolio |
| Photography | `photography.html` | Photo portfolio |
| Journal | `journal.html` | Dated personal writing, reflections, event recaps |
| Detail Views | `detail-views/*.html` | Deep-dive pages for individual projects/experiences |
| Journal Articles | `journal-articles/*.html` | Full journal entry pages |

**Design reference:** `DESIGN.md` — read it for the full restructure rationale before making significant changes.

---

## The Core Rule: State vs. Event

Before placing any content, classify it:

- **State** (ongoing situation, current role, active project) → **Now section on homepage**
- **Event or reflection** (something that happened, something written) → **Journal**
- **Professional history** (internship, role, club leadership) → **Experience page + optional detail view**
- **Project** (something built, shipped, or ongoing tech work) → **Projects page + detail view**

When in doubt, ask: "Is this still true right now, or did it happen?" If it happened, it's Journal.

---

## How to Handle Natural Language Directions from Rohan

When Rohan says something like "I started my internship at X" or "I just shipped a new version of Assisty" or "I've been reading Y lately," apply the following:

### Starting something new (role, internship, project, school term)

1. **Add a Now entry** to `index.html` using the `.card.now-card` pattern (see Now Section Rules)
2. If it's a professional role, **add it to `experience.html`** as well
3. If it warrants depth, **create a detail view** in `Detail-Views/`
4. **Check if the Now section now has more than 3 entries** — if so, ask Rohan which existing entry to remove or archive
5. Do not add a Journal entry unless Rohan explicitly wants to write something about it

### Ending or completing something

1. **Remove the Now entry** from `index.html` — do not leave ended states in the Now section
2. Keep the Experience/Projects entry (those are history, they stay)
3. **Optionally prompt:** "Do you want a short Journal entry to mark wrapping this up?"

### Shipping, launching, or reaching a milestone

1. **Create a Journal entry** in `journal-articles/` and add a card to `journal.html`
2. Do NOT add this to the Now section (a launch is an event, not a state)
3. If it's a project milestone, update the detail view if one exists

### Writing a reflection, recap, or personal note

1. **Create a Journal entry** — full article in `journal-articles/`, card in `journal.html`
2. Do NOT add to Now section

### Adding a reading, interest, or intellectual pursuit

1. Add as a **Now entry** only if it's actively ongoing
2. If it's a short note ("finished reading X, here's what I thought"), it's a **Journal entry**

### Updating experience or bio

1. Update `experience.html` and the relevant detail view
2. Update the hero bio in `index.html` if the top-line description changes (e.g. new internship title, new semester)
3. Never auto-update the resume PDF — flag it to Rohan instead

---

## Now Section Rules

Located in `index.html` inside `<section class="now-section">`.

**Hard rules:**
- Maximum 3 entries at any time
- Each entry is an `<a class="card now-card reveal">` in the 3-column `.now-grid`
- Every entry needs: `.now-card-meta` (mono `NN / 03` index + `CURRENT` status chip), `.now-card-eyebrow`
  (present-tense verb: Interning / Studying / Building), `<h3>` title, `<p>` description,
  `.now-card-tags` with at least one `<span class="tag">`, and `.now-card-footer` with a mono
  `.now-card-date` and `<span class="card-arrow">↗</span>`
- Renumber `01 / 03 .. 03 / 03` top-to-bottom after any change; stagger with `reveal-delay-1/2`
- Entries link to a detail view where one exists, otherwise `experience.html` or `href="#"`
- No `"Blog Post"` or `"Personal Reflections"` tags on Now entries — those belong in Journal

**Allowed tag categories for Now entries:**
`Education`, `Finance`, `AI / ML`, `Coding`, `Projects`, `Strategy`, `Reading`, `Personal`

---

## Journal Rules

Journal entries live in two places:
- `journal-articles/[title].html` — the full article page (uses the shared dossier template from `styles/detail-views.css`, breadcrumb "← THE LEDGER")
- A row in `journal.html` — the `<article class="feed-article">` element in the ledger list

**Naming convention for article files:**
`[Month]-[Day]-[Short-Slug].html`
Examples: `Jun-15-Capstone-Start.html`, `Mar-3-Alignment-Problem.html`

**Journal card must include:**
- Thumbnail image (`<img class="feed-article-img">`) — use a real image or a relevant asset; never leave blank
- Date (`<span class="feed-date">`)
- Title (`<h3>`)
- 1–2 sentence teaser (`<p>`)
- Tags (`<span class="tag">`)
- Link to the full article (`<a class="feed-article-link">`)

**Journal entries go at the top of the list** (most recent first).

---

## Detail View Rules

Files live in `detail-views/`. Use this naming pattern (see existing files for reference):

```
detail-views/[project-or-role-slug].html
```

A detail view should include:
- Header with title and optional logo/image
- Tags + date
- Bold subheadline (one sentence summary)
- Body sections: context, what you did, what you learned/built
- Back navigation to the relevant parent page

---

## File & Asset Conventions

- Images for Journal entries: use `photography-assets/` for personal photos or `assets/images/` for app icons/screenshots — never hotlink external images
- Keep new image filenames lowercase with hyphens: `bank-of-ireland-paris.jpg`
- All pages use `style.css` from the root (use `../style.css` from subdirectories) and `assets/js/site.js` (`../assets/js/site.js` from subdirectories)
- Every page carries the ticker + nav + footer identically; nav must be consistent across every page — update all pages when nav changes
- Design tokens only — never hardcode colors; see `DESIGN.md` for the "Signal & Ledger" system

---

## Nav Order (Canonical)

```html
Home | Experience | Projects | Photography | Journal
```

The current active page gets `<b>` wrapping its link text. All other links are plain `<a>`.

---

## Things Agents Must NOT Do Without Explicit Instruction

- Do not restructure the CSS or design system unless Rohan asks for a visual change
- Do not rename or move existing HTML files without updating every internal link that references them
- Do not delete Journal entries — archive by removing from the card list but keeping the article file
- Do not update the resume PDF — flag it as needed
- Do not change the hero bio text in `index.html` to something speculative — only update with facts Rohan provides
- Do not add emoji to page content unless Rohan uses them in his direction
- Do not use em dashes in any user-facing text (prose: comma/colon/period; labels: `·` or `/`; ranges: en dash). See "Content Voice Rules" in DESIGN.md
- Do not write slogan headlines or self-labels — state facts (role, firm, city, date) and let them speak. Homepage H1 is his name only
- Do not reword journal-article prose — it is Rohan's own writing; punctuation-level fixes only

---

## How to Read Rohan's Directions

Rohan will often give directions in casual natural language. Map them to actions:

| Rohan says... | Agent does... |
|---|---|
| "I started X" | Add Now entry, add to Experience if professional |
| "I finished / wrapped up X" | Remove from Now, optionally prompt for Journal recap |
| "I shipped / launched X" | Add Journal entry + card, update detail view |
| "I've been reading X" | Add Now entry (if active) or Journal note (if done) |
| "I went to / I was in X" | Journal entry, potentially link to photography |
| "Add my new internship at X" | Add Now entry + Experience entry + create detail view stub |
| "Update my bio" | Update hero `<p>` in `index.html` with provided text |
| "Write about X" | Create Journal article + card |
| "Remove X from the homepage" | Remove Now entry, keep Experience/Projects entry |

---

## Quality Checks Before Committing Any Change

- [ ] Nav is consistent and correct across all modified pages
- [ ] No content duplicated between Now section and Journal
- [ ] Now section has 3 or fewer entries
- [ ] New Journal entries appear at the top of `journal.html` card list
- [ ] All internal links resolve (no broken `href` paths)
- [ ] New HTML files follow the existing indentation and structure style
- [ ] No placeholder text left in published content (`href="#"` is OK as a temporary link target, but `<p>TODO</p>` is not)
