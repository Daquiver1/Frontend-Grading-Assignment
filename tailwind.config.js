module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          50: "#eaecf0",
          100: "#d0d5dd",
          500: "#667084",
          700: "#475466",
          800: "#344054",
          "500_01": "#667085",
        },
        blue: { 800: "#1751d0" },
        gray: {
          50: "#f9fafb",
          100: "#f2f3f6",
          300: "#e0e0e0",
          900: "#101828",
          "900_01": "#0f1728",
          "900_0c": "#1018280c",
        },
        indigo: { 400: "#4d7add" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 1px  2px 0px #1018280c" },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
