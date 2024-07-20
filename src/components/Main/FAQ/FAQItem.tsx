import React, { useState, useRef, useEffect } from 'react'

interface FAQItemProps {
	question: string,
	answer: Array<string>,
}

export default function FAQItem({ question, answer }: FAQItemProps) {
	const [isAnswerShown, setIsAnswerShown] = useState(true)
	const answerEl = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setIsAnswerShown(false)
	}, [])

	return (
		<div>
			<div className='bg-bread rounded-2xl p-1 h-[84px] mt-[30px]'>
				<div onClick={() => setIsAnswerShown(!isAnswerShown)} className='w-full h-full bg-clip-border rounded-xl px-[35px] bg-white dark:bg-[#000000] flex justify-between items-center cursor-pointer'>
					<span className='dark:text-white font-Rubic variable text-xl font-normal'>
						{question}
					</span>
					{isAnswerShown
						?
						<svg width="100px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className='dark:stroke-white' d="M17 15L12 10L7 15" stroke="#000000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						:
						<svg className='' width="100px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className='dark:stroke-white' d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>}
				</div>
			</div>
			<div style={{ height: isAnswerShown ? answerEl.current?.offsetHeight || 0 : 0 }}
				className="overflow-y-hidden transition-all duration-700"
			>
				<div ref={answerEl} className=' dark:text-white font-Rubic variable text-xl font-light px-[35px] my-[30px]'>
					{answer.map(data =>
						<p key={Math.random()} className='my-5'>{data}</p>
					)}
				</div>
			</div>
		</div>
	)
}
