/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.jsx"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        "poppins":"Poppins",
        "bebas":"Bebas Neue",
        "open":"open sans",
        "inter":"Inter"
      }      
    },
  },
  plugins: [],
}

