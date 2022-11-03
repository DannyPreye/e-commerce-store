/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5ECE7B',
        textColor: '#1D1F22',
        secondary: '#EEEEEE',
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
      dropShadow: {
        '5xl': '0px 4px 35px rgba(168, 172, 176, 0.19)',
      },
    },
  },
  plugins: [],
};
