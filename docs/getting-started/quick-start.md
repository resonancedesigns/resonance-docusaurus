---
id: quick-start
title: Quick Start
sidebar_position: 1
---

### 1. Copy and Setup

```bash
# Copy this template to your new project directory
cp -r Docusaurus-Template my-docs-site
cd my-docs-site

# Install dependencies
npm install

# Run setup script to configure template files (PowerShell)
.\template-setup.ps1
```

### 2. Configure Your Site

Edit the following files to customize your documentation:

- **`docusaurus.config.ts`** - Main configuration (site title, URL, etc.)
- **`sidebars.ts`** - Navigation structure
- **`src/css/custom.css`** - Custom styling and colors
- **`src/config/badge-config.ts`** - GitHub badge system configuration
- **`src/config/giscus-config.ts`** - Comment system configuration

Note: Configuration is now done via TypeScript classes, not JSON files.

### 3. Add Your Content

- Create markdown files in a `docs/` directory
- Add images to `static/img/`
- Customize the homepage in `src/pages/index.tsx` (if created)

### 4. Start Development

```bash
npm start
```
