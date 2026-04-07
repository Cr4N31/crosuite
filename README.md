# Crosuite — Web3 Discord Bot Landing Page

A clean, minimalist marketing site for **Crosuite**, a Discord bot that brings Web3 tools directly into communities. Built with React, Vite, and Tailwind CSS.

---

## Overview

Crosuite is a Discord bot that allows communities to manage tokens, NFTs, rewards, and engagement systems without leaving Discord. This repository contains the landing page — a four-page marketing site covering features, commands, and project transparency.

**Pages:**
- **Home** — hero, feature overview, about section, CTA
- **Features** — full feature breakdown and roadmap
- **Control Panel** — all bot commands with step-by-step usage
- **Transparency** — fund allocation and project commitments

---

## Tech Stack

- **React** — UI library
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **React Router DOM** — client-side routing
- **AOS** — scroll animations

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation
```bash
# clone the repo
git clone https://github.com/your-username/crosuite.git

# navigate into the project
cd crosuite

# install dependencies
npm install

# start the dev server
npm run dev
```

App runs at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

---

## Content Updates

All site content lives in `src/data/` — no need to touch components to update copy.

| File | What it controls |
|---|---|
| `features.js` | Feature titles, descriptions, bullet points |
| `commands.js` | Command categories, individual commands, steps |
| `fundAllocation.js` | Fund percentages, directions, commitments |

---

## Background Images

Place images in `public/assets/`. Avoid spaces in filenames — use hyphens (e.g. `hero-bg.jpeg`). Reference them as `/assets/your-image.jpeg`.

---

## Contact

Built by Yacham Duniya(CRAN3) — cran3.js.dev@gmail.com