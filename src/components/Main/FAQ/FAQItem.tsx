import React, { useState, useRef, useEffect } from 'react'

interface FAQItemProps {
  question: string;
  answer: Array<string>;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isAnswerShown, setIsAnswerShown] = useState(false)
  const answerEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (answerEl.current && isAnswerShown) {
      answerEl.current.style.height = `${answerEl.current.scrollHeight}px`
    } else if (answerEl.current) {
      answerEl.current.style.height = '0px'
    }
  }, [isAnswerShown])

  return (
    <div>
      <div className='bg-bread rounded-2xl p-1 h-[84px] mt-[30px]'>
        <div
          onClick={() => setIsAnswerShown(!isAnswerShown)}
          className='w-full h-full bg-clip-border rounded-xl px-[35px] bg-white dark:bg-[#000000] flex justify-between items-center cursor-pointer'
        >
          <span className='dark:text-white font-Rubic variable text-lg xl:text-xl font-normal'>
            {question}
          </span>
          <svg
            className={`transition-transform duration-500 ${isAnswerShown ? 'rotate-180' : ''}`}
            width="100px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path className='dark:stroke-white' d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div ref={answerEl} className={`overflow-hidden transition-all duration-700`} style={{ height: '0px' }}>
        <div className='variable px-[35px] mt-[30px]'>
          {answer.map((data, index) => (
            <p key={index} className='my-5 text-xl font-light dark:text-white font-Rubic'>
              {data}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
