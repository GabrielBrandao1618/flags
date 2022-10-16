/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#09090D',
          800: '#100F18',
          300: '#9D9CA7'
        },
        blue: {
          900: '#2B18FF',
          300: '#5D52E1'
        },
        red: {
          900: '#FF1818'
        }
      }
    }
  }
}