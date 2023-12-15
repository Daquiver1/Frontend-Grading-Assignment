module.exports = function ({ addUtilities }) {
  const newUtilities = {
    '.margin-up-60': {
      marginTop: '60%',
    },
  };

  addUtilities(newUtilities, ['responsive', 'hover']);
};
