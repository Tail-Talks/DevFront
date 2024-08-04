import React from 'react'
import { RoadmapCardProps } from '../../types/types'

export default function RoadmapCard({ quarter, tasks }: RoadmapCardProps) {
  return (
    <div className='flex flex-col justify-center items-center mr-[90px]'>
      <p className='font-sans font-semibold text-[20px] dark:text-white text-center mt-[33px]'>
        {quarter}
      </p>
      <div className='w-[300px] sm:w-[346px] border-[3px] dark:border-white border-[#000000] rounded-2xl mt-[40px] dark:text-white flex flex-col justify-center items-center'>
        <div className='mr-10 ml-10 mb-10'>
          {tasks.map((task, index) => (
            <div key={index} className='mt-[20px] lg:mt-[25px]'>
              <ul className='font-Rubik Variable font-medium text-lg'>
                {task.title}
                {task.items.map((item, idx) => (
                  <li key={idx} className='font-light text-base list-disc mt-2 lg:mt-[10px] text-left'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
