/**
 * GitHub Links Examples
 * Various configuration examples for the GitHubLinks component
 *
 * Note: Configuration is consolidated in github-links-config.ts with defaults already set.
 * You can override the defaults by directly setting static properties at any time.
 */
import { GitHubLinksConfig } from '../config/github-links-config';
import { faGithub, faDocker, faNpm } from '@fortawesome/free-brands-svg-icons';
import {
  faTag,
  faBug,
  faComments,
  faBook,
  faUsers,
  faHeart,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

// Example 1: Use default configuration (already enabled with basic GitHub and Releases links)
export const useDefaultConfiguration = () => {
  // No need to set properties - defaults are already set in github-links-config.ts
  // Default: enabled=true, two links (GitHub repo and Releases), showIcons=true
};

// Example 2: Docker Build Agent configuration (from user's example)
export const dockerBuildAgentExample = () => {
  GitHubLinksConfig.links = [
    {
      href: 'https://github.com/The-Running-Dev/Docker-BuildAgent',
      label: 'GitHub',
      position: 'right',
      title: 'View source code on GitHub',
      icon: faGithub,
    },
    {
      href: 'https://github.com/The-Running-Dev/Docker-BuildAgent/releases',
      label: 'Releases',
      position: 'right',
      title: 'View releases and changelog',
      icon: faTag,
    },
    {
      href: 'https://ghcr.io/the-running-dev/build-agent',
      label: 'Container Registry',
      position: 'right',
      title: 'View container packages',
      icon: faDocker,
    },
  ];
};

// Example 3: Dropdown menu configuration
export const dropdownMenuExample = () => {
  GitHubLinksConfig.dropdown = true;
  GitHubLinksConfig.dropdownLabel = 'Project Links';
  GitHubLinksConfig.links = [
    {
      href: 'https://github.com/your-org/your-repo',
      label: 'Source Code',
      icon: faGithub,
    },
    {
      href: 'https://github.com/your-org/your-repo/releases',
      label: 'Releases',
      icon: faTag,
    },
    {
      href: 'https://github.com/your-org/your-repo/issues',
      label: 'Issues',
      icon: faBug,
    },
    {
      href: 'https://github.com/your-org/your-repo/discussions',
      label: 'Discussions',
      icon: faComments,
    },
  ];
};

// Example 4: Extended links with additional services
export const extendedLinksExample = () => {
  GitHubLinksConfig.links = [
    {
      href: 'https://github.com/your-org/your-repo',
      label: 'GitHub',
      icon: faGithub,
      title: 'View source code',
    },
    {
      href: 'https://github.com/your-org/your-repo/releases',
      label: 'Releases',
      icon: faTag,
      title: 'Download releases',
    },
    {
      href: 'https://hub.docker.com/r/yourorg/yourrepo',
      label: 'Docker Hub',
      icon: faDocker,
      title: 'Container images',
    },
    {
      href: 'https://www.npmjs.com/package/yourpackage',
      label: 'npm',
      icon: faNpm,
      title: 'npm package',
    },
    {
      href: 'https://github.com/your-org/your-repo/wiki',
      label: 'Wiki',
      icon: faBook,
      title: 'Documentation wiki',
    },
  ];
};

// Example 5: Minimal configuration (no icons, simple styling)
export const minimalLinksExample = () => {
  GitHubLinksConfig.showIcons = false;
  GitHubLinksConfig.links = [
    {
      href: 'https://github.com/your-org/your-repo',
      label: 'GitHub',
      className: 'github-links__link--badge',
    },
    {
      href: 'https://github.com/your-org/your-repo/releases',
      label: 'Releases',
      className: 'github-links__link--badge',
    },
  ];
};

// Example 6: Custom styling and organization links
export const organizationLinksExample = () => {
  GitHubLinksConfig.className = 'custom-github-links';
  GitHubLinksConfig.links = [
    {
      href: 'https://github.com/YourOrg',
      label: 'Organization',
      icon: faUsers,
      title: 'View organization profile',
    },
    {
      href: 'https://github.com/YourOrg/your-main-repo',
      label: 'Main Repository',
      icon: faGithub,
      title: 'Main project repository',
    },
    {
      href: 'https://github.com/orgs/YourOrg/projects',
      label: 'Projects',
      icon: faProjectDiagram,
      title: 'Organization projects',
    },
  ];
};

// Example 7: Disabled GitHub links
export const disabledLinksExample = () => {
  GitHubLinksConfig.enabled = false;
};

// Configuration examples for different project types:

export const openSourceProjectConfig = () => {
  GitHubLinksConfig.enabled = true;
  GitHubLinksConfig.showIcons = true;
  GitHubLinksConfig.dropdown = false;
  GitHubLinksConfig.links = [
    {
      href: 'https://github.com/your-org/your-repo',
      label: 'GitHub',
      icon: faGithub,
      title: 'Star us on GitHub!',
    },
    {
      href: 'https://github.com/your-org/your-repo/releases',
      label: 'Releases',
      icon: faTag,
      title: 'Latest releases',
    },
    {
      href: 'https://github.com/your-org/your-repo/blob/main/CONTRIBUTING.md',
      label: 'Contribute',
      icon: faHeart,
      title: 'How to contribute',
    },
  ];
};

export const containerProjectConfig = () => {
  GitHubLinksConfig.enabled = true;
  GitHubLinksConfig.links = [
    {
      href: 'https://github.com/your-org/your-container',
      label: 'Source',
      icon: faGithub,
    },
    {
      href: 'https://hub.docker.com/r/yourorg/yourcontainer',
      label: 'Docker Hub',
      icon: faDocker,
    },
    {
      href: 'https://github.com/your-org/your-container/releases',
      label: 'Tags',
      icon: faTag,
    },
  ];
};
