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
    },
  },
  plugins: [],
}