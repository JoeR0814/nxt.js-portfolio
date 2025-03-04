'use client';
import React from 'react';
import { FaReact } from 'react-icons/fa';

const HomePage = () => {
	return (
		<div className='w-full min-h-screen flex flex-col justify-center items-center'>
			<div className='max-w-[1240px] w-full text-center p-4 md:p-8'>
				<h1 className='uppercase text-xs sm:text-sm tracking-widest text-gray-600'>Welcome!</h1>
				<h1 className='py-4 text-lg sm:text-xl md:text-2xl text-gray-700'>
					My Name Is Joe, I Am A Front-End Developer!
				</h1>
				<p className='text-sm sm:text-base leading-relaxed'>
					I am a front-end developer specializing in React, Vite, Next.js, and Tailwind CSS. I focus
					on building fast, responsive, and user-friendly web applications. Explore the website to
					see how I can bring ideas to life through clean and efficient code!
				</p>
				<div className='flex justify-center mt-6'>
					<FaReact className='w-16 h-16 sm:w-20 sm:h-20' color='#61DBFB' />
				</div>
			</div>
		</div>
	);
};

export default HomePage;

