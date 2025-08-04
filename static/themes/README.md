# Theme CSS Files

This directory contains the color theme CSS files for the Docusaurus site.

## Available Themes

- **custom.blue.css** - Ocean Blue theme
- **custom.sunset.css** - Warm sunset colors
- **custom.purple.css** - Purple night theme
- **custom.forest.css** - Forest green theme
- **custom.material-red.css** - Material Design red
- **custom.material-indigo.css** - Material Design indigo
- **custom.material-teal.css** - Material Design teal
- **custom.material-amber.css** - Material Design amber
- **custom.material-pink.css** - Material Design pink
- **custom.nuke.css** - Minimal dark theme

## Usage

These files are automatically loaded by the ThemeSwitcher component located at `src/components/ThemeSwitcher/`. The default theme uses the main `src/css/custom.css` file.

## Adding New Themes

1. Create a new `custom.{name}.css` file in this directory
2. Add the theme to the `themes` array in `src/components/ThemeSwitcher/ThemeSwitcher.tsx`
3. Add corresponding color preview styles in `src/components/ThemeSwitcher/ThemeSwitcher.css`

The theme files are directly accessible via `/themes/custom.{name}.css` URLs and don't require any build process.
