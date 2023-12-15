module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      backgroundImage: (theme) => ({
      'Thistle-Niagara': `linear-gradient(135deg, ${theme('colors.Thistle')} 0%, ${theme('colors.Niagara')} 100%)`,}),
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "lavenderGrey": '#C4C4C4',
        "Thistle":'#d8bfd8',
        "Niagara":'#9db1cc'
      },
    },
  },
  plugins: [],
};