const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#F19551',
          orangeHover: '#b57648',
          green: '#1E391F',
          yellow: '#F9D65A',
          pink: '#F9D7D2',
          background: '#F5F5EF',
          black: '#363636',
          marron: '#BFA892',
        },
      },
      fontFamily: {
        hurmeSans1: ["'Hurme Geometric Sans 1', sans-serif"],
        canelaText: ["'Canela Text', sans-serif"]
      },
      fontSize:{
        '8': '8px',
        '10': '10px',
        '18': '18px',
        '30': '30px',
      },
      borderRadius: {
        '28': '28px',
        '30': '30px',
        '49': '49px',
        '100': '100px',
      },
      backgroundImage: {
        'mask1': "url('../public/images/mask1.svg')",
        'masque1': "url('../public/images/masque1.svg')",
        'masqueFaq': "url('../public/images/masqueFaq.svg')",
        'mask2': "url('../public/images/mask2.svg')",
        'mask1mobile': "url('../public/images/mask1m.svg')",
        'mask2mobile': "url('../public/images/mask2m.svg')",
        'mask1editorial': "url('../public/images/masq1-editorial.svg')",
        'mask2editorial': "url('../public/images/masq2-editorial.svg')",
      },
      backgroundPosition: {
        'mask1': "left bottom",
        'masque': "right bottom",
        'masqueFaq': "center center",
        'masqueFaq0': "0 0",
      }

    },
  },
};
