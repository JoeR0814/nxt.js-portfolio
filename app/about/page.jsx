'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
	FaGithub,
	FaExternalLinkAlt,
	FaCode,
	FaUserAlt,
	FaHistory,
	FaLaptopCode,
} from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

const About = () => {
	const [activeTab, setActiveTab] = useState('about');

	const projects = [
		{
			name: 'Portfolio With Next.js',
			description:
				'Modern portfolio site built with Next.js and Tailwind CSS featuring dark mode, animations, and responsive design.',
			link: 'https://github.com/JoeR0814/nxt.js-portfolio.git',
			tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
			image: '/joe-logo.webp',
		},
		{
			name: 'Portfolio With Vite',
			description:
				'Fast, responsive portfolio using Vite and modern web technologies with optimized performance.',
			link: 'https://github.com/JoeR0814/myportfolio.git',
			tech: ['Vite', 'React', 'Tailwind CSS'],
			image: '/joe-logo.webp',
		},
		{
			name: 'Painting Board',
			description:
				'Interactive drawing application with various tools and features built with HTML5 Canvas.',
			link: 'https://github.com/JoeR0814/drawing-app-html-5',
			tech: ['HTML5 Canvas', 'CSS', 'JavaScript'],
			image: '/joe-logo.webp',
		},
		{
			name: 'Jeopardy Game',
			description: 'Interactive Jeopardy game with categories, scoring, and timer functionality.',
			link: 'https://github.com/uprighted-learners/jeopardy-project-resubmission-for-joe-JoeR0814',
			tech: ['HTML', 'CSS', 'JavaScript'],
			image: '/joe-logo.webp',
		},
		{
			name: 'Select-Seat App',
			description:
				'Movie theater seat selection application with interactive UI and local storage.',
			link: 'https://github.com/uprighted-learners/jeopardy-project-resubmission-for-joe-JoeR0814',
			tech: ['HTML', 'CSS', 'JavaScript'],
			image: '/joe-logo.webp',
		},
		{
			name: 'Image Cards',
			description: 'Expanding image cards with smooth animations and responsive design.',
			link: 'https://github.com/JoeR0814/expanding-image-cards-HTML',
			tech: ['HTML', 'CSS', 'JavaScript'],
			image: '/joe-logo.webp',
		},
	];

	const experiences = [
		{
			title: 'Frontend Developer',
			company: 'Freelance',
			period: '2024 - Present',
			description:
				'Developing responsive web applications for clients using modern frontend technologies like React, Next.js, and Tailwind CSS.',
		},
		{
			title: 'Web Development Student',
			company: 'Goodwin University',
			period: '2024 - 2024',
			description:
				'Completed intensive training in full-stack web development, focusing on JavaScript, React, and modern web technologies.',
		},
		{
			title: 'Self-taught Developer',
			company: 'Personal Projects',
			period: '2023 - Present',
			description:
				'Built various personal projects to learn web development fundamentals and modern frameworks.',
		},
	];

	const tabVariants = {
		active: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		inactive: { opacity: 0, y: 20, transition: { duration: 0.5 } },
	};

	const tabButtonVariants = {
		active: {
			color: 'var(--color-primary-600)',
			borderColor: 'var(--color-primary-600)',
			backgroundColor: 'rgba(14, 165, 233, 0.1)',
		},
		inactive: {
			color: 'var(--color-dark-100)',
			borderColor: 'transparent',
			backgroundColor: 'transparent',
		},
	};

	return (
		<>
			<Navbar />

			{/* Hero Section */}
			<section className='pt-24 pb-16 px-4 bg-gradient-to-b from-light-100 to-light-200 dark:from-dark-200 dark:to-dark-300'>
				<div className='container-custom'>
					<div className='flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12'>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className='relative w-40 h-40 md:w-48 md:h-48'
						>
							<Image
								src='/profilePic.jpg'
								fill
								alt='Joe Reis'
								className='rounded-full object-cover border-4 border-primary-500 dark:border-primary-400 shadow-lg'
							/>
							<div className='absolute inset-0 rounded-full bg-primary-500/10 dark:bg-primary-400/10 animate-pulse'></div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className='text-center md:text-left'
						>
							<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark-200 dark:text-light-100'>
								About <span className='text-gradient'>Me</span>
							</h1>

							<p className='text-dark-100 dark:text-light-300 max-w-2xl text-base md:text-lg mb-6'>
								I'm a Frontend Web Developer skilled in React.js, Vite.js, Next.js, and Tailwind
								CSS. I specialize in building fast, responsive, and user-friendly web applications.
								Currently, I'm diving deeper into TypeScript to create more scalable solutions. I
								love pushing the boundaries of web development to create standout user experiences.
							</p>

							<div className='flex flex-wrap gap-4 justify-center md:justify-start'>
								<a
									href='https://github.com/JoeR0814'
									target='_blank'
									rel='noopener noreferrer'
									className='btn-outline flex items-center gap-2'
								>
									<FaGithub /> GitHub
								</a>
								<Link href='/contact' className='btn-primary flex items-center gap-2'>
									<FaUserAlt /> Contact Me
								</Link>
								<a
									href='/joe-resume.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='btn-secondary flex items-center gap-2'
								>
									<HiOutlineDocumentText /> Resume
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Tabs Section */}
			<section className='py-12 px-4 bg-light-100 dark:bg-dark-200'>
				<div className='container-custom'>
					<div className='flex justify-center mb-8 border-b border-light-300 dark:border-dark-100'>
						<motion.button
							variants={tabButtonVariants}
							animate={activeTab === 'about' ? 'active' : 'inactive'}
							className='px-6 py-3 font-medium text-lg border-b-2 transition-all'
							onClick={() => setActiveTab('about')}
						>
							About
						</motion.button>
						<motion.button
							variants={tabButtonVariants}
							animate={activeTab === 'experience' ? 'active' : 'inactive'}
							className='px-6 py-3 font-medium text-lg border-b-2 transition-all'
							onClick={() => setActiveTab('experience')}
						>
							Experience
						</motion.button>
						<motion.button
							variants={tabButtonVariants}
							animate={activeTab === 'projects' ? 'active' : 'inactive'}
							className='px-6 py-3 font-medium text-lg border-b-2 transition-all'
							onClick={() => setActiveTab('projects')}
						>
							Projects
						</motion.button>
					</div>

					<div className='min-h-[400px]'>
						{/* About Tab */}
						<motion.div
							variants={tabVariants}
							animate={activeTab === 'about' ? 'active' : 'inactive'}
							className={`${activeTab !== 'about' ? 'hidden' : ''}`}
						>
							<div className='grid md:grid-cols-2 gap-8'>
								<div>
									<h3 className='text-xl font-bold mb-4 text-dark-200 dark:text-light-100'>
										<span className='text-gradient'>My Journey</span>
									</h3>
									<p className='text-dark-100 dark:text-light-300 mb-4'>
										My journey into web development began with a curiosity about how websites work.
										What started as a hobby quickly evolved into a passion as I discovered the power
										of creating interactive and responsive user interfaces.
									</p>
									<p className='text-dark-100 dark:text-light-300 mb-4'>
										I've since dedicated myself to mastering modern frontend technologies, with a
										particular focus on the React ecosystem. I enjoy the challenge of turning
										complex problems into simple, beautiful, and intuitive designs.
									</p>
								</div>

								<div>
									<h3 className='text-xl font-bold mb-4 text-dark-200 dark:text-light-100'>
										<span className='text-gradient'>My Approach</span>
									</h3>
									<p className='text-dark-100 dark:text-light-300 mb-4'>
										I believe in writing clean, maintainable code that delivers exceptional user
										experiences. My approach combines technical expertise with an eye for design and
										a focus on performance.
									</p>
									<p className='text-dark-100 dark:text-light-300 mb-4'>
										I'm constantly learning and exploring new technologies to stay at the forefront
										of web development. Currently, I'm expanding my knowledge in TypeScript, state
										management solutions, and advanced animation techniques.
									</p>
								</div>
							</div>
						</motion.div>

						{/* Experience Tab */}
						<motion.div
							variants={tabVariants}
							animate={activeTab === 'experience' ? 'active' : 'inactive'}
							className={`${activeTab !== 'experience' ? 'hidden' : ''}`}
						>
							<div className='space-y-8'>
								{experiences.map((exp, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className='flex gap-4'
									>
										<div className='mt-1'>
											<div className='w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400'>
												<FaHistory />
											</div>
										</div>
										<div>
											<h3 className='text-xl font-bold text-dark-200 dark:text-light-100'>
												{exp.title}
											</h3>
											<div className='flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2'>
												<span>{exp.company}</span>
												<span className='w-1 h-1 rounded-full bg-primary-600 dark:bg-primary-400'></span>
												<span className='text-sm'>{exp.period}</span>
											</div>
											<p className='text-dark-100 dark:text-light-300'>{exp.description}</p>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Projects Tab */}
						<motion.div
							variants={tabVariants}
							animate={activeTab === 'projects' ? 'active' : 'inactive'}
							className={`${activeTab !== 'projects' ? 'hidden' : ''}`}
						>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{projects.map((project, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className='card card-hover'
									>
										<div className='flex items-center justify-center mb-4 text-primary-500 dark:text-primary-400'>
											<FaLaptopCode size={32} />
										</div>
										<h3 className='text-xl font-bold mb-2 text-dark-200 dark:text-light-100'>
											{project.name}
										</h3>
										<p className='text-dark-100 dark:text-light-300 mb-4 text-sm'>
											{project.description}
										</p>
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
											className='text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center text-sm'
										>
											View Project
											<FaExternalLinkAlt className='ml-1 text-xs' />
										</a>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<Skills />
		</>
	);
};

export default About;

