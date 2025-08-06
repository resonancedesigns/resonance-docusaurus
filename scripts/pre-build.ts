import * as fs from 'fs';
import * as path from 'path';

// Configuration options
let OVERWRITE_EXISTING_FILES: boolean = true;
const PROJECT_ROOT = path.join(__dirname, '../');
const THEMES_DIR = path.join(__dirname, '../static/themes');
const PAGES_DIR = path.join(__dirname, '../src/pages');
const THEMES_CONFIG: string = path.join(__dirname, '../src/themes.ts');
const NAVBAR_CONFIG: string = path.join(__dirname, '../src/navbarLinks.ts');

interface Theme {
  name: string;
  displayName: string;
  cssFile: string;
}

interface NavbarLink {
  label: string;
  to: string;
}

export class PreBuild {
  private themes: Theme[] = [];

  private getThemeMetadata(file: string): Theme {
    const filePath = path.join(THEMES_DIR, file);
    const name = file.replace(/\.css$/, '');

    try {
      const content = fs.readFileSync(filePath, 'utf-8');

      // Extract theme-id and theme-name from CSS header comments with improved regex
      // Handle both single-line and multi-line comments, with better whitespace handling
      const themeIdMatch = content.match(/@theme-id\s*:\s*([^\s\r\n*\/]+)/i);
      const themeNameMatch = content.match(/@theme-name\s*:\s*([^\r\n*]+?)(?=\r?\n|\*\/|$)/i);

      // Extract and validate theme ID
      let themeId = name; // Default fallback

      if (themeIdMatch) {
        const extractedId = themeIdMatch[1].trim();

        // Validate theme ID (alphanumeric, hyphens, underscores only)
        if (/^[a-zA-Z0-9_-]+$/.test(extractedId)) {
          themeId = extractedId;
        } else {
          console.warn(`Warning: Invalid theme-id "${extractedId}" in ${file}, using filename`);
        }
      }

      // Extract and clean theme name
      let themeName = name.charAt(0).toUpperCase() + name.slice(1); // Default fallback

      if (themeNameMatch) {
        const extractedName = themeNameMatch[1].trim();

        if (extractedName.length > 0) {
          themeName = extractedName;
        }
      }

      return {
        name: themeId,
        displayName: themeName,
        cssFile: `/themes/${file}`,
      };
    } catch (error) {
      console.warn(
        `Warning: Could not Read Theme File ${file}, Using Fallback. Error: ${error.message}`,
      );

      // Use filename-based fallback (no counter needed)
      return {
        name: name,
        displayName: name.charAt(0).toUpperCase() + name.slice(1),
        cssFile: `/themes/${file}`,
      };
    }
  }

  public generateThemeConfig(): void {
    if (!fs.existsSync(THEMES_DIR)) {
      console.warn(`Themes Directory not Found: ${THEMES_DIR}`);

      return;
    }

    const cssFiles = fs.readdirSync(THEMES_DIR).filter((f) => f.endsWith('.css'));
    const themes: Theme[] = cssFiles.map((f) => this.getThemeMetadata(f));

    const themeEntries = themes
      .map((theme) => {
        const { name, displayName, cssFile } = theme;
        return `  { name: '${name}', displayName: '${displayName}', cssFile: '${cssFile}' }`;
      })
      .join(',\n');

    const tsOutput = `// AUTO-GENERATED FILE. DO NOT EDIT.
export interface Theme {
  name: string;
  displayName: string;
  cssFile: string;
}

export const themes: Theme[] = [
${themeEntries}
];

export const defaultTheme: Theme = themes.find((t) => t.name === 'default') || themes[0];
`;

    fs.writeFileSync(THEMES_CONFIG, tsOutput, 'utf-8');

    console.log(`✅ Theme Config Created with ${themes.length} Theme(s)`);
  }

  private copyMarkdown(): void {
    // Ensure the pages directory exists first
    if (!fs.existsSync(PAGES_DIR)) {
      fs.mkdirSync(PAGES_DIR, { recursive: true });
    }

    const mdFiles = fs.readdirSync(PROJECT_ROOT).filter((f) => f.endsWith('.md'));

    mdFiles.forEach((file) => {
      const srcPath = path.join(PROJECT_ROOT, file);
      // Rename README.md to index.md in destination directory
      const destFile = file.toLowerCase() === 'readme.md' ? 'index.md' : file;
      const dstPath = path.join(PAGES_DIR, destFile);

      const fileExists = fs.existsSync(dstPath);

      if (!fileExists || OVERWRITE_EXISTING_FILES) {
        fs.copyFileSync(srcPath, dstPath);

        const action = fileExists ? 'Overwrote' : 'Copied';

        console.log(`✅ ${action} ${file} --> src/pages/${destFile}`);
      } else {
        console.log(`ℹ️ Skipped ${file} --> src/pages/${destFile}`);
      }
    });
  }

  private generateNavbar(): void {
    const mdFiles = fs.readdirSync(PAGES_DIR).filter((f) => f.endsWith('.md'));
    let numberOfLinks = 0;

    // Exclude index.md (homepage) from navbar links
    const links: NavbarLink[] = mdFiles
      .filter((file) => path.parse(file).name.toLowerCase() !== 'index')
      .map((file) => {
        const name = path.parse(file).name;
        const toPath = `/${name}`;

        numberOfLinks++;

        return {
          label: file
            .replace(/\.(md|mdx)$/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase()),
          to: toPath,
        };
      });

    const tsOutput = `// AUTO-GENERATED FILE. DO NOT EDIT.
export const navbarLinks = ${JSON.stringify(links, null, 2)} as const;
`;

    fs.writeFileSync(NAVBAR_CONFIG, tsOutput, 'utf-8');

    console.log(`✅ Navbar Created with ${numberOfLinks} Entry(s)`);
  }

  public process(): void {
    this.copyMarkdown();
    this.generateNavbar();
    this.generateThemeConfig();

    console.log('🚀 Pre Build Process Completed');
  }
}

// Only run if invoked directly, not imported
if (process.argv[1] && process.argv[1].endsWith('pre-build.ts')) {
  new PreBuild().process();
}
