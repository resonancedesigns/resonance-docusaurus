export interface NavbarLink {
  type?: 'doc' | 'docSidebar' | 'dropdown' | 'html' | string; // Allow custom types too
  label?: string;
  to?: string;
  href?: string;
  docId?: string;
  position?: 'left' | 'right';
  [key: string]: any; // Allow additional properties for Docusaurus compatibility
}
