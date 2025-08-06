import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import './ThemeSwitcher.css';
import { themes } from '../../themes';

const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('default');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme =
      localStorage.getItem('docusaurus-theme-color') || 'default';

    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName: string) => {
    // Remove existing theme links
    const existingLinks = document.querySelectorAll(
      'link[data-theme-switcher]'
    );
    existingLinks.forEach((link) => link.remove());

    // Find the theme
    const theme = themes.find((t) => t.name === themeName);

    if (!theme) return;

    // Add new theme link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = theme.cssFile;
    link.setAttribute('data-theme-switcher', 'true');

    document.head.appendChild(link);
    link.setAttribute('data-theme-switcher', 'true');

    document.head.appendChild(link);

    // Save to localStorage
    localStorage.setItem('docusaurus-theme-color', themeName);

    setCurrentTheme(themeName);
  };

  const handleThemeChange = (themeName: string) => {
    applyTheme(themeName);
    setIsOpen(false);
  };

  const currentThemeDisplayName =
    themes.find((t) => t.name === currentTheme)?.displayName || 'Default';

  return (
    <div className="theme-switcher">
      <button
        className="theme-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch Theme"
        title={`Current: ${currentThemeDisplayName}`}
      >
        <FontAwesomeIcon icon={faPalette} />
      </button>

      {isOpen && (
        <div className="theme-switcher__dropdown">
          <div className="theme-switcher__header">Themes</div>
          {themes.map((theme) => (
            <button
              key={theme.name}
              className={`theme-switcher__option ${
                currentTheme === theme.name
                  ? 'theme-switcher__option--active'
                  : ''
              }`}
              onClick={() => handleThemeChange(theme.name)}
            >
              <span
                className={`theme-switcher__color-preview theme-switcher__color-preview--${theme.name}`}
              ></span>
              {theme.displayName}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div
          className="theme-switcher__backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
