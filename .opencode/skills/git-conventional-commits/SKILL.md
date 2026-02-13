---
name: git-conventional-commits
description: Validate, create, and analyze git commits following Conventional Commits v1.0.0
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: git
---

## What I do

- Validate commit messages against Conventional Commits v1.0.0 specification
- Create properly formatted conventional commits with interactive prompts
- Automatically detect breaking changes in code modifications
- Suggest appropriate commit types and scopes based on code changes
- Provide clear warnings and guidance for commit message violations
- Map commits to Semantic Versioning (MAJOR, MINOR, PATCH)

## When to use me

Use this when you are committing code changes. Ask me to:

- **Commit changes**: "commit these changes" → I'll guide you through the process
- **Validate a message**: "validate this commit message" → I'll check for violations
- **Understand breaking changes**: "is this a breaking change?" → I'll analyze the code
- **Create a proper commit**: "create a commit for the auth feature" → Interactive workflow

## Specification

### Commit Message Structure

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Required Components

**Type** (required) - One of:

- `feat` - New feature (→ MINOR in SemVer)
- `fix` - Bug fix (→ PATCH in SemVer)
- `docs` - Documentation only
- `style` - Formatting, linting (no code logic)
- `refactor` - Code reorganization
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance, dependencies
- `ci` - CI/CD configuration
- `build` - Build system changes

**Scope** (optional) - Single word describing the feature:

- Examples: `auth`, `api`, `dashboard`, `components`, `database`
- Not about file location, but feature/area name

**Description** (required):

- Max 72 characters
- Lowercase first letter
- No period at end
- Imperative mood: "add" not "added"

**Body** (optional):

- Separated by blank line from description
- Explain WHAT and WHY, not HOW
- Multiple paragraphs allowed

**Footers** (optional):

- Separated by blank line from body
- Format: `Token: value`
- Examples: `Closes: #123`, `Refs: #456`, `BREAKING CHANGE: description`

**Breaking Changes**:

- Use `!` before colon: `feat(api)!: change response format`
- Or include footer: `BREAKING CHANGE: description here`
- Maps to MAJOR in SemVer

## Examples

### Simple Feature

```
feat(auth): add two-factor authentication
```

### Bug Fix with Scope

```
fix(api): resolve race condition in request queue
```

### With Detailed Body

```
feat(dashboard): add real-time metrics

Implement WebSocket connection for live data updates.
Add CPU, memory, and network usage metrics.
Refresh intervals configurable per metric type.

Closes: #456
Refs: #234
```

### Breaking Change (with indicator)

```
feat(api)!: restructure user endpoint response

Response format changed from nested to flat structure.
All clients must update their parsing logic.
```

### Breaking Change (with footer)

```
refactor!: drop Node 12 support

Use ES2020 features not available in Node 12.

BREAKING CHANGE: Minimum Node version is now 14.0.0
```

## Validation Rules

### Errors (blocks commit - requires fixing)

- ❌ Missing or invalid type
- ❌ Missing description
- ❌ Invalid scope format (contains spaces, special chars)
- ❌ Missing blank line before body/footers
- ❌ Structure violations

### Warnings (allowed - best practice suggestions)

- ⚠️ Description over 72 characters
- ⚠️ Description starts with uppercase
- ⚠️ Description ends with period
- ⚠️ Breaking change marked but no footer explanation
- ⚠️ Footer without proper blank line separation

## My Workflow

When you ask me to commit:

1. **Analyze** - Run `git diff --staged` to see what's changing
2. **Detect** - Automatically analyze for breaking changes
3. **Suggest** - Recommend type and scope based on changes
4. **Prompt** - Guide you interactively through the fields
5. **Validate** - Check message against specification
6. **Preview** - Show you the formatted message
7. **Confirm** - Ask for approval before committing
8. **Commit** - Create the actual git commit

## Breaking Change Detection

I automatically detect potential breaking changes when:

- Exported functions/classes are deleted
- Function parameters are removed or reordered
- Database schema changes are detected
- API endpoints are removed
- Interfaces or types are removed/modified
- Deprecated code is being removed
- Explicit `BREAKING CHANGE` markers are found

I'll flag these and ask you to confirm if they should be marked as breaking.

## Scopes for This Project

Common scopes for create-learn-ui:

- `auth` - Authentication, login, registration
- `api` - API client code and integration
- `components` - React component changes
- `hooks` - Custom React hooks
- `utils` - Utility functions
- `types` - TypeScript type definitions
- `middleware` - Server/Next.js middleware
- `styles` - CSS and styling changes
- `database` - Data layer changes
- `docs` - Documentation changes

## Key Principles I Follow

- **Imperative mood**: "add feature" (not "added" or "adds")
- **Concise**: Max 72 characters for first line
- **Specific scope**: Feature name, not file path
- **Clear breaking changes**: Always marked and documented
- **Proper structure**: Blank lines separate sections
- **Validation without blocking**: Warn about issues but allow overrides

## Interactive Prompt Flow

When creating commits interactively:

```
STEP 1: Select Commit Type
  → Choose: feat, fix, docs, style, refactor, perf, test, chore, ci, build

STEP 2: Specify Scope (Optional)
  → Single word: "auth", "api", "dashboard"

STEP 3: Write Description
  → Max 72 characters, lowercase, imperative mood

STEP 4: Add Body (Optional)
  → Detailed explanation (multiple lines OK)

STEP 5: Breaking Change?
  → Confirm if this introduces breaking changes

STEP 6: Review
  → Approve the formatted message before committing
```

## SemVer Mapping

How commit types map to Semantic Versioning:

| Type                           | Impact              | Version Bump  |
| ------------------------------ | ------------------- | ------------- |
| `feat`                         | New feature         | MINOR (1.x.0) |
| `fix`                          | Bug fix             | PATCH (1.0.x) |
| `BREAKING CHANGE`              | Incompatible change | MAJOR (x.0.0) |
| `docs`, `style`, `chore`, etc. | No impact           | No bump       |

## Reference Links

- **Specification**: https://www.conventionalcommits.org/en/v1.0.0/
- **Semantic Versioning**: https://semver.org/
- **Git Trailers Format**: https://git-scm.com/docs/git-interpret-trailers

## Quick Start

Ask me to help with commits:

```
"commit the authentication changes"
→ I'll analyze, suggest type/scope, guide you interactively

"is this a breaking change?"
→ I'll analyze the staged changes and explain

"validate this commit message"
→ I'll check it against the spec and report issues
```

---

**Version**: 1.0.0  
**Specification**: Conventional Commits v1.0.0  
**Last Updated**: February 13, 2026
