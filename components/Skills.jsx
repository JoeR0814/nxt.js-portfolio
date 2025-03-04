'use client';

const Skills = () => {
	const skills = [
		{
			name: 'JavaScript',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		},
		{
			name: 'React',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		},
		{ name: 'Vite', img: 'https://sambitsahoo.com/vite-article.svg' },
		{
			name: 'Next.js',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
		},
		{
			name: 'HTML',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
		},
		{
			name: 'CSS',
			img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		},
		{
			name: 'Tailwind CSS',
			img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
		},
	];
	return (
		<div className='w-full min-h-screen flex flex-col justify-start items-center text-center pb-10'>
			<h1 className='text-3xl font-bold mb-6 pt-10'>Skills</h1>
			<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3'>
				{skills.map((skill, index) => (
					<div key={index} className='flex flex-col items-center space-y-2'>
						<img src={skill.img} alt={skill.name} className='w-12 h-12' />
						<p className='text-sm md:text-base font-medium'>{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;

