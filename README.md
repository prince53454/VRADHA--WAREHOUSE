# Vardha Warehousing

A static marketing website for a warehouse and logistics business, built with React and Vite. The app includes service pages, client information, solutions, facility details, a calculator, FAQs, contact information, and modal-driven content.

## Project location

The application source is inside the [`VRADHA-JS`](./VRADHA-JS) folder.

## Tech stack

- React 19
- Vite
- JavaScript / JSX
- CSS
- Tailwind CSS 4
- Node.js and npm

## Prerequisites

- Node.js 18 or newer
- npm

## Installation

From this folder, open a terminal and run:

```bash
cd VRADHA-JS
npm install
```

## Run locally

```bash
npm run dev -- --host 0.0.0.0 --port 4173
```

Then open `http://localhost:4173/` in a browser.

## Production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview -- --host 0.0.0.0 --port 4173
```

## Project structure

The main application files are organized as follows:

- `VRADHA-JS/index.html` — application entry HTML
- `VRADHA-JS/package.json` — project scripts and dependencies
- `VRADHA-JS/vite.config.js` — Vite configuration
- `VRADHA-JS/public/images/` — public image assets
- `VRADHA-JS/src/App.jsx` — main application component
- `VRADHA-JS/src/main.jsx` — React entry point
- `VRADHA-JS/src/index.css` — global styles
- `VRADHA-JS/src/components/` — reusable modals, header, and footer
- `VRADHA-JS/src/data/` — page and warehouse data
- `VRADHA-JS/src/screens/` — website screens and page sections

## Notes

- This project does not use TypeScript.
- The app is organized as a marketing site with reusable components, data files, and screen components.
- Custom styling is primarily defined in `VRADHA-JS/src/index.css`.

## Useful commands

Run these commands from the `VRADHA-JS` folder:

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 4173
npm run build
npm run preview -- --host 0.0.0.0 --port 4173
```
