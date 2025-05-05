'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaArrowRight } from 'react-icons/fa';

const InterviewButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const questions = [
		{
			question: 'What is your favorite programming language?',
			answer:
				'JavaScript is my favorite programming language because of its versatility and the ability to build both frontend and backend applications.',
		},
		{
			question: 'What projects are you currently working on?',
			answer:
				'I am currently working on building my portfolio website using Next.js and enhancing my skills in React and modern JavaScript frameworks.',
		},
		{
			question: 'What are your career goals?',
			answer:
				'My goal is to become a senior frontend developer and eventually lead a team of developers to build innovative web applications.',
		},
	];

	const handleNextQuestion = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setCurrentQuestion(0);
		}
	};

	return (
		<div className='flex flex-col items-center mt-8'>
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className='btn-primary flex items-center gap-2'
			>
				<FaQuestionCircle />
				{isOpen ? 'Close Interview' : 'Interview Me'}
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className='mt-6 card w-full max-w-md'
					>
						<div className='flex items-center gap-2 mb-4 text-primary-600 dark:text-primary-400'>
							<FaQuestionCircle />
							<h3 className='font-bold text-lg text-dark-200 dark:text-light-100'>
								Question {currentQuestion + 1} of {questions.length}
							</h3>
						</div>

						<div className='mb-6'>
							<h4 className='font-medium text-dark-200 dark:text-light-100 mb-2'>
								{questions[currentQuestion].question}
							</h4>
							<p className='text-dark-100 dark:text-light-300'>
								{questions[currentQuestion].answer}
							</p>
						</div>

						<motion.button
							onClick={handleNextQuestion}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='btn-secondary flex items-center gap-2 text-sm'
						>
							Next Question
							<FaArrowRight />
						</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default InterviewButton;

