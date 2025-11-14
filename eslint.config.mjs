import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["_site/", ".jekyll-cache/", "_pagefind/", "node_modules/", "**/*.min.js"],
  },
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
