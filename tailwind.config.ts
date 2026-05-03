import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#83bd81",
          dark: "#6aaa68",
          hover: "#75b073",
          light: "#e8f5e7",
          xlight: "#f4faf4",
        },
        secondary: {
          DEFAULT: "#404e5e",
          dark: "#2d3844",
          mid: "#5a6a7a",
        },
        bg: "#fafbf9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
