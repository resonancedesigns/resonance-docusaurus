/**
 * Version Display Examples
 * Various configuration examples for the VersionDisplay component
 *
 * Note: Configuration is now consolidated in version-config.ts with defaults already set.
 * You can override the defaults by directly setting static properties at any time.
 */

import { VersionConfig } from '../config/version-config';

// Example 1: Use default configuration (already enabled with badge style)
export const useDefaultConfiguration = () => {
  // No need to set properties - defaults are already set in version-config.ts
  // Default: enabled=true, prefix='v', badge=true, href='releases', title='View release notes'
};

// Example 2: Simple version display (override to remove badge)
export const simpleVersionExample = () => {
  VersionConfig.badge = false;
  VersionConfig.href = undefined; // Remove link
};

// Example 3: Custom version with different styling
export const customVersionExample = () => {
  VersionConfig.version = '2.1.0-beta';
  VersionConfig.prefix = 'Version ';
  VersionConfig.className = 'custom-beta-version';
  VersionConfig.title = 'Beta version - not recommended for production';
};

// Example 4: Minimal version display (no prefix, no link)
export const minimalVersionExample = () => {
  VersionConfig.prefix = '';
  VersionConfig.href = undefined;
  VersionConfig.badge = false;
  VersionConfig.title = 'Current version';
};

// Example 5: Disabled version display
export const disabledVersionExample = () => {
  VersionConfig.enabled = false;
};

// Configuration examples for different project types:

export const productionConfigExample = () => {
  VersionConfig.enabled = true;
  VersionConfig.prefix = 'v';
  VersionConfig.badge = true;
  VersionConfig.href = 'https://github.com/your-org/your-repo/releases';
  VersionConfig.title = 'View changelog and release notes';
};

export const developmentConfigExample = () => {
  VersionConfig.version = '1.2.0-dev';
  VersionConfig.prefix = '';
  VersionConfig.badge = true;
  VersionConfig.className = 'dev-version';
  VersionConfig.title = 'Development build';
};

export const libraryConfigExample = () => {
  VersionConfig.prefix = 'API v';
  VersionConfig.badge = false;
  VersionConfig.href = 'https://npmjs.com/package/your-package';
  VersionConfig.title = 'View package on npm';
};
