'use client';

import Skills from '@/components/Skills';
import Image from 'next/image';

const Projects = () => {
	const apps = [
		{
			name: 'Drawing Board',
			link: 'https://github.com/JoeR0814/drawing-app-html-5',
		},
		{
			name: 'Jeopardy',
			link: 'https://github.com/uprighted-learners/jeopardy-project-resubmission-for-joe-JoeR0814',
		},
		{
			name: 'Select-Seat',
			link: 'https://github.com/uprighted-learners/jeopardy-project-resubmission-for-joe-JoeR0814',
		},
		{
			name: 'Image Cards',
			link: 'https://github.com/JoeR0814/expanding-image-cards-HTML',
		},
	];

	return (
		<div className='py-10'>
			<div className='flex flex-col items-center justify-center py-10'>
				<h1 className='text-center text-2xl font-bold'>Projects</h1>
				<div className='flex flex-row flex-wrap'>
					{apps.map((app, index) => (
						<div key={index} className='p-4'>
							<a href={app.link} className='text-blue-500 hover:underline'>
								{app.name}
							</a>
						</div>
					))}
				</div>
				{/* <Image src='/joe-logo.webp' width={250} height={200} className='mt-10' alt='' /> */}
			</div>
			<Skills />
		</div>
	);
};

export default Projects;

