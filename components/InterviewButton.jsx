'use client';
import Link from 'next/link';

const InterviewButton = () => {
	return (
		<div className='w-full flex justify-center items-center px-4'>
			<div className='w-full max-w-xl bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-200'>
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
		</div>
	);
};

export default InterviewButton;

{
	/* Email Contact Section */
}
{
	/* <div className='mt-8 text-center'>
  <h2 className='text-xl font-semibold text-gray-700'>Contact Me by Email</h2>
  <a href='mailto:Joe.Reis.Dev@gmail.com' className='text-blue-600 hover:underline'>
    Joe.Reis.Dev@gmail.com
  </a>
</div> */
}

