 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald Medium', 'sans-serif'],
        'roboto': ['Roboto Bold', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}