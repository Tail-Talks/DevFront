import React from 'react'
import { faqData } from '../../../data/faq'
import FAQItem from './FAQItem'

export default function FAQ() {

	return (
		<section id='faq' className='mt-[140px] scroll-mt-[6rem]'>
			<div className='container mx-auto'>
				<h3 className='font-Rubic variable font-semibold text-sm sm:text-lg bg-clip-text text-transparent bg-bread'>
					ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
				</h3>
				<h2 className='font-sans dark:text-white font-medium text-3xl lg:text-4xl xl:text-5xl mt-2.5'>
					FAQ
				</h2>
				<div className='mt-[30px]'>
					{faqData.map(data =>
						<FAQItem key={data.id} question={data.question} answer={data.answer} />
					)}
				</div>
			</div>
		</section>
	)
}
