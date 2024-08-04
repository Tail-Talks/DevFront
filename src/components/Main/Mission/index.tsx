import React from 'react'
import MissionCat1440 from '../../../assets/images/mission/cat1440.jpg'

export default function Mission() {
  return (
    <section id='mission' className='mt-36 scroll-mt-[6rem]'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div className='w-full md:w-1/2 xl:pr-[4.5rem]'>
            <h2 className='font-sans text-[#000000] dark:text-white text-3xl lg:text-4xl xl:text-5xl  font-medium'>Наша миссия</h2>
            <p className='mt-5 lg:mt-8 xl:mt-[4rem] font-Rubik text-[#000000] dark:text-[#F3F3F3] text-lg xl:text-xl font-light'>Это не просто социальная сеть, это место, где каждый питомец становится звездой, а каждый владелец находит друга.</p>
            <p className='mt-4 lg:mt-7 xl:mt-8 3xl:mt-9 font-Rubik text-[#000000] dark:text-[#F3F3F3] text-lg xl:text-xl font-light'>Мы стремимся к созданию комьюнити, где общение между питомцами и их владельцами происходит естественно и радостно,
              способствуя социальному развитию и благополучию любителей домашних животных.
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <img
            src={MissionCat1440}
            alt='missonCat'
            className='rounded-2xl ml-auto w-full h-full xl:w-[590px] xl:h-[350px]' />
          </div>

        </div>
      </div>
    </section>
  )
}
