/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#34b566",
        primaryBlack: "#000",
        primaryWhite: "#fff",
        secondaryOrange: "#ff6b06",
        secondaryGray90: "#1a1a1a",
        secondaryGray80: "#333",
        secondaryGray60: "#666",
        secondaryGray10: "#e5e5e5",
        secondaryCream: "#f7f7f7",
        tertiaryAlert: "#d71515",
        tertiaryLicensePlate: "#335ab3",
      },
    },
  },
  plugins: [],
};
