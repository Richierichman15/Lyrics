const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        custom: {
          'secondary': '#525252',
          'primary': '##e2e8f0'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}