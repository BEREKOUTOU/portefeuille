/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        oaoFadeIn: {
          '0%': { opacity: '0', transform: 'translateZ(-50px) rotateY(-15deg)' },
          '100%': { opacity: '1', transform: 'translateZ(0) rotateY(0)' },
        },
      },
      animation: {
        oaoFadeIn: 'oaoFadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};
