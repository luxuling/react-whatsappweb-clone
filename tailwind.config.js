/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1c2c33",
        "secondary": "#111b21",
        "icon": "#aebac1",
        "line": "#00ab88",
        "hero": "#1e2e35",
        "story":"#1c242c"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}