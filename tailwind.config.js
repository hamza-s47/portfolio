/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppinsBold:['poppinsBold'],
        poppinsMedium:['poppinsMedium']
      },
      colors: {
        primary:"#e17055",
        sec:"#f19066",
        myWhite:"#EEEADE",
        myBlack:"#34495e",
        myGray:"#bdc3c7",
        myGrayDark:"#636e72"
      },
      backgroundImage:{
        'light-bg':"url('/src/assets/images/backgrounds/light.webp')",
      }
    },
  },
  plugins: [],
}