import React from 'react'

interface CardGoalProps {
  pictureURL: string,
  text: string
}

export default function CardGoal({ pictureURL, text }: CardGoalProps) {
  return (
    <div className='flex flex-col m-auto w-[453px] h-[425px]'>
      <p className='font-Rubic variable text-lg dark:text-white text-[#4D4D4D] text-justify mb-3'>
        {text}
      </p>
      <img src={pictureURL} alt="" className='rounded-2xl' />
    </div>
  )
}
