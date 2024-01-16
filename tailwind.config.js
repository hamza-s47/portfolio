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
        primary:"#ff6b81",
        myWhite:"#EEEADE",
        myBlack:"#34495e"
      }
    },
  },
  plugins: [],
}