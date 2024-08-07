/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F0592D',
        secondary: '#253C91',
      },
      screens: {
        'mdl': '978px',
        'mlg': '1000px',
        'mxlg': '1200px',
        'xlg': '1500px',
      },
      fontSize: {
        'nm': '15px',
      },
      
    },
  },
  plugins: [],
}
