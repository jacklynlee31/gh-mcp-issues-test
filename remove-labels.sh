#!/bin/bash

# Script to remove all labels from open issues in the repository
# This script requires GitHub CLI (gh) to be installed and authenticated

REPO="jacklynlee31/gh-mcp-issues-test"

echo "Removing labels from open issues in $REPO..."

# Get all open issues and their labels
echo "Fetching open issues..."
ISSUES=$(gh issue list --repo "$REPO" --state open --json number,labels)

if [ -z "$ISSUES" ] || [ "$ISSUES" = "[]" ]; then
    echo "No open issues found."
    exit 0
fi

echo "Found open issues with labels to remove:"
echo "$ISSUES" | jq -r '.[] | "Issue #\(.number): \(.labels | map(.name) | join(", "))"'

# Process each issue
echo "$ISSUES" | jq -r '.[] | select(.labels | length > 0) | .number' | while read -r issue_number; do
    if [ -n "$issue_number" ]; then
        echo "Processing issue #$issue_number..."
        
        # Get current labels for this issue
        labels=$(gh issue view "$issue_number" --repo "$REPO" --json labels | jq -r '.labels[].name')
        
        # Remove each label
        for label in $labels; do
            echo "  Removing label '$label' from issue #$issue_number"
            gh issue edit "$issue_number" --repo "$REPO" --remove-label "$label"
        done
        
        echo "  ✓ All labels removed from issue #$issue_number"
    fi
done

echo "✓ Completed removing all labels from open issues"