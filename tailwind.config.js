/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(15rem, 1fr))",
      },
      colors: {
        dark: "#292626",
        light: "#a19797",
        yellow: "rgba(255,193,7,.65);",
        lightRed: "rgba(181, 176, 176,.65);",
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
  plugins: [require("tailwindcss-3d"), require("tailwindcss-animation-delay")],
};
