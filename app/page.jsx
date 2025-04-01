'use client';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from '../components/Navbar';
import InterviewButton from '../components/InterviewButton';

const SocialLinks = () => (
	<div className='flex gap-4 justify-center mt-4'>
		<a href='https://github.com/yourusername' target='_blank' rel='noopener noreferrer'>
			<FaGithub className='text-2xl hover:text-green-400 transition-colors' />
		</a>
		<a href='https://linkedin.com/in/yourusername' target='_blank' rel='noopener noreferrer'>
			<FaLinkedinIn className='text-2xl hover:text-green-400 transition-colors' />
		</a>
	</div>
);

const skills = ['JavaScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git'];

const SkillBadges = () => (
	<div className='flex flex-wrap gap-2 justify-center mt-6'>
		{skills.map((skill) => (
			<span key={skill} className='px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm'>
				{skill}
			</span>
		))}
	</div>
);

const ScrollIndicator = () => (
	<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
		<div className='w-6 h-10 border-2 border-green-400 rounded-full flex justify-center'>
			<div className='w-2 h-2 bg-green-400 rounded-full mt-2 animate-scroll' />
		</div>
	</div>
);

const ErrorFallback = ({ error }) => (
	<div className='text-red-500 p-4'>
		<h2>Something went wrong:</h2>
		<pre>{error.message}</pre>
	</div>
);

const HomePage = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [randomStyles, setRandomStyles] = useState([]);

	const codeSymbols = [
		'{',
		'}',
		'</>',
		'()',
		'=>',
		'let',
		'const',
		';',
		':',
		'[ ]',
		'<div>',
		'</div>',
	];

	useEffect(() => {
		const styles = Array.from({ length: 40 }).map((_, i) => ({
			left: `${i * 2.5}%`,
			animationDuration: `${(Math.random() * 5 + 3).toFixed(2)}s`,
			animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
			fontSize: `${(Math.random() * 12 + 16).toFixed(2)}px`,
			symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
		}));
		setRandomStyles(styles);
	}, []);

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('bg-black', 'text-white');
			document.body.classList.remove('bg-white', 'text-black');
		} else {
			document.body.classList.add('bg-white', 'text-black');
			document.body.classList.remove('bg-black', 'text-white');
		}
	}, [isDarkMode]);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<div className='relative w-full min-h-screen flex flex-col items-center bg-black text-white overflow-hidden'>
				<div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
					{randomStyles.map((style, i) => (
						<div
							key={i}
							className='absolute text-green-400 opacity-50 animate-codeRain'
							style={{
								left: style.left,
								animationDuration: style.animationDuration,
								animationDelay: style.animationDelay,
								fontSize: style.fontSize,
							}}
						>
							{style.symbol}
						</div>
					))}
				</div>

				<button
					onClick={toggleTheme}
					className='fixed top-4 right-4 p-2 rounded-full bg-green-400/10'
				>
					{isDarkMode ? '🌙' : '☀️'}
				</button>

				<div className='relative'>
					{!imageLoaded && (
						<div className='absolute inset-0 bg-gray-200 animate-pulse rounded-full' />
					)}
					<Image
						src='/profilePic.jpg'
						width={200}
						height={200}
						className={`rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 border border-green-300 transition-opacity duration-300 ${
							imageLoaded ? 'opacity-100' : 'opacity-0'
						}`}
						alt='Profile Picture'
						onLoad={() => setImageLoaded(true)}
						priority
					/>
				</div>

				<h1 className='text-md sm:text-3xl md:text-5xl font-bold px-4 md:px-6 text-green-400'>
					I'm A Front-End Developer with,
				</h1>
				<div className='h-[40px] sm:h-[50px] md:h-[60px] flex justify-center items-center'>
					<TypeAnimation
						sequence={[
							'JAVASCRIPT,',
							2000,
							'REACT.JS,',
							2000,
							'NEXT.JS,',
							2000,
							'VITE.JS, &',
							2000,
							'TAILWIND CSS!',
							2000,
						]}
						cursor={true}
						repeat={Infinity}
						className='text-lg sm:text-2xl md:text-4xl italic font-bold text-green-400'
					/>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='relative z-10 max-w-[1240px] w-full text-center mt-10 p-4 sm:p-8'
				>
					<div className='container mx-auto flex flex-col justify-center items-center w-full sm:w-3/4 md:w-1/2 border border-green-300 bg-white rounded-lg shadow-lg p-4 sm:p-8'>
						<Navbar />
						<FaReact className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mt-10' color='#61DAFB' />
						<h2 className='uppercase text-xs sm:text-sm tracking-widest pt-4 text-black'>
							Welcome!
						</h2>
						<p className='text-sm sm:text-base leading-relaxed pb-6 text-gray-600'>
							My Name Is Joe, I am a front-end developer specializing in React, Vite, Next.js, and
							Tailwind CSS. I focus on building fast, responsive, and user-friendly web
							applications.
						</p>
						<SocialLinks />
						<SkillBadges />
						<Link href='/contact'>
							<button className='mt-6 px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors'>
								Let's Work Together
							</button>
						</Link>
					</div>
				</motion.div>

				<ScrollIndicator />
			</div>
		</ErrorBoundary>
	);
};

export default HomePage;

