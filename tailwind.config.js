/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '30p': '30%',
      },

      spacing: {
        '7.5px': '7.5px',
        '15px': '15px',
      },
    },
  },
  plugins: [],
}