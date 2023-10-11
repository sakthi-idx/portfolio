/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jets: ['JetBrains+Mono'],
      },
    },
  },
  variants: {},
  plugins: [
      require('flowbite/plugin')
  ],
}

