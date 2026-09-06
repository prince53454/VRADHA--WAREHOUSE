# Vardha Warehousing

A static marketing website for a warehouse and logistics business, built with React and Vite. The site includes service pages, client information, solutions, facility details, a space calculator, FAQs, contact information, and modal-driven content.

## Tech stack

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| UI           | React 19 (JSX)                          |
| Build tool   | Vite 6                                  |
| Styling      | Tailwind CSS 4 + custom CSS             |
| Language     | JavaScript (no TypeScript)              |
| Runtime      | Node.js 18+ and npm                     |

## Getting started

**Prerequisites:** Node.js 18 or newer and npm.

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview
```

By default the dev server runs on `http://localhost:3000/`.

## Project structure

```
.
├── index.html            # Application entry HTML
├── package.json          # Project scripts and dependencies
├── vite.config.js        # Vite configuration
├── public/
│   └── images/           # Public image assets
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Main application component
    ├── index.css         # Global styles (incl. custom styling)
    ├── components/       # Reusable modals, header, and footer
    ├── data/             # Page and warehouse data
    └── screens/          # Website screens and page sections
```

## Screens

- Home
- About
- Facility
- Solutions
- Clients
- Use cases
- Calculator (space / pricing estimator)
- FAQ
- Contact

## Notes

- Custom styling is primarily defined in `src/index.css`.
- This project does not use TypeScript.
