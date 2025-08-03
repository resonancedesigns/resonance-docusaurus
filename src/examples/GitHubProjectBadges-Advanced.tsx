// Advanced usage examples for GitHubProjectBadges with template variables

import React from 'react';
import GitHubProjectBadges from '../components/GitHubProjectBadges';

// Example 1: Using default template variables from badge-config.json
const DefaultTemplateExample = () => (
  <GitHubProjectBadges 
    user="facebook" 
    repository="docusaurus"
    // Uses all templateVariables from config file
  />
);

// Example 2: Selective groups with specific repository
const SelectiveGroupsExample = () => (
  <GitHubProjectBadges 
    user="microsoft" 
    repository="vscode"
    groups={["buildRelease", "documentation"]}
  />
);

// Example 3: Community-focused badges
const CommunityFocusExample = () => (
  <GitHubProjectBadges 
    user="facebook" 
    repository="react"
    groups={["community", "quality"]}
  />
);

/*
Template Variable System:

Configuration (badge-config.json):
{
  "templateVariables": {
    "demoUrl": "https://default-demo.com",
    "docsUrl": "https://default-docs.com",
    "user": "default-user",
    "repository": "default-repo",
    "customVariable": "custom-value"
  }
}

Usage in badge URLs:
"url": "https://img.shields.io/badge/Demo-Live-green?logo=web&logoColor=white",
"link": "{demoUrl}/some-path"

Variable Resolution:
1. Template variables from config file
2. Component props override user and repository
3. Placeholder remains unchanged if no value found

All customization is done through the JSON configuration file.
Component props are minimal: user, repository, and optional groups array.

Examples of template variables you can add:
- {apiUrl} - API endpoint URL
- {stagingUrl} - Staging environment URL
- {version} - Version number
- {branch} - Git branch name
- {environment} - Environment name (prod, staging, dev)
*/

export { 
  DefaultTemplateExample, 
  SelectiveGroupsExample, 
  CommunityFocusExample 
};
