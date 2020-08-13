const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./src/styles/colors');

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.tsx',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors,
      screens: {
        xl: '1280px',
        xxl: '1920px',
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '14': '3.5rem',
        '128': '32rem',
        '160': '40rem',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '1/2': '50%',
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
        '110': '110',
      },
    },
  },
  variants: [
    'responsive',
    'group-hover',
    'group-focus',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled',
  ],
  plugins: [],
};
