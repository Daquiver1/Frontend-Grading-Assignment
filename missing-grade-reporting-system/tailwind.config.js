module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      backgroundImage: (theme) => ({
      'Thistle-Niagara': `linear-gradient(135deg, ${theme('colors.Thistle')} 0%, ${theme('colors.Niagara')} 100%)`,}),
      backgroundImage2: (theme) => ({
      'Niagara-Charcoal': `linear-gradient(135deg, ${theme('colors.Niagara')} 0%, ${theme('colors.Charcoal')} 100%)`,}),
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "lavenderGrey": '#C4C4C4',
        "Thistle":'#d8bfd8',
        "Niagara":'#9db1cc',
        "Tiger-Eye": '#E08D3C',
        "Charcoal": '#36454F',
        "GhostWhite": '#F8F8FF',
      },
    },
  },
  plugins: [],
};