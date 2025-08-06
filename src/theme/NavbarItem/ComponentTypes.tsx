import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import ThemeSwitcherNavbarItem from './ThemeSwitcherNavbarItem';
import VersionDisplayNavbarItem from './VersionDisplayNavbarItem';
import GitHubLinksNavbarItem from './GitHubLinksNavbarItem';

import ComponentTypesObject from '@theme/NavbarItem/ComponentTypes';

// If '@theme/NavbarItem/ComponentTypes' exports a value, use typeof for the type annotation
const ComponentTypes: typeof ComponentTypesObject = {
  default: DefaultNavbarItem,
  localeDropdown: LocaleDropdownNavbarItem,
  search: SearchNavbarItem,
  dropdown: DropdownNavbarItem,
  html: HtmlNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  docsVersion: DocsVersionNavbarItem,
  docsVersionDropdown: DocsVersionDropdownNavbarItem,
  'custom-themeSwitcher': ThemeSwitcherNavbarItem,
  'custom-versionDisplay': VersionDisplayNavbarItem,
  'custom-gitHubLinks': GitHubLinksNavbarItem
};

export default ComponentTypes;
