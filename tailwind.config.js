/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sarabun: ['Sarabun', 'sans-serif'],
        mali: ['Mali', 'sans-serif'],
        'nerko-one': ['Nerko One', 'Sarabun', 'sans-serif'],
      },
      colors: {
        'jordy-blue': {
          50: '#eff7ff',
          100: '#dcebfd',
          200: '#c0ddfd',
          300: '#95c9fb',
          400: '#72b3f8', // primary - light
          500: '#3e8af3',
          600: '#296be7',
          700: '#2057d5',
          800: '#2146ac',
          900: '#203f88',
          950: '#182853',
        },
      },
      backgroundColor: {
        'jordy-blue': {
          50: '#eff7ff',
          100: '#dcebfd',
          200: '#c0ddfd',
          300: '#95c9fb',
          400: '#72b3f8', // primary - light
          500: '#3e8af3',
          600: '#296be7',
          700: '#2057d5',
          800: '#2146ac',
          900: '#203f88',
          950: '#182853',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
