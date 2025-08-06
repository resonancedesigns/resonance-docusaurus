import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  GitHubLinksConfig,
  GitHubLink
} from '../../config/github-links-config';
import './GitHubLinks.css';

interface GitHubLinksProps {
  /** Override the default configuration */
  links?: GitHubLink[];
  /** Whether to show as dropdown */
  dropdown?: boolean;
  /** Custom CSS class */
  className?: string;
  /** Whether to show icons */
  showIcons?: boolean;
}

const GitHubLinks: React.FC<GitHubLinksProps> = ({
  links = GitHubLinksConfig.links,
  dropdown = GitHubLinksConfig.dropdown,
  className = GitHubLinksConfig.className,
  showIcons = GitHubLinksConfig.showIcons
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Don't render if disabled or no links
  if (!GitHubLinksConfig.enabled || !links || links.length === 0) {
    return null;
  }

  const containerClass =
    `github-links ${dropdown ? 'github-links--dropdown' : ''} ${
      className || ''
    }`.trim();

  const renderIcon = (icon?: any) => {
    if (!showIcons || !icon) return null;

    return <FontAwesomeIcon icon={icon} className="github-links__icon" />;
  };

  const renderLink = (link: GitHubLink, isDropdownItem = false) => {
    const linkClass = isDropdownItem
      ? 'github-links__dropdown-item'
      : `github-links__link ${link.className || ''}`.trim();

    return (
      <a
        key={link.href}
        href={link.href}
        className={linkClass}
        title={link.title}
        target={link.target || '_blank'}
        rel="noopener noreferrer"
      >
        {renderIcon(link.icon)}
        <span>{link.label}</span>
        <svg
          width="13.5"
          height="13.5"
          aria-hidden="true"
          className="iconExternalLink_qCNR"
        >
          <use href="#theme-svg-external-link"></use>
        </svg>
      </a>
    );
  };

  if (dropdown) {
    return (
      <div
        className={containerClass}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button
          className="github-links__dropdown-toggle"
          type="button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <FontAwesomeIcon icon={faGithub} className="github-links__icon" />
          <span>{GitHubLinksConfig.dropdownLabel || 'GitHub'}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="github-links__icon"
          />
        </button>
        <div className="github-links__dropdown-menu">
          {links.map((link) => renderLink(link, true))}
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {links.map((link) => renderLink(link))}
    </div>
  );
};

export default GitHubLinks;
