/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b1b493",
        secondary: "#232931",
        textColor: "#c9c7c7",
        mainText: "#121212",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        dm: ['"DM Sans"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        notoSerif: ['"Noto Serif Todhri"', "serif"],
        lato: ['"Lato"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
