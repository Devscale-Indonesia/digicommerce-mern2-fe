/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef5ff",
          100: "#d9e7ff",
          200: "#bcd6ff",
          300: "#8ebcff",
          400: "#5997ff",
          500: "#2e6dff",
          600: "#1b4ef5",
          700: "#143ae1",
          800: "#1730b6",
          900: "#192e8f",
          950: "#141e57",
        },
        secondary: {
          50: "#fafbff",
          100: "#dbe2fe",
          200: "#bfccfe",
          300: "#93acfd",
          400: "#6080fa",
          500: "#3b56f6",
          600: "#2534eb",
          700: "#1d22d8",
          800: "#1e1eaf",
          900: "#1e208a",
          950: "#171754",
        },
      },
    },
  },
  plugins: [],
};
