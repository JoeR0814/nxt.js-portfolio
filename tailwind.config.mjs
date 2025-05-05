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
				sans: ['Inter', 'poppins', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			colors: {
				primary: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49',
				},
				secondary: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
					950: '#2e1065',
				},
				dark: {
					100: '#1e293b',
					200: '#0f172a',
					300: '#020617',
				},
				light: {
					100: '#f8fafc',
					200: '#f1f5f9',
					300: '#e2e8f0',
				},
			},
			gridTemplateColumns: {
				'70/30': '70% 28%',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-in-out',
				'slide-down': 'slideDown 0.5s ease-in-out',
				'slide-in-right': 'slideInRight 0.5s ease-in-out',
				'slide-in-left': 'slideInLeft 0.5s ease-in-out',
				'bounce-slow': 'bounce 3s infinite',
				'pulse-slow': 'pulse 3s infinite',
				'spin-slow': 'spin 6s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideInRight: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideInLeft: {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
			},
			boxShadow: {
				'3d': '5px 5px 0 0 rgba(0, 0, 0, 0.1)',
				'3d-hover': '8px 8px 0 0 rgba(0, 0, 0, 0.1)',
				'inner-glow': 'inset 0 0 10px rgba(255, 255, 255, 0.5)',
				'outer-glow': '0 0 15px rgba(59, 130, 246, 0.5)',
			},
		},
	},
	plugins: [],
};

