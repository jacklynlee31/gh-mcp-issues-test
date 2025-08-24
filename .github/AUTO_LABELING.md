# Automatic Issue Labeling

This repository uses GitHub Actions to automatically add labels to issues based on their content. The workflow runs when issues are opened, edited, or reopened.

## Priority Labels

The workflow automatically assigns one priority label based on keywords found in the issue title and body:

### High Priority
**Label:** `high`  
**Keywords:** urgent, critical, blocker, emergency, asap, immediately, breaking, security, vulnerability

### Medium Priority  
**Label:** `medium`  
**Keywords:** important, needed, should, improvement, enhance  
**Default:** Applied when no other priority keywords are found

### Low Priority
**Label:** `low`  
**Keywords:** nice to have, nice-to-have, eventually, future, minor, cosmetic

## Category Labels

The workflow also applies category labels based on content analysis:

### Bug Reports
**Label:** `bug`  
**Keywords:** bug, error, issue, problem, broken, not working, crash, fail, exception, unexpected

### Feature Requests
**Label:** `enhancement`  
**Keywords:** feature, enhancement, add, new, implement, support, ability, functionality

### Documentation
**Label:** `documentation`  
**Keywords:** documentation, docs, readme, guide, tutorial, help, instructions

### Questions
**Label:** `question`  
**Keywords:** question, help, how to, how do, clarification, explain, understand

### Maintenance
**Label:** `maintenance`  
**Keywords:** refactor, cleanup, maintenance, technical debt, code quality, performance

## Technology-Specific Labels

### Frontend
**Label:** `frontend`  
**Keywords:** frontend, ui, css, html

### Backend
**Label:** `backend`  
**Keywords:** backend, server, api, database

### Security
**Label:** `security`  
**Keywords:** security, vulnerability, auth

### Testing
**Label:** `testing`  
**Keywords:** test, testing, spec

### CI/CD
**Label:** `ci/cd`  
**Keywords:** ci, cd, github actions, workflow

## How It Works

1. When an issue is opened, edited, or reopened, the workflow triggers
2. The issue title and body are analyzed for keywords (case-insensitive)
3. Labels are automatically applied based on matching keywords
4. Duplicate labels are removed before applying
5. At least one priority label is always applied (defaults to `medium`)

## Customization

To modify the labeling rules, edit the workflow file at `.github/workflows/auto-label-issues.yml`. You can:

- Add new keywords to existing categories
- Create new label categories
- Modify the priority logic
- Adjust the default priority level

## Labels Created

Make sure the following labels exist in your repository:

- Priority: `low`, `medium`, `high`
- Categories: `bug`, `enhancement`, `documentation`, `question`, `maintenance`
- Technology: `frontend`, `backend`, `security`, `testing`, `ci/cd`