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
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1300px',
      '2xl': '1400px',
      '3xl': '1480px',
    },
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
    },
  },
  plugins: [],
}