const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        orange: 'rgb(245, 146, 79)',
        orwhite: 'rgb(252, 250, 249)',
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')]
}
