import React, { useState } from 'react'
import Navbar from '../Navbar'
import Menu from '../Menu/inxdex'
import { useTheme } from '../../context/ThemeContext'

import logo from '../../assets/svg/logo/logo.svg'
import logoDark from '../../assets/svg/logo/logoDark.svg'


export default function Header() {
  const { theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className='fixed z-40 w-full top-0 bg-white dark:bg-black-50'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center pt-6 pb-6 lg:border-b-[1px]'>

          {/* logo */}
          <a href='#preview' className='flex items-center justify-between h-9'>
            {theme ? <img src={logoDark} alt="logo" /> : <img src={logo} alt="logo" />}

            <h2 className='pl-4 pr-5 font-sans text-[#000000] dark:text-white 3xl:grow 3xl:text-4xl text-2xl font-bold whitespace-nowrap'>Tail Talks</h2>
          </a>
          {/* end logo */}

          <Navbar /> {/* navbar при меньше 1024 невидим */}

          {/* button burger menu */}
          <button onClick={toggleMenu} className='lg:hidden flex items-center relative z-50'>
            <div className={`w-6 h-6 text-gray-900 dark:text-white transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45' : ''}`}>
              <svg className={`absolute w-6 h-6 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg className={`absolute w-6 h-6 ${isMenuOpen ? 'opacity-100 rotate-45' : 'opacity-0'} transition-opacity duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
          </button>

          {/* menu */}
          <Menu isOpen={isMenuOpen} closeModal={toggleMenu} />

        </div>
      </div>
    </header>
  )
}
