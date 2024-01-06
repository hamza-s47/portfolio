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
      }
    },
  },
  plugins: [],
}