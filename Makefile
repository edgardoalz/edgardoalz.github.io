.PHONY: serve build search clean help

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'

build: ## Build the Jekyll site
	jekyll build --future

search: ## Generate Pagefind search index
	npx pagefind --site _site --output-subdir _pagefind

serve: build search ## Build site, generate search index, and serve locally
	jekyll serve

clean: ## Clean build artifacts
	rm -rf _site
	rm -rf .jekyll-cache

rebuild: clean build search ## Clean and rebuild everything
