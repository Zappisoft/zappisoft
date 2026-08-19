# RatiOS — Work section entry (hold until public launch)

Draft copy for the `PROJECTS` entry in `src/constants/data.js`.
**Do not add this to the site until RatiOS is publicly installable on the App Store.**
See the pre-flight checklist at the bottom.

---

## Ready-to-paste entry

```js
{
  title: 'RatiOS',
  description:
    'A physique tracking app for people running a serious cut, bulk, or contest prep, built so daily logging stops living in Notes and a camera roll. Log weight and progress photos, compare your physique across weeks, and keep diet, cardio, check-ins, and protocol changes on one timeline — with a countdown to show day for anyone prepping to compete. Native iOS and Android from a single codebase, with a type-safe API and private photo storage.',
  tags: ['React Native', 'Expo', 'TypeScript', 'PostgreSQL'],
  href: '', // App Store URL — required before this goes live
  screenshot: 'ratios',
},
```

## Shorter variant

If the grid reads too heavy with two long entries (this one plus Peptide Depot),
swap to the Atalo/Sydney length:

> A physique tracking app for anyone running a cut, bulk, or contest prep: daily
> weight, progress photos, and side-by-side comparisons over time, with diet,
> cardio, and check-ins in the same place. Native iOS and Android from one codebase.

Tags: `['React Native', 'Expo', 'PostgreSQL']`

## Longer variant

For a future `/work/ratios` detail page, if one ever exists:

> RatiOS is Zappisoft's in-house mobile product for physique athletes — whether
> that means stepping on stage or just running a cut or bulk seriously enough to
> want the data. The daily loop is weight, notes, and progress photos; from there
> you can compare your physique across weeks, and keep diet, cardio, check-ins, and
> protocol changes on one timeline instead of scattered across WhatsApp, PDFs, and
> a camera roll. Competitors get a countdown to show day on top of it. The client is
> React Native (Expo); the API is Next.js with Prisma and PostgreSQL; photos live in
> private cloud storage. Built, shipped, and operated end to end in-house.

---

## Copy notes

- **Say "RatiOS," not "Ratios."** It's the product name and the capitalization is
  the point.
- **Drop the in-app tagline** ("The Operating System For Your Physique"). The rest
  of the Work section is plain and practical; a branded line would stick out.
- **Avoid "in production."** Visitors read it as *shipped, go look* — which is only
  safe once there's a real store link to click. Earlier draft copy used it while the
  app was still pre-TestFlight; that's the phrase to watch for.
- **This is the one entry with no client outcome claim.** Atalo and Sydney Forks
  lead with results ("bringing in memberships," "pulled in more inquiries"); this
  one leads with scope, like Peptide Depot. Once there are install or retention
  numbers worth citing, a result line beats a feature list.
- **The in-house angle is an asset.** It's the only project where Zappisoft owns
  the whole stack end to end, which backs up the "developer-led" claim in
  `DIFFERENTIATORS`. Worth a nod in the copy, not a whole paragraph.
- **Lead with physique tracking, not contest prep.** Competitors are the sharp end
  of the audience, not the whole of it — anyone running a serious cut or bulk wants
  the same daily loop. Opening on "contest-prep app" tells a non-competitor the app
  isn't for them by the third word. Show day stays in the copy, but as the thing
  competitors get *on top*, not the frame around everything.
- **Careful with "pose comparison."** It's competitor vocabulary. "Compare your
  physique across weeks" covers the same feature for both audiences. Keep the
  posing language for App Store copy aimed at competitors, where it's a selling
  point rather than a filter.

---

## Pre-flight checklist

Before adding the entry:

- [ ] **Public App Store URL.** TestFlight links don't count — they're invite-gated
      and builds expire after 90 days.
- [ ] **Screenshot pair** at `src/assets/ratios-screenshot.jpg` + `.webp`, sized to
      match the others (rendered at 1280×720 in `Work.jsx`). Capture these during
      TestFlight so this step isn't a blocker later.
- [ ] **Register the screenshot** in the `SCREENSHOTS` map in `src/sections/Work.jsx`
      — add the import pair and a `ratios` key, or the card falls back to the
      generic `<Code>` placeholder icon.
- [ ] **Check the section header** (`src/sections/Work.jsx`, "Real products we've
      shipped") is still accurate for every entry in the grid.
- [ ] **Update `public/sitemap.xml`** `lastmod` to the change date.

### If it ever goes in without an `href`

Safe as of 2026-08-19 — the "View project ↗" label is now guarded on `href` in
`Work.jsx`, so a linkless entry simply omits it instead of shipping a dead
affordance. The card still falls back to the generic `<Code>` placeholder icon
without a registered screenshot, so that part of the checklist still applies.
