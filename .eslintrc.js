module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/style-prop-object": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-tabs": 0,
    "linebreak-style": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/function-component-definition": 0,
    "react/button-has-type": 0,
    "react/prop-types": 1,
    "react/no-unused-prop-types": [
      "error",
      {
        customValidators: [],
        skipShapeProps: false,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
