/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./projects/shared/src/lib/**/*.{html,ts,scss}",
    "./projects/ui-documentation/src/**/*.{html,ts,scss}"
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
