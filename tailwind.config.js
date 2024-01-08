/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transitionDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      500: "500ms",
      600: "600ms",
      700: "700ms",
      800: "800ms",
      900: "900ms",
      1000: "1000ms",
      1100: "1100ms",
      1200: "1200ms",
      1300: "1300ms",
      1400: "1400ms",
      1500: "1500ms",
      1600: "1600ms",
      1700: "1700ms",
      1800: "1800ms",
    },
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(15rem, 1fr))",
      },
      colors: {
        dark: "#292626",
        light: "#a19797",
        yellow: "rgba(255,193,7,.65);",
        lightRed: "rgba(181, 176, 176,.55);",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateY(0px)" },
          "20%": { transform: "translateY(-10px)" },
          "40%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              " animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
