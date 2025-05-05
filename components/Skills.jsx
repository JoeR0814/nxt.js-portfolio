'use client';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const Skills = () => {
	const { theme } = useTheme();

	const skills = [
		{
			name: 'JavaScript',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
			level: 90,
			color: '#F7DF1E',
		},
		{
			name: 'React',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
			level: 85,
			color: '#61DAFB',
		},
		{
			name: 'Vite',
			img: 'https://sambitsahoo.com/vite-article.svg',
			level: 80,
			color: '#646CFF',
		},
		{
			name: 'Next.js',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
			level: 85,
			color: theme === 'dark' ? '#FFFFFF' : '#000000',
		},
		{
			name: 'HTML',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
			level: 95,
			color: '#E34F26',
		},
		{
			name: 'CSS',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
			level: 90,
			color: '#1572B6',
		},
		{
			name: 'Tailwind CSS',
			img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
			level: 85,
			color: '#06B6D4',
		},
		{
			name: 'TypeScript',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
			level: 75,
			color: '#3178C6',
		},
		{
			name: 'Git',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
			level: 80,
			color: '#F05032',
		},
	];

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
	};

	return (
		<section className='section bg-light-100 dark:bg-dark-200'>
			<div className='container-custom'>
				<div className='text-center mb-12'>
					<h2 className='text-gradient mb-4'>Technical Skills</h2>
					<p className='text-dark-100 dark:text-light-300 max-w-2xl mx-auto'>
						I specialize in modern frontend technologies, with a focus on creating responsive,
						performant, and user-friendly web applications.
					</p>
				</div>

				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.2 }}
					className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8'
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							variants={item}
							className='card-hover flex flex-col items-center p-4'
						>
							<div className='relative w-16 h-16 mb-4 flex items-center justify-center'>
								<div
									className='absolute inset-0 rounded-full opacity-10'
									style={{ backgroundColor: skill.color }}
								/>
								<img src={skill.img} alt={skill.name} className='w-10 h-10 z-10' />
							</div>

							<h3 className='text-base font-semibold mb-2 text-dark-200 dark:text-light-100'>
								{skill.name}
							</h3>

							<div className='w-full bg-light-300 dark:bg-dark-100 rounded-full h-2 mb-1'>
								<div
									className='h-full rounded-full'
									style={{
										width: `${skill.level}%`,
										backgroundColor: skill.color,
									}}
								/>
							</div>

							<span className='text-xs text-dark-100 dark:text-light-300'>{skill.level}%</span>
						</motion.div>
					))}
				</motion.div>

				<div className='mt-16 text-center'>
					<h3 className='text-xl font-bold mb-6 text-dark-200 dark:text-light-100'>
						Other Technologies I Work With
					</h3>

					<div className='flex flex-wrap justify-center gap-3'>
						{[
							'Redux',
							'Node.js',
							'Express',
							'MongoDB',
							'Firebase',
							'REST API',
							'GraphQL',
							'Figma',
							'Responsive Design',
							'UI/UX',
						].map((tech, index) => (
							<span key={index} className='skill-badge'>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;

