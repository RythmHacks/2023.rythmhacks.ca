/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'accent': '#EB993C',
      background: {
        lightblue: 'rgba(21,49,82,1)',
        darkblue: 'rgba(18,20,60,1)',
        neon: 'rgba(54,10,69,1)',
      }
    },
    extend: {},
  },
  plugins: [],
}
