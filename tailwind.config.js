/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_blue: '#232559',
        secondary: '#ba8f4a'
      },
      screens: {
        '370px': '370px',
        '400px': '400px',
        '450px': '450px',
        '500px': '500px',
        '550px': '550px',
        '600px': '600px',
        '650px': '650px',
        '700px': '700px',
        '750px': '750px',
        '769px': '769px',
        '800px': '800px',
        '850px': '850px',
        '900px': '900px',
        '950px': '950px',
        '1000px': '1000px',
        '1100px': '1100px',
        '1440px': '1440px',

      }
    },
  },
  plugins: [],
}