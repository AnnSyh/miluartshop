/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#333333',
        secondary: '#4b5563',
        tertiary: '#e5e7eb',
        gray: {
            DEFAULT: '#656462',// bg-gray
            dark: '#3d3b3c',   // bg-gray-dark
        },
        rosy: {
            DEFAULT: '#fffcfb',// bg-rosy
            dark: '#fff9f7', // bg-rosy-dark
        },
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}
