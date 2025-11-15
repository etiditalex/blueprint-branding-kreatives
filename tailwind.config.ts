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
        // Logo colors extracted from Blueprint Branding Kreatives logo
        primary: {
          50: "#e8e8f5",
          100: "#d1d1eb",
          200: "#a3a3d7",
          300: "#7575c3",
          400: "#4747af",
          500: "#3c3c87", // Main brand color from logo
          600: "#2e2e6a",
          700: "#1e1e78", // Darker variant from logo
          800: "#17174d",
          900: "#0f0f33",
          950: "#080819",
        },
        accent: {
          50: "#ffe8e3",
          100: "#ffd1c7",
          200: "#ffa38f",
          300: "#ff7557",
          400: "#ff471f",
          500: "#f04b1e", // Main accent color from logo
          600: "#c03c18",
          700: "#902d12",
          800: "#601e0c",
          900: "#300f06",
          950: "#180703",
        },
      },
    },
  },
  plugins: [],
};

export default config;
