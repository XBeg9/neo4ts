module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:nestjs/recommended',
    'plugin:jest/recommended',
    'plugin:security/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${__dirname}/tsconfig.eslint.json`
  },
  plugins: [
    'promise',
    'security',
    'jest',
    'nestjs',
    'prettier',
    '@typescript-eslint',
    'graphql'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    /* security */
    'security/detect-unsafe-regex': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',

    /* promises */
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',

    /* nest js */
    'nestjs/use-validation-pipe': 0,

    /* jest */
    'jest/no-export': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    /* typescript */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': false
      }
    ],
    '@typescript-eslint/no-use-before-define': ['error', { classes: false }],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreProperties: true }
    ],

    /* prettier */
    'prettier/prettier': ['error'],

    'import/prefer-default-export': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 0,
    'lines-between-class-members': ['error', 'always'],

    // Typescript

    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/no-implied-eval': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }]
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['**/modules/**/*.resolver.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['warn']
      }
    }
  ]
};
