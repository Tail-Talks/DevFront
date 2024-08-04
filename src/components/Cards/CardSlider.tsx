import React from 'react';

interface CardSliderProps {
  bg: string,
  title: string,
  text: string
}

export default function CardSlider({ bg, title, text }: CardSliderProps) {
  return (
    <div className={`min-w-[345px] sm:min-w-[312px] lg:min-w-[384px] w-96 h-[393px] lg:h-[437px] ${bg} bg-center bg-cover flex flex-col justify-end overflow-hidden`}>
      <div className='p-10'>
        <h3 className='font-sans font-bold text-white text-[26px]'>
          {title}
        </h3>
        <p className='text-[#F3F3F3F2] font-light text-lg pt-4'>
          {text}
        </p>
      </div>
    </div>
  )
}
