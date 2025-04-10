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
        primary: "#090245",
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
          'from': { transform: 'rotate(0deg) translateY(0)' },
          'to': { transform: 'rotate(360deg) translateY(0)' },
        },
        'aurora': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
} 