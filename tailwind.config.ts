import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        blue: '#277D9B',
        gray: "#F2F2F2",
      },
      textColor: {
        blue: '#277D9B',
        gray:"#888888",
        black:"#000000",
      },     
      boxShadow: {
        blue: '1px 1px 20px 4px #277D9B',
      },
    },
  },
  plugins: [],
};
export default config;
