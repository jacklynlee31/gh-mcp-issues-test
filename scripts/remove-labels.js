// Node.js script to remove all labels from open issues
// Requires GITHUB_TOKEN environment variable to be set

const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const OWNER = 'jacklynlee31';
const REPO = 'gh-mcp-issues-test';

async function removeAllLabelsFromOpenIssues() {
  try {
    console.log(`Fetching open issues from ${OWNER}/${REPO}...`);
    
    // Get all open issues
    const { data: issues } = await octokit.rest.issues.listForRepo({
      owner: OWNER,
      repo: REPO,
      state: 'open'
    });

    console.log(`Found ${issues.length} open issues`);

    if (issues.length === 0) {
      console.log('No open issues found.');
      return;
    }

    // Process each issue
    for (const issue of issues) {
      if (issue.labels && issue.labels.length > 0) {
        console.log(`\nIssue #${issue.number}: "${issue.title}"`);
        console.log(`  Current labels: ${issue.labels.map(label => label.name).join(', ')}`);
        
        // Remove all labels from this issue
        try {
          await octokit.rest.issues.setLabels({
            owner: OWNER,
            repo: REPO,
            issue_number: issue.number,
            labels: [] // Empty array removes all labels
          });
          
          console.log(`  ✓ All labels removed from issue #${issue.number}`);
        } catch (error) {
          console.error(`  ✗ Error removing labels from issue #${issue.number}:`, error.message);
        }
      } else {
        console.log(`\nIssue #${issue.number}: "${issue.title}" - No labels to remove`);
      }
    }

    console.log('\n✓ Completed label removal process');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Check for required environment variable
if (!process.env.GITHUB_TOKEN) {
  console.error('Error: GITHUB_TOKEN environment variable is required');
  console.error('Please set it with appropriate repository permissions');
  process.exit(1);
}

removeAllLabelsFromOpenIssues();