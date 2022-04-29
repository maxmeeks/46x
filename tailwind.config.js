const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'grey-100': '#F5F5F4',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['ui-serif'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      keyframes: {
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
