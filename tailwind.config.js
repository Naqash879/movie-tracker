/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "200px", // mobile
      md: "768px", // tablet
      lg: "1024px", // laptop
      xl: "1280px", // desktop
      "2xl": "1536px",
    },
  },
  plugins: [],
};
