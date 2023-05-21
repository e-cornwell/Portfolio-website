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
        jobTitle:'jobTitle 5.5s 0s ease-in-out infinite',
      },
      keyframes:{
        jobTitle:{
          '0%' : { opacity: 1, transform: 'translateX(0)' },
          '100%' : { opacity: 0, transform: 'translateX(25%)' },
        }
      },
    },
  },
  plugins: [],
}