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
                primary: '#333',
                secondary: '#4b5563',
            },
        },
        
	  },
  	plugins: [],
}
