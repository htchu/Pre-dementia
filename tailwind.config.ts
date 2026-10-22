import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 政府網站風格：青綠色調
        primary: {
          50: "#f0fdf9",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#145231",
        },
        accent: {
          // 較深的綠色/青色
          600: "#0f766e",
          700: "#0d5a54",
        },
      },
      fontSize: {
        // 為年長使用者最佳化字級
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
      },
    },
  },
  plugins: [],
};

export default config;
