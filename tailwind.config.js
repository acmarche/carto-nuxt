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
                "bounce-in-top": {
                    "0%": {
                        transform: "translateY(-500px)",
                        "animation-timing-function": "ease-in",
                        opacity: "0"
                    },
                    "38%": {
                        transform: "translateY(0)",
                        "animation-timing-function": "ease-out",
                        opacity: "1"
                    },
                    "55%": {
                        transform: "translateY(-65px)",
                        "animation-timing-function": "ease-in"
                    },
                    "72%,90%,to": {
                        transform: "translateY(0)",
                        "animation-timing-function": "ease-out"
                    },
                    "81%": {
                        transform: "translateY(-28px)"
                    },
                    "95%": {
                        transform: "translateY(-8px)",
                        "animation-timing-function": "ease-in"
                    }
                },
            },
            animation: {
                shimmer: '6s infinite shimmer ease-in-out',
                "bounce-in-top": "bounce-in-top 2s ease both"
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwindcss-animated'),
        require('tailwindcss-intersect')
    ],
}