/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#83CFB6",
        secondary: "#F99E4D",
        primaryGradient: "linear-gradient(137deg, #094851 0%, #047A78 100%)",
        primaryTint: {
          100: "#C6E9DD",
          200: "#ACDFCE",
          300: "#9CD9C5",
        },
        secondaryTint: {
          100: "#5A848A",
          200: "#3A6D74",
          300: "#094851",
        },
        systemColor: {
          success: "#26D04C",
          danger: "#FF3B30",
          warning: "#F45757",
        },
        grey: {
          100: "#FAFAFA",
          200: "#F1F1F1",
          300: "#E4E4E4",
          400: "#D6D6D6",
          500: "#C8C8C8",
          600: "#AFB2B3",
          700: "#7D8589",
          800: "#4B585E",
        },
        background: "#FCFCFC",
        backgroundSecondary: "#08424A",
      }
    },
  },
  plugins: [],
}

