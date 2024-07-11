import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import ButtonBread from '../../UI/ButtonBread'
import illustrationDark from '../../../assets/svg/preview/IllustrationDark.svg'
import illustrationLight from '../../../assets/svg/preview/IllustrationLight.svg'
import info from '../../../assets/svg/button/info.svg'
import infoBlack from '../../../assets/svg/button/infoBlack.svg'

export default function Preview() {
  const { theme } = useTheme()

  return (
    <section className='preview'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center w-full'>

          <div className='flex flex-col justify-start w-1/2 mb-auto pt-[3rem]'>
            <h1 className='w-full font-sans text-[#000000] dark:text-white text-6xl font-semibold 3xl:text-7xl'>Социальная сеть Tail Talks</h1>
            <p className='font-Rubik text-[#000000] dark:text-[#F3F3F3] text-xl 3xl:text-3xl font-light mt-10'>Место, где каждый питомец заслуживает быть звездой</p>
            <ButtonBread
              name='Узнать подробнее'
              className='mt-10 mb-10' />
            <div className='p-[1px] rounded-2xl mr-auto bg-gradient-to-tr from-[#FF4C8C] to-[#FFAE4E]'>
              <button
                type='button'
                className='relative font-sans font-bold text-black-50 dark:text-white text-lg 3xl:text-2xl h-16 3xl:w-96 3xl:h-24 rounded-2xl w-96 flex items-center justify-center bg-white dark:bg-black-50'>
                Подключить кошелек
                <img
                  className='ml-4'
                  src={theme ? info : infoBlack} alt='info' />
              </button>
            </div>
          </div>

          <div className='w-1/2'>
            <img
              className='w-full ml-auto mb-auto'
              src={theme ? illustrationDark : illustrationLight} alt='illustration'>
            </img>
          </div>

        </div>
      </div>
    </section>
  )
}
