/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-1': '#F2F2F2',
        'color-2': '#0D0D0D',
        'color-3': '#A7A7A7',
        'color-4': '#279AF1',
        'color-5': '#635380',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}