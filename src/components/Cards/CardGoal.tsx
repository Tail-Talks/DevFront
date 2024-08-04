import React from 'react'

interface CardGoalProps {
  pictureURL: string,
  text: string
}

export default function CardGoal({ pictureURL, text }: CardGoalProps) {
  return (
    <div className='flex flex-col m-auto w-[345px] sm:w-[453px]'>
      <p className='w-fullfont-Rubic variable text-lg lg:leading-6 dark:text-white text-[#4D4D4D] text-justify mb-2'>
        {text}
      </p>
      <img src={pictureURL} alt="" className='rounded-2xl w-full h-[271px] object-cover' />
    </div>
  )
}
