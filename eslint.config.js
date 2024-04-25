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
      // https://eslint.org/docs/latest/rules/no-unused-vars
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          caughtErrors: "none", // ignore catch block variables
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false,
        },
      ],
    },
  },
  {
    ignores: ["**/config-DIST.js", "coverage/**"],
  },
];
