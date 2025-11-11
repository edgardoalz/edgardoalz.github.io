# Edgardo Alvarez Personal Website

A static blog built with Jekyll, featuring a minimalist design with Pagefind search functionality.

## Tech Stack

- **Static Site Generator**: Jekyll 3.x
- **Markdown**: Kramdown
- **Styling**: SCSS (Sass with compressed output)
- **Syntax Highlighting**: Rouge
- **Search**: Pagefind 1.4.0 (static site search)
- **Icons**: Pixelarticons via CDN
- **Build Tool**: Make

## Project Structure

- `_posts/` - Blog post markdown files
- `_layouts/` - HTML templates (default.html, post.html)
- `_includes/` - Reusable HTML components (header.html, footer.html, aside.html, head.html)
- `css/` - SCSS stylesheets (style.scss, normalize.css, syntax.css)
- `js/` - JavaScript files
- `img/` - Images and icons
- `_site/` - Generated static site output (git ignored)
- `_pagefind/` - Generated search index (preserved via keep_files in _config.yml)

## Commands

- `make serve` - Build site, generate search index, and start development server
- `make build` - Build site with future posts enabled
- `make search` - Generate Pagefind search index
- `make clean` - Remove _site and .jekyll-cache directories
- `make rebuild` - Clean, build, and regenerate search index
- `jekyll serve` - Start Jekyll development server (http://127.0.0.1:4000)
- `jekyll build --future` - Build site including future-dated posts
- `npx pagefind --site _site --output-subdir _pagefind` - Generate search index manually

## Site Configuration

- **Permalink structure**: `/:year/:month/:title/`
- **Base URL**: https://edgardoalz.net
- **Language**: Spanish (es)
- **Search**: Pagefind index preserved between builds via `keep_files: [_pagefind]`

## Code Style & Conventions

### SCSS/CSS
- Use SCSS syntax with nesting
- Include pixel-icon mixin for consistent icon styling
- Maintain compressed output style
- Use `!important` sparingly, only when overriding third-party styles (like Pagefind UI)
- Follow existing color scheme: blue links (#00e), gray text (#666), yellow highlights (#ff0)
- Font stack: Verdana, Arial, sans-serif at 11pt for body, 10pt for smaller elements

### HTML/Liquid Templates
- Use semantic HTML5 elements (header, nav, section, aside, article, footer)
- Pagefind attributes: `data-pagefind-body` only on post.html article element
- Use `data-pagefind-meta="title"` for post titles
- Keep layouts minimal and reusable via includes

### JavaScript
- Vanilla JavaScript, no frameworks
- PagefindUI initialization in search.html with Spanish translations
- URL parameter handling for search queries (?q=)

### Markdown Posts
- YAML frontmatter required: layout, title, date, categories
- Date format: YYYY-MM-DD HH:MM:SS
- Categories as array in frontmatter

## Design Principles

- Minimalist, text-focused design inspired by old-school web aesthetics
- Retro pixel art icons from Pixelarticons
- No JavaScript dependencies beyond search functionality
- Mobile-responsive with flexbox and media queries at 640px breakpoint
- Accessibility: semantic HTML, alt text for images

## Search Implementation

- Uses Pagefind for static site search
- Search index generated post-build and preserved during Jekyll rebuilds
- Custom styling to match site aesthetic (no default Pagefind UI)
- Search results display: inline titles with article icons, highlighted matches, no thumbnails
- Results styled to match homepage post list format

## Workflow

### Adding New Posts
1. Create markdown file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Add required frontmatter (layout: post, title, date, categories)
3. Run `make serve` to build and test locally
4. Search index auto-updates on rebuild

### Modifying Styles
1. Edit SCSS files in `css/` directory
2. Jekyll automatically recompiles on save during `jekyll serve`
3. Check compiled output in `_site/css/style.css`
4. Test in browser at http://127.0.0.1:4000

### Updating Search
1. After content changes, run `make search` or include in `make serve`
2. Search index stored in `_site/_pagefind/`
3. Ensure `keep_files: [_pagefind]` remains in _config.yml

### Testing
1. Use Playwright for JavaScript-rendered components (search UI)
2. Test search functionality with actual queries
3. Verify responsive design at 640px breakpoint
4. Check all layouts: default, post, search page

## Do Not

- Do not edit files in `_site/` or `.jekyll-cache/` (auto-generated)
- Do not remove `keep_files: [_pagefind]` from _config.yml
- Do not change font families or sizes without consultation (consistent retro aesthetic)
- Do not add JavaScript frameworks or heavy dependencies
- Do not modify Pagefind's internal structure in `_pagefind/`
- Do not commit `_site/` directory to git (already ignored)
- Do not use emojis in code or documentation unless explicitly requested

## Notes

- Site uses Spanish language throughout
- Running on localhost requires Jekyll serve on port 4000
- Pagefind search works both locally and when deployed
- Makefile simplifies common development tasks
- Search results intentionally match homepage post styling for consistency
