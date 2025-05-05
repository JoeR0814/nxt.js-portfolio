'use client';
import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaArrowDown, FaCode, FaLaptopCode } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from '@/components/Navbar';
import { useTheme } from '@/components/ThemeProvider';

const SocialLinks = () => (
	<div className='flex gap-6 justify-center mt-8'>
		<motion.a
			href='https://github.com/JoeR0814'
			target='_blank'
			rel='noopener noreferrer'
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			className='text-dark-200 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
		>
			<FaGithub className='text-2xl' />
		</motion.a>
		<motion.a
			href='https://www.linkedin.com/in/joe-reis-b289802a2/'
			target='_blank'
			rel='noopener noreferrer'
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			className='text-dark-200 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
		>
			<FaLinkedinIn className='text-2xl' />
		</motion.a>
		<motion.a
			href='mailto:Joe.Reis.Dev@gmail.com'
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			className='text-dark-200 dark:text-light-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
		>
			<HiOutlineMail className='text-2xl' />
		</motion.a>
	</div>
);

const ScrollIndicator = () => (
	<motion.div
		className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
		animate={{ y: [0, 10, 0] }}
		transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
	>
		<FaArrowDown className='text-primary-500 dark:text-primary-400 text-2xl' />
	</motion.div>
);

const ErrorFallback = ({ error }) => (
	<div className='text-red-500 p-4'>
		<h2>Something went wrong:</h2>
		<pre>{error.message}</pre>
	</div>
);

const CodeSymbols = () => {
	const { theme } = useTheme();
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
		'function',
		'return',
		'import',
		'export',
		'async',
		'await',
		'useState',
		'useEffect',
		'map',
		'filter',
		'reduce',
		'props',
		'state',
		'class',
		'extends',
		'this',
		'super',
		'render',
		'component',
		'<React.Fragment>',
		'&&',
		'||',
		'??',
		'?.',
		'===',
		'!==',
		'++',
		'--',
		'+=',
		'*=',
		'/=',
		'%=',
		'try',
		'catch',
		'finally',
		'throw',
		'Promise',
		'.then()',
		'.catch()',
		'async/await',
	];

	useEffect(() => {
		const styles = Array.from({ length: 150 }).map((_, i) => ({
			left: `${Math.random() * 100}%`,
			top: `-${Math.random() * 20}%`, // Start above the viewport
			animationDuration: `${(Math.random() * 12 + 8).toFixed(2)}s`,
			animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
			fontSize: `${(Math.random() * 16 + 12).toFixed(2)}px`,
			opacity: Math.random() * 0.7 + 0.2,
			symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
			rotate: `${Math.random() * 360}deg`,
		}));
		setRandomStyles(styles);
	}, []);

	return (
		<div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
			{randomStyles.map((style, i) => (
				<div
					key={i}
					className={`absolute text-primary-500/80 dark:text-primary-500/50 animate-codeRain font-mono`}
					style={{
						left: style.left,
						top: style.top,
						animationDuration: style.animationDuration,
						animationDelay: style.animationDelay,
						fontSize: style.fontSize,
						'--opacity': style.opacity,
						'--rotate': style.rotate,
					}}
				>
					{style.symbol}
				</div>
			))}
		</div>
	);
};

