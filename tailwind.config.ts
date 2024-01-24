import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
          300: "#3d3d3d",
          400: "#4F4F4F",
          500: "#3F4354",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F7FE",
        },
        "grey-secondary": "#A3AED0",
      },
      boxShadow: {
        secondaryLight: "0px 18px 40px 0px rgba(112, 144, 176, 0.12)",
        secondaryDark: "0px 18px 40px 0px rgba(28, 28, 28, 0.4)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        plusJakartaSans: ["var(--font-plusJakartaSans"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
