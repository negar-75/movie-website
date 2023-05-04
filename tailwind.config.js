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
    },
  },
  plugins: [require("tailwindcss-3d")],
};
