module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#7267CB",
        secondary: "#5899EE",
      },
      backgroundImage: {
        test: "url('/images/test.jpg')",
        register: "url('/images/noIsoLogo.jpg')",
      },
      fontFamily: {
        montseratCustom: ["Montserrat", "sans-serif"],
        testimonial: ["Licorice", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
