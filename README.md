# 🎧 SvelteKit Spotify Project

A modern Spotify-style app built with SvelteKit, TypeScript, TailwindCSS, and full testing coverage using ViTest and Playwright. Spotify API is used to pull real data.

This project demonstrates clean architecture, fast reactivity, and a polished developer experience — designed as a showcase for real-world frontend skills.

## 🚀 Tech Stack

- SvelteKit — lightning-fast frontend framework
- Vite — next-gen build tool (used under the hood by SvelteKit)
- TypeScript — typed safety and clarity
- TailwindCSS — utility-first styling
- ViTest — component and logic testing
- Playwright — end-to-end browser testing
- ESLint + Prettier — consistent code formatting and linting

## 📦 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
```

### 2. Start Dev Server

```bash
npm run dev --open
```

Then open your browser to http://localhost:5173 (or it opens automatically with --open).

## 🧪 Testing

### ✅ Unit & Component Tests (ViTest)

```bash
npm run test
```

### ✅ End-to-End Tests (Playwright)

```bash
npx playwright install
npm run test:e2e
```

Playwright will simulate user flows like adding songs, navigating playlists, and checking responsive behavior.

## 🏗️ Building for Production

```bash
npm run build
```

Then preview your optimized app with:

```bash
npm run preview
```

> 🔧 For deployment, install the correct SvelteKit adapter based on your hosting platform (Vercel, Netlify, Node, etc.).

## 🛠️ Dev Tools & VS Code Extensions

For the best developer experience, install:

- Svelte for VS Code
- ESLint
- Prettier

Svelte Dev Society also curates some great tools:
🔗 Editor Support & Resources

## 💻 System Requirements

- Node.js: >=18.0.0
- npm: >=9.0.0

> You can check your versions with:

```bash
node -v
npm -v
```

## 🙋‍♂️ Why This Project Exists

-
