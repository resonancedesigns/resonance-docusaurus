---
id: configuration
title: Configuration
sidebar_position: 1
---

### Centralized Configuration System

The template now uses a centralized configuration system in `config/site-config.ts`:

```typescript
// config/site-config.ts
export const PreBuildConfig = {
  ProjectRoot: path.join(__dirname, '../'),
  OverwriteExistingFiles: true,
  DefaultTheme: 'default' // Set your preferred default theme
};

export const SiteConfig = {
  title: 'Your Docs Site',
  tagline: 'Reusable Docusaurus Template',
  url: 'https://your-site.com',
  baseUrl: '/',
  organizationName: 'your-org',
  projectName: 'your-project'
} as const;

export const SiteThemeConfig = {
  navbar: {
    title: 'Your Site Title',
    logo: {
      alt: 'Your Logo Alt Text',
      src: 'img/logo.svg'
    }
  }
} as const;
```

### Legacy Configuration (Still Supported)

You can also directly update `docusaurus.config.ts`:

```typescript
const config: Config = {
  title: 'Your Docs Site',
  tagline: 'Your tagline here',
  url: 'https://your-site.com',
  organizationName: 'your-org',
  projectName: 'your-docs'
  // ... other settings
};
```
