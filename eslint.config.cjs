module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2021,
      globals: {
        document: "readonly",
        window: "readonly",
        fetch: "readonly"
      }
    },
    rules: {}
  }
];
