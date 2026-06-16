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
        'green-500': 'hsl(158, 36%, 37%)',
        'green-700': 'hsl(158, 42%, 18%)',
        'neutral-black': 'hsl(212, 21%, 14%)',
        'neutral-grey': 'hsl(228, 12%, 48%)',
        'neutral-cream': 'hsl(30, 38%, 92%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
