'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const handleNav = () => {
		setNav(!nav);
	};

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white/80 dark:bg-dark-200/80 backdrop-blur-md shadow-md py-2'
					: 'bg-transparent py-4'
			}`}
		>
			<div className='container-custom flex justify-between items-center'>
				{/* Logo */}
				<Link href='/' className='flex items-center gap-2'>
					<div className='relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary-500 dark:border-primary-400'>
						<Image
							src='/joe-logo.webp'
							alt='Joe Reis Logo'
							fill
							sizes='2.5rem'
							className='object-cover'
						/>
					</div>
					<span className='font-bold text-xl text-dark-200 dark:text-light-100'>
						Joe<span className='text-primary-600 dark:text-primary-400'>Reis</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-8'>
					<Link href='/' className='nav-link'>
						Home
					</Link>
					<Link href='/about' className='nav-link'>
						About
					</Link>
					<Link href='/contact' className='nav-link'>
						Contact
					</Link>

					{/* Theme Toggle */}
					<button
						onClick={toggleTheme}
						className='p-2 rounded-full bg-light-200 dark:bg-dark-100 text-dark-100 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
						aria-label='Toggle theme'
					>
						{theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
					</button>
				</nav>

				{/* Mobile Menu Button */}
				<div className='md:hidden flex items-center gap-4'>
					<button
						onClick={toggleTheme}
						className='p-2 rounded-full bg-light-200 dark:bg-dark-100 text-dark-100 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
						aria-label='Toggle theme'
					>
						{theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
					</button>
					<button
						onClick={handleNav}
						className='p-2 text-dark-200 dark:text-light-100'
						aria-label='Toggle mobile menu'
					>
						<AiOutlineMenu size={25} />
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{nav && (
				<div className='fixed inset-0 bg-black/70 z-50' onClick={handleNav}>
					<motion.div
						initial={{ x: '-100%' }}
						animate={{ x: 0 }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-light-100 dark:bg-dark-100 p-6 overflow-y-auto'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='flex justify-between items-center mb-8'>
							<Link href='/' className='flex items-center gap-2' onClick={() => setNav(false)}>
								<div className='relative w-8 h-8 overflow-hidden rounded-full border-2 border-primary-500'>
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
							<button
								onClick={handleNav}
								className='p-2 text-dark-200 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400'
								aria-label='Close menu'
							>
								<AiOutlineClose size={20} />
							</button>
						</div>

						<div className='border-b border-light-300 dark:border-dark-200 pb-4 mb-4'>
							<p className='text-dark-100 dark:text-light-300 text-sm'>
								Frontend Developer Portfolio
							</p>
						</div>

						<nav className='mb-8'>
							<ul className='space-y-4'>
								<li>
									<Link
										href='/'
										className='block py-2 text-dark-200 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
										onClick={() => setNav(false)}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href='/about'
										className='block py-2 text-dark-200 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
										onClick={() => setNav(false)}
									>
										About
									</Link>
								</li>
								<li>
									<Link
										href='/contact'
										className='block py-2 text-dark-200 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
										onClick={() => setNav(false)}
									>
										Contact
									</Link>
								</li>
							</ul>
						</nav>

						<div className='mt-auto'>
							<p className='text-primary-600 dark:text-primary-400 font-medium mb-4'>
								Connect with me
							</p>
							<div className='flex items-center gap-4'>
								<a
									href='https://www.linkedin.com/in/joe-reis-b289802a2/'
									target='_blank'
									rel='noopener noreferrer'
									className='p-3 rounded-full bg-light-200 dark:bg-dark-200 text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-110'
								>
									<FaLinkedinIn size={18} />
								</a>
								<a
									href='https://github.com/JoeR0814'
									target='_blank'
									rel='noopener noreferrer'
									className='p-3 rounded-full bg-light-200 dark:bg-dark-200 text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-110'
								>
									<FaGithub size={18} />
								</a>
								<a
									href='mailto:Joe.Reis.Dev@gmail.com'
									className='p-3 rounded-full bg-light-200 dark:bg-dark-200 text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-110'
								>
									<AiOutlineMail size={18} />
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</header>
	);
};

export default Navbar;

