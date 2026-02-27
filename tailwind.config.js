/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B3C5D",   // Navy / Royal Blue
        secondary: "#6B7280", // Steel Grey
        dark: "#1F2933",      // Text color
      },
    },
  },
  plugins: [],
};
