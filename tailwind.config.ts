// import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'var(--roboto-text)',
        nanumgothic: 'var(--nanum-gothic)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
