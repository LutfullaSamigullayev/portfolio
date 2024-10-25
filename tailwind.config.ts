import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-color": "#828282",
        'grey': "#828282",
        "pink": "#F6F6F6",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "gilroy-medium": ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
