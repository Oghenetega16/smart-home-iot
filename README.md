# Smart Home IoT Security Dashboard

A production-grade smart home IoT security dashboard built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- 📷 **Camera monitoring** — Live camera list with per-camera on/off toggles
- 🔒 **Smart lock control** — Lock/unlock doors, monitor battery levels
- 🏠 **Interactive floor plan** — 3D house visualization with IoT sensor hotspots
- 👥 **Member management** — Household member presence indicators
- 📅 **Activity feed** — Timeline of security events with calendar navigation
- ♿ **Accessible** — Full ARIA roles, keyboard navigation, focus management

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Utilities | clsx + tailwind-merge |
| Animations | CSS custom animations |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Project Structure

```
smart-home-iot/
├── app/
│   ├── globals.css          # Tailwind v4 + design tokens (@theme)
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── layout/
│   │   └── TopNav.tsx       # Top navigation bar
│   ├── cameras/
│   │   ├── CameraCard.tsx   # Individual camera card with toggle
│   │   └── CamerasPanel.tsx # Camera list panel
│   ├── locks/
│   │   ├── LockCard.tsx     # Individual lock card with controls
│   │   └── LocksPanel.tsx   # Locks panel
│   ├── dashboard/
│   │   └── MainHouseView.tsx # Center house illustration
│   └── security/
│       └── SecurityPanel.tsx # Right panel: members + activity
├── lib/
│   └── data.ts              # Mock data + cn() utility
├── types/
│   └── index.ts             # TypeScript interfaces
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Design System

All design tokens are in `app/globals.css` via Tailwind v4's `@theme {}`:

```css
@theme {
  --color-mint: #6ee7b7;
  --color-accent: #10b981;
  --color-surface: #f8f9fb;
  --font-display: "DM Sans", sans-serif;
  --radius-card: 20px;
  --shadow-card: 0 2px 16px 0 rgba(15, 17, 23, 0.06);
  /* ... */
}
```

## Accessibility

- Semantic HTML5 elements (`<header>`, `<main>`, `<aside>`, `<section>`, `<article>`)
- ARIA roles: `role="switch"` for toggles, `role="tablist"` for floor selector, `role="feed"` for activity
- `aria-label` on all interactive elements
- `aria-checked` on toggle switches
- `aria-valuenow/min/max` on battery progress bars
- `:focus-visible` outline for keyboard navigation

## Performance

- Server Components by default (only interactive pieces use `'use client'`)
- No unnecessary client-side state
- CSS-only animations (no JS animation library)
- Minimal bundle: icons tree-shaken from lucide-react

## Customization

Replace mock data in `lib/data.ts` with your real API calls. Each component accepts typed props matching `types/index.ts`.
