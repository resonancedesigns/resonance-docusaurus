# Docusaurus Template

A comprehensive, reusable Docusaurus template for creating professional documentation sites. This template includes pre-configured styling, automated versioning, dynamic GitHub badge system, configurable README processing, and Giscus comment integration.

## GitHub Dynamic Badge System

The template includes a configurable badge system for displaying GitHub project status and metrics:

**Configuration File:** `src/data/badge-config.json`

- **GitHub Integration** - Designed specifically for GitHub repositories with `{user}` and `{repository}` placeholders
- **Template Variables** - All customization done through JSON configuration file
- **Simplified API** - Only requires user and repository, all URLs configured in JSON
- **Default Values** - Configure default values for template variables in the JSON file
- **Category Organization** - Badges grouped by: Build & Release, Distribution, Documentation, Quality, Community, Metrics
- **Runtime Loading** - Configuration loaded dynamically at component render time

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

1. Copy `src/data/badge-config.json.example` to `src/data/badge-config.json`
2. Configure template variables with your default values
3. Use `{variableName}` placeholders in badge URLs and links
4. Add or remove badge categories and individual badges

Template and setup scripts to streamline documentation site creation.

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
- 🏷️ **GitHub Badge System** - Configurable GitHub project badges via external JSON
- 📄 **Configurable README Processing** - Dynamic README integration for homepage or docs
- 💬 **Giscus Comments** - GitHub Discussions-based comment system
- 🎯 **CI/CD Ready** - GitHub Actions workflows for automated deployment
- 🎪 **TypeScript Architecture** - Class-based build scripts with proper type safety

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

### 📄 README Processing System

The template includes a configurable README processing system that allows you to automatically integrate your project's README content into your documentation site.

**Configuration File:** `readme-config.json`

```json
{
  "source": "../README.md",
  "destinations": {
    "homepage": true,
    "docs": false
  },
  "processing": {
    "removeTitle": true,
    "removeToc": true,
    "addDocusaurusMetadata": true
  }
}
```

**Features:**
- **Flexible Source** - Configure README location relative to your project
- **Multiple Destinations** - Display on homepage, docs section, or both
- **Content Processing** - Remove titles, TOCs, and add Docusaurus frontmatter
- **Build Integration** - Automatically processes during build

### 💬 Giscus Comment System

Integrated comment system powered by GitHub Discussions for community engagement.

**Configuration File:** `giscus-config.json`

```json
{
  "repo": "username/repository",
  "repoId": "your-repo-id", 
  "category": "General",
  "categoryId": "your-category-id",
  "mapping": "pathname",
  "strict": "0",
  "reactionsEnabled": "1",
  "emitMetadata": "0",
  "inputPosition": "top",
  "lang": "en",
  "loading": "lazy"
}
```

**Features:**
- **GitHub Integration** - Uses GitHub Discussions for comments
- **Theme Aware** - Automatically adapts to light/dark mode
- **Configuration Based** - Easy setup through JSON configuration
- **Component System** - `<GiscusWrapper />` component for easy integration
- **Automatic Fallback** - Shows setup instructions when not configured

### 🎪 TypeScript Architecture

All build scripts are implemented as TypeScript classes for better maintainability:

**VersionGenerator Class** (`scripts/get-version.ts`):
- In-memory version generation (YYYY.MM.DD format)
- Error handling and validation
- Static methods for easy integration

**ReadmeProcessor Class** (`scripts/copy-readme.ts`):
- Configurable README processing
- Multiple destination support
- Content transformation and metadata injection


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
- **`badge-config.json`** - GitHub badge system configuration
- **`readme-config.json`** - README processing settings
- **`giscus-config.json`** - Comment system configuration

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
├── readme-config.json              # README processing configuration  
├── .copy.ignore.example            # File ignore patterns for copying
├── template-setup.ps1              # Initial configuration script
├── template-build.ps1              # Development server launcher (with full docs)
├── scripts/
│   ├── get-version.js             # Class-based version generator (JavaScript)
│   ├── get-version.ts             # Class-based version generator (TypeScript)
│   ├── copy-readme.js             # Class-based README processor (JavaScript)
│   └── copy-readme.ts             # Class-based README processor (TypeScript)
├── src/
│   ├── components/
│   │   ├── ProjectBadges/         # GitHub dynamic badge component
│   │   │   └── index.tsx          # GitHub project badges component
│   │   └── ReadmeContent/         # Auto-generated README component
│   │       └── index.tsx          # Generated from main README.md
│   ├── data/
│   │   ├── badge-config.json      # Active badge configuration
│   │   └── badge-config.json.example # Badge configuration template
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

