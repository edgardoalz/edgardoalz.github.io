---
description: Check site health and configuration
---

Perform a comprehensive site health check:

1. **Build Check**
   - Run `jekyll build --future` and check for errors
   - Verify `_site/` directory is generated
   - Check that `_pagefind/` index exists in `_site/`

2. **Configuration Check**
   - Verify `keep_files: [_pagefind]` is in _config.yml
   - Check permalink structure is `/:year/:month/:title/`
   - Confirm base URL and site metadata

3. **Search Index Check**
   - Run `npx pagefind --site _site --output-subdir _pagefind`
   - Report number of pages indexed
   - Verify only posts are indexed (not other pages)

4. **File Structure Check**
   - Confirm all required directories exist (_posts, _layouts, _includes, css, js)
   - Check for any missing required includes
   - Verify Makefile commands are available

5. **Style Check**
   - Verify css/style.css is generated in _site/
   - Check for SCSS compilation errors
   - Confirm compressed output

Provide a summary report with any issues found.
