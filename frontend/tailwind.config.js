/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      inset: {
        '1/8': '12.5%',
      }
    }
  },
  plugins: [],
}