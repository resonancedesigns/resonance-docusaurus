import * as fs from 'fs';
import * as path from 'path';

interface NavbarLink {
  label: string;
  to: string;
}

/**
 * PreBuild handles copying markdown from project root into src/pages
 * and regenerating the navbarLinks file. Use static getVersion() for date-based versioning.
 */
export class PreBuild {
  private projectRoot: string;
  private pagesDir: string;

  constructor() {
    // Project root is the parent directory of this scripts folder
    this.projectRoot = path.resolve(__dirname, '..');
    this.pagesDir = path.join(this.projectRoot, 'src', 'pages');
  }

  /**
   * Ensure the directory for a given file path exists, creating it if necessary.
   */
  private ensureDirectoryExists(filePath: string): void {
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  /**
   * Copy all markdown files from project root into src/pages, overwriting if present.
   */
  private copyAllRootMarkdown(): void {
    const mdFiles = fs.readdirSync(this.projectRoot).filter((f) => f.endsWith('.md'));

    mdFiles.forEach((file) => {
      const srcPath = path.join(this.projectRoot, file);
      // Rename README.md to index.md in destination directory
      const destFile = file.toLowerCase() === 'readme.md' ? 'index.md' : file;
      const dstPath = path.join(this.pagesDir, destFile);

      this.ensureDirectoryExists(dstPath);
    
      if (!fs.existsSync(dstPath)) {
        fs.copyFileSync(srcPath, dstPath);
        
        console.log(`✅ Copied ${file} --> src/pages/${destFile}`);
      } else {
        console.log(`ℹ️ Skipped ${file} --> src/pages/${destFile}`);
      }
    });
  }

  private filenameToLabel(filename: string): string {
    // Remove extension, replace -/_ with space, capitalize first letter
    return filename.replace(/\.(md|mdx)$/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  /**
   * Generate navbarLinks.ts from the provided markdown files.
   */
  /**
   * Generate the navbarLinks.ts file based on markdown file names
   */
  private generateNavbar(mdFiles: string[]): void {
    const outPath = path.join(__dirname, '../src/navbarLinks.ts');

    // Exclude index.md (homepage) from navbar links
    const links: NavbarLink[] = mdFiles
      .filter((file) => path.parse(file).name.toLowerCase() !== 'index')
      .map((file) => {
        const name = path.parse(file).name;
        const toPath = `/${name}`;
        return {
          label: this.filenameToLabel(file),
          to: toPath,
        };
      });

    const tsOutput = `// AUTO-GENERATED FILE. DO NOT EDIT.
export const navbarLinks = ${JSON.stringify(links, null, 2)} as const;
`;

    fs.writeFileSync(outPath, tsOutput, 'utf-8');

    console.log(`✅ Navbar Updated with ${mdFiles.length} Entries`);
  }

  /**
   * Main process: copy markdown files and update navbar links.
   */
  public process(): void {
    this.copyAllRootMarkdown();
    const mdFiles = fs.readdirSync(this.pagesDir).filter((f) => f.endsWith('.md'));
    
    this.generateNavbar(mdFiles);

    console.log('🚀 Pre Build Process Completed');
  }


  public static getVersion(): string {
    try {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      
      return `${year}.${month}.${day}`;
    } catch (error) {
      console.error('Error Generating Version:', error);
      
      return 'unknown';
    }
  }
}

// Execute when run directly
if (require.main === module) {
  new PreBuild().process();
}