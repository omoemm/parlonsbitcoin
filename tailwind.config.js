module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        orange: 'rgb(245, 146, 79)',
        white: 'rgb(252, 250, 249)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}