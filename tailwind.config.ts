import type { Config } from 'tailwindcss';

const config: Config = {
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
        pretendard: 'var(--pretendard)',
      },
    },
  },
  daisyui: {
    themes: [
      // 'light',
      // 'dark',
      {
        myTheme: {
          primary: '#2563eb',
          secondary: '#3b82f6',
          accent: '#38bdf8',
          neutral: '#737373',
          'base-100': '#f5f5f5',
          info: '#20c3ff',
          success: '#4ade80',
          warning: '#ffa800',
          error: '#f43f5e',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
export default config;
