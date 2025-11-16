/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#333333',
          light: '#4a4a4a',
        },
        teal: {
          DEFAULT: '#14b8a6',
          dark: '#0d9488',
          light: '#5eead4',
        },
        'off-white': '#f8f9fa',
      },
      lineHeight: {
        relaxed: '1.5',
        heading: '1.2',
      },
    },
  },
  plugins: [],
};
