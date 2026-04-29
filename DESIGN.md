# Website Design & Restructure Plan

## Goals

This site needs to do two things simultaneously:
1. Signal professional credibility to finance recruiters (clean, substantive, easy to navigate to experience)
2. Show the full picture — hobbies, photography, personal projects, personality

The current structure blurs both goals because content is duplicated and the pages don't have distinct enough purposes.

---

## Page Structure (Target State)

### Current Nav
`Home | My Feed | Software Portfolio | Photography | Contact`

### Target Nav
`Home | Experience | Projects | Photography | Journal`

| Old | New | Why |
|---|---|---|
| Home | Home | Stays, hero section refined |
| My Feed | Journal | Renamed + scoped to personal writing only |
| Software Portfolio | Projects | Rename for clarity |
| *(missing)* | Experience | New dedicated page for finance recruiters |
| Photography | Photography | Unchanged |

---

## Page-by-Page Changes

### Home (`index.html`)

**Hero section** — keep as-is. The headshot + bio + quick-link tags work well.

**"What I'm Up to Now" section** — major refactor:
- **Max 3 entries at any time.** This is a live status board, not a timeline.
- **Entry types allowed:** current role/school, active project being built, current intellectual pursuit (book, idea, research area)
- **Entry types NOT allowed:** blog post links, past reflections, event recaps — those belong in Journal
- **When something ends, remove or archive it** — don't let entries accumulate
- Left/right alternating card layout is good, keep it
- Remove the "See All Time ›" link pointing to feed — Journal has its own nav entry

**What each Now entry should contain:**
- Title: present-tense state ("Building Assisty", "Interning at Capstone", "Studying at USC")
- 2–3 sentence description of what you're doing and why it matters to you
- Date range (ongoing preferred: "June 2025 – Present")
- Tags: category only, no "Blog Post" or "Personal Reflections" tags
- Optional: link to a detail view page

**Current entries to keep in Now:**
- USC / AI for Business (Education, Finance, AI/Strategy)
- Capstone Investment Advisors internship (Finance, Professional Experience)
- Assisty (Coding, Projects, AI/ML)

**Current entries to move to Journal:**
- "Wrapping up IB, looking ahead" → this is a reflection/event, belongs in Journal
- "What am I reading?" → move to Journal as a short reading note entry

---

### Experience (`experience.html`) — New Page

Finance recruiters need one place to see professional and academic depth. Currently this lives scattered across detail-view cards and the Now section.

**Sections:**
1. **Finance & Professional** — internships (Bank of Ireland, Capstone), leadership roles (Trojan Investing Society, Trojan Venture Partners, Marshall AI Association Finance team)
2. **Education** — USC AI for Business joint degree
3. **Skills & Tools** — languages, financial modeling, relevant tech

Each item should link to its detail-view page where one exists. Layout: clean vertical timeline or card list, not the alternating now-entry layout.

---

### Projects (`projects.html`)

Keep existing content. Rename from "Software Portfolio" to "Projects" in the nav.

Consider adding a short intro line: something like "Things I've built at the intersection of AI, design, and utility."

---

### Photography (`photography.html`)

No structural changes needed. This page is working.

---

### Journal (`feed.html` → `journal.html`)

**Purpose:** personal writing, dated entries, chronological. Reflections, project launches, trip notes, things observed. Short or long. More honest, less polished than the rest of the site.

**Changes from current Feed:**
- Rename file to `journal.html`, update all internal links
- Remove the highlighted article hero block (it duplicates Now section logic)
- Remove grid/list toggle — keep list view only, it reads better for writing
- Entries should never duplicate what's currently in the Now section; they can *follow up on* or *reflect on* things that were in Now

**Entry types that belong here:**
- End-of-IB reflection ✓
- Assisty beta launch ✓
- ReadRack App Store launch ✓
- What I'm reading (as short notes)
- Travel/life moments
- Ideas and observations
- Project post-mortems

---

### Detail Views (`Detail-Views/`)

Keep the existing pattern. Each significant project or experience gets a detail-view page.

Files to create when not yet existing:
- `detailView-capstone.html` — Capstone internship
- `detailView-readRack.html` — ReadRack (already exists as `detailView-readRackProj.html`)

---

## Content Rules (Separation Logic)

The single most important rule for keeping this site maintainable:

> **If it's a state → Now section.**
> **If it's an event or reflection → Journal.**

| Content | Where it goes |
|---|---|
| "I'm currently interning at X" | Now |
| "I'm taking a course in Y" | Now |
| "I'm building Z right now" | Now |
| "I launched a beta this week" | Journal |
| "I finished my IB exams" | Journal |
| "Here's what I've been thinking about lately" | Journal |
| "Trip recap / photo set" | Journal (link to Photography) |
| "My internship at X" (full history) | Experience + Detail View |

---

## Design System — What to Preserve

The existing visual design is good. Don't change:
- Dark background palette (`#1a1f1e`, `#232723`, `#181b18`)
- Warm cream/tan text colors (`#e6ddca`, `#bbb4a4`, `#c9b79d`)
- Tag component style (rounded pill, green tones)
- Entry date style (dashed border, mint green)
- Fade-in animations
- Card hover effects (translateY + shadow)
- Left/right alternating Now entries

**Typography** — consider upgrading from `Segoe UI` to a system stack that includes a serif option for Journal body text. Body writing reads better in a slightly warmer serif.

---

## Implementation Order

1. Create `AGENT_RULES.md` and `DESIGN.md` (this file) — **done**
2. Create `experience.html` with finance/professional content
3. Refactor `index.html` Now section — remove blog-post entries, enforce 3-entry max
4. Rename `feed.html` → `journal.html`, update all links, remove highlight hero
5. Update nav across all pages
6. Create `detailView-capstone.html`
7. Ongoing: add Journal entries as events happen using agent rules

---

## Future Considerations

- **Resume sync:** experience.html should mirror (not duplicate) the resume. When the resume updates, experience.html should update too.
- **Photography integration:** Journal entries about travel should be able to embed photos from Photography-Assets or link to photography.html sections.
- **Mobile:** the alternating left/right Now layout stacks well on mobile already. Journal list view will too.
