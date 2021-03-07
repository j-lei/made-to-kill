const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans : [
          'Montserrat', 
          ...defaultTheme.fontFamily.sans,
        ],
        serif : [
          'Arapey',
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
