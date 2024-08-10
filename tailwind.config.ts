import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        expandHeight: {
          "0%": { height: "0px" },
          "100%": { height: "100%" },
        },
      },
      colors: {
        primary: "#2125b0",
        secondary: "#4776f4",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        smd: "768px",

        md: "992px",
        // => @media (min-width: 768px) { ... }

        lg: "1200px",
        // => @media (min-width: 1024px) { ... }

        xl: "1400px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
