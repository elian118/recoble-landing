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
      },
    },
  },
  daisyui: {
    themes: [
      'light',
      'dark',
      {
        myTheme: {
          primary: '#2563eb',
          secondary: '#3b82f6',
          accent: '#009cff',
          neutral: '#25191a',
          'base-100': '#a3a3a3',
          info: '#20c3ff',
          success: '#4ade80',
          warning: '#ffa800',
          error: '#e11d48',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
};
export default config;
