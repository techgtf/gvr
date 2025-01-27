/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: '#33638B',
      },
    },
    screens: {
      'xs': '480px',  // Extra small screens
      'sm': '640px',  // Small screens
      'md': '768px',  // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1300px', // min laptop
      '2xl': '1440px', // mac book
      '3xl': '1536px', // 2X extra large screens
    },

  },
  plugins: [],
}