/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        'vietnam': ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(12, 88%, 59%)',
        secondary: 'hsl(228, 39%, 23%)',
        'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
        'Dark-Blue': 'hsl(233, 12%, 13%)',
        'Pale-Red': 'hsl(13, 100%, 96%)',
        'Light-Gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
