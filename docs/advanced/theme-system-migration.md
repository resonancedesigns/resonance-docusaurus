---
id: theme-system-migration
title: Theme System v2.0 Migration Guide
sidebar_position: 2
---

This guide covers the migration from Theme System v1.x to v2.0, which introduces significant improvements for path resolution and configuration management.

## 🚨 Critical Fix: Sub-route Compatibility

### The Problem (v1.x)

Theme switcher failed on sub-routes due to relative path resolution:

```bash
# These routes had broken theme switching:
https://yoursite.com/docs/template/  ❌ Themes failed to load
https://yoursite.com/docs/config/    ❌ Themes failed to load

# Only worked on root:
https://yoursite.com/                ✅ Themes worked
```

### The Solution (v2.0)

Now uses Docusaurus `useBaseUrl` for proper path resolution:

```typescript
// Before (v1.x) - Problematic
link.href = theme.cssFile; // 'themes/blue.css' - relative path

// After (v2.0) - Fixed
link.href = useBaseUrl(theme.cssFile); // Properly resolved path
```

## Breaking Changes

### 1. Configuration Architecture

**Before (v1.x)**:

```typescript
// Hardcoded in ThemeSwitcher.tsx
const themes: Theme[] = [
  { name: 'blue', displayName: 'Ocean Blue', cssFile: '/themes/blue.css' }
];
```

**After (v2.0)**:

```typescript
// Centralized configuration
// config/site-config.ts
export const PreBuildConfig = {
  DefaultTheme: 'default'
};

// Auto-generated from CSS files
// src/themes.json (auto-generated)
{
  "themes": [...],
  "defaultTheme": "default"
}
```

### 2. TypeScript Structure

**Before (v1.x)**:

```typescript
// Inline interface in component
interface Theme {
  name: string;
  displayName: string;
  cssFile: string;
}
```

**After (v2.0)**:

```typescript
// Proper entity structure
// src/entities/theme.ts
export interface Theme {
  name: string;
  displayName: string;
  cssFile: string;
}
```

### 3. Data Generation

**Before (v1.x)**:

- Manual theme registration in component
- Static theme list

**After (v2.0)**:

- Automatic theme detection from CSS files
- Dynamic theme metadata extraction
- JSON-based configuration

## Migration Steps

### Step 1: Update Dependencies

Ensure you have the latest version with `useBaseUrl` support:

```json
{
  "@docusaurus/core": "3.8.1",
  "@docusaurus/theme-common": "^3.8.1"
}
```

### Step 2: Configuration Migration

1. **Create site configuration**:

```typescript
// config/site-config.ts (new file)
export const PreBuildConfig = {
  OverwriteExistingFiles: true,
  DefaultTheme: 'default' // Set your preferred default
};
```

1. **Update theme metadata in CSS files**:

```css
/* static/themes/mytheme.css */
/* @theme-id: mytheme */
/* @theme-name: My Custom Theme */

:root {
  /* Your existing styles */
}
```

### Step 3: Run Migration

```bash
# Run pre-build to regenerate configurations
npm run prestart

# Or manually:
tsx ./scripts/pre-build.ts
```

This will:

- Generate `src/themes.json` from your CSS files
- Create `src/navbarLinks.json` from markdown files
- Use the new configuration structure

### Step 4: Verify Migration

1. **Check generated files**:
   - `src/themes.json` should contain your themes
   - Theme paths should be relative: `"themes/blue.css"`

2. **Test on all routes**:
   - Root page: `http://localhost:3000/`
   - Docs pages: `http://localhost:3000/docs/template/`
   - All theme switching should work consistently

## New Features in v2.0

### 1. Automatic Theme Detection

Themes are now auto-detected from `static/themes/` directory:

```bash
# Add any CSS file to static/themes/
static/themes/
├── mynewtheme.css    # ← Automatically detected!
└── anothertheme.css  # ← Also detected!

# Run pre-build
npm run prestart

# Themes appear in switcher automatically
```

### 2. Theme Metadata Support

Embed metadata directly in CSS files:

```css
/* static/themes/professional.css */
/* @theme-id: professional-blue */
/* @theme-name: Professional Blue Theme */

:root {
  --ifm-color-primary: #1976d2;
}
```

### 3. Improved Error Handling

Better fallbacks and error reporting:

```typescript
// Graceful fallback to default theme
export const defaultTheme: Theme =
  themes.find((t) => t.name === themeData.defaultTheme) ||
  (themes.length > 0
    ? themes[0]
    : {
        name: 'fallback',
        displayName: 'Default',
        cssFile: 'themes/default.css'
      });
```

## Troubleshooting

### Theme Not Loading on Sub-routes

**Symptom**: Theme works on `/` but not on `/docs/template/`

**Solution**: Ensure you're using v2.0 with `useBaseUrl`:

```typescript
// Check ThemeSwitcher.tsx contains:
import useBaseUrl from '@docusaurus/useBaseUrl';

const themesWithResolvedUrls = themes.map((theme) => ({
  ...theme,
  resolvedCssUrl: useBaseUrl(theme.cssFile)
}));
```

### Theme Not Detected

**Symptom**: New theme CSS file not appearing in switcher

**Solution**: Run pre-build process:

```bash
npm run prestart
# or
tsx ./scripts/pre-build.ts
```

### Metadata Not Reading

**Symptom**: Theme uses filename instead of display name

**Solution**: Check CSS metadata format:

```css
/* Correct format: */
/* @theme-id: mytheme */
/* @theme-name: My Beautiful Theme */

/* Incorrect format: */
// @theme-id: mytheme (wrong comment style)
/* @theme-id:mytheme */ (missing space)
```

## Compatibility

### Browser Support

v2.0 maintains the same browser support as v1.x:

- ✅ All modern browsers supporting CSS custom properties
- ✅ localStorage for theme persistence
- ✅ Dynamic `<link>` tag injection
- ✅ **New**: Proper baseURL resolution across all routes

### Docusaurus Compatibility

- **Required**: Docusaurus 3.8.1+
- **Required**: `@docusaurus/theme-common` for `useBaseUrl`
- **Backward Compatible**: Existing theme CSS files work unchanged

## Performance Improvements

### URL Resolution Optimization

```typescript
// v1.x: Path resolution on every theme change
const applyTheme = (name) => {
  const theme = themes.find((t) => t.name === name);
  link.href = theme.cssFile; // Resolved each time
};

// v2.0: Pre-computed resolution
const themesWithResolvedUrls = useMemo(
  () =>
    themes.map((theme) => ({
      ...theme,
      resolvedCssUrl: useBaseUrl(theme.cssFile) // Resolved once
    })),
  [themes]
);
```

### Build Process Optimization

- **Faster builds**: JSON generation vs TypeScript compilation
- **Better caching**: Separate data and code concerns
- **Improved debugging**: Clear separation of config and logic

---

## Need Help?

If you encounter issues during migration:

1. **Check the console** for error messages
2. **Verify file paths** in generated `themes.json`
3. **Test on multiple routes** to confirm fix
4. **Review CSS metadata** format in theme files

The v2.0 update significantly improves reliability and maintainability while maintaining backward compatibility for existing theme files.
