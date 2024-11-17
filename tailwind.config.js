/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightText: "#FFEFD7",
        darkBg: "#000202"
      }
    },
  },
  plugins: [],
}

