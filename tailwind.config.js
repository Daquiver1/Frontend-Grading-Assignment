/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [ "./src/**/*.{html,js}",],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}

