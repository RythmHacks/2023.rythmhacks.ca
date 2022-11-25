/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'accent': '#548CA8',
      'accentlight': '#86AEC3',
      'accentlightest': "#9EBECE",
      'background': '#efefef'
    },
    extend: {
      fontSize: {
        base: 'max(1.4vw, 1.3rem)',
        lg: 'max(1.4rem, 2vw)',
        xl: 'max(2rem, 3vw)',
        "2xl": 'max(2.5rem, 4.5vw)',
        "3xl": 'max(2.75rem, 6.5vw)'
      }
    },
    screens: {
      'sm': {'max': '600px'},
      'md': {'max': '900px'}
    }
  },
  plugins: [],
}
