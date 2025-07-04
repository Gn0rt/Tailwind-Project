/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        head: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: "#5956E9",
        paragraph: "#6C6C72",
      },

    },
  },
  plugins: [],
}