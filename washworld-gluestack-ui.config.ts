import { createConfig } from "@gluestack-style/react";

export const config = createConfig({
  aliases: {},
  tokens: {
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
    // ...
  },
  themes: {
    classic: {
      colors: {
        primaryGreen: "$colors$primaryGreen",
        secondaryOrange: "$colors$secondaryOrange",
        tertiaryAlert: "$colors$tertiaryAlert",
        primaryWhite: "$colors$primaryWhite",
        secondaryGray90: "$colors$secondaryGray90",
      },
    },
  },
});