- `npm start` - Start development server
- `npm run prebuild:prod` - Generate version file (runs automatically before build)
- `npm run build:prod` - Build for production (includes prebuild step)
- `npm run serve` - Serve built site locally
- `npm run clear` - Clear Docusaurus cache
- `npm run typecheck` - TypeScript validation

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

- Copies `badge-config.json.example` to `badge-config.json` if needed
- Processes any remaining `.example` files in the project
- Cleans up template files after successful setup
- Provides colored console output for progress tracking

**Perfect for:**

- Setting up badge configuration for your project
- Final template cleanup after customization
- Ensuring all example files are properly configured

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
- Runs prebuild steps (`pnpm run prebuild:prod` - version generation)
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
- Valid `package.json` with required scripts (`prebuild:prod`, `start`)
- PowerShell 5.0 or higher

## Key Components

### GitHubProjectBadges Component

The template includes a sophisticated badge system specifically designed for GitHub projects:

- **Dynamic Loading**: Badges configured via external JSON file
- **Template Variables**: Support for `{user}`, `{repository}`, and custom variables
- **Group Filtering**: Show only specific badge categories
- **FontAwesome Icons**: Beautiful icons for each badge section
- **Responsive Design**: Works on all screen sizes

### ReadmeContent System

Configurable README integration system that can display your README content either on the homepage or in the docs section:

**Configuration File**: `readme-config.json`

- **Flexible Source**: Configure README location relative to project root
- **Multiple Destinations**: Use as homepage content or docs page
- **Content Processing**: Optional heading removal and link processing
- **Auto-Generation**: Creates React component or markdown file as needed

**Configuration Options**:

```json
{
  "source": {
    "path": "README.md"  // Path to README relative to project root
  },
  "destination": {
    "type": "homepage"   // "homepage" or "docs"
  },
  "processing": {
    "removeFirstHeading": true  // Remove first heading when processing
  },
  "output": {
    "componentPath": "src/components/ReadmeContent/index.tsx",  // For homepage
    "docsPath": "docs/readme.md"  // For docs
  }
}
```

**Usage Examples**:
- Copy `readme-config.json.example` to `readme-config.json` for homepage display
- Copy `readme-config-docs.json.example` to `readme-config.json` for docs display  
- Copy `readme-config-external.json.example` for external README files

### Automation Scripts

- **Version Generation**: Automatic date-based versioning (YYYY.MM.DD)
- **README Processing**: Converts README to documentation component
- **Development Server**: PowerShell scripts for streamlined development

## Configuration

### Class-Based Script Architecture

The template uses modern class-based architecture for all utility scripts:

**Version Generator (`VersionGenerator` class)**:
- `VersionGenerator.generate()` - Generate current date-based version
- `VersionGenerator.getVersion()` - Alias for generate method
- Available in both JavaScript and TypeScript versions
- Backward compatible CommonJS export

**README Processor (`ReadmeProcessor` class)**:
- `ReadmeProcessor.processReadme(configPath?)` - Static method for direct usage
- Configurable source, destination, and processing options
- Support for both homepage and docs destinations
- Available in both JavaScript and TypeScript versions

**Build Scripts**:
- `npm run prebuild:prod` - Uses JavaScript version (default)
- `npm run prebuild:ts` - Uses TypeScript version
- `npm run start` and `npm run start:ts` - Development with different script versions

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

3. Add color preview styles to `src/components/ThemeSwitcher/ThemeSwitcher.css`

### Colors and Branding

Edit `src/css/custom.css` to customize the default theme:

```css
:root {
  --ifm-color-primary: #2d7d54;      /* Primary brand color */
  --ifm-color-primary-dark: #256749;  /* Darker variant */
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
