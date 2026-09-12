/**
 * Preset ESLint partagé par les apps du monorepo.
 * Chaque app l'étend et ajoute ses propres réglages (plugins React, etc.).
 */
module.exports = {
  root: false,
  env: {
    es2023: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-unused-vars": "off",
  },
};
