module.exports = {
  "extends": [
    "airbnb-typescript-prettier"
  ],
  "rules": {
    "react/no-array-index-key" : "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-var-requires": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",

    'prettier/prettier': 0,
    "react-hooks/exhaustive-deps": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
};