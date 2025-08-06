---
id: theme-system
title: Themes
sidebar_position: 1
---

This template includes a sophisticated theme switching system with 10 professionally designed color themes that are dynamically loaded and persisted in localStorage.

### Available Themes

- **Default Green** - Elegant green with refined typography and glassmorphism effects
- **Ocean Blue** - Professional blue tones with modern contrast
- **Sunset** - Warm orange and red gradients for vibrant presentation
- **Purple Night** - Deep purple with excellent contrast for dark environments
- **Forest** - Natural green shades with earthy tones
- **Material Design Themes** - Five variants following Google's Material Design principles:
  - **Material Red** - Bold red with proper contrast ratios
  - **Material Indigo** - Deep indigo for professional applications
  - **Material Teal** - Calming teal for content-focused sites
  - **Material Amber** - Warm amber for creative projects
  - **Material Pink** - Subtle pink for modern aesthetics
- **Nuke** - Minimal dark theme for distraction-free reading

**Theme files are located in `static/themes/` and are directly accessible without build processes.**

### Theme Configuration

The template includes a powerful dynamic theme switching system. All theme files are located in `static/themes/` for direct access:

```text
static/themes/
├── blue.css                 # Ocean Blue theme
├── sunset.css               # Warm sunset colors
├── purple.css               # Purple night theme
├── forest.css               # Forest green theme
├── material-red.css         # Material Design red
├── material-indigo.css      # Material Design indigo
├── material-teal.css        # Material Design teal
├── material-amber.css       # Material Design amber
├── material-pink.css        # Material Design pink
├── nuke.css                 # Minimal dark theme
├── custom.nuke.css          # Custom nuke variant
├── default.css              # Default theme fallback
└── README.md                # Theme documentation
```

### How Theme Switching Works

The ThemeSwitcher component (`src/components/ThemeSwitcher/`) provides:

- **Dynamic Loading**: CSS files are injected via `<link>` tags with `data-theme-switcher` attribute
- **Persistence**: Selected theme is saved in `localStorage` as `docusaurus-theme-color`
- **Default Fallback**: Uses built-in `src/css/custom.css` when no theme is selected
- **URL Access**: Theme files are directly accessible via `/themes/{name}.css` URLs
- **No Build Process**: Themes load instantly without requiring rebuilds

### Adding a New Theme

To create a custom theme, follow these steps:

#### 1. Create Theme CSS File

Create a new `{name}.css` file in `static/themes/` directory:

```css
/* static/themes/mytheme.css */
:root {
  --ifm-color-primary: #your-primary-color;
  --ifm-color-primary-dark: #your-dark-variant;
  --ifm-color-primary-light: #your-light-variant;
  --ifm-color-primary-lightest: #your-lightest-variant;
  --ifm-color-primary-darker: #your-darker-variant;
  --ifm-color-primary-darkest: #your-darkest-variant;

  /* Add more custom properties as needed */
  --ifm-background-surface-color: #your-background;
  --ifm-color-emphasis-100: #your-subtle-color;
}
```

#### 2. Register Theme in Component

Add the theme to `src/components/ThemeSwitcher/ThemeSwitcher.tsx`:

```typescript
const themes: Theme[] = [
  // ... existing themes
  {
    name: 'mytheme',
    displayName: 'My Custom Theme',
    cssFile: '/themes/mytheme.css'
  }
];
```

#### 3. Add Color Preview

Add corresponding color preview styles in `src/components/ThemeSwitcher/ThemeSwitcher.css`:

```css
.theme-switcher__color-preview--mytheme {
  background: linear-gradient(
    135deg,
    #your-primary-color,
    #your-secondary-color
  );
}
```

**That's it!** Your theme will now appear in the theme switcher dropdown and be immediately available to users.

### Theme Architecture

#### Component Structure

