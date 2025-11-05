## Project info

**URL**: https://lovable.dev/projects/5434ae1d-535b-480f-842a-a04f1b9acd6b

# Vite React site 

This repository is a Vite + React + TypeScript + Tailwind project. The Lovable boilerplate has been removed.

Quick local workflow

- Install dependencies:

```zsh
cd /Users/macbook/chip-site2/pixel-perfect-polish-11
npm install
```

- Start dev server (hot reload):

```zsh
npm run dev
```

- Create a production build (output in `dist/`):

```zsh
npm run build
```

After `npm run build`, the static site is ready in `dist/` and can be uploaded to any static-hosting or served by a web server.

Project layout highlights

- `src/pages/Index.tsx` — single-page composition: imports header, hero, about, footer and other sections.
- `src/components/*` — page sections (Header, Hero, About, etc.).
- `src/components/ui/*` — UI primitives (shadcn/radix wrappers) used across components (`toaster`, `tooltip`, `sidebar`).
- `src/hooks` and `src/lib/utils.ts` — small utilities and hooks used by components.
- `public/` — static assets (favicon, robots.txt).

Notes

- Favicon files are served from `/favicon.ico` (Vite `public/` is served at the site root).
- `lovable-tagger` integration and references were removed from the build configuration.
- Use `npm` commands above to build. If you prefer `bun`, you can run `bun install` and `bun run build`, but this README uses `npm`.

If anything in this README looks off for your environment, tell me and I'll adjust it.
- Select the "Codespaces" tab.
