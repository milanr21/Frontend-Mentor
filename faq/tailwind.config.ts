import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-100': 'hsl(275, 100%, 97%)',
        'purple-600': 'hsl(292, 16%, 49%)',
        'purple-950': 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
};
export default config;
