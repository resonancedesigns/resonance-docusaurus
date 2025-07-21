# Docusaurus Template

A comprehensive, reusable Docusaurus template for creating professional documentation sites. This template includes pre-configured styling, automated versioning, and setup scripts to streamline documentation site creation.

## Features

- 🚀 **Modern Docusaurus 3.8.1** - Latest version with TypeScript support
- 🎨 **Custom Styling** - Two CSS options: standard and "nuke" (minimal) themes
- 📅 **Automatic Versioning** - Date-based versioning (YYYY.MM.DD) generated on build
- 🔧 **Configuration Templates** - Example files for easy customization
- 📱 **Responsive Design** - Mobile-friendly documentation
- 🌙 **Dark Mode Support** - Built-in theme switching
- 📊 **Mermaid Diagrams** - Integrated diagram support
- ⚡ **Performance Optimized** - Modern React 19 and optimized builds

## Quick Start

### 1. Copy and Setup

```bash
# Copy this template to your new project directory
cp -r Docusaurus-Template my-docs-site
cd my-docs-site

# Install dependencies
npm install

# Run setup script (PowerShell)
.\setup.ps1
```

### 2. Configure Your Site

Edit the following files to customize your documentation:

- **`docusaurus.config.ts`** - Main configuration (site title, URL, etc.)
- **`sidebars.ts`** - Navigation structure
- **`src/css/custom.css`** - Custom styling and colors

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
├── docusaurus.config.ts.example    # Configuration template
├── sidebars.ts.example             # Sidebar navigation template
├── setup.ps1                      # Automated setup script
├── scripts/
│   ├── write-version.js           # Generates VERSION.txt on build
│   └── get-version.js             # Utility to read version
├── src/
│   └── css/
│       ├── custom.css             # Standard styling
│       └── custom.nuke.css        # Minimal styling option
├── static/
│   ├── img/                       # Static images and favicon
│   ├── CNAME                      # GitHub Pages domain config
│   └── .nojekyll                  # GitHub Pages Jekyll bypass
└── package.json                   # Dependencies and scripts
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production (auto-runs versioning)
- `npm run serve` - Serve built site locally
- `npm run clear` - Clear Docusaurus cache
- `npm run typecheck` - TypeScript validation

## Configuration

### Automatic Versioning

The template includes automatic date-based versioning:

- Version format: `YYYY.MM.DD`
- Generated automatically before each build
- Stored in `VERSION.txt` for use in your config

### CSS Themes

Choose between two styling approaches:

- **`custom.css`** - Standard Docusaurus styling with custom colors
- **`custom.nuke.css`** - Minimal, clean styling (7700+ lines of resets)

### Setup Script

The included `setup.ps1` PowerShell script:

- Copies configuration files from parent directories
- Falls back to `.example` files if parent configs don't exist
- Automates the initial setup process

## Customization

### Colors and Branding

Edit `src/css/custom.css` to customize:

```css
:root {
  --ifm-color-primary: #2e8555;      /* Primary brand color */
  --ifm-color-primary-dark: #29784c;  /* Darker variant */
  --ifm-color-primary-light: #33925d; /* Lighter variant */
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

### Core

- **@docusaurus/core** - Main framework
- **@docusaurus/preset-classic** - Standard plugins
- **@docusaurus/theme-mermaid** - Diagram support
- **React 19** - Modern React framework

### Development

- **TypeScript** - Type safety
- **@docusaurus/types** - TypeScript definitions

## Browser Support

- Chrome (last 3 versions)
- Firefox (last 3 versions)
- Safari (last 5 versions)
- Modern browsers with >0.5% market share

## Requirements

- **Node.js** 18.0 or higher
- **pnpm**, **npm** or **yarn** package manager

## License

This template is provided as-is for creating documentation sites.