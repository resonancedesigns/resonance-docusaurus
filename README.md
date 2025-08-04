# Docusaurus Template

A comprehensive, reusable Docusaurus template for creating professional documentation sites. This template includes pre-configured styling, automated versioning, dynamic GitHub badge system, streamlined content preparation, and Giscus comment integration.

## Latest Updates

🎯 **Code Quality & Development Workflow**: The template now includes comprehensive code quality tooling and enhanced development workflow:

- **ESLint Integration**: Modern ESLint v9 with TypeScript support and flat config format
- **Prettier Formatting**: Automated code formatting with configurable rules
- **Quality Gates**: CI/CD workflows now include formatting and linting checks
- **Developer Scripts**: New scripts for `lint`, `format`, and `check-all` operations
- **Type Safety**: Enhanced TypeScript configuration and error resolution for Docusaurus runtime aliases

🏗️ **Modernized Architecture**: The template uses static TypeScript classes for configuration, eliminating JSON config files and providing better type safety:

- **Badge System**: `BadgeConfig` static class replaces `badge-config.json`
- **Comments**: `GiscusConfig` static class replaces `giscus-config.json`
- **Pre-Build**: Unified `PreBuild` class handles content preparation, navbar generation, and versioning
- **Hooks**: Simplified hooks using static configuration (`useConfig` for badges, direct class access for Giscus)

## GitHub Dynamic Badge System

The template includes a configurable badge system for displaying GitHub project status and metrics:

**Configuration File:** `src/config/badge-config.ts`

- **GitHub Integration** - Designed for GitHub repositories with `{user}` and `{repository}` placeholders
- **Static TypeScript Config** - All badge configuration is now in a static TS class, not JSON
- **Simplified API** - Only requires user and repository, all URLs configured in TS
- **Default Values** - Configure defaults in the `BadgeConfig` class
- **Category Organization** - Badges grouped by: Build & Release, Distribution, Documentation, Quality, Community, Metrics
- **Runtime Loading** - Configuration loaded via static class and hook

**Usage in Components:**

```tsx
import GitHubProjectBadges from '../components/ProjectBadges';

// Show all badge groups (default)
<GitHubProjectBadges
  user="your-github-username"
  repository="your-repo-name"
/>

// Show only specific badge groups
<GitHubProjectBadges
  user="your-github-username"
  repository="your-repo-name"
  groups={["buildRelease", "quality"]}  // Optional, show only these groups
/>
```

**Available Badge Groups:**

- `buildRelease` - Build & Release (CI, Tests, Coverage)
- `distribution` - Distribution & Deployment (Version, Docker)
- `documentation` - Documentation & Demo (Docs, Demo, Uptime)
- `quality` - Quality & Security (License, Language)
- `community` - Community & Activity (Stars, Issues)
- `metrics` - Development Metrics (Last Commit, Code Size)

**Customization:**

Edit `src/config/badge-config.ts` to change badge categories, template variables, or add new badges. Use `{user}`, `{repository}`, and other template variables in badge URLs and links. No JSON config needed.

## Examples

The template includes comprehensive examples for the badge system:

- **`GitHubProjectBadges-Examples.tsx`** - Basic usage patterns and group filtering
- **`GitHubProjectBadges-Advanced.tsx`** - Advanced configuration and customization examples

These examples demonstrate:

- How to use the component with different GitHub repositories
- Group filtering for selective badge display
- Template variable configuration and usage

## Features

- 🚀 **Modern Docusaurus 3.8.1** - Latest version with TypeScript support
- 🎨 **Dynamic Theme System** - 10 color themes with live switching capability
- 📅 **Automatic Versioning** - Date-based versioning (YYYY.MM.DD) generated in-memory
- 🔧 **Configuration Templates** - Example files for easy customization
- 📱 **Responsive Design** - Mobile-friendly documentation
- 🌙 **Dark Mode Support** - Built-in theme switching
- 📊 **Mermaid Diagrams** - Integrated diagram support
- ⚡ **Performance Optimized** - Modern React 19 and optimized builds
- 🏷️ **GitHub Badge System** - Configurable GitHub project badges via static TypeScript classes
- 📄 **Automated README Processing** - Dynamic README integration via pre-build script
- 💬 **Giscus Comments** - GitHub Discussions-based comment system
- 🎯 **CI/CD Ready** - GitHub Actions workflows for automated deployment
- 🎪 **TypeScript Architecture** - Class-based build scripts with proper type safety
- ✨ **Code Quality Tooling** - ESLint, Prettier, and automated quality gates
- 🔍 **Developer Experience** - Modern tooling with type checking, linting, and formatting

### 🎨 Theme System

This template includes a sophisticated theme switching system with 10 professionally designed color themes:

- **Default Green** - Elegant green with refined typography and glassmorphism effects
- **Ocean Blue** - Professional blue tones
- **Sunset** - Warm orange and red gradients
- **Purple Night** - Deep purple with excellent contrast
- **Forest** - Natural green shades
- **Material Design Themes** - Red, Indigo, Teal, Amber, Pink variants
- **Nuke** - Minimal dark theme for distraction-free reading

