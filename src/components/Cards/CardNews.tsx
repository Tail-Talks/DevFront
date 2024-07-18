import React from 'react'

interface CardNewsProps {
	image: string,
	header: string,
	article: string,
	date: string
}

export default function CardNews({image, header, article, date}: CardNewsProps) {
  return (
    <div className='flex dark:text-white justify-between gap-12 mt-10'>
      <img src={image} alt="" className='min-w-[365px] w-[365px] xl:min-w-[365px] xl:w-[420px] h-[250px] rounded-xl' />
      <div className='flex flex-col justify-between'>
        <div>
          <h3 className='font-sans font-semibold text-[26px] dark:text-white text-black-80'>
            {header}
          </h3>
          <p className='font-Rubic variable font-light text-xl mt-5 max-w-[750px] dark:text-white text-[#4D4D4D]'>
            {article}
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='font-Rubic variable font-normal text-base dark:text-white text-[#4D4D4D]'>
            {date}
          </p>
          <a href="https://t.me/tailtalksrus">
            <button className='w-[210px] h-[60px] border-[1px] border-[#A0A0A0] rounded-xl font-sans text-black-80 dark:text-[#ECECEC] text-lg font-medium'>
              Читать
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
