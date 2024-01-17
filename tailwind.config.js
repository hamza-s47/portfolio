/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppinsBold:['poppinsBold'],
        poppinsBlack:['poppinsBlack'],
        poppinsMedium:['poppinsMedium'],
        poppinsReg:['poppinsReg']
      },
      colors: {
        primary:"#e17055",
        myWhite:"#EEEADE",
        myBlack:"#34495e",
        myGray:"#95afc0"
      }
    },
  },
  plugins: [],
}