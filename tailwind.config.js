// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000", // Black background
        foreground: "#FFFFFF", // White text
        darkGray: "#1A1A1A", // Dark gray for containers
        defaultGray: "#333333", // Standard gray for text/borders
        lightGray: "#A9A9A9", // Light gray for icons/secondary text
        accentGray: "#E0E0E0", // Accent for dividers/subtle elements
      },
      fontFamily: {
        chomsky: ["Chomsky", "serif"], // Custom font for title
        playfair: ["Playfair Display", "serif"], // Font for subtitle and other text
      },
    },
  },
  plugins: [],
};
