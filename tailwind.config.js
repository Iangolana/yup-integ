const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#F19551',
          green: '#1E391F',
          yellow: '#F9D65A',
          pink: '#F9D7D2',
          background: '#F5F5EF',
        },
      }
    },
  },
};
