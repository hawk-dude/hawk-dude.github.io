---
title: hawk-dude.github.io
author: Oleksandr Yastrebov (oleksandr.yastrebov.ca@gmail.com)
date: Summer 2026
---

# Overview

Personal portfolio styled as a ghostty terminal running the Kanagawa Wave colorscheme.
The whole site lives inside a floating terminal window: tab-bar navigation, oh-my-posh
style prompts as section headers, a fastfetch intro on the home page, and a statusline
footer with contact links.

Live at [hawk-dude.github.io](https://hawk-dude.github.io/).

## Pages

| Route | Session |
|-------|---------|
| `/` | `fastfetch` — profile photo, PC specs, bio, favourites |
| `/about` | `cat bio.md`, `ls work/`, `ls education/`, `ls certifications/` |
| `/projects` | `ls -l` — project cards with keyword tags |
| `/contact` | `cat contact.txt` — email, GitHub, LinkedIn |

## Resources

### Next.js
- [App Router fundamentals](https://nextjs.org/docs/app/getting-started)
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Static Exports](https://nextjs.org/docs/app/guides/static-exports)
- [next/font](https://nextjs.org/docs/app/getting-started/fonts)

### UI
- [Tailwind CSS v4 theme variables](https://tailwindcss.com/docs/theme)
- [Kanagawa colorscheme](https://github.com/rebelot/kanagawa.nvim)
- [Ghostty terminal](https://ghostty.org/)
- [oh-my-posh night-owl theme](https://ohmyposh.dev/docs/themes) (prompt design reference)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

### Deployment
- [GitHub Pages with custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

### Documentation
- [README template](https://github.com/othneildrew/Best-README-Template)
- [Step-by-step build guide](GUIDE.md)

## Built with

[![Next.js][nextjs-icon]][nextjs-url]
[![React][react-icon]][react-url]
[![TypeScript][typescript-icon]][typescript-url]
[![TailwindCSS][tailwind-icon]][tailwind-url]
[![pnpm][pnpm-icon]][pnpm-url]
[![GitHub Actions][actions-icon]][actions-url]

## Software Requirements

- Node.js 20.19+ (Next.js 16 requirement)
- pnpm 9+ (`corepack enable` or install standalone)

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/hawk-dude/hawk-dude.github.io.git
    cd hawk-dude.github.io
    ```
2. Install dependencies
    ```bash
    pnpm install
    ```

## Running

1. Development server (hot reload)
    ```bash
    pnpm dev
    ```
2. [localhost:3000](http://localhost:3000)
3. Production build — static export into `out/`
    ```bash
    pnpm build
    ```
4. Preview the static build locally
    ```bash
    npx serve out
    ```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
build with pnpm, static export to `out/`, publish via `actions/deploy-pages`.
GitHub Pages source must be set to **GitHub Actions** in the repository settings.

## Tested on

- development setup:
    - OS: Arch Linux x86_64
    - nodejs: v26.4.0
    - pnpm: 11.13.0
- CI/CD - GitHub Actions
    - OS: Ubuntu LTS (ubuntu-latest)
    - nodejs: v22
    - pnpm: 10

## Project Structure

```
app/
  layout.tsx          # root layout: font + terminal window shell
  page.tsx            # home (fastfetch)
  globals.css         # Kanagawa Wave palette (Tailwind @theme)
  about/ projects/ contact/
  lib/                # typed data: definitions.ts, data.ts, site.ts
  ui/                 # terminal-window, nav, prompt, footer, cards
public/assets/img/    # logos, badges, profile photo
```

## AI Usage

- **Code and content** were written with [Cursor](https://cursor.com/) using Claude,
  designed and reviewed by me.

<!-- MARKDOWN LINKS & IMAGES -->
[nextjs-icon]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs
[nextjs-url]: https://nextjs.org/

[react-icon]: https://img.shields.io/badge/react-000000?style=for-the-badge&logo=react
[react-url]: https://react.dev/

[typescript-icon]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript
[typescript-url]: https://www.typescriptlang.org/

[tailwind-icon]: https://img.shields.io/badge/tailwindcss-000000?style=for-the-badge&logo=tailwindcss
[tailwind-url]: https://tailwindcss.com/

[pnpm-icon]: https://img.shields.io/badge/pnpm-000000?style=for-the-badge&logo=pnpm
[pnpm-url]: https://pnpm.io/

[actions-icon]: https://img.shields.io/badge/github_actions-000000?style=for-the-badge&logo=githubactions
[actions-url]: https://docs.github.com/en/actions
