/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#051923',
        'prusssian-blue': '#003554',
        'lapiz-lazuli': '#006494',
        'honolulu-blue': '#0373AF',
        'steel-blue': '#0582CA',
        'piction-blue': '#00A6FB',
        'midnight-blue': '#191970'
      },
    },
  },
  plugins: [],
}

