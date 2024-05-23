/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    'apps/**/src/**/!(*.spec).{html,ts}',
    'libs/**/!(*.spec).{html,ts}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      slate: {
        50: 'rgb(248 250 252)',
        100: 'rgb(241 245 249)',
        300: 'rgb(203 213 225)',
        400: 'rgb(148 163 184)',
        600: 'rgb(71 85 105)',
        700: 'rgb(51 65 85)',
        800: 'rgb(30 41 59)',
        900: 'rgb(15 23 42)',
        950: 'rgb(2 6 23)',
      },
      indigo: {
        500: 'rgb(99 102 241)',
        600: 'rgb(79 70 229)',
        700: 'rgb(67 56 202)',
      },
    },
  },
  plugins: [],
};
