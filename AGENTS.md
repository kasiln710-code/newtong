# Project Knowledge Base

## Project Overview

- **Name**: newtong
- **Type**: Next.js Web Application
- **Framework**: Next.js 16.2.6 with React 19.2.4
- **Language**: TypeScript (strict mode enabled)

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Next.js 16.2.6 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4
- **Type System**: TypeScript 5.x
- **Linting**: ESLint 9
- **Fonts**: Geist (sans + mono)

## Directory Structure

```
newtong/
├── app/                  # Next.js App Router pages
├── public/               # Static assets
├── node_modules/         # Dependencies
├── .sisyphus/            # Sisyphus/Ultrawork config
│   ├── plans/            # Work plans storage
│   └── run-continuation/ # Session continuation data
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── next.config.ts        # Next.js config
├── postcss.config.mjs    # PostCSS config (Tailwind)
├── eslint.config.mjs      # ESLint config
└── README.md             # Project documentation
```

## TypeScript Configuration

- **Strict Mode**: Enabled
- **Module Resolution**: Bundler
- **Path Alias**: `@/*` maps to `./*` (project root)
- **Target**: ES2017

## Code Patterns

### Layout

- Root layout (`app/layout.tsx`) uses Geist fonts with CSS variables
- Global CSS imported in layout (`app/globals.css`)
- Dark mode support via Tailwind classes

### Components

- Server Components by default (no "use client" directive)
- Use `next/image` for optimized images
- CSS classes use Tailwind utility classes

### Styling

- Tailwind CSS v4 with CSS variables
- Dark mode: `dark:bg-black`, `dark:text-zinc-50`
- Responsive: `sm:`, `md:`, etc.

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Entry Points

- Main page: `app/page.tsx` (Home component)
- Root layout: `app/layout.tsx` (RootLayout)
- Global styles: `app/globals.css`

## Notes

- This is a standard create-next-app scaffold
- No custom patterns or conventions beyond Next.js defaults
- Tailwind v4 uses new CSS-first configuration approach