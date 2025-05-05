'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	// Initialize theme from localStorage or system preference
	useEffect(() => {
		// Check if user has a saved preference
		const savedTheme = localStorage.getItem('theme');

		if (savedTheme) {
			setTheme(savedTheme);
		} else {
			// Check system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			setTheme(prefersDark ? 'dark' : 'light');
		}
	}, []);

	// Apply theme changes to document
	useEffect(() => {
		const root = document.documentElement;

		if (theme === 'dark') {
			root.classList.add('dark');
			document.body.classList.add('dark-mode-transition');
		} else {
			root.classList.remove('dark');
			document.body.classList.add('dark-mode-transition');
		}

		// Save preference to localStorage
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

