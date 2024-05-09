/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:unicorn/recommended",
  ],
  env: {
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { project: true },
  plugins: [
    "@typescript-eslint",
    "@stylistic",
    "import",
    "unused-imports",
    "unicorn",
  ],
  rules: {
    "no-nested-ternary": "warn",
    "no-unneeded-ternary": "warn",
    "one-var-declaration-per-line": ["warn", "always"],
    "operator-assignment": ["warn", "always"],
    "prefer-destructuring": [
      "warn",
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "max-params": ["warn", 3],
    "@stylistic/padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: ["multiline-const", "function", "class"],
        next: "*",
      },
      { blankLine: "always", prev: ["interface", "type"], next: "*" },
      { blankLine: "always", prev: "*", next: ["export", "return"] },
    ],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],
    "unused-imports/no-unused-imports": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/consistent-function-scoping": [
      "warn",
      {
        checkArrowFunctions: false,
      },
    ],
    "unicorn/prefer-code-point": "off",
    "unicorn/no-process-exit": "off",
  },
  ignorePatterns: ["**/*.config.*js", "**/.eslintrc.cjs", "dist", "coverage"],
  reportUnusedDisableDirectives: true,
};

module.exports = config;