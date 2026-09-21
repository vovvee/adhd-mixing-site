# ADHD Mixing

A fast, responsive portfolio site for **ADHD Mixing** — mixing, vocal production, and project mixing.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Deployment

The project is configured for the `adhd-mixing-site` repository. Pushing `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys it to GitHub Pages.

The expected URL is `https://<github-username>.github.io/adhd-mixing-site/`.

For a custom domain, build with `VITE_BASE_URL=/`.

## Audio

Before/after comparison files live under [`public/audio/`](public/audio/README.md). The player is native HTML5 and audio is not preloaded.

## Editing content

The site copy, services, project information, contact links, and process are stored in [`index.html`](index.html). Replace the sample project details and audio paths when new work is ready.

> Pricing is intentionally omitted because no pricing PDF or final price list was included in the source repository.
