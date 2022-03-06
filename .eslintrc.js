module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'linebreak-style': 'off',
    'no-alert': 'error',
    'no-console': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'prefer-destructuring': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-indent': 'off',
    'import/prefer-default-export': 'off',
    radix: 'error',
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
};
