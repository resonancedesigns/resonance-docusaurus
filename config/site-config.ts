import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as path from 'path';

export const PreBuildConfig = {
  ProjectRoot: path.join(__dirname, '../'),
  OverwriteExistingFiles: true,
  DefaultTheme: 'default'
};

// Base configuration with only the essential defaults
export const SiteConfig = {
  title: 'Your Docs Site',
  tagline: 'Reusable Docusaurus Template',
  url: 'https://docs-template.subzerodev.com',
  baseUrl: '/',
  organizationName: 'The-Running-Dev',
  projectName: 'Docusaurus-Template'
} as const;

export const SiteThemeConfig = {
  navbar: {
    title: 'Docusaurus Template',
    logo: {
      alt: 'Docusaurus Logo',
      src: 'img/logo.svg'
    }
  }
} as const;

// For backward compatibility
export const config: Config = {
  ...SiteConfig,
  themeConfig: SiteThemeConfig satisfies Preset.ThemeConfig
};

export default config;
