# Instructions for Issue Triage

This repository contains a simple Astro website with some basic example content.

When Copilot is assigned to an issue in this repository, it should follow these guidelines:

## Issue Guidelines

### 1. Examine the Issue and Add Labels
- Analyze the issue description carefully.
- Always apply two labels:
    - **Type**: choose one or more of the following [css, html, bug fix, enhancement]
    - **Priority**: choose exactly one of [low, medium, high]
- If uncertain about a label, choose the best option and explain the reasoning in a comment.

### 2. Make a Plan
- Add a new comment that contains a brief checklist summarizing the plan to address the issue (e.g. "- [ ] Update CSS to fix layout issue").
- Ensure that the plan directly addresses the issue.

### 3. Open a Pull Request
- Create a new branch that contains a descriptive name.
- Implement the fix described in the issue, based on the checklist in the issue comment.
- Open a PR linked to the issue with a clear title and description:
    - mention the issue number (`Fixes #489`)
    - Summarize the changes in the description
    - Include any bugs, assumptions, or limitations
- If needed, use commits to make incremental progress.

### 4. Mark for Review
- Once the fixes are complete, mark the PR as "Ready for review".
- Leave a comment in the PR highlighting any areas that might need human review.
- If the issue cannot be resolved, add a comment explaining why.