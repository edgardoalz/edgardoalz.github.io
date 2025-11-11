---
description: Test search functionality with Playwright
---

Test the Pagefind search functionality using Playwright:

1. Create a Playwright test script in `/tmp/test-search-quick.js`
2. Test the following:
   - Search input is visible and styled correctly
   - Search input and clear button are aligned on the same line
   - Type a search query and verify results appear
   - Verify results match the homepage post styling (inline layout, article icons, no thumbnails)
   - Check highlighted search terms appear in yellow
3. Capture screenshots to `/tmp/` for visual verification
4. Report any styling issues or misalignments
5. Display computed styles for the search input and button

Test URL: http://127.0.0.1:4000/buscar/
