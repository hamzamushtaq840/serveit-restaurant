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
        login: "0px 4px 28.4px 0px rgba(234, 106, 18, 0.25)",
      },
    },
  },
  plugins: [],
}
