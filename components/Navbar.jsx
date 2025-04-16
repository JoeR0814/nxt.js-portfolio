'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='w-full h-30 shadow-xl z-[100]'>
			<div className='flex justify-center items-center px-2 2xl:px-16 border-shadow'>
				<div>
					<ul className='hidden md:flex text-black'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/about'>
							<li className='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						{/* <Link href='/projects'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
						</Link> */}
						<Link href='/contact'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
						</Link>
					</ul>
					<div className='md:hidden'>
						<AiOutlineMenu size={25} onClick={handleNav} />
					</div>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{nav && (
				<div className='fixed left-0 top-0 w-full h-screen bg-black/70 cursor-pointer'>
					<div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 cursor-pointer'>
						<div className='flex justify-end'>
							<AiOutlineClose size={25} onClick={handleNav} />
						</div>
						<div className='border-b border-gray-300 mt-4'>
							<p className='w-[85%] md:w-[90%] py-4'>Joe Reis's Next.js Portfolio Project</p>
						</div>
						<div className='py-4 flex flex-col'>
							<ul className='uppercase'>
								<Link href='/'>
									<li className='py-4 text-sm'>Home</li>
								</Link>
								<Link href='/about'>
									<li className='py-4 text-sm'>About</li>
								</Link>
								{/* <Link href='/projects'>
									<li className='py-4 text-sm'>Projects</li>
								</Link> */}
								<Link href='/contact'>
									<li className='py-4 text-sm'>Contact</li>
								</Link>
							</ul>
							<div className='pt-40'>
								<p className='uppercase tracking-widest text-[#5651e5]'>Joe Reis's Portfolio</p>
							</div>
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow-lg shadow-fray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaLinkedinIn />
								</div>
								<div className='rounded-full shadow-lg shadow-fray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaGithub />
								</div>
								<div className='rounded-full shadow-lg shadow-fray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<AiOutlineMail />
								</div>
								<div className='rounded-full shadow-lg shadow-fray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;

