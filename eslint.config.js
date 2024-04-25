const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        // https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables
        ...globals.node,
      },
    },
    rules: {
      "prefer-const": "off",
      "no-console": "off",
    },
  },
  {
    ignores: ["**/config-DIST.js", "coverage/**"],
  },
];
