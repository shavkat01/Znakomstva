/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",

    },
    screens: {
      xs: "100%",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1400px",
      xxl: "1550px",
      xxxl: "1700px",
      xxxxl: "1850px",
    },
  },
  plugins: [],
}

