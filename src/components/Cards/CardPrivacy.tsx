import React from 'react'

interface CardPrivacyProps {
  title: string,
  text: string,
  list?: string[],
  conclusion?: string
}

export default function CardPrivacy({ title, text, list, conclusion }: CardPrivacyProps) {
  return (
    <div className='mb-[50px] text-[#000000CC] dark:text-[#BEBEBE]'>
      <h3 className='text-xl font-medium'>{title}</h3>
      <p className='text-base font-light mt-[25px]'>{text}</p>
      {list && list.length > 0 && (
        <ul className='my-[30px] list-disc pl-[25px] flex flex-col gap-4'>
          {list.map((item, index) => (
            <li className='text-base font-light' key={index}>{item}</li>
          ))}
        </ul>
      )}
      {conclusion && <p className=' text-base font-light'>{conclusion}</p>}
    </div>
  )
}
