/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/*.{js,jsx}",
    "./components//*.{js,jsx}",
    "./app/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "elijah": "#e2e2e2",
        "nav": "#5E3BEE"
      }
    },
  },
  plugins: [],
}

