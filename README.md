# FamePhuwamet Portfolio

A responsive personal portfolio built with React, TypeScript, and Tailwind CSS. It presents Phuwamet’s background, skills, experience, education, and projects, with contact and social links in the footer.

## Features

- Responsive navigation and portfolio sections for About, Skills, Experience, Education, and Projects.
- Resume content maintained as typed data in `src/data/resumeData.json`.
- Technology icons, images, and project badge colors configured separately in `src/data/technologies.json`.
- Project cards with links to live demos and repositories when those URLs are available.
- Footer email copy and `mailto:` actions, plus social media links.
- Hash-based routing for direct visits on GitHub Pages.

## Tech Stack

- React 18 and TypeScript
- Vite
- Tailwind CSS and DaisyUI
- React Router
- Font Awesome

## Getting Started

### Requirements

- Node.js 24 (the GitHub Actions deployment workflow builds with Node 24)
- npm

### Install and run locally

```bash
git clone https://github.com/FameNu/FameNu.github.io.git
cd FameNu.github.io
nvm install 24
nvm use 24
npm ci
npm run dev
```

Vite prints the local development URL in the terminal, usually `http://localhost:5173`.

## Available Commands

```bash
npm run dev       # Start the Vite development server
npm run build     # Type-check and create a production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Project Structure

```text
public/                  Static files, social icons, project images, tech stack images
src/
  components/            Portfolio sections and reusable UI components
  data/
    resumeData.json      Profile, experience, education, skills, and projects
    socialMedia.json     Social profile links
    technologies.json    Technology icons, colors, and badge styling
  layouts/               Main page layout
  models/                TypeScript data interfaces
  pages/                 Routed pages
  services/              Resume and technology data helpers
```

To update resume content, edit `src/data/resumeData.json`. To change a technology icon, image, or project badge colors, edit its entry in `src/data/technologies.json`. Local images belong in `public/`; reference them in the data with a root path such as `/techstacks/nextjs.png`.

## Deployment

The workflow in `.github/workflows/deploy.yml` deploys the site to GitHub Pages when changes are pushed to `main`, or when run manually. It installs dependencies with `npm ci`, builds with Node.js 24, and publishes the `dist/` directory. Vite uses `base: '/'` in `vite.config.ts` for the root-domain Pages site.
