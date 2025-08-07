import type { Theme } from './entities';
import themeData from './themes.json';

export const themes: Theme[] = themeData.themes;

export const defaultTheme: Theme =
  themes.find((t) => t.name === themeData.defaultTheme) ||
  (themes.length > 0
    ? themes[0]
    : {
        name: 'fallback',
        displayName: 'Default',
        cssFile: 'themes/default.css'
      });
