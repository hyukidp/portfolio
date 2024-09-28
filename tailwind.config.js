/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
  theme: {
    extend: {
      colors: {
        'neutralCyan' : '#2DE2D1',
        'neutralDCyan' : '339989',
        'neutralGray' : '#2B2C28',
        'neutralWhite' : '#FFFAFB',
      }
    },
  },
  plugins: [],
}

