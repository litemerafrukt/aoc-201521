module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  globals: { describe: "readonly", test: "readonly", expect: "readonly" },
  parser: "@babel/eslint-parser",
  plugins: ["prettier"],
  rules: {
    "react/prop-types": [0],
    "arrow-parens": 0,
    "no-console": 0,
    "max-len": [2, { code: 90, ignoreComments: true }],
  },
};
