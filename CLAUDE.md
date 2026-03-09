# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Circuit Court is a Nuxt 4 application for discovering local producers ("circuit court") in the Marche-en-Famenne region (Belgium). It displays producers on an interactive map with filtering by locality, sector/filière, and tags.

## Commands

- **Dev server:** `npm run dev` (runs on http://localhost:3000)
- **Build:** `npm run build`
- **Preview production build:** `npm run preview`
- **Generate static:** `npm run generate`

No test framework is configured.

## Architecture

### Data Flow

The app is a frontend for the **Bottin API** (configured via `API_URL` env var, currently `https://bottin2.marche.be/api/bottin`). All producer data comes from this external API — there is no local database.

Key API endpoints used:
- `POST /map/update` — main search with filters (locality, tags, coordinates)
- `/map/search` — get all filters/facets
- `/bottin/fichebyslugname/{slug}` — single producer detail
- `/bottin/tagbyslug/{slug}` — tag info

### Composables (data fetching)

Each composable wraps a `useFetch` call to the Bottin API:
- `updateSearchGet.ts` — POST search with filter args (main listing)
- `filtersGet.ts` — fetch available filters
- `shopGet.ts` — fetch single producer by slug
- `tagGet.ts`, `offerGet.ts` — fetch tag/offer data
- `manageFilters.ts`, `stringUtils.ts` — utility functions

### Pages (file-based routing)

- `/` — main map view with filters and producer list
- `/acteur/[slug]` — individual producer page
- `/filiere/[slug]` — filter by sector
- `/localite/[slug]` — filter by locality
- `/geolocalisation` — geolocation page
- `/about` — about page

### Map (Leaflet)

Leaflet is loaded as a **client-only plugin** (`plugins/leaflet.ts`) to avoid SSR `window is not defined` errors. It provides `$L` and `$Icon` via `useNuxtApp()`. The `MapComponent.vue` uses Google Maps tiles with `leaflet.markercluster` for grouping markers.

### Server

`server/routes/sitemap.js` — generates XML sitemap by fetching all producers and filters from the API.

## Styling

- **TailwindCSS** with custom `carto` color palette (main: `#354254`, pink: `#bd2d86`, green: `#bdc900`)
- Custom fonts: Roboto (body) and Lobster Two (decorative)
- Tailwind plugins: typography, forms, animated, intersect

## Environment Variables

Configured in `.env` and exposed via `runtimeConfig.public` in `nuxt.config.ts`:
- `API_URL` — Bottin API base URL
- `BOTTIN_URL` — Bottin frontend URL (used for icons, PDF export)
- `SITE_URL` — canonical site URL
- `VISIT_URL` — link to visitmarche.be
- `NUXT_APP_BASE_URL` — base path
