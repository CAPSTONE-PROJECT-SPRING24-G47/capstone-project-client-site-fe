/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-color': '#000',
        'bg-color': '#F1FBF3',
        'primary-color': '#48C75E',
        'secondary-color': '#8DCADC',
        'accent-color': '#7398D5',
        'sub-color': '#DB2731',
      },
      fontFamily: {
        sans: ['QuickSand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
