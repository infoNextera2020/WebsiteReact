# NextEra Education — Website

The official website for **NextEra Education**, built with React, TypeScript, Vite, and Tailwind CSS v4.

---

## Prerequisites

Before you start, make sure you have the following installed:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v18 or higher | [nodejs.org](https://nodejs.org) |
| pnpm | v8 or higher | See below |

**Install pnpm** (if you don't have it):
```bash
npm install -g pnpm
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <repo-folder>
```

### 2. Install dependencies

Run this from the **root** of the project (not inside any subfolder):

```bash
pnpm install
```

> The lockfile is already resolved — this should complete without errors.

### 3. Start the dev server

```bash
cd artifacts/nextera-website
pnpm dev
```

Then open your browser at: **http://localhost:5173**

---

## Project Structure

```
├── artifacts/
│   └── nextera-website/        ← Main website (React + Vite)
│       ├── src/
│       │   ├── App.tsx          ← All pages & routing
│       │   ├── index.css        ← Design system & styles
│       │   └── components/
│       │       ├── nextera/     ← Site layout (Header, Footer, etc.)
│       │       └── ui/          ← Reusable UI components
│       └── vite.config.ts
├── lib/                         ← Shared libraries
├── pnpm-workspace.yaml          ← Monorepo workspace config
└── package.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/academy` | 01 Coding Academy program details + application form |
| `/about` | About NextEra, vision, mission, board of trustees |
| `/faq` | Frequently asked questions |

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — dev server & bundler
- **Tailwind CSS v4** — styling
- **Wouter** — client-side routing
- **TanStack Query** — data fetching
- **Lucide React** — icons
- **pnpm** — package manager (monorepo workspace)

---

## Making Changes

The entire website lives in a single file for easy editing:

- **Pages & content** → [`artifacts/nextera-website/src/App.tsx`](./artifacts/nextera-website/src/App.tsx)
- **Styles & design tokens** → [`artifacts/nextera-website/src/index.css`](./artifacts/nextera-website/src/index.css)
- **Header, Footer, Nav** → [`artifacts/nextera-website/src/components/nextera/site.tsx`](./artifacts/nextera-website/src/components/nextera/site.tsx)

---

## Common Issues

### `pnpm: command not found`
Install pnpm globally: `npm install -g pnpm`

### Port 5173 already in use
Another app is using that port. Either stop it or change the port in `artifacts/nextera-website/vite.config.ts`:
```ts
server: {
  port: 3000, // change to any free port
}
```

---

## Notes

> This project was originally built on Replit and downloaded as a zip.
> The config files have been updated to work locally on Windows, macOS, and Linux.
