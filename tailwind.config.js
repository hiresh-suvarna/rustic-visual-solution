export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#c8a45a",
        richBlack: "#1a1a1a",
        white: "#ffffff",
        warmWhite: "#f4f5ef",
        grey: "#555555",
        lightGrey: "#e8e8e8",
      },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
        playfair: ['"Playfair"', "serif"],
        inter: ['"Inter"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
