// Example usage of GitHubProjectBadges component with group filtering

import React from 'react';
import GitHubProjectBadges from '../components/GitHubProjectBadges';

// Example 1: Show all badge groups (default behavior)
const AllBadgesExample = () => (
  <GitHubProjectBadges 
    user="facebook" 
    repository="docusaurus"
  />
);

// Example 2: Show only Build & Release and Quality groups
const BuildAndQualityExample = () => (
  <GitHubProjectBadges 
    user="facebook" 
    repository="docusaurus"
    groups={["buildRelease", "quality"]}
  />
);

// Example 3: Show only Documentation group
const DocumentationOnlyExample = () => (
  <GitHubProjectBadges 
    user="facebook" 
    repository="docusaurus"
    groups={["documentation"]}
  />
);

// Example 4: Show Build, Distribution, and Community groups
const SelectiveGroupsExample = () => (
  <GitHubProjectBadges 
    user="facebook" 
    repository="docusaurus"
    groups={["buildRelease", "distribution", "community"]}
  />
);

// Available group IDs in badge-config.json:
// - "buildRelease" - Build & Release badges (CI, Tests, Coverage, etc.)
// - "distribution" - Distribution & Deployment badges (Version, Docker, etc.)
// - "documentation" - Documentation & Demo badges (Docs, Demo, Uptime, etc.)
// - "quality" - Quality & Security badges (License, Language, etc.)
// - "community" - Community & Activity badges (Stars, Issues, etc.)
// - "metrics" - Development Metrics badges (Last Commit, Code Size, etc.)

export { 
  AllBadgesExample, 
  BuildAndQualityExample, 
  DocumentationOnlyExample, 
  SelectiveGroupsExample 
};
