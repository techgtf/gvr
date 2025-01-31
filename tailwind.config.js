/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#33638B",
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1330px",
        "3xl": "1480px",
      },
    },
  },
  plugins: [],
};
