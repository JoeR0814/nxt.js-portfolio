/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['poppins', 'sans-serif'],
			},
			gridTemplateColumns: {
				'70/30': '70% 28%',
			},
		},
	},
	plugins: [],
};

