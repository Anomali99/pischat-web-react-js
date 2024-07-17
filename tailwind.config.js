/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oxford-blue": {
          50: "#f6f7f9",
          100: "#eceff2",
          200: "#d4dbe3",
          300: "#afbbca",
          400: "#8397ad",
          500: "#647993",
          600: "#4f617a",
          700: "#414f63",
          800: "#394453",
          900: "#353e4b",
          950: "#22272f",
        },
      },
    },
  },
  plugins: [],
};
