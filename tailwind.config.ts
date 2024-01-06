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
          600: "#4318FF",
          900: "#2B3674",
        },
        dark: {
          100: "#1C1C1C",
          200: "#282828",
          500: "#3F4354",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F7FE",
        },
        "grey-secondary": "#A3AED0",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        plusJakartaSans: ["var(--font-plusJakartaSans"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
