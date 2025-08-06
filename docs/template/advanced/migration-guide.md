---
id: migration-guide
title: Migration Guide
sidebar_position: 3
---

This guide helps you migrate from previous versions of the Docusaurus Template to the latest version with enhanced development workflow and code quality tools.

## Version 1.0.1 Migration

### Overview of Changes

Version 1.0.1 introduces significant improvements to development workflow, code quality tooling, and build process:

- **Modern ESLint v9** with flat configuration
- **Enhanced Prettier** integration
- **Quality Gates** and development scripts
- **Artifacts Build** directory changes
- **Static Configuration Classes** (no breaking changes)

### Breaking Changes

**None.** This is a backward-compatible release. All existing configurations and components continue to work without modification.

### New Features You Get

#### Development Tooling

```bash
# New scripts available after upgrade
pnpm run lint          # ESLint checking
pnpm run lint:fix       # Auto-fix ESLint issues
pnpm run format         # Format code with Prettier
pnpm run format:check   # Check formatting
pnpm run check-all      # Run all quality checks
```

#### Enhanced Build Process

```bash
# Production builds now use artifacts directory
pnpm run build:prod     # Outputs to ./artifacts instead of ./build
```

## Migration Steps

### Step 1: Update Dependencies

If you're using an older version, update your `package.json` dependencies:

```bash
# Update to latest template version
pnpm install

# Verify new scripts are available
pnpm run --help
```

### Step 2: Configure ESLint (Optional)

The template now includes ESLint configuration. If you have an existing `.eslintrc` file, you can:

**Option A**: Use the template's ESLint config (recommended)

```bash
# Remove old ESLint config
rm .eslintrc.js .eslintrc.json .eslintrc.yml

# The template's eslint.config.js will be used automatically
```

**Option B**: Merge with existing config

```javascript
// eslint.config.js - merge template config with your existing rules
import templateConfig from './node_modules/docusaurus-template/eslint.config.js';

export default [
  ...templateConfig,
  {
    // Your custom rules
    rules: {
      // Add your existing rules here
    }
  }
];
```

### Step 3: Update Build Scripts (Optional)

If you have custom build scripts that depend on the output directory:

```json
{
  "scripts": {
    // Update any scripts that reference ./build
    "deploy": "gh-pages -d artifacts", // Changed from 'build' to 'artifacts'
    "serve-prod": "serve artifacts" // Changed from 'build' to 'artifacts'
  }
}
```

### Step 4: Add Quality Gates to CI/CD (Optional)

Enhance your CI/CD pipeline with quality checks:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g pnpm
      - run: pnpm install
      - run: pnpm run check-all # New comprehensive check
      - run: pnpm run build:prod
```

## Configuration Migration

### Static Classes (No Action Required)

The template now uses static TypeScript classes for configuration, but **your existing usage continues to work**:

```typescript
// This still works exactly the same
import { GitHubLinksConfig } from '@site/src/config/github-links-config';

GitHubLinksConfig.links = [
  // Your existing configuration
];
```

### Badge Configuration

If you were using `badge-config.json` (deprecated):

**Before (still works)**:

```json
// badge-config.json
{
  "templateVariables": {
    "user": "your-org",
    "repository": "your-repo"
  }
}
```

**After (recommended)**:

```typescript
// Import and modify static class
import { BadgeConfig } from '@site/src/config/badge-config';

BadgeConfig.templateVariables.user = 'your-org';
BadgeConfig.templateVariables.repository = 'your-repo';
```

## Verification Steps

After migration, verify everything works correctly:

### 1. Development Server

```bash
pnpm run start
# Should start normally with pre-build step
```

### 2. Quality Checks

```bash
pnpm run check-all
# Should pass all formatting, linting, and type checks
```

### 3. Production Build

```bash
pnpm run build:prod
# Should create ./artifacts directory with production build
```

### 4. Component Functionality

- ✅ Theme switching works
- ✅ GitHub links display correctly
- ✅ Badges render properly
- ✅ Comments integration functions
- ✅ Version display shows correctly

## Troubleshooting Migration

### ESLint Errors After Migration

**Problem**: ESLint reports errors in existing code
**Solution**:

```bash
# Auto-fix most formatting issues
pnpm run lint:fix

# Check remaining issues
pnpm run lint
```

### Build Directory Issues

**Problem**: Deployment scripts reference old `./build` directory
**Solution**:

```bash
# Update deployment scripts to use ./artifacts
# Or create a symbolic link for backward compatibility
ln -s artifacts build
```

### TypeScript Errors

**Problem**: New TypeScript strictness causes errors
**Solution**:

```bash
# Check specific TypeScript issues
pnpm run typecheck

# The template uses relaxed rules for Docusaurus compatibility
# Review eslint.config.js for current configuration
```

### Theme Loading Issues

**Problem**: Custom themes don't load after migration
**Solution**:

```bash
# Regenerate theme configuration
pnpm run prestart

# Check theme CSS files have proper metadata comments
# @theme-id: your-theme-name
# @theme-name: Your Theme Display Name
```

## Rolling Back (If Needed)

If you encounter issues and need to rollback:

### 1. Restore Previous Package.json

```bash
# Checkout previous version
git checkout HEAD~1 -- package.json
pnpm install
```

### 2. Remove New Configuration Files

```bash
# Remove new ESLint config if causing issues
rm eslint.config.js

# Restore old ESLint config
git checkout HEAD~1 -- .eslintrc.js
```

### 3. Update Build Scripts

```bash
# Temporarily use old build output
sed -i 's/--out-dir \.\/artifacts//g' package.json
```

## Getting Help

If you encounter migration issues:

1. **Check the [Development Workflow Guide](/template/advanced/development-workflow)** for detailed setup instructions
2. **Review [Examples](/template/getting-started/examples)** for current usage patterns
3. **Consult [Troubleshooting](/template/getting-started/troubleshooting)** for common solutions
4. **Open an issue** on GitHub with your specific migration problem

## Post-Migration Benefits

After successful migration, you'll have:

- ✅ **Consistent Code Quality** with automated formatting and linting
- ✅ **Enhanced Developer Experience** with comprehensive tooling
- ✅ **Better CI/CD Integration** with quality gates
- ✅ **Improved Build Process** with configurable output directory
- ✅ **Future-Proof Configuration** using TypeScript static classes
