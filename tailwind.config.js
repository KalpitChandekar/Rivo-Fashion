/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#373737",
        secondary: "#454545",
      },
      backgroundColor: {
        primary: "#C2EFD4",
        secondary: "#6BC785",
      },
    },
  },
  plugins: [],
};
