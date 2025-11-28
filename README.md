# Plutus Labs

A modern web application built with Next.js, featuring an explorer interface for blockchain or financial data visualization.

## Tech Stack and Decisions

- **Framework**: Next.js 16 - Chosen for its App Router, server-side rendering, and excellent performance optimizations.
- **Frontend**: React 19 with TypeScript - Provides type safety and modern React features like concurrent rendering.
- **Styling**: Tailwind CSS v4 - Utility-first CSS framework for rapid UI development and consistent design.
- **Icons**: Lucide React - Clean, customizable SVG icons that integrate seamlessly with Tailwind.
- **Linting**: ESLint with Next.js config - Ensures code quality and consistency.
- **Build Tool**: Next.js built-in bundler - Optimized for production with automatic code splitting and image optimization.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd plutus-labs
```

2. Install dependencies:
```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The app will auto-reload as you make changes to the code.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Home page
  - `explorer/page.tsx` - Explorer interface
  - `layout.tsx` - Root layout
- `public/` - Static assets
- `components/` - Reusable React components (if any)

## Known Trade-offs and Future Improvements

### Trade-offs
- **Latest Versions**: Using cutting-edge versions of Next.js (16) and React (19) may introduce occasional instability or breaking changes, but provides access to the latest features and performance improvements.
- **Tailwind v4**: While powerful, the newer version may have fewer community resources compared to v3.

### Future Improvements
- Add comprehensive error handling and loading states
- Implement data caching and state management (e.g., Zustand or Redux)
- Add unit and integration tests with Jest and React Testing Library
- Implement CI/CD pipeline for automated testing and deployment
- Add internationalization (i18n) support
- Optimize for mobile devices and accessibility
- Add API routes for backend functionality
- Implement user authentication and authorization

## Live URL

The application is deployed at: [https://plutus-labs-eight.vercel.app](https://plutus-labs-eight.vercel.app) (placeholder - update with actual deployment URL)


## License

This project is private and proprietary.
