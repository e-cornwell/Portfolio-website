/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#35191e",
        headingColor: "#0e0f0f",
        smallTextColor: "#0e0f0f",
      },
      fontFamily:{
        urban: ['Urbanist', 'sans-serif'],
        robo: ['Roboto', 'sans-serif']
      },
      animation:{
        webDev:'webDev 4s 1s ease-in-out infinite',
        softEng:'softEng 4s 1s ease-in-out infinite',
        appDev:'appDev 4s 1s ease-in-out infinite',
      },
      keyframes:{
        webDev:{
          '0%, 45%, 80%, 100%' : { width: 0 },
          '50%, 75%' : { width: 6.4},
        },
        softDev:{
          '0%' : { opacity: 1 },
          '100%' : { opacity: 0 },
        },
        appDev:{
          '0%' : { opacity: 1 },
          '100%' : { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}