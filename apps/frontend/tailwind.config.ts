import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        elimu: {
          green: '#0F766E',
          gold: '#F59E0B',
          ink: '#0F172A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
