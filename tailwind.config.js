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
        'accent-color': '#7398',
      },
    },
  },
  plugins: [],
};
