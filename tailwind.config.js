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
        primary:"#0096AB"
      }
    },
  },
  plugins: [],
}