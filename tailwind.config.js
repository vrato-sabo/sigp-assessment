module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
