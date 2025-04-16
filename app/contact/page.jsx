'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const ContactsMe = () => {
	return (
		<div className='w-full min-h-screen bg-gray-100 px-4 pt-4'>
			{/* Navbar at the top */}
			<Navbar />

			{/* Page Content */}
			<div className='flex flex-col items-center mt-8'>
				<div className='max-w-[600px] w-full bg-white shadow-lg rounded-lg p-6 md:p-8'>
					<h1 className='text-2xl font-bold text-center mb-4'>Let's Get In Touch</h1>
					<p className='text-center text-gray-600 mb-6'>Fill out the form below to contact me!</p>

					<form className='space-y-4'>
						<div className='grid md:grid-cols-2 gap-4'>
							<div className='flex flex-col'>
								<label className='uppercase text-sm font-semibold text-gray-700'>First Name</label>
								<input
									className='border rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
									type='text'
									placeholder='John'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='uppercase text-sm font-semibold text-gray-700'>Last Name</label>
								<input
									className='border rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
									type='text'
									placeholder='Doe'
								/>
							</div>
						</div>

						<div className='flex flex-col'>
							<label className='uppercase text-sm font-semibold text-gray-700'>Email</label>
							<input
								className='border rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
								type='email'
								placeholder='example@email.com'
							/>
						</div>

						<div className='flex flex-col'>
							<label className='uppercase text-sm font-semibold text-gray-700'>Phone Number</label>
							<input
								className='border rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
								type='text'
								placeholder='+1 234 567 890'
							/>
						</div>

						<div className='flex flex-col'>
							<label className='uppercase text-sm font-semibold text-gray-700'>Message</label>
							<textarea
								className='border rounded-lg p-3 border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400'
								placeholder='Your message...'
							></textarea>
						</div>

						<button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition'>
							Send Message
						</button>
					</form>
				</div>

				{/* Contact Info */}
				<div className='mt-8 text-center'>
					<h2 className='text-xl font-semibold text-gray-700 mb-4'>My Contact Information</h2>
					<div className='flex flex-col sm:flex-row justify-center gap-4 text-blue-600'>
						<Link href='mailto:Joe.Reis.Dev@gmail.com' className='hover:underline'>
							Joe.Reis.Dev@gmail.com
						</Link>
						<Link
							href='https://www.linkedin.com/in/joe-reis-b289802a2/'
							className='hover:underline'
						>
							LinkedIn
						</Link>
						<Link href='https://github.com/JoeR0814' className='hover:underline'>
							GitHub
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactsMe;

