/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['fira sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
