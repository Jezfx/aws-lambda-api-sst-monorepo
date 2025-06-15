/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@sst-vitals/eslint-config/nextjs.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
} 