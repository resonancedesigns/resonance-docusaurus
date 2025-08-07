# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-08-07

### 🚨 BREAKING CHANGES

- **Theme System**: Complete refactor of theme loading architecture
- **Configuration**: Centralized configuration system replaces inline component configs
- **Build Process**: Pre-build script generates JSON instead of TypeScript files

### 🔧 Fixed

- **Theme Compatibility**: Theme switcher now works correctly on all routes (`/docs/template/`, etc.)
- **Path Resolution**: Fixed CSS loading issues using Docusaurus `useBaseUrl` hook
- **Cross-Platform**: Improved Windows/Linux/macOS compatibility for build scripts

### ✨ Added

- **Automatic Theme Detection**: Themes auto-discovered from `static/themes/` directory
- **Theme Metadata**: Support for CSS-embedded theme information (`@theme-id`, `@theme-name`)
- **Centralized Configuration**: New `config/site-config.ts` for template settings
- **TypeScript Entities**: Proper entity structure in `src/entities/`
- **JSON Configuration**: Auto-generated `themes.json` and `navbarLinks.json`
- **Enhanced Error Handling**: Better fallbacks and error reporting throughout
- **Migration Documentation**: Comprehensive v2.0 migration guide

### 🔄 Changed

- **Theme Data Structure**: From hardcoded arrays to JSON-based auto-generation
- **Configuration Architecture**: From inline configs to centralized management
- **Build Process**: Enhanced pre-build script with metadata extraction
- **Path Handling**: All CSS paths now use Docusaurus-native URL resolution

### 🏗️ Technical Improvements

- **Component Architecture**: ThemeSwitcher now uses `useBaseUrl` for proper path resolution
- **Performance**: Pre-computed theme URLs for better rendering performance
- **Type Safety**: Enhanced TypeScript interfaces with proper entity separation
- **Code Organization**: Cleaner separation between configuration and runtime logic

### 📚 Documentation

- **Updated Theme System Docs**: Comprehensive v2.0 feature documentation
- **Migration Guide**: Step-by-step upgrade instructions from v1.x
- **API Reference**: Updated component interfaces and configuration options
- **Examples**: New examples showcasing v2.0 capabilities

### 🔧 Developer Experience

- **Better Debugging**: Clear error messages and fallback behaviors
- **Simplified Setup**: Automatic theme detection reduces manual configuration
- **Improved Tooling**: Enhanced pre-build process with better feedback

## [Unreleased] - 2025-08-06

### Added

- **ESLint Configuration**: Modern ESLint v9 with flat config format and TypeScript support
- **Code Quality Gates**: Comprehensive formatting and linting validation in CI/CD
- **Developer Scripts**: New quality assurance commands (`lint`, `format`, `check-all`)
- **Artifacts Build**: Configurable output directory for production builds (now uses `./artifacts`)

### Changed

- **Build Process**: Production builds now output to `./artifacts` directory via `build:prod` script
- **Code Formatting**: Enhanced code consistency with Prettier integration and automated formatting
- **TypeScript Configuration**: Improved type safety and error resolution for Docusaurus runtime
- **Component Architecture**: Consolidated configuration approach using static TypeScript classes

### Improved

- **Theme System**: Enhanced theme loading and management with better error handling
- **Badge Configuration**: More robust badge templating and variable resolution
- **Pre-Build Process**: Improved content preparation with better error reporting
- **Component Integration**: Streamlined component registration and navbar integration

### Technical Enhancements

- **ESLint Rules**: Configured for TypeScript with relaxed strictness for better Docusaurus compatibility
- **Code Style**: Consistent formatting across all TypeScript and React components
- **Build Pipeline**: Automated pre-build step integration with theme and content generation
- **Type Safety**: Enhanced TypeScript interfaces and configuration validation

### Documentation

- **API Reference**: Updated component interfaces and configuration options
- **Examples**: Refreshed code examples with current syntax and best practices
- **Migration Guide**: Added guidance for upgrading from previous template versions
- **Development Workflow**: Enhanced developer experience documentation

### Breaking Changes

None in this release. All changes are backward compatible.

### Fixed

- **Theme Loading**: Resolved theme switching edge cases and improved persistence
- **Component Registration**: Fixed navbar component registration and type safety
- **Build Process**: Enhanced reliability of pre-build content generation
- **Configuration**: Improved validation and error handling in static config classes
