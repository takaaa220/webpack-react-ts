module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    useJSXTextNode: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "import/extensions": [
      "warn",
      {
        ignorePackages: true,
      },
    ],
    "prettier/prettier": "error",
    "max-len": [
      "error",
      {
        code: 100,
      },
    ],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["off"],
    "no-return-assign": ["off"],
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./webpack.config.js",
      },
    },
  },
};
