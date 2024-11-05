/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)", // Default shade for `primary`
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
        },

        background: {
          DEFAULT: "var(--background-color)",
        },
      },
      // Text primary
      textColor: {
        primary: {
          DEFAULT: "var(--dark-text-color)",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
