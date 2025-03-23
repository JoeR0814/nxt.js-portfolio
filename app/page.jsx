'use client';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import InterviewButton from '../components/InterviewButton';

const HomePage = () => {
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

	return (
		<div className='relative w-full min-h-screen flex flex-col items-center bg-black text-white overflow-hidden'>
			{/* Code Rain Effect */}
			<div className='absolute inset-0 z-0 pointer-events-none'>
				{Array.from({ length: 40 }).map((_, i) => (
					<div
						key={i}
						className='absolute top-[-10%] text-green-400 opacity-50 animate-codeRain'
						style={{
							left: `${i * 2.5}%`,
							animationDelay: `${Math.random() * 5}s`,
							fontSize: `${Math.random() * 12 + 16}px`,
						}}
					>
						{codeSymbols[Math.floor(Math.random() * codeSymbols.length)]}
					</div>
				))}
			</div>

			{/* Heading + TypeAnimation */}
			<div className='relative z-10 w-full text-center pt-10 bg-black bg-opacity-80'>
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
			</div>

			{/* Profile Container */}
			<div className='relative z-10 max-w-[1240px] w-full text-center mt-10 p-4 sm:p-8'>
				<div className='container mx-auto flex flex-col justify-center items-center w-full sm:w-3/4 md:w-1/2 border border-green-300 bg-white rounded-lg shadow-lg p-4 sm:p-8'>
					<Navbar />
					<FaReact className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mt-10' color='#61DAFB' />
					<h2 className='uppercase text-xs sm:text-sm tracking-widest pt-4 text-black'>Welcome!</h2>
					<p className='text-sm sm:text-base leading-relaxed pb-6 text-gray-600'>
						My Name Is Joe, I am a front-end developer specializing in React, Vite, Next.js, and
						Tailwind CSS. I focus on building fast, responsive, and user-friendly web applications.
					</p>
					<Image
						src='/profilePic.jpg'
						width={200}
						height={200}
						className='rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 border border-green-300'
						alt='Profile Picture'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

