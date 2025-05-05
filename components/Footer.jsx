'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useTheme } from './ThemeProvider';

const Footer = () => {
	const { theme } = useTheme();
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-light-200 dark:bg-dark-100 py-12 px-4'>
			<div className='container-custom'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Logo & About */}
					<div className='flex flex-col items-center md:items-start'>
						<Link href='/' className='flex items-center gap-2 mb-4'>
							<div className='relative w-8 h-8 overflow-hidden rounded-full border-2 border-primary-500 dark:border-primary-400'>
								<Image
									src='/joe-logo.webp'
									alt='Joe Reis Logo'
									fill
									sizes='2rem'
									className='object-cover'
								/>
							</div>
							<span className='font-bold text-lg text-dark-200 dark:text-light-100'>
								Joe<span className='text-primary-600 dark:text-primary-400'>Reis</span>
							</span>
						</Link>
						<p className='text-dark-100 dark:text-light-300 text-sm text-center md:text-left mb-4'>
							Frontend developer specializing in creating modern, responsive web applications with
							React, Next.js, and Tailwind CSS.
						</p>
						<div className='flex gap-4'>
							<a
								href='https://github.com/JoeR0814'
								target='_blank'
								rel='noopener noreferrer'
								className='text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
							>
								<FaGithub size={20} />
							</a>
							<a
								href='https://www.linkedin.com/in/joe-reis-b289802a2/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
							>
								<FaLinkedinIn size={20} />
							</a>
							<a
								href='mailto:Joe.Reis.Dev@gmail.com'
								className='text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
							>
								<HiOutlineMail size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className='flex flex-col items-center md:items-start'>
						<h3 className='font-bold text-lg text-dark-200 dark:text-light-100 mb-4'>
							Quick Links
						</h3>
						<nav className='flex flex-col gap-2'>
							<Link
								href='/'
								className='text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
							>
								Home
							</Link>
							<Link
								href='/about'
								className='text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
							>
								About
							</Link>
							<Link
								href='/contact'
								className='text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
							>
								Contact
							</Link>
						</nav>
					</div>

					{/* Contact Info */}
					<div className='flex flex-col items-center md:items-start'>
						<h3 className='font-bold text-lg text-dark-200 dark:text-light-100 mb-4'>Contact</h3>
						<p className='text-dark-100 dark:text-light-300 mb-2'>
							<span className='font-medium'>Email:</span> Joe.Reis.Dev@gmail.com
						</p>
						<p className='text-dark-100 dark:text-light-300 mb-2'>
							<span className='font-medium'>Location:</span>Shelton, Connecticut
						</p>
						<Link
							href='/contact'
							className='text-primary-600 dark:text-primary-400 hover:underline'
						>
							Get in touch
						</Link>
					</div>
				</div>

				<div className='border-t border-light-300 dark:border-dark-200 mt-8 pt-8 text-center'>
					<p className='text-dark-100 dark:text-light-300 text-sm'>
						&copy; {currentYear} Joe Reis. All rights reserved.
					</p>
					<p className='text-dark-100 dark:text-light-300 text-xs mt-2'>
						Built with Next.js, Tailwind CSS, and Framer Motion
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