```text
src/components/ThemeSwitcher/
├── ThemeSwitcher.tsx        # Main component with theme logic
├── ThemeSwitcher.css        # Styling and color previews
└── index.ts                 # Export barrel
```

#### Technical Implementation

- **Dynamic CSS Injection**: Themes are loaded by creating `<link>` elements with `data-theme-switcher` attribute
- **Persistence**: Uses `localStorage.setItem('docusaurus-theme-color', theme)`
- **Cleanup**: Previous theme links are removed before injecting new ones
- **Default Handling**: Falls back to `src/css/custom.css` when no theme is selected
- **Performance**: Themes are loaded on-demand, not bundled with the main CSS

#### Integration with Docusaurus

The theme system integrates seamlessly with Docusaurus's existing theme infrastructure:

- Uses standard CSS custom properties (`--ifm-*` variables)
- Compatible with light/dark mode switching
- Respects Docusaurus color mode preferences
- Works with all Docusaurus UI components

### Theme Development Best Practices

#### Color System

Follow Docusaurus color conventions:

```css
/* Primary colors (required) */
--ifm-color-primary: #main-brand-color;
--ifm-color-primary-dark: #darker-variant;
--ifm-color-primary-light: #lighter-variant;

/* Extended palette (recommended) */
--ifm-color-primary-lightest: #lightest-variant;
--ifm-color-primary-darker: #darker-variant;
--ifm-color-primary-darkest: #darkest-variant;

/* Semantic colors (optional) */
--ifm-color-success: #success-color;
--ifm-color-warning: #warning-color;
--ifm-color-danger: #danger-color;
--ifm-color-info: #info-color;
```

#### Accessibility Guidelines

- Maintain **WCAG AA** contrast ratios (4.5:1 for normal text)
- Test themes in both light and dark modes
- Ensure sufficient contrast for links and interactive elements
- Validate color combinations with accessibility tools

#### Naming Convention

- Use descriptive theme names: `ocean-blue` not `theme1`
- Follow kebab-case for file names: `material-indigo.css`
- Use clear display names: "Material Design Indigo" not "Mat Ind"

### Default Theme Customization

Edit `src/css/custom.css` to customize the default theme (used when no theme is selected):

```css
:root {
  --ifm-color-primary: #2d7d54; /* Primary brand color */
  --ifm-color-primary-dark: #256749; /* Darker variant */
  --ifm-color-primary-light: #359962; /* Lighter variant */

  /* Custom additions */
  --ifm-font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
  --ifm-heading-font-weight: 600;
  --ifm-line-height-base: 1.6;
}
```

### CSS Theme Variants

The template provides two main CSS approaches:

#### Standard Docusaurus Styling

- **File**: `src/css/custom.css`
- **Approach**: Builds on Docusaurus default styles
- **Best for**: Most documentation sites and standard use cases
- **Features**: Maintains Docusaurus UI consistency

#### Minimal/Clean Styling

- **File**: `src/css/custom.nuke.css`
- **Approach**: Comprehensive CSS reset with minimal styling
- **Best for**: Content-focused sites requiring maximum customization
- **Features**: Clean slate for custom designs

To switch between approaches, update your `docusaurus.config.ts`:

```typescript
// Standard approach
theme: {
  customCss: './src/css/custom.css',
}

// Minimal approach
theme: {
  customCss: './src/css/custom.nuke.css',
}
```

### Theme Debugging

#### Inspecting Current Theme

```javascript
// In browser console
localStorage.getItem('docusaurus-theme-color'); // Current theme
document.querySelector('[data-theme-switcher]')?.href; // Current CSS file
```

#### Theme Development Tools

- Use browser DevTools to test color combinations
- Validate accessibility with tools like axe-DevTools
- Test responsive behavior across device sizes
- Check theme persistence across page reloads

### Browser Support

- ✅ All modern browsers supporting CSS custom properties
- ✅ localStorage for theme persistence
- ✅ Dynamic `<link>` tag injection
- ✅ Graceful fallback to default theme
