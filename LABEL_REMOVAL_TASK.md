# Label Removal Task

## Objective
Remove all current labels from all open issues in the repository `jacklynlee31/gh-mcp-issues-test`.

## Current State Analysis
As of the analysis performed, there are **3 open issues** with labels that need to be removed:

### Issue #7: "Remove 'What's New in Astro 5.0?'"
- **Current Labels**: `medium`
- **Action Required**: Remove the "medium" label

### Issue #5: "Remove the links section"  
- **Current Labels**: `low`
- **Action Required**: Remove the "low" label

### Issue #3: "Remove Astro logo from repository"
- **Current Labels**: `medium` 
- **Action Required**: Remove the "medium" label

## Implementation Options

### Option 1: Using GitHub CLI (Recommended)
A script `remove-labels.sh` has been created that will:
1. Fetch all open issues from the repository
2. Identify issues with labels
3. Remove all labels from each issue
4. Provide progress feedback

**Prerequisites**: 
- GitHub CLI installed (`gh`)
- Authentication with appropriate permissions

**Usage**:
```bash
./remove-labels.sh
```

### Option 1b: Using Node.js and GitHub API
A Node.js script `scripts/remove-labels.js` provides an alternative implementation:
1. Uses GitHub's REST API via Octokit
2. Removes all labels from open issues
3. Includes comprehensive error handling

**Prerequisites**:
- Node.js installed
- GitHub personal access token with `repo` permissions

**Usage**:
```bash
cd scripts
npm install
export GITHUB_TOKEN="your_token_here"
npm run remove-labels
```

### Option 2: Manual Removal via GitHub Web Interface
1. Navigate to each issue in the GitHub web interface
2. Click on the label next to each issue
3. Remove the label by clicking the "x" next to it

### Option 3: GitHub API Direct Calls
For each issue, make a DELETE request to:
```
DELETE /repos/jacklynlee31/gh-mcp-issues-test/issues/{issue_number}/labels/{label_name}
```

## Verification
After removal, verify that:
- Issue #7 has no labels
- Issue #5 has no labels  
- Issue #3 has no labels

## Notes
- This task requires appropriate GitHub repository permissions
- Labels can be re-added later if needed
- The removal is reversible through the GitHub interface or API
- Additional documentation and alternative scripts are available in the `scripts/` directory