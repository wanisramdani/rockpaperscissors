/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlowBold: ["Barlow-bold", "sans-serif"],
        barlowBlack: ["Barlow-black", "sans-serif"]
      },
      colors: { 
        'bluish': '#1f3756',
        'purplish': '#141539',
        'yellow': '#ec9e0e', // Scissors (from)
        'yellow-light': '#eca922', // Scissors (to)
        'blue': '#4865f4', // Paper (from)
        'blue-light': '#5671f5', // Paper (to)
        'red': '#dc2e4e', // Rock (from)
        'red-light': '#dd405d', // Rock (to)
      },
      borderWidth: {
        '16': '16px',
      }
    },
  },
  plugins: [],
}