**Theme files are located in `static/themes/` and are directly accessible without build processes.**

### 📄 Pre-Build Content Preparation

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

### 💬 Giscus Comment System

Integrated comment system powered by GitHub Discussions for community engagement.

**Configuration File:** `src/config/giscus-config.ts`

```typescript
// Example configuration structure (edit src/config/giscus-config.ts)
export class GiscusConfig {
  static repo = 'username/repository';
  static repoId = 'your-repo-id';
  static category = 'General';
  static categoryId = 'your-category-id';
  static mapping = 'pathname';
  static reactionsEnabled = true;
  static emitMetadata = false;
  static inputPosition = 'bottom';
  static lang = 'en';
  static loading = 'lazy';
  static theme = { light: 'light', dark: 'dark' };
}
```

**Features:**

- **GitHub Integration** - Uses GitHub Discussions for comments
- **Theme Aware** - Automatically adapts to light/dark mode
- **Static TypeScript Config** - All Giscus configuration is now in a static TS class, not JSON
- **Component System** - `<GiscusWrapper />` component for easy integration
- **Automatic Fallback** - Shows setup instructions when not configured

## Implementation Summary

This section consolidates key enhancements and the current technical architecture:

1. **Enhancements**
   - **Automatic Versioning**: Eliminated `VERSION.txt`, now uses `PreBuild.getVersion()` for on-the-fly YYYY.MM.DD versions.
   - **README Integration**: Markdown files from project root are copied to `src/pages` and indexed for navigation via pre-build.
   - **Navbar Autogeneration**: Scans root `.md` files and emits `src/navbarLinks.ts` before each build.
   - **Badge System**: `BadgeConfig` static class + `useConfig` hook for dynamic GitHub badges.
   - **Comments**: `GiscusConfig` static class for Giscus-powered discussions.
   - **Theme System**: Ten built-in themes in `static/themes/` with live light/dark switching.

2. **Architecture**
   - **Scripts**: TypeScript class `PreBuild` handles both content preparation and versioning.
   - **Components**: Modular React hooks and components for badges and comments.
   - **Config Classes**: Strongly-typed classes (`BadgeConfig`, `GiscusConfig`) replace JSON imports for static access.

3. **Workflow**
   - **Development**: `npm start` runs pre-build tasks then starts `docusaurus start`.
   - **Production Build**: `npm run build` triggers pre-build, then `docusaurus build`.
   - **Type Checking**: `npm run typecheck` ensures all TS scripts and components validate.

## Quick Start

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

## Project Structure

```text
├── docusaurus.config.ts            # Main Docusaurus configuration
├── sidebars.ts                     # Sidebar navigation structure
├── readme-config.json              # (Optional) README processing configuration for advanced setups
├── .copy.ignore.example            # File ignore patterns for copying
├── template-setup.ps1              # Initial configuration script
├── template-build.ps1              # Development server launcher (with full docs)
├── scripts/
│   └── pre-build.ts               # Pre-build tasks: markdown copy, navbar generation, versioning
├── src/
│   ├── components/
│   │   ├── ProjectBadges/         # GitHub dynamic badge component
│   │   │   ├── index.tsx          # GitHub project badges component
│   │   │   └── useConfig.ts       # Badge config hook (uses static TS config)
│   │   └── ReadmeContent/         # Auto-generated README component
│   │       └── index.tsx          # Generated from main README.md
│   ├── config/
│   │   ├── badge-config.ts        # Static badge configuration (TypeScript)
│   │   └── giscus-config.ts       # Static Giscus configuration (TypeScript)
│   ├── examples/
│   │   ├── GitHubProjectBadges-Examples.tsx    # Basic badge examples
│   │   └── GitHubProjectBadges-Advanced.tsx    # Advanced badge examples
│   ├── types/
│   │   └── json.d.ts              # TypeScript declarations for JSON imports
│   └── css/
│       ├── custom.css             # Standard styling
│       └── custom.nuke.css        # Minimal styling option
├── static/
│   ├── img/                       # Static images and favicon
│   └── CNAME                      # GitHub Pages domain config
└── package.json                   # Dependencies and scripts
```

## Available Scripts

- `npm start` - Start development server (includes pre-build step)
- `npm run prebuild` - Run pre-build tasks manually (markdown copy, navbar generation, versioning)
- `npm run build:prod` - Build for production (includes pre-build step)
- `npm run serve` - Serve built site locally
- `npm run clear` - Clear Docusaurus cache
- `npm run typecheck` - TypeScript validation
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run check-all` - Run all quality checks (format, lint, typecheck)

## Template Automation Scripts

The template includes two PowerShell scripts to streamline the development workflow:

### `template-setup.ps1` - Template Configuration

Sets up badge configuration and handles any remaining template files.

**Usage:**

```powershell
# Run from template directory
.\template-setup.ps1

