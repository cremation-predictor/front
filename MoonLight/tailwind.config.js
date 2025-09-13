/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9', // 주 포인트 퍼플
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      boxShadow: {
        card: '0 6px 24px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl2: '1rem',
      }
    }
  },
  plugins: [],
}