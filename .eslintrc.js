module.exports = {
    env: {
      es2021: true,
      node: true,
      "jest": true
    },
    extends: [
      'airbnb-base',
      "prettier"
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      "import/prefer-default-export": "off",
      "no-param-reassign": ["error", { "props": false }],
      "no-underscore-dangle": "off"
    },
    ignorePatterns: ["**/dist/*"]
  };