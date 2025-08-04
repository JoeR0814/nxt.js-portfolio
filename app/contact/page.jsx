'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoSend } from 'react-icons/io5';
import Navbar from '@/components/Navbar';

const ContactMe = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const formDataToSend = new FormData();
			formDataToSend.append('firstName', formData.firstName);
			formDataToSend.append('lastName', formData.lastName);
			formDataToSend.append('email', formData.email);
			formDataToSend.append('phone', formData.phone);
			formDataToSend.append('message', formData.message);

			const response = await fetch('https://getform.io/f/awngrwkb', {
				method: 'POST',
				body: formDataToSend,
			});

			if (response.ok) {
				setSubmitSuccess(true);
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					message: '',
				});
				setTimeout(() => setSubmitSuccess(false), 3000);
			} else {
				throw new Error('Failed to send message');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('Failed to send message. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<Navbar />

			{/* Hero Section */}
			<section className='pt-24 pb-16 px-4 bg-gradient-to-b from-light-100 to-light-200 dark:from-dark-200 dark:to-dark-300'>
				<div className='container-custom'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='text-center'
					>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark-200 dark:text-light-100'>
							Let's <span className='text-gradient'>Connect</span>
						</h1>
						<p className='text-dark-100 dark:text-light-300 max-w-2xl mx-auto text-base md:text-lg mb-8'>
							I'm always open to discussing new projects, creative ideas, or opportunities to be
							part of your vision.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<section className='py-16 px-4 bg-light-100 dark:bg-dark-200'>
				<div className='container-custom'>
					<div className='grid md:grid-cols-2 gap-12'>
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className='card'
						>
							<h2 className='text-2xl font-bold mb-6 text-dark-200 dark:text-light-100'>
								Send Me a Message
							</h2>

							{submitSuccess ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									className='bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 p-4 rounded-lg text-center'
								>
									<p className='font-medium'>Thank you for your message!</p>
									<p className='text-sm mt-2'>I'll get back to you as soon as possible.</p>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit} className='space-y-4'>
									<div className='grid md:grid-cols-2 gap-4'>
										<div className='flex flex-col'>
											<label className='text-sm font-medium text-dark-200 dark:text-light-200 mb-1'>
												First Name
											</label>
											<input
												className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
												type='text'
												name='firstName'
												value={formData.firstName}
												onChange={handleChange}
												placeholder='John'
												required
											/>
										</div>
										<div className='flex flex-col'>
											<label className='text-sm font-medium text-dark-200 dark:text-light-200 mb-1'>
												Last Name
											</label>
											<input
												className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
												type='text'
												name='lastName'
												value={formData.lastName}
												onChange={handleChange}
												placeholder='Doe'
												required
											/>
										</div>
									</div>

									<div className='flex flex-col'>
										<label className='text-sm font-medium text-dark-200 dark:text-light-200 mb-1'>
											Email
										</label>
										<input
											className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
											type='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											placeholder='example@email.com'
											required
										/>
									</div>

									<div className='flex flex-col'>
										<label className='text-sm font-medium text-dark-200 dark:text-light-200 mb-1'>
											Phone Number (Optional)
										</label>
										<input
											className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
											type='tel'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											placeholder='+1 234 567 890'
										/>
									</div>

									<div className='flex flex-col'>
										<label className='text-sm font-medium text-dark-200 dark:text-light-200 mb-1'>
											Message
										</label>
										<textarea
											className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
											name='message'
											value={formData.message}
											onChange={handleChange}
											placeholder='Your message...'
											required
										></textarea>
									</div>

									<motion.button
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className='btn-primary w-full flex items-center justify-center gap-2'
										type='submit'
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<>
												<svg
													className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
												>
													<circle
														className='opacity-25'
														cx='12'
														cy='12'
														r='10'
														stroke='currentColor'
														strokeWidth='4'
													></circle>
													<path
														className='opacity-75'
														fill='currentColor'
														d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
													></path>
												</svg>
												Sending...
											</>
										) : (
											<>
												<IoSend /> Send Message
											</>
										)}
									</motion.button>
								</form>
							)}
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<h2 className='text-2xl font-bold mb-6 text-dark-200 dark:text-light-100'>
								Contact Information
							</h2>

							<div className='space-y-6'>
								<div className='flex items-start gap-4'>
									<div className='p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'>
										<HiOutlineMail size={24} />
									</div>
									<div>
										<h3 className='font-medium text-dark-200 dark:text-light-100'>Email</h3>
										<a
											href='mailto:Joe.Reis.Dev@gmail.com'
											className='text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
										>
											Joe.Reis.Dev@gmail.com
										</a>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'>
										<FaPhoneAlt size={20} />
									</div>
									<div>
										<h3 className='font-medium text-dark-200 dark:text-light-100'>Phone</h3>
										<p className='text-dark-100 dark:text-light-300'>Available upon request</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'>
										<FaMapMarkerAlt size={22} />
									</div>
									<div>
										<h3 className='font-medium text-dark-200 dark:text-light-100'>Location</h3>
										<p className='text-dark-100 dark:text-light-300'>Shelton, Connecticut</p>
									</div>
								</div>
							</div>

							<div className='mt-10'>
								<h3 className='font-medium text-dark-200 dark:text-light-100 mb-4'>
									Connect with me
								</h3>
								<div className='flex gap-4'>
									<motion.a
										href='https://github.com/JoeR0814'
										target='_blank'
										rel='noopener noreferrer'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='p-3 rounded-full bg-light-200 dark:bg-dark-100 text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
									>
										<FaGithub size={20} />
									</motion.a>
									<motion.a
										href='https://www.linkedin.com/in/joe-reis-b289802a2/'
										target='_blank'
										rel='noopener noreferrer'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='p-3 rounded-full bg-light-200 dark:bg-dark-100 text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
									>
										<FaLinkedinIn size={20} />
									</motion.a>
									<motion.a
										href='mailto:Joe.Reis.Dev@gmail.com'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='p-3 rounded-full bg-light-200 dark:bg-dark-100 text-dark-100 dark:text-light-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
									>
										<HiOutlineMail size={20} />
									</motion.a>
								</div>
							</div>

							<div className='mt-10 p-6 bg-light-200 dark:bg-dark-100 rounded-lg'>
								<h3 className='font-medium text-dark-200 dark:text-light-100 mb-2'>
									Looking for a developer?
								</h3>
								<p className='text-dark-100 dark:text-light-300 mb-4'>
									I'm currently available for freelance work and full-time positions. If you have a
									project that needs some creative coding, I'd love to hear about it!
								</p>
								<a
									href='/joe-resume.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='btn-outline inline-block'
								>
									Download Resume
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactMe;

