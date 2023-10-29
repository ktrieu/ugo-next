import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lexend-medium)"],
        serif: ["var(--font-lexend-regular)"],
      },
      colors: {
        primary: "rgb(2, 122, 14)",
        secondary: "#E9E3B4",
      },
    },
  },
  plugins: [],
};
export default config;
