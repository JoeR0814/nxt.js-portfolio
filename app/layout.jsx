import '@/assets/styles/globals.css';

// Export metadata for automatic head handling
export const metadata = {
	title: 'Joe Reis Portfolio',
	description: 'Joe Reis Portfolio',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className='bg-white'>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;

