/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryBg: "#FDF6E4",
        primary: "#EA6A11",
        secondary: "#FDF5EA",
        focus: "#eda677",
        ring: "#9E9E9E",
        grey: "#9E9E9E",
      },
      boxShadow: {
        login: "0px 4px 28.4px 0px rgba(234, 106, 18, 0.25)",
        navbar: "rgba(0, 0, 0, 0.09) 0px 3px 5px;",
        card: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
        cardMenu: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
        cardImage: "0px 4px 20px 0px rgba(234, 106, 18, 0.80);",
      },
    },
  },
  plugins: [],
}