const HomePage = () => {
	const { theme } = useTheme();
	const [imageLoaded, setImageLoaded] = useState(false);
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
	const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Navbar />

			{/* Hero Section */}
			<motion.section
				ref={heroRef}
				style={{ opacity, scale, y }}
				className='relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden'
			>
				<CodeSymbols />

				<div className='container-custom flex flex-col items-center text-center z-10'>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5 }}
						className='relative mb-8'
					>
						{!imageLoaded && (
							<div className='absolute inset-0 bg-light-300 dark:bg-dark-100 animate-pulse rounded-full' />
						)}
						<div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48'>
							<Image
								src='/profilePic.jpg'
								fill
								sizes='(max-width: 640px) 8rem, (max-width: 768px) 10rem, 12rem'
								className={`rounded-full object-cover border-4 border-primary-500 dark:border-primary-400 shadow-lg transition-opacity duration-500 ${
									imageLoaded ? 'opacity-100' : 'opacity-0'
								}`}
								alt='Joe Reis - Frontend Developer'
								onLoad={() => setImageLoaded(true)}
								priority
							/>
							<div className='absolute inset-0 rounded-full bg-primary-500/10 dark:bg-primary-400/10 animate-pulse'></div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-dark-200 dark:text-light-100'>
							Hi, I'm <span className='text-gradient'>Joe Reis</span>
						</h1>

						<div className='flex items-center justify-center gap-2 mb-6'>
							<FaCode className='text-primary-600 dark:text-primary-400' />
							<h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-dark-100 dark:text-light-200'>
								Frontend Developer
							</h2>
						</div>

						<div className='h-[40px] sm:h-[50px] md:h-[60px] flex justify-center items-center mb-6'>
							<TypeAnimation
								sequence={[
									'Building with React',
									1500,
									'Crafting with Next.js',
									1500,
									'Styling with Tailwind CSS',
									1500,
									'Creating modern UIs',
									1500,
									'Developing responsive layouts',
									1500,
									'Optimizing for performance',
									1500,
									'Implementing animations',
									1500,
									'Writing clean code',
									1500,
									'Solving complex problems',
									1500,
								]}
								wrapper='span'
								cursor={true}
								repeat={Infinity}
								speed={50}
								deletionSpeed={65}
								className='text-lg sm:text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400'
							/>
						</div>

						<p className='max-w-2xl mx-auto text-dark-100 dark:text-light-300 mb-8 text-base sm:text-lg'>
							I specialize in building modern, responsive web applications with a focus on
							performance, accessibility, and user experience.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link href='/about'>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className='btn-primary'
								>
									About Me
								</motion.button>
							</Link>
							<Link href='/contact'>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className='btn-outline'
								>
									Let's Connect
								</motion.button>
							</Link>
						</div>

						<SocialLinks />
					</motion.div>
				</div>

				<ScrollIndicator />
			</motion.section>

			{/* Featured Projects Section */}
			<section className='section bg-light-200 dark:bg-dark-100'>
				<div className='container-custom'>
					<div className='text-center mb-12'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5 }}
						>
							<h2 className='text-gradient mb-4'>Featured Projects</h2>
							<p className='text-dark-100 dark:text-light-300 max-w-2xl mx-auto'>
								Here are some of my recent projects. Check out my About page for more.
							</p>
						</motion.div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{[
							{
								title: 'Portfolio With Next.js',
								description: 'Modern portfolio site built with Next.js and Tailwind CSS',
								link: 'https://github.com/JoeR0814/nxt.js-portfolio.git',
								tech: ['Next.js', 'React', 'Tailwind CSS'],
							},
							{
								title: 'Portfolio With Vite',
								description: 'Fast, responsive portfolio using Vite and modern web technologies',
								link: 'https://github.com/JoeR0814/myportfolio.git',
								tech: ['Vite', 'React', 'Tailwind CSS'],
							},
							{
								title: 'Painting Board',
								description: 'Interactive drawing application with various tools and features',
								link: 'https://github.com/JoeR0814/drawing-app-html-5',
								tech: ['HTML5 Canvas', 'CSS', 'JavaScript'],
							},
						].map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='card card-hover'
							>
								<div className='flex items-center justify-center mb-4 text-primary-500 dark:text-primary-400'>
									<FaLaptopCode size={40} />
								</div>
								<h3 className='text-xl font-bold mb-2 text-dark-200 dark:text-light-100'>
									{project.title}
								</h3>
								<p className='text-dark-100 dark:text-light-300 mb-4'>{project.description}</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className='px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full'
										>
											{tech}
										</span>
									))}
								</div>
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center'
								>
									View Project
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-4 w-4 ml-1'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
										/>
									</svg>
								</a>
							</motion.div>
						))}
					</div>

					<div className='text-center mt-12'>
						<Link href='/about'>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='btn-secondary'
							>
								View All Projects
							</motion.button>
						</Link>
					</div>
				</div>
			</section>
		</ErrorBoundary>
	);
};

export default HomePage;

