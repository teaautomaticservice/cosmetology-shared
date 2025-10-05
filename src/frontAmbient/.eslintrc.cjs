module.exports = {
  extends: "react-app",
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'import-newlines',
    'prettier',
  ],
  rules: {
    'no-console': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. Side effect imports at the start. For me this is important because I want to import reset.css and global styles at the top of my main file.
          ["^\\u0000"],
          // 2. `react` and packages: Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^react$", "^@?\\w"],
          // 3. Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group. (also relative imports starting with "../")
          ["^@", "^"],
          // 4. relative imports from same folder "./" (I like to have them grouped together)
          ["^\\./"],
          // 5. style module imports always come last, this helps to avoid CSS order issues
          ["^.+\\.(module.css|module.scss)$"],
          // 6. media imports
          ["^.+\\.(gif|png|svg|jpg)$"]
        ],
      },
    ],
    'import-newlines/enforce': ['error', { items: 5, forceSingleLine: false }],
    'no-unused-vars': 'off',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    '@typescript-eslint/no-empty-function': ['error'],
    'import-newlines/enforce': ['error', { items: 5, forceSingleLine: false, "max-len": 120, }],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    semi: ['error', 'always'],
    'eol-last': ['error', 'always'],
    'react-hooks/exhaustive-deps': 0,
    "react/display-name": "off",
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
    'no-unused-vars': 'off',

    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  }
};
