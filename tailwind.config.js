/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/shared/src/lib/**/*.{html,ts,scss}",
    "./projects/ui-documentation/src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50:  "#f9f9fa",
          100: "#ececec",
          200: "#d9d9d9",
          300: "#bfbfbf",
          400: "#999999",
          500: "#666666",
          600: "#4d4d4d",
          700: "#333333",
          800: "#1a1a1a",
          900: "#0a0a0a"
        }
      }
    }
  },
  plugins: [],
};