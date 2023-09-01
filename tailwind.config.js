/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif']
      },
      colors: {
        custom: {
          darkBlue: 'hsl(240, 38%, 20%)',
          grayishBlue: 'hsl(240, 18%, 77%)'
        },
      },
    },
  },
  plugins: [],
}

