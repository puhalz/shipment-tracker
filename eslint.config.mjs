import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'dist/**/*',
      'projects/**/*',
      'src/index.html',
      '**/*.html',
      '!**/*.component.html',
      '!src/app/app.component.html',
      '!src/app/shared/components/about/about/about.component.html',
    ],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@angular-eslint': angular,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...angular.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...prettier.rules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component'] }],
      '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
    },
  },
  {
    files: ['./src/app/**/*.html'],

    languageOptions: {
      parser: angularTemplate.parser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
    },
  },
];
