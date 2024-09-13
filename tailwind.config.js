/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px"
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    // anhOctConfig: cấu hình font theo biến

    fontFamily: {
      primary: ["Nunito", 'sans-serif'],
      primaryNomal: ["Nunito", 'serif'],
      text: ["Gruppo",'sans-serif']
    },
    extend: {},
  },
  // setup darkmode
  darkMode: "class",
  plugins: [],
}