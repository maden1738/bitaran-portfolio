/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: " 'Helvetica Neue', sans-serif",
      },
      colors: {
        background: "#ffffff",
        primary: "#f5f5f5",
        secondary: "#d7daec",
        accent: "#c8102e",
        text: "#222222",
        text2: "#6d6d6d",
      },
    },
  },
  plugins: [],
};
