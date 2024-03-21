/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#081c15",
        secondary: "#2d6a4f",
        customWhite: "#fefae0",
        customBlack: "#212529",
        bgWhite: "#f1faee",
      },

      fontFamily: {
        primary: ["Josefin Sans"],
      },

      fontSize: {
        title: ["3rem", "1.5"],
        subTitle: ["1.8rem", "1.2"],
        paragraph: ["1.2rem", "1.5"],
      },

      fontWeight: {
        title: 900,
        subTitle: 700,
        paragraph: 400,
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
