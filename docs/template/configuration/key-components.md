---
id: key-components
title: Components
sidebar_position: 4
---

### GitHubProjectBadges Component

The template includes a sophisticated badge system specifically designed for GitHub projects:

- **Static TypeScript Config**: Badges configured via static TS classes, not external JSON
- **Template Variables**: Support for `{user}`, `{repository}`, and custom variables
- **Group Filtering**: Show only specific badge categories
- **FontAwesome Icons**: Beautiful icons for each badge section
- **Responsive Design**: Works on all screen sizes

### ReadmeContent System

The homepage content is auto-generated from your root `README.md` (copied to `src/pages/index.md` by the pre-build script). For advanced setups, you can use `readme-config.json` to customize source, destination, and processing options.

### Automation Scripts

- **Version Generation**: Automatic date-based versioning (YYYY.MM.DD)
- **Content Preparation**: Copies markdown files and generates navigation
- **Development Server**: PowerShell scripts for streamlined development
