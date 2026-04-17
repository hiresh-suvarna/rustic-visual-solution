export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#cc9753",
        richBlack: "#1a1a1a",
        white: "#ffffff",
        warmWhite: "#f5f5f0",
        grey: "#555555",
        lightGrey: "#e8e8e8",
        footer: "#1a1a1a",
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
