.PHONY: serve build search minify clean help lint format fix lint-js lint-css lint-md format-check

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

lint-js: ## Lint JavaScript files
	@echo "Linting JavaScript files..."
	@npx eslint js/**/*.js

lint-css: ## Lint CSS/SCSS files
	@echo "Linting CSS/SCSS files..."
	@npx stylelint "css/**/*.{css,scss}"

lint-md: ## Lint Markdown files
	@echo "Linting Markdown files..."
	@npx markdownlint "**/*.md"

lint: lint-js lint-css lint-md ## Run all linters

format-check: ## Check formatting without making changes
	@echo "Checking code formatting..."
	@npx prettier --check "**/*.{html,css,scss,js,md}" --ignore-path .prettierignore

format: ## Format all files with Prettier
	@echo "Formatting code..."
	@npx prettier --write "**/*.{html,css,scss,js,md}" --ignore-path .prettierignore
	@echo "Formatting complete"

fix: ## Auto-fix linting issues
	@echo "Auto-fixing linting issues..."
	@npx eslint js/**/*.js --fix
	@npx stylelint "css/**/*.{css,scss}" --fix
	@npx markdownlint "**/*.md" --fix
	@npx prettier --write "**/*.{html,css,scss,js,md}" --ignore-path .prettierignore
	@echo "Auto-fix complete"
