import React from 'react';
import { VersionConfig } from '../../config/version-config';
import './VersionDisplay.css';

const VersionDisplay: React.FC = () => {
  const config = VersionConfig;

  // Don't render if disabled
  if (!config.enabled) {
    return null;
  }

  // Get version from config or fallback to a default value
  // Note: In production, you might want to get this from package.json or environment
  const getDefaultVersion = (): string => {
    try {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');

      return `${year}.${month}.${day}`;
    } catch {
      return '1.0.0';
    }
  };

  const version = config.version || getDefaultVersion();
  const prefix = config.prefix || 'v';
  const displayText = `${prefix}${version}`;
  const className = `version-display ${config.badge ? 'version-display--badge' : ''} ${
    config.className || ''
  }`.trim();

  // Render as link if href is provided
  if (config.href) {
    return (
      <a
        href={config.href}
        className={className}
        title={config.title || `Version ${version}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {displayText}
      </a>
    );
  }

  // Render as span if no href
  return (
    <span className={className} title={config.title || `Version ${version}`}>
      {displayText}
    </span>
  );
};

export default VersionDisplay;
