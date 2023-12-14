/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
        // 'blue': '#314781'
      },
      colors:{
        'dblue': '#314781',
        'lgreen': '#00df9a'
      }
    },
  },
  plugins: [],
}

