/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        //   "lobster": ['Lobster Two', 'sans-serif'],
        roboto:
            [
              "Roboto", ...defaultTheme.fontFamily.sans],
        "roboto-regular": [
          '"Roboto Regular"', ...defaultTheme.fontFamily.sans
        ],
        lobster2:
            [
              "Lobster Two", ...defaultTheme.fontFamily.sans],
        "lobster-regular": [
          '"Lobster Two"', ...defaultTheme.fontFamily.sans
        ],
      },
      colors: {
        carto: {
          main: '#354254',
          pink: '#bd2d86',
          gray300: '#6b7e9b',
          gray200: '#a8b2c1',
          gray100: '#e6e3e3',
          green: '#bdc900',
        }
      },
      objectPosition: {
        "top-center": "top center",
        "center-center": "center center",
        "bottom-center": "bottom center"
      },
      keyframes: {
        shimmer: {
          '0%': {
            backgroundPosition: 'left',
          },
          '50%': {
            backgroundPosition: 'right',
          },
          '100%': {
            backgroundPosition: 'left',
          },
        },
      },
      animation: {
        shimmer: '6s infinite shimmer ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}