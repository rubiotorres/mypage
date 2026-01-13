# Rubio Viana — Portfolio

Personal portfolio built with Create React App (React 16) and deployed to GitHub Pages.

## Quick start

- Install: `npm install`
- Dev server: `npm start`
- Production build: `npm run build`
- Deploy to GitHub Pages: `npm run deploy`

## Project structure

- `src/App.js`: App shell (language state, section wiring, PixelAvatar scroll logic)
- `src/content/content.js`: UI copy + section content (PT/EN) and education details
- `src/profile.js`: Profile data (experience, education, skills, contacts)
- `src/components/`: Reusable UI components
- `src/components/sections/`: Page sections (Hero, Highlights, About, Skills, etc.)
- `src/hooks/useScrollStage.js`: Scroll progress + active section tracking
- `src/utils/`: Small utilities and formatters
- `src/PixelAvatar.js`: Pixel avatar sprite + dock behavior
- `public/`: Static assets (`favicon.svg`, `index.html`, `manifest.json`)

## Editing content

- **Profile data (experience/education/skills/contacts):** `src/profile.js`
- **UI copy and section text (PT/EN):** `src/content/content.js`
  - `COPY`: general UI strings
  - `HIGHLIGHTS_BY_LANG`: “Highlights” cards
  - `ABOUT_STORY_BY_LANG`: single “About” story (PT/EN)
  - `SKILL_DETAILS`: skill descriptions (PT/EN)

## Language switching (PT/EN)

The UI runs with a simple language state (`pt`/`en`) in `src/App.js`.
Texts live in `src/content/content.js` and are selected by `lang`.

## Accessibility

- Skip link points to the main content (`#content`)
- Interactive areas use semantic buttons/links
- Pixel avatar is keyboard-focusable when interactive

## Scripts

- `npm start`: Run locally (hot reload)
- `npm test`: Run unit tests (Jest + Testing Library)
- `npm run build`: Create production build
- `npm run deploy`: Deploy `build/` to GitHub Pages via `gh-pages`

## Notes

- This repo intentionally keeps Portuguese and English copy for the UI. The source code (identifiers/modules) is kept in English.

