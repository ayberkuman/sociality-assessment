/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{html,,ts,tsx}",
    "./src/pages/**/*.{html,,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        forHeader: "0 4px 6px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        source: ["Source Serif Pro", "serif"],
      },
      colors: {
        green: "#3AC183",
        grey: "#ACACAC",
        darkGrey: "#2A2F33",
        lightGrey: "#393D42",
        mainRed: "#F55661",
        yellow: "#F7BF38",
        blue: "#67B1F2",
      },
    },
  },
  plugins: [],
};
