/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      md: { max: "767px" },
    },
    colors: {
      bc: "#08243B",
      primary: "#000000",
      secondary: "#D4D4D6",
      active: "#C79360",
      lightGrey: "#5E6F7C",
      danger: "#756151",
    },
    extend: {},
  },
  plugins: [],
};
