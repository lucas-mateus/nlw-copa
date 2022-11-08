const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: { 
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage:{
        app: 'url(/app-bg.png)'
      },

      
      colors:{
        greenIgnite:{
          500: '#129e57'
        },
        gray:{
          100: '#e1e1e6',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#121214'
        },
        yellow:{
          500: '#f7dd43'
        }
      }
    },
  },
  plugins: [],
}
