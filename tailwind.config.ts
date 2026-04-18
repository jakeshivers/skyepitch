import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        skye: {
          bg: '#0b1220',
          panel: '#111a2e',
          edge: '#1c2a48',
          ink: '#e6ecff',
          mute: '#8ea0c8',
          accent: '#4cc9f0',
          accent2: '#f72585',
          gold: '#ffb703',
          ok: '#52d273',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
