import { themes as prismThemes } from 'prism-react-renderer';

import { PreBuild } from './scripts/pre-build';
import { navbarLinks } from './src/navbarLinks';

import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const version = PreBuild.getVersion();
const config: Config = {
  title: 'Your Docs Site',
  tagline: 'Reusable Docusaurus Template',
  url: 'https://your-site.com',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  projectName: 'your-docs',
  organizationName: 'your-org',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'docs',
          id: 'default',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Project',
      logo: {
        alt: 'Project Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Docs',
        },
        {
          label: `v${version}`,
          position: 'right',
          href: '#',
        },
        // ...other links,
        ...navbarLinks,
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
