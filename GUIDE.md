# Kanagawa Terminal Portfolio — Step-by-Step Guide

A self-paced guide for building your portfolio. Each phase lists the steps, the docs to read *before* starting, and a checkpoint so you know you're done. Write all JSX yourself — code snippets here are only for config/plumbing and reference values.

Run the dev server the whole time and check your work in the browser:

```bash
pnpm dev
```

---

## Phase 1 — Theme foundation (font + colors)

**Read first:**
- [next/font — Font Optimization](https://nextjs.org/docs/app/getting-started/fonts)
- [Tailwind v4 — Theme variables](https://tailwindcss.com/docs/theme) (especially the `@theme` directive)
- [Kanagawa palette reference](https://github.com/rebelot/kanagawa.nvim#color-palette) (the Wave variants)

### 1.1 Swap the font

In `app/layout.tsx`, replace Geist/Geist_Mono with `JetBrains_Mono` from `next/font/google` (ghostty's default font). Keep the CSS-variable approach the starter uses (`variable: "--font-jetbrains-mono"`), and make the whole site monospace by pointing Tailwind's `--font-mono` *and* `--font-sans` at it in `globals.css` (or just apply `font-mono` on `<body>`).

### 1.2 Define the Kanagawa Wave palette

In `app/globals.css`, replace the starter `:root` / `@theme inline` block with a Tailwind v4 `@theme` block. Every `--color-*` variable automatically becomes utilities like `bg-sumi-ink-1`, `text-fuji-white`, `border-sumi-ink-4`.

Reference values (Kanagawa Wave):

```css
@theme {
  --color-sumi-ink-0: #16161d;   /* darker bg (titlebar, floats) */
  --color-sumi-ink-1: #1f1f28;   /* main background */
  --color-sumi-ink-2: #2a2a37;   /* lighter bg (selection-ish) */
  --color-sumi-ink-4: #54546d;   /* borders */
  --color-wave-blue-2: #2d4f67;  /* selection background */
  --color-fuji-white: #dcd7ba;   /* main foreground */
  --color-old-white: #c8c093;    /* dimmer foreground */
  --color-fuji-gray: #727169;    /* comments / muted */
  --color-crystal-blue: #7e9cd8; /* functions / links */
  --color-spring-green: #98bb6c; /* strings / success */
  --color-carp-yellow: #e6c384;  /* identifiers */
  --color-sakura-pink: #d27e99;  /* numbers */
  --color-oni-violet: #957fb8;   /* keywords */
  --color-surimi-orange: #ffa066;/* constants */
  --color-wave-aqua-2: #7aa89f;  /* types */
  --color-peach-red: #ff5d62;    /* errors */
}
```

Then set the page background to `sumi-ink-1` and text to `fuji-white` (either on `<body>` via classes, or with a small `body { ... }` rule).

Also: gut `app/page.tsx` down to a placeholder (`<h1>hello</h1>`) and delete the starter SVGs in `public/` — you won't use them.

**Checkpoint:** dev server shows a dark `#1F1F28` page, cream text, monospace font, and a class like `text-crystal-blue` works on any element.

---

## Phase 2 — Terminal shell UI

**Read first:**
- [Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages) — how `layout.tsx` wraps every page via `children`
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) — when you need `"use client"`
- [Linking and Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating) — `<Link>`
- [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname) — for highlighting the active nav item

Open ghostty next to your browser and copy what you see: window corner radius, padding, title bar height, colors.

### 2.1 `app/ui/terminal-window.tsx`

A component that takes `children` and renders the ghostty frame:
- Outer wrapper: centers the window, maybe darker backdrop (`sumi-ink-0`).
- Window: rounded corners, `border-sumi-ink-4`, `bg-sumi-ink-1`, subtle shadow.
- Title bar: three dots (red/yellow/green circles — plain `<span>`s with `rounded-full`), centered title text like `hawk@dude — ghostty` in `fuji-gray`.
- Content area: padding, this is where `children` go.

This is a **server component** (no state, no events — no `"use client"` needed).

### 2.2 `app/ui/prompt.tsx`

A reusable prompt line: `hawk@dude ~/about ❯`. Take props like `path` and optional `command`. Color the segments differently (e.g. user@host in `spring-green`, path in `crystal-blue`, `❯` in `sakura-pink`). You'll use this as a "section header" on every page.

### 2.3 `app/ui/nav.tsx`

Nav links to `/`, `/about`, `/projects`, `/blog`, `/contact`, styled as terminal tabs or as paths (`~/about`). This one **needs** `"use client"` because `usePathname()` is a client hook. Highlight the active link (e.g. `text-carp-yellow` vs `text-fuji-gray`).

### 2.4 Wire into `app/layout.tsx`

Compose: `<TerminalWindow><Nav />{children}</TerminalWindow>` inside `<body>`. Update the `metadata` export with your real title/description while you're there ([Metadata docs](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)).

**Checkpoint:** every page renders inside the ghostty window with working nav; the active page is highlighted; only `nav.tsx` has `"use client"`.

---

## Phase 3 — Pages

**Read first:** nothing new — this phase is practicing props, mapping arrays to JSX, and composition. Skim [TypeScript in Next.js](https://nextjs.org/docs/app/api-reference/config/typescript) if typing props feels shaky.

Create `page.tsx` in your existing `app/about/`, `app/projects/` folders, plus a new `app/contact/`. Style each page as a terminal session: a `<Prompt>` line with a fake command, then the "output".

- **Home (`app/page.tsx`):** `<Prompt command="whoami" />` followed by a short intro. Links to projects/GitHub as output lines.
- **About:** `<Prompt command="cat about.md" />` + bio. Skills as an `ls`-style grid or list.
- **Projects:**
  1. Create `data/projects.ts` (repo root) exporting a typed array: `{ name, description, tech: string[], repoUrl, liveUrl? }`.
  2. Create `app/ui/project-card.tsx` taking one project as a prop.
  3. In the page, `projects.map(...)` over the data. Remember `key`.
- **Contact:** output-style lines for email / GitHub / socials. External links: plain `<a>` is fine (`<Link>` is for internal routes).

**Checkpoint:** all five routes work, projects come from the data file, nothing is hardcoded twice.

---

## Phase 4 — Deploy to GitHub Pages (do this before the blog!)

Deploying early with a half-finished site means you debug the pipeline while the site is simple.

**Read first:**
- [Static Exports](https://nextjs.org/docs/app/guides/static-exports) — what works and what doesn't with `output: "export"`
- [GitHub Pages — publishing with a custom workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

### 4.1 Configure static export

In `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

(`images.unoptimized` is required because the Image Optimization API needs a server. Since your repo is `hawk-dude.github.io`, the site serves from the domain root — **no `basePath` needed**.)

Run `pnpm build` and confirm an `out/` directory appears with `.html` files in it. Preview it with `npx serve out`.

### 4.2 GitHub Actions workflow

Create `.github/workflows/deploy.yml`: on push to `main`, run `pnpm install` + `pnpm build`, upload `out/` with `actions/upload-pages-artifact`, deploy with `actions/deploy-pages`. GitHub's docs above have a Next.js starter workflow you can adapt — the main changes are using pnpm (via `pnpm/action-setup`) and pointing the artifact at `out/`.

Then in the repo settings on GitHub: **Settings → Pages → Source: GitHub Actions**.

**Checkpoint:** pushing to `main` turns the Actions tab green and https://hawk-dude.github.io shows your site.

---

## Phase 5 — Blog (markdown posts)

The most instructive phase: filesystem reads at build time + dynamic routes.

**Read first:**
- [Dynamic Route Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) — the `[slug]` folder convention
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) — how dynamic routes become static HTML at build time
- [gray-matter README](https://github.com/jonschlinkert/gray-matter) — parsing frontmatter
- [react-markdown README](https://github.com/remarkjs/react-markdown) — rendering markdown as React

### 5.1 Content + parsing

```bash
pnpm add gray-matter react-markdown
```

- Create `content/posts/hello-world.md` with frontmatter (`title`, `date`, `description`) and some body text.
- Create `lib/posts.ts` with two functions: `getAllPosts()` (read `content/posts/` with `fs.readdirSync`, parse each file with `gray-matter`, return metadata + slug, sorted by date) and `getPost(slug)`. This runs at build time in server components, so using `fs` is fine.

### 5.2 Routes

- `app/blog/page.tsx`: list posts from `getAllPosts()` — prompt line like `ls ~/blog`, then each post as a row (title, date, description) linking to `/blog/[slug]`.
- `app/blog/[slug]/page.tsx`:
  - Export `generateStaticParams()` returning `[{ slug }, ...]` for every post — required for static export.
  - The page component receives `params` (a Promise in Next 16 — `await` it), loads the post, renders frontmatter + `<ReactMarkdown>{content}</ReactMarkdown>`.
  - Style the markdown output: either hand-style with a wrapper class + CSS, or `pnpm add @tailwindcss/typography` and use `prose prose-invert` with your palette.

**Checkpoint:** `pnpm build` succeeds and `out/blog/hello-world/index.html` exists; the post renders styled on the live site after pushing.

---

## Phase 6 — Polish (optional, pick what sounds fun)

- Typing animation on the home page prompt (your first `useEffect` + `setInterval` client component).
- Blinking block cursor (`▌`) after prompts — pure CSS `@keyframes`.
- A visible scrollbar styled like a terminal (`::-webkit-scrollbar` + `sumi-ink` colors).
- `not-found.tsx` styled as `command not found: ...` ([docs](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)).
- Favicon: replace `app/favicon.ico` with something terminal-y.
- Open Graph metadata per page so links preview nicely.

---

## Reference: docs index

| Topic | Link |
|---|---|
| App Router fundamentals | https://nextjs.org/docs/app/getting-started |
| Fonts | https://nextjs.org/docs/app/getting-started/fonts |
| Server/Client components | https://nextjs.org/docs/app/getting-started/server-and-client-components |
| Metadata | https://nextjs.org/docs/app/getting-started/metadata-and-og-images |
| Dynamic routes | https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes |
| generateStaticParams | https://nextjs.org/docs/app/api-reference/functions/generate-static-params |
| Static export | https://nextjs.org/docs/app/guides/static-exports |
| Tailwind v4 theming | https://tailwindcss.com/docs/theme |
| Kanagawa palette | https://github.com/rebelot/kanagawa.nvim |
| GitHub Pages workflows | https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages |
