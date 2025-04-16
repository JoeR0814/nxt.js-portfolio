'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

const About = () => {
	const apps = [
		{
			name: 'Portfolio With /React/Next.js/TailwindCSS',
			link: 'https://github.com/JoeR0814/nxt.js-portfolio.git',
		},
		{
			name: 'Portfolio With React/Vite.js/TailwindCSS',
			link: 'https://github.com/JoeR0814/myportfolio.git',
		},
		{ name: 'Painting Board/HTML/CSS/JS', link: 'https://github.com/JoeR0814/drawing-app-html-5' },
		{
			name: 'Jeopardy/HTML/CSS/JS',
			link: 'https://github.com/uprighted-learners/jeopardy-project-resubmission-for-joe-JoeR0814',
		},
		{
			name: 'Select-Seat/HTML/CSS/JS',
			link: 'https://github.com/uprighted-learners/jeopardy-project-resubmission-for-joe-JoeR0814',
		},
		{
			name: 'Image Cards/HTML/CSS/JS',
			link: 'https://github.com/JoeR0814/expanding-image-cards-HTML',
		},
	];

	return (
		<>
			<Navbar />
			<div className='bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4 flex flex-col items-center text-center space-y-4'>
				<Image
					src='/joe-logo.webp'
					width={120}
					height={120}
					alt='Joe Logo'
					className='rounded-full shadow-lg'
				/>
				<h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>Hey, I'm Joe 👋</h1>
				<p className='max-w-xl text-gray-600 leading-relaxed text-sm sm:text-base'>
					A Frontend Web Developer skilled in React.js, Vite.js, Next.js, and Tailwind CSS. I
					specialize in building fast, responsive, and user-friendly web applications. These days,
					I'm diving deeper into TypeScript to create more scalable solutions. I love pushing the
					boundaries of web development to create standout user experiences.
				</p>
				{/* <Image
					src='/profilePic.jpg'
					width={140}
					height={140}
					alt='Joe Profile Pic'
					className='rounded-full border border-blue-300 shadow-sm'
				/> */}
			</div>

			<div className='bg-white py-10 px-4'>
				<h2 className='text-center text-2xl sm:text-3xl font-semibold text-gray-800 mb-6'>
					Projects
				</h2>
				<div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
					{apps.map((app, index) => (
						<div
							key={index}
							className='bg-gray-100 p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition duration-300'
						>
							<a
								href={app.link}
								target='_blank'
								rel='noopener noreferrer'
								className='text-base sm:text-lg font-medium text-blue-600 hover:underline'
							>
								{app.name}
							</a>
						</div>
					))}
				</div>
			</div>
			<Skills />
		</>
	);
};

export default About;

