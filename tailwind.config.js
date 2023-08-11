/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#DCDCDC",
        highlight: "#48FD4A",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
