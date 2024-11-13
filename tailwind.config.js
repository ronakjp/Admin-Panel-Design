/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
        },

        background: {
          DEFAULT: "var(--background-color)",
        },

        primaryHoverColor: "var(--primaryHoverColor)",
        primaryFocusColor: "var(--primaryFocusColor)",
        tertiary: "var(--tertiary-color)",
        tertiaryHoverColor: "var(--tertiaryHoverColor)",
        tertiaryFocusColor: "var(--tertiaryFocusColor)",
      },
      // Text primary
      textColor: {
        primary: {
          DEFAULT: "var(--dark-text-color)",
        },
        secondary: {
          DEFAULT: "white",
        },
        tertiary: {
          DEFAULT: "var(--tertiary-color)",
        },
        appPrimary: {
          DEFAULT: "var(--primary-color)",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
