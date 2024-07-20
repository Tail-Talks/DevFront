import React from 'react'
import dogWithToy1440 from '../../../assets/images/epilogue/dog_with_toy_1440.jpg'
import dogWithToy1024 from '../../../assets/images/epilogue/dog_with_toy_1024.jpg'

export default function Epilogue() {
  return (
    <section id='epilogue'>
      <div className='container mx-auto'>
        <div className='flex justify-between w-full h-[355px] 3xl:h-[550px] mt-36 gap-x-4'>
          <div className='w-1/2'>
            <picture>
              <source media="(min-width:1024px)" srcSet={dogWithToy1024} />
              <source media="(min-width:1440px)" srcSet={dogWithToy1440} />
              <img className='w-[440px] h-[330px] xl:w-[590px] xl:h-[350px] 3xl:w-[900px] 3xl:h-[515px] rounded-2xl 3xl:rounded-3xl' src={dogWithToy1440} alt='MissionCat' />
            </picture>
          </div>
          <div className='w-1/2 2xl:grow 3xl:pr-96'>
            <div className='w-full mt-7 3xl:mt-9'>
              <p className='font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light text-justify'>
                Станьте первопроходцем в мире любви и заботы о питомцах! Оставьте E-mail для предварительной регистрации на нашей платформе сегодня и вы не только получите возможность быть в центре внимания самой большой аудитории любителей животных, но и откроете дверь к звездному статусу для вашего питомца!
              </p>
              <p className='mt-5 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-4xl font-light text-justify'>
                Ваш пушистый друг может стать иконой нашего сообщества, вдохновляя и радуя сердца тысяч любителей животных по всему миру!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
