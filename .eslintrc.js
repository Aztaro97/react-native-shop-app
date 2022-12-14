module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "on",
        "no-undef": "off",
        "prettier/prettier": ["warn", {singleQuote: false}],
        quotes: [2, "double"],
      },
    },
  ],
};
