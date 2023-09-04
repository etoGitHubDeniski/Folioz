module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: 'src/**/*.html',
      options: {
        printWidth: 140,
      },
    },
  ],
};
