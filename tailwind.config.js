/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "star-wars-bg": "#0e1216", // Dark space-themed color
      },
      fontFamily: {
        "star-wars": ["Star Jedi", "sans-serif"],
      },
      colors: {
        dark: "#1b262c",
        light: "#aed581",
        yellow: "#AF883E",
        red: "#ff0000",
        blue: "#2196f3",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
