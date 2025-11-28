# Plutus Labs

A Next.js project that implements a marketing-style homepage and an `explorer` page which fetches data from a public API. The repository is scaffolded to be easy to run and extend.

## Tech Stack and Decisions

- **Framework**: Next.js 16 - Chosen for its App Router, server-side rendering, and excellent performance optimizations.
- **Frontend**: React 19 with TypeScript - Provides type safety and modern React features like concurrent rendering.
- **Styling**: Tailwind CSS v4 - Utility-first CSS framework for rapid UI development and consistent design.
- **Icons**: Lucide React - Clean, customizable SVG icons that integrate seamlessly with Tailwind.
- **Linting**: ESLint with Next.js config - Ensures code quality and consistency.
- **Build Tool**: Next.js built-in bundler - Optimized for production with automatic code splitting and image optimization.


## Quick Start (Windows PowerShell)

Prerequisites:
- Node.js 18+ and a package manager (`npm`, `yarn`, or `pnpm`).

Install and run locally:

```powershell
npm install
npm run dev
```

Open http://localhost:3000 and http://localhost:3000/explorer

## What’s included

- Next.js App Router (`app/`)
- Global styles in `app/globals.css`
- Componentized homepage sections in `app/components/`
- `app/explorer/page.tsx` — client page that fetches posts from JSONPlaceholder with loading, error, empty states and client-side search

## Project structure

Top-level files
- `package.json` — scripts & dependencies
- `next.config.ts` — Next.js configuration (if present)
- `tsconfig.json` — TypeScript config (if present)

Key folders
- `app/` — Next.js App Router
  - `page.tsx` — Home page (imports components from `app/components/`)
  - `layout.tsx` — Root HTML layout and global font imports
  - `globals.css` — Global CSS (styles used by components)
  - `explorer/` — Explorer route
    - `page.tsx` — Client component that fetches public API data
- `app/components/` — UI sections extracted from `page.tsx` (server components)
  - `Navbar.tsx`
  - `HeroSection.tsx`
  - `Comparison.tsx`
  - `Features.tsx`
  - `FAQ.tsx`
  - `Footer.tsx`
- `public/` — Static assets (images, icons)

## Explorer page

- Route: `/explorer`
- Fetches: `https://jsonplaceholder.typicode.com/posts` (first 50 items)
- UI: shows loading indicator, error panel with retry, empty state, and a client-side search input to filter posts.

## Notes and troubleshooting

- If you see missing icon errors, install the icons package used in the project:

```powershell
npm install lucide-react
```

- If styles don’t show, ensure `app/layout.tsx` imports `./globals.css`.

## Live URL

The application is deployed at: [https://plutus-labs-eight.vercel.app](https://plutus-labs-eight.vercel.app)


## License

This project is private and proprietary.
