## Quick orientation for AI coding agents — pixel-perfect-polish-11

This repository is a Vite + React + TypeScript + Tailwind site. The goal of edits is to change source files under `src/`, run the normal build (`npm run build`) and produce a static `dist/` ready to upload.

Keep edits small, test locally, and avoid changing `dist/` or committed build artifacts unless asked.

Key pointers (what I learned from the codebase):

- Project entry points
- `src/main.tsx` mounts `<App />` into `#root`.
- `src/App.tsx` wires up `react-query`, `TooltipProvider`, `Toaster` and `BrowserRouter` routes. Add new pages by creating a component and adding a `<Route />` here.

- Page composition
- `src/pages/Index.tsx` composes the whole landing page using sections from `src/components/`:
  - `Header`, `Hero`, `About`, `Counter`, `Capabilities`, `Production`, `Experience`, `Partners`, `Contacts`, `Footer`.
- To change content, edit the corresponding component in `src/components/` (they are plain .tsx components).

- UI primitives and design system
- `src/components/ui/` contains wrappers and shadcn-like components (Radix wrappers, toasters, tooltips, etc.). Prefer modifying these primitives when changing shared behavior.
- Design tokens (colors, radius, etc.) are defined as CSS variables at the top of `src/index.css`.
- Google Fonts must be imported before Tailwind directives — see `src/index.css` (the repo enforces this ordering).

- Build & dev commands
- Dev: `npm install` then `npm run dev` (Vite on port 8080 by default).
- Production build: `npm run build` → static output in `dist/`.
- Preview: `npm run preview` or serve `dist/` with any static server.

- Tooling & configs
- `vite.config.ts` uses `@vitejs/plugin-react-swc` and defines alias `@` → `src/`.
- `tailwind.config.ts` lists content globs; it includes `./app` and `./pages` (legacy from some templates) but actual code lives in `src/`.
- `tsconfig.json` uses path alias `@/*` → `src/*`.

- Static assets
- `public/` files are served at site root (`/favicon.ico`, `robots.txt`). Use `/favicon.ico` in `index.html`.
- Do not edit files inside `dist/` — always edit source and rebuild.

- Common patterns & gotchas
- Single-file sections: many sections are self-contained components (e.g., `src/components/Hero.tsx`). They import UI primitives from `src/components/ui/`.
- Routing: `App.tsx` holds client-side routes (React Router v6). Add custom routes above the catch-all `*` route.
- Avoid committing build artifacts: the repo currently contains `site-dist.zip` in `main` — avoid duplicating built outputs in future commits.
- CSS ordering: `@import` statements must be before `@tailwind` directives — builds will warn/fail otherwise.

- Dependency notes
- The project uses `npm` and includes `package-lock.json`. Use `npm` for consistency with CI unless the maintainers prefer `bun`.
- Some dependencies may be slightly unusual (e.g., React `^18.3.1`). If updating deps, run `npm run build` and test visually.

- Quick examples
- Add a new page component and route:
  - Create `src/pages/ContactUs.tsx` exporting default component.
  - In `src/App.tsx` add: `<Route path="/contact" element={<ContactUs />} />` above the `*` route.

- Update favicon:
  - Edit `index.html` `<link rel="icon" href="/favicon.ico">` and replace `/favicon.ico` asset in `public/`.

- What to run locally (copy/paste):
```zsh
cd /path/to/repo
npm install
npm run dev   # for development
npm run build # create dist/
npm run preview # optional preview
```

If anything in these notes is inconsistent with the repo state, update this file. If you need a longer onboarding, ask and I'll expand with component maps and example edit/PR workflow.

---
Files & locations referenced in these instructions:
- `src/App.tsx`, `src/main.tsx`, `src/pages/Index.tsx`
- `src/components/*`, `src/components/ui/*`
- `src/index.css`, `tailwind.config.ts`, `vite.config.ts`, `package.json`
