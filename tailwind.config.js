/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-20" :"#e5fff9",
        'blue-500':'#4c6ef5',
        "blue-400":'#3336ea',
        "blue-100":'#99e9f2',
        "red-400":'#ff492d',
        "red-400":'#ff6b72',
         
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    },
  },
  plugins: [],
}