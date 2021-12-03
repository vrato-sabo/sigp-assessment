module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: '#2d2d2d',
        activeGray: '#525050',
        activePink: '#d01345',
        lightGray: '#efefef',
        btnGreen: '#018849',
      },
      height: {
        360: '360px',
        450: '450px',
      },
      width: {
        640: '640px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
