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
      animation: {
        "slide-in":
          "slide-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-out":
          "slide-out 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(100%)",
            transform: "translateX(100%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      translate: {
        reflect: {
          "-webkit-transform": "scaleX(-1)",
          transform: "scaleX(-1)",
        },
      },
    },
  },
  plugins: [],
};
