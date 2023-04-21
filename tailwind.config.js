/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#007A45",
        headingColor: "#000000",
        smallTextColor: "#000000",
      },
    },
  },
  plugins: [],
}