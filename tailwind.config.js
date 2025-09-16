/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007dfc",
        btnHover: "bg-blue-700",
      },
    },
    fontFamily: {
      sans: ["TikTokFont", "Arial", "Tahoma", "PingFangSC", "sans-serif"],
    },

    keyframes: {
      "fadeIn": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "wt-radio-circle": {
        "0%": { transform: "scale(0)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
       'spinner-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1turn)' },
        },
    },
    animation: {
      "fadeIn": "fadeIn 0.4s ease-in-out",
      "wt-radio-circle": "wt-radio-circle 0.2s ease",
      'spinner-rotate': 'spinner-rotate 2s linear infinite',
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
