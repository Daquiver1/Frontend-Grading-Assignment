// tailwind.config.js

const customUtilities = require('./customUtilities');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        'up-60': '60%',
      },
    },
  },
  plugins: [
    customUtilities,
  ],
};
