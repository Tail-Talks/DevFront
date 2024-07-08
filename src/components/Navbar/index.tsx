import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import ThemeSwitchLight from '../../assets/svg/theme/ThemeSwitchLight.svg'
import ThemeSwitchDark from '../../assets/svg/theme/ThemeSwitchDark.svg'

export default function Navbar() {

  const { theme, toggleTheme } = useTheme()

  // links style
  const linksStyle = 'font-Rubik Variable text-[#000000] dark:text-white font-medium'

  return (
    <div className='hidden lg:flex lg:w-full'>
      <div className='3xl:grow 3xl:px-96 3xl:text-3xl flex text-lg justify-between items-center w-[725px] h-7 mx-auto'>
        <a
          href="#mission"
          className={linksStyle}>
          Наша миссия
        </a>
        <a
        href="#how_it_works"
        className={linksStyle}>
          Принцип работы
          </a>
        <a
        href="#roadmap"
        className={linksStyle}>
          Дорожная карта
          </a>
        <a
        href="#community"
        className={linksStyle}>
          Сообщество
          </a>
        <a
        href="#faq"
        className={linksStyle}>
          FAQ
          </a>
      </div>

      <div className='flex justify-between items-center ml-10'>
        <select className='mr-5 bg-slate-300 font-Rubik Variable text-[#000000] dark:bg-black-50 dark:text-white text-base 3xl:text-xl font-medium rounded-md'>
          <option className='text-[#000000] dark:text-white'>RU</option>
          <option className='text-[#000000] dark:text-white'>ENG</option>
          <option className='text-[#000000] dark:text-white'>CHT</option>
        </select>

        <img
          className='w-6 h-6 cursor-pointer'
          src={theme ? ThemeSwitchLight : ThemeSwitchDark}
          alt='theme'
          onClick={toggleTheme}>
        </img>

      </div>
    </div>
  )
}
