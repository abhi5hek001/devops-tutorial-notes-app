// eslint.config.js
export default [
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      semi: 'error', // forces semicolons
      'no-unused-vars': 'warn', // warns if variables are unused
    },
  },
];
