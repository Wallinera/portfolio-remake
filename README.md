# Emirhan Karagoz Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and MongoDB-ready server actions. The site presents featured projects, a detailed skills section, downloadable documents, and a development console for seeding portfolio data into MongoDB during local development.

## Preview

GitHub does not reliably render embedded video tags inside `README.md`.

[Watch the portfolio preview video](./public/previewVideo.mp4)

## Highlights

- Multi-page portfolio with dedicated home, about, projects, project detail, skills, and contact routes
- Static portfolio content stored in [`lib/portfolio-data.ts`](./lib/portfolio-data.ts)
- Development-only `/dev` console for seeding and upserting projects and skills into MongoDB
- Revalidation after write actions so portfolio pages stay in sync with seeded data
- Downloadable CV and language certificates served from `public/assets/portfolio/documents`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- MongoDB with Mongoose

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
MONGODB_URI=your_mongodb_connection_string
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run start` serves the production build
- `npm run lint` runs ESLint

## Data Flow

The public portfolio currently reads from in-repo data in [`lib/portfolio-data.ts`](./lib/portfolio-data.ts). MongoDB support is already wired in for local development through the `/dev` route:

- Seed all portfolio projects and skills into MongoDB
- Upsert a single project
- Upsert a single skill

If `MONGODB_URI` is missing, the public site still works with static data, but database actions stay unavailable.

## Project Structure

```text
app/                    App routes and layouts
components/portfolio/   Portfolio UI and dev console forms
lib/                    Portfolio content, types, theme, and MongoDB helpers
models/                 Mongoose models
public/                 Static assets, documents, images, and preview video
```

## Notes

- The `/dev` route is disabled automatically in production.
- Portfolio documents and project imagery live under `public/assets/portfolio/`.
