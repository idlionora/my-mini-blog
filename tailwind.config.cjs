/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'neutral-00': '#eef1ff',
				'neutral-01': '#d2daff',
				'theme-blue': '#aac4ff',
				'theme-purple': '#b1b2ff',
				'button-green': '#b3ffae',
				'button-red': '#ff7d7d',
			},
		},
		fontFamily: {
			text: ['Source Sans Pro', 'Arial', 'sans-serif'],
			heading: ['Oxygen', 'Helvetica', 'sans-serif']
		},
	},
	plugins: [],
};
