---
id: prebuild-system
title: Pre-Build
sidebar_position: 5
---

Before starting Docusaurus, the `PreBuild` script (`scripts/pre-build.ts`) performs:

- Copies all Markdown files from the project root into `src/pages`, renaming `README.md` to `index.md` and skipping files that already exist.
- Generates `src/navbarLinks.ts` by scanning the `src/pages` directory and constructing navbar entries (excluding `index.md`).
- Provides date-based versioning via `PreBuild.getVersion()` (format: YYYY.MM.DD).

This process runs automatically as part of `npm start` and `npm run build`. To run it manually:

```bash
pnpm prebuild
# or
tsx scripts/pre-build.ts
```

### Class-Based Script Architecture

The template uses a modern unified `PreBuild` class for all pre-build automation:

**PreBuild Class (`scripts/pre-build.ts`)**:

- `PreBuild.getVersion()` - Generate current date-based version (YYYY.MM.DD)
- `PreBuild.copyMarkdownFiles()` - Copy markdown files from root to `src/pages`
- `PreBuild.generateNavbarLinks()` - Generate navigation links from markdown files
- Static methods for all content preparation tasks
- TypeScript implementation with proper error handling

**Build Integration**:

- `npm run prebuild` - Runs pre-build tasks manually
- `npm start` - Includes pre-build step automatically
- `npm run build` - Includes pre-build step for production

### Automatic Versioning

The template includes automatic date-based versioning:

- Version format: `YYYY.MM.DD`
- Generated dynamically in memory when the config is loaded
- No file storage needed - computed on-demand
- Used directly in the Docusaurus config

### ReadmeContent System

The homepage content is auto-generated from your root `README.md` (copied to `src/pages/index.md` by the pre-build script). For advanced setups, you can use `readme-config.json` to customize source, destination, and processing options.
