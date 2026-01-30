import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8edf3",
          100: "#c5d4e1",
          200: "#9fb5cb",
          300: "#7896b5",
          400: "#5b7fa5",
          500: "#3e6895", // Dark Blue from logo
          600: "#385f8d",
          700: "#305582",
          800: "#284b78",
          900: "#1a365f",
        },
        accent: {
          50: "#fff3f0",
          100: "#ffe0d9",
          200: "#ffc5b8",
          300: "#ffaa97",
          400: "#ff9576",
          500: "#ff8055", // Orange-Red from logo
          600: "#ff784d",
          700: "#ff6d43",
          800: "#ff6339",
          900: "#ff5029",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

