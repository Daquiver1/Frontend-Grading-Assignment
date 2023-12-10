/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        'xm': '500px',
      },
      boxShadow: {
        'input': '10px 10px 40px 4px rgba(0, 0, 0, 0.15)',
        'hero': '10px 10px 40px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}