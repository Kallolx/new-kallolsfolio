/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: "#997ef1",
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #090245, #997ef1)',
      },
      animation: {
        'rainbow': 'rainbow var(--speed, 2s) infinite linear',
        'shimmer-slide': 'shimmer-slide var(--speed, 3s) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed, 3s) * 2) infinite linear',
        'aurora': 'aurora 10s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'rainbow': {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '200%' },
        },
        'shimmer-slide': {
          'to': { transform: 'translate(calc(100cqw - 100%), 0)' },
        },
        'spin-around': {
          '0%': { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%': { transform: 'translateZ(0) rotate(360deg)' },
        },
        'aurora': {
          '0%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '0% center' },
        },
      },
    },
  },
  plugins: [],
} 