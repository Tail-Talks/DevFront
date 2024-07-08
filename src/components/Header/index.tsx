import React, { useState } from 'react'
import Navbar from '../Navbar'
import Menu from '../modals/Menu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='fixed z-50 w-full top-0'>
      <div className='container mx-auto px-4 3xl:px-10'>
        <div className='flex gap-10 items-center h-14 mt-10 pt-2.5 pb-2.5'>

          {/* logo */}
          <div className='flex h-9 justify-between items-center'>
            <div className='w-9 h-9 pr-5 mr-5 bg-[#000000] dark:bg-white rounded-full bg'></div>
            <div className='w-32 3xl:w-44 h-6 font-sans text-[#000000] dark:text-white 3xl:grow 3xl:text-4xl text-2xl font-bold'>Tail Talks</div>
          </div>
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
