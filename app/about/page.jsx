'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const About = () => {
	return (
		<>
			<Navbar />
			<div className='flex flex-col items-center justify-center h-screen pt-20'>
				<Image src='/joe-logo.webp' width={200} height={200} className='pb-10' alt='Joe Logo' />

				<div className='w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
					<p>
						Hey, I'm Joe—a Frontend Web Developer skilled in React.js, Vite.js, Next.js, and
						Tailwind CSS. I specialize in creating fast, responsive, and user-friendly web
						applications. These days, I'm increasingly pursuing TypeScript to build more robust and
						scalable solutions. I'm constantly exploring new technologies and techniques to push the
						boundaries of web development and deliver exceptional user experiences.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;

