/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: "#007dfc",
          btnHover: "bg-blue-700"
      }
    },
    fontFamily: {
      'sans': ['TikTokFont', 'Arial', 'Tahoma', 'PingFangSC', 'sans-serif']
    },

    boxShadow:{
      
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}


