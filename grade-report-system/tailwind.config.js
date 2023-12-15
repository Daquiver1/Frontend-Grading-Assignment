/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light-white': 'rgba(255, 255, 255, 0.17)',
        'cyan': colors.cyan,
        'teal': colors.teal
      }
    },
  },
  plugins: [],
}

