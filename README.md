# Docusaurus Template

A comprehensive, reusable Docusaurus template for creating professional documentation sites with modern features, enhanced development workflow, and comprehensive code quality tooling.

## ✨ Key Features

- 🚀 **Modern Docusaurus 3.8.1** with TypeScript support
- 🎨 **10 Dynamic Color Themes** with live theme switching
- 🏷️ **GitHub Badge System** - Automated project status badges
- 💬 **Giscus Comments** - GitHub Discussions integration
- ⚡ **Automated Versioning** - Date-based versioning (YYYY.MM.DD)
- 🔧 **Developer Tools** - ESLint, Prettier, quality gates
- 📦 **Enhanced Build System** - Configurable output directory with pre-build automation
- 🎯 **Code Quality Assurance** - Comprehensive linting, formatting, and type checking

## 🚀 Quick Start

```bash
# Copy template and install dependencies
cp -r Docusaurus-Template my-docs-site
cd my-docs-site
pnpm install

# Configure the template (PowerShell)
.\template-setup.ps1

# Start development server with quality checks
pnpm run start
```

## 🛠️ Development Workflow

The template includes comprehensive development tooling:

```bash
# Development
pnpm run start          # Start dev server with pre-build
pnpm run build:prod     # Production build to ./artifacts

# Code Quality
pnpm run lint           # ESLint checking
pnpm run format         # Code formatting with Prettier
pnpm run typecheck      # TypeScript validation
pnpm run check-all      # Run all quality checks

# Utilities
pnpm run clear          # Clear Docusaurus cache
pnpm run serve          # Serve production build
```

## 📖 Documentation

**👉 [Visit the Full Documentation](https://docs-template.subzerodev.com/template)**

For detailed setup guides, configuration options, theme customization, and examples, visit the complete documentation site.

### Key Documentation Sections

- **[Development Workflow](/template/advanced/development-workflow)** - Enhanced tooling and quality assurance
- **[Migration Guide](/template/advanced/migration-guide)** - Upgrading from previous versions
- **[Theme System](/template/core-systems/theme-system)** - 10 dynamic color themes
- **[Component Architecture](/template/core-systems/)** - Badge system, GitHub links, comments
- **[Configuration](/template/configuration/)** - Static TypeScript classes and setup options

## 🎯 What's New

### Version 1.0.1 - Enhanced Development Experience

- **Modern ESLint v9**: Flat configuration with TypeScript support
- **Prettier Integration**: Automated code formatting with consistent styling
- **Quality Gates**: Pre-commit hooks and CI/CD integration
- **Enhanced Build System**: Configurable artifacts directory (`./artifacts`)
- **Static Configuration**: TypeScript classes for better type safety and IntelliSense

## 📄 License

This template is provided as-is for creating documentation sites. Check the LICENSE file for specific terms.
