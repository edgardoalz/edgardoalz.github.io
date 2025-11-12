.PHONY: serve build search minify clean help

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'

build: ## Build the Jekyll site
	jekyll build --future

minify: ## Minify JavaScript files
	@echo "Minifying JavaScript files..."
	@npx terser _site/js/scripts.js -c -m -o _site/js/scripts.js
	@echo "JavaScript minification complete"

search: ## Generate Pagefind search index
	npx pagefind --site _site --output-subdir _pagefind

serve: build minify search ## Build site, minify JS, generate search index, and serve locally
	jekyll serve --host 0.0.0.0 --livereload

clean: ## Clean build artifacts
	rm -rf _site
	rm -rf .jekyll-cache

rebuild: clean build minify search ## Clean and rebuild everything