# Or specify a different project directory
.\template-setup.ps1 -projectDir "C:\path\to\project"
```

**What it does:**

- Sets up static configuration files for badges and Giscus comments
- Processes any remaining `.example` files in the project
- Cleans up template files after successful setup
- Provides colored console output for progress tracking

**Perfect for:**

- Setting up static configuration for your project
- Final template cleanup after customization
- Ensuring all configuration files are properly set up

### `template-build.ps1` - Development Server Launcher

**⚠️ Note:** This script has been simplified and now runs the development server directly in the current terminal rather than a separate window.

Automates the development workflow with comprehensive PowerShell documentation.

**Usage:**

```powershell
# Run from template directory (uses current directory)
.\template-build.ps1

# Or specify a different app directory
.\template-build.ps1 -appDir ".\my-docs-site"
```

**What it does:**

- Resolves full path to the documentation directory
- Installs dependencies using `pnpm install`
- Runs pre-build steps (`pnpm run prebuild` - content preparation and versioning)
- Starts Docusaurus development server (`pnpm start`)
- Includes comprehensive PowerShell help documentation

**Features:**

- 📖 **Full PowerShell Help** - Run `Get-Help .\template-build.ps1 -Full` for complete documentation
- 🔧 **Parameter Validation** - Validates directory paths and provides helpful errors
- � **pnpm Integration** - Uses pnpm for faster dependency management
- ⚙️ **Pre-build Integration** - Automatically runs version generation
- 🎨 **Visual Feedback** - Colored progress indicators and status messages

**Requirements:**

- `pnpm` package manager installed and available in PATH
- PowerShell execution policy allowing script execution
- Valid `package.json` with required scripts (`prebuild`, `start`)
- PowerShell 5.0 or higher

## Key Components

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

## Configuration

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

### CSS Themes

Choose between two styling approaches:

- **`custom.css`** - Standard Docusaurus styling with custom colors
- **`custom.nuke.css`** - Minimal, clean styling (comprehensive CSS reset)

To switch themes, update your `docusaurus.config.ts` to import the desired CSS file.

## Customization

### Theme System

The template includes a powerful theme switching system. All theme files are located in `static/themes/` for direct access:

```text
static/themes/
├── custom.blue.css           # Ocean blue theme
├── custom.sunset.css         # Sunset colors
├── custom.purple.css         # Purple night
├── custom.forest.css         # Forest green
├── custom.material-*.css     # Material Design variants
├── custom.nuke.css          # Minimal dark theme
└── README.md                # Theme documentation
```

**Adding a New Theme:**

1. Create `static/themes/custom.mytheme.css` with your color variables

2. Add the theme to `src/components/ThemeSwitcher/ThemeSwitcher.tsx`:

```typescript
{ name: 'mytheme', displayName: 'My Theme', cssFile: '/themes/custom.mytheme.css' }
```

1. Add color preview styles to `src/components/ThemeSwitcher/ThemeSwitcher.css`

### Colors and Branding

Edit `src/css/custom.css` to customize the default theme:

```css
:root {
  --ifm-color-primary: #2d7d54; /* Primary brand color */
  --ifm-color-primary-dark: #256749; /* Darker variant */
  --ifm-color-primary-light: #359962; /* Lighter variant */
}
```

### Site Configuration

Update `docusaurus.config.ts`:

```typescript
const config: Config = {
  title: 'Your Docs Site',
  tagline: 'Your tagline here',
  url: 'https://your-site.com',
  organizationName: 'your-org',
  projectName: 'your-docs',
  // ... other settings
};
```

## Deployment

### GitHub Pages

1. Update `static/CNAME` with your domain
2. Configure GitHub Pages in repository settings
3. Run `npm run deploy` (if deploy script is configured)

### Other Platforms

Build the site with `npm run build` and deploy the `build/` directory to your hosting provider.

## Dependencies

### Core Framework

- **@docusaurus/core** - Main Docusaurus framework (v3.8.1)
- **@docusaurus/preset-classic** - Standard plugins and themes
- **@docusaurus/theme-mermaid** - Diagram support
- **React 19** - Modern React framework with latest features

### UI Components

- **@fortawesome/react-fontawesome** - Icon system for badge components
- **@fortawesome/free-solid-svg-icons** - Icon library
- **markdown-to-jsx** - Enhanced markdown rendering
- **clsx** - Utility for conditional CSS classes

### Development Tools

- **TypeScript 5.6.2** - Type safety and modern JavaScript features
- **@docusaurus/types** - TypeScript definitions for Docusaurus
- **@types/react & @types/react-dom** - React TypeScript definitions
- **ESLint 9.x** - Modern code quality and linting with flat config format
- **Prettier 3.x** - Automated code formatting and style consistency
- **@typescript-eslint** - TypeScript-specific linting rules and parser

## Browser Support

- Chrome (last 3 versions)
- Firefox (last 3 versions)
- Safari (last 5 versions)
- Modern browsers with >0.5% market share

## Requirements

- **Node.js** 18.0 or higher
- **pnpm**, **npm** or **yarn** package manager

## License

This template is provided as-is for creating documentation sites. Check the LICENSE file for specific terms.
