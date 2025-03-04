'use client';
import Navbar from '@/components/Navbar';

import '@/assets/styles/globals.css';

const RootLayout = ({ children }) => {
	return (
		<html lang='en' className='scroll-smooth flex flex-col'>
			<head>
				<title>Joe's Portfolio</title>
				<meta name='description' content='Joe Reis Portfolio' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body className='bg-white flex flex-col'>
				<main className='flex flex-col'>{children}</main>
				<Navbar />
			</body>
		</html>
	);
};

export default RootLayout;

