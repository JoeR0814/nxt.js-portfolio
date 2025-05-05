import '@/assets/styles/globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// Export metadata for automatic head handling
export const metadata = {
	title: 'Joe Reis | Frontend Developer',
	description:
		'Portfolio of Joe Reis, a frontend developer specializing in React, Next.js, and modern web technologies',
	keywords: 'frontend developer, react, next.js, web development, portfolio, javascript',
	authors: [{ name: 'Joe Reis' }],
	creator: 'Joe Reis',
	openGraph: {
		title: 'Joe Reis | Frontend Developer',
		description:
			'Portfolio of Joe Reis, a frontend developer specializing in React, Next.js, and modern web technologies',
		url: 'https://joereis.dev',
		siteName: 'Joe Reis Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Joe Reis - Frontend Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en' className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
			<body className='min-h-screen flex flex-col'>
				<ThemeProvider>
					<main className='flex-grow'>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;

