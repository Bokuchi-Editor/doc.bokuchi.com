# doc.bokuchi.com

Source for the [Bokuchi](https://github.com/Bokuchi-Editor/bokuchi) user documentation site, built with Astro + Starlight and hosted on GitHub Pages.

https://doc.bokuchi.com

## Development

```bash
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build to ./dist/
npm run preview  # Preview the build locally
```

## Content

Documentation lives in `src/content/docs/` as `.mdx` files. English is the root locale; Japanese translations go under the `ja/` subdirectory with the same structure.

```
src/content/docs/
├── getting-started/    # English
├── guides/
├── ja/
│   ├── getting-started/  # Japanese
│   └── guides/
```

When adding a new page, you must also add an entry to the `sidebar` array in `astro.config.mjs` — the sidebar is not auto-generated from the filesystem.

## Deployment

Pushing to `main` triggers automatic deployment via GitHub Actions.
