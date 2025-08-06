# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
