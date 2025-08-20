# Label Removal Scripts

This directory contains scripts to remove all labels from open issues in the repository.

## Available Scripts

### 1. Bash Script (`../remove-labels.sh`)
Uses GitHub CLI to remove labels from open issues.

**Prerequisites:**
- GitHub CLI (`gh`) installed
- Authenticated with GitHub (`gh auth login`)

**Usage:**
```bash
cd ..
./remove-labels.sh
```

### 2. Node.js Script (`remove-labels.js`)
Uses GitHub's REST API via Octokit to remove labels.

**Prerequisites:**
- Node.js installed
- GitHub personal access token with `repo` permissions

**Setup:**
```bash
npm install
export GITHUB_TOKEN="your_github_token_here"
```

**Usage:**
```bash
npm run remove-labels
```

## Current Issues with Labels

Based on the analysis, the following open issues currently have labels that will be removed:

- **Issue #7**: "Remove 'What's New in Astro 5.0?'" - Label: `medium`
- **Issue #5**: "Remove the links section" - Label: `low`  
- **Issue #3**: "Remove Astro logo from repository" - Label: `medium`

## Notes

- Both scripts will remove ALL labels from ALL open issues
- The operation is reversible - labels can be re-added if needed
- Requires appropriate repository permissions
- Scripts include error handling and progress reporting