/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#579ef4",
        "tertiary" : "#F97316",
        "secondary":"#404040"
      }
    },
    screens: {
      '2xl': {'max': '2023px'},
      // => @media (max-width: 1535px) { ... }



      'lg': {'max': '1360px'},
      // => @media (max-width: 1023px) { ... }


      'md': {'max': '1160px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '768px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}