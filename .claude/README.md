# Claude Code Configuration

This directory contains Claude Code configuration files and custom commands for the Edgardo Alvarez personal website project.

## Files

### CLAUDE.md (project root)
Main project documentation file that Claude reads automatically. Contains:
- Tech stack and dependencies
- Project structure
- Available commands
- Code style conventions
- Workflow guidelines
- Design principles

### .claudeignore (project root)
Specifies files and directories Claude should ignore:
- Build outputs (_site/, .jekyll-cache/)
- Dependencies (node_modules/)
- Temporary and test files
- IDE configurations
- Generated assets

### Custom Commands (.claude/commands/)

#### /new-post
Creates a new blog post with proper Jekyll frontmatter and naming conventions.

**Usage**: `/new-post`

Creates a dated post file in `_posts/` and rebuilds the search index.

#### /test-search
Tests the Pagefind search functionality using Playwright.

**Usage**: `/test-search`

Validates search UI, alignment, results styling, and captures screenshots for verification.

#### /check-site
Performs comprehensive site health check.

**Usage**: `/check-site`

Validates build process, configuration, search index, file structure, and styles.

## Best Practices

1. **Keep CLAUDE.md Updated**: When adding new features or changing workflows, update the project documentation
2. **Use Custom Commands**: Leverage the slash commands for repetitive tasks
3. **Test After Changes**: Run `/check-site` after significant modifications
4. **Search Testing**: Use `/test-search` when modifying Pagefind styles or configuration
5. **Version Control**: Commit .claude/ directory to share commands with team members

## Adding New Commands

To create a new custom command:

1. Create a new `.md` file in `.claude/commands/`
2. Add frontmatter with description:
   ```yaml
   ---
   description: Brief description of the command
   ---
   ```
3. Write clear instructions for Claude to follow
4. Test the command by running `/command-name`
5. Document it in this README

## Notes

- Commands are project-specific and tailored to this Jekyll blog
- CLAUDE.md is intentionally concise (< 200 lines) for optimal context usage
- .claudeignore helps focus Claude on relevant project files only
- All commands assume development server is running on localhost:4000
