import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0349b9",
          light: "#72a8ff",
          gold: "#dbae08",
          navy: "#09165a"
        }
      },
      fontFamily: {
        "brand-light": ["TT Supermolot Neue", "Arial", "sans-serif"],
        "brand-bold": ["TT Supermolot Neue", "Arial", "sans-serif"],
        "brand-black": ["TT Supermolot Neue", "Arial", "sans-serif"]
      },
      fontWeight: {
        normal: "300",
        bold: "700",
        black: "900"
      }
    }
  },
  plugins: []
};

export default config;
