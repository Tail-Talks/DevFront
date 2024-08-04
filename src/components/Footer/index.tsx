import React from 'react'
import ButtonBread from '../UI/ButtonBread'
//SVG
import vk from '../../assets/svg/footer/vk.svg'
import medium from '../../assets/svg/footer/medium.svg'
import dzen from '../../assets/svg/footer/dzen.svg'
import vcru from '../../assets/svg/footer/vcru.svg'
import telegram from '../../assets/svg/footer/telegram.svg'

export default function Footer() {
  return (
    <footer id='footer' className='sm:mt-[50px] pb-[50px]'>
      <div className='container flex flex-col mx-auto'>
        <div className='border-b-[1px] pb-[45px] sm:py-[45px] sm:border-y-[1px] border-white/20'>

          {/* 1024px and less */}
          <div className='block xl:hidden'>
            <div className='flex border-b-[1px]  border-white/20 pb-[20px] sm:pb-0 sm:border-none'>
            <h4 className='font-sans font-bold text-3xl text-gradient sm:m-0'>Tail Talks</h4>
            </div>

            <div className='flex flex-col mt-[20px] sm:mt-[45px]'>

              <div className='flex flex-col gap-14 sm:hidden'>
                <div className='flex flex-col gap-6'>
                  <a
                    href="#mission"
                    className='font-Rubik text-black-80 dark:text-white font-medium'>
                    Наша миссия
                  </a>
                  <a
                    href="#how_it_works"
                    className='font-Rubik text-black-80 dark:text-white font-medium'>
                    Принцип работы
                  </a>
                  <a
                    href="#roadmap"
                    className='font-Rubik  text-black-80 dark:text-white font-medium'>
                    Дорожная карта
                  </a>
                  <a
                    href="#community"
                    className='font-Rubik text-black-80 dark:text-white font-medium'>
                    Сообщество
                  </a>
                  <a
                    href="#faq"
                    className='font-Rubik text-black-80 dark:text-white font-medium'>
                    FAQ
                  </a>
                </div>
                <div className='flex flex-col gap-6'>
                  <h5 className='font-Rubik text-black-80 dark:text-white font-medium'>Социальные сети</h5>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={vk} alt="Vk" />
                    <p className='text-sm font-Rubik dark:text-white'>Вконтакте</p>
                  </a>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={medium} alt="Medium" />
                    <p className='text-sm font-Rubik dark:text-white'>Medium</p>
                  </a>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={dzen} alt="Yandex Zen" />
                    <p className='text-sm font-Rubik dark:text-white'>Yandex Zen</p>
                  </a>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={vcru} alt="VC.ru" />
                    <p className='text-sm font-Rubik dark:text-white'>VC.ru</p>
                  </a>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={telegram} alt="Telegram" />
                    <p className='text-sm font-Rubik dark:text-white'>Telegram</p>
                  </a>
                </div>
                <div className='flex flex-col gap-6'>
                  <h5 className='font-Rubik dark:text-white font-medium'>Свяжитесь с нами</h5>
                  <p className='font-Rubik dark:text-white font-medium'>Email:<span className='font-light'> Tailtalks.official@gmail.com </span></p>
                </div>
                <div className='flex flex-col gap-6'>
                  <a href="" className='text-sm font-Rubik dark:text-white'>Безопасность данных Tail Talks</a>
                  <a href="" className='text-sm font-Rubik dark:text-white'>Социальная ответственность</a>
                  <a href="" className='text-sm font-Rubik dark:text-white'>Благотворительность</a>
                </div>
              </div>

              {/* 1024px to 640px */}
              <div className='hidden sm:flex justify-between'>
                <div className='flex flex-col gap-6'>
                  <a
                    href="#mission"
                    className='font-Rubik text-black-80 dark:text-white font-medium'>
                    Наша миссия
                  </a>
                  <a
                    href="#how_it_works"
                    className='font-Rubik text-black-80 dark:text-white font-medium'>
                    Принцип работы
                  </a>
                  <a
                    href="#roadmap"
                    className='font-Rubik  text-black-80 dark:text-white font-medium'>
                    Дорожная карта
                  </a>
                  <a
                    href="#community"
                    className='font-Rubik text-black-80 dark:text-white font-medium'>
                    Сообщество
                  </a>
                  <a
                    href="#faq"
                    className='font-Rubik text-black-80 dark:text-white font-medium'>
                    FAQ
                  </a>
                </div>
                <div className='flex flex-col gap-6'>
                  <h5 className='font-Rubik dark:text-white font-medium'>Свяжитесь с нами</h5>
                  <p className='font-Rubik dark:text-white font-medium'>Email:<span className='font-light'> Tailtalks.official@gmail.com </span></p>
                </div>
                <div className='flex flex-col gap-6'>
                  <a href="" className='text-sm font-Rubik dark:text-white'>Безопасность данных Tail Talks</a>
                  <a href="" className='text-sm font-Rubik dark:text-white'>Социальная ответственность</a>
                  <a href="" className='text-sm font-Rubik dark:text-white'>Благотворительность</a>
                </div>
                <div className='flex flex-col gap-6'>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={vk} alt="Vk" />
                    <p className='text-sm font-Rubik dark:text-white'>Вконтакте</p>
                  </a>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={medium} alt="Medium" />
                    <p className='text-sm font-Rubik dark:text-white'>Medium</p>
                  </a>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={dzen} alt="Yandex Zen" />
                    <p className='text-sm font-Rubik dark:text-white'>Yandex Zen</p>
                  </a>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={vcru} alt="VC.ru" />
                    <p className='text-sm font-Rubik dark:text-white'>VC.ru</p>
                  </a>
                  <a href="" className='flex gap-2.5 items-center'>
                    <img src={telegram} alt="Telegram" />
                    <p className='text-sm font-Rubik dark:text-white'>Telegram</p>
                  </a>
                </div>
              </div>
              {/* 1024px to 640px end */}
              <div className='flex xs:justify-center sm:justify-start items-end'>
                <ButtonBread
                  onClick={() => window.open('https://t.me/tailtalks_official', '_blank')} name='Сообщество Telegram'
                  className='w-[21.563rem] h-[3rem] text-base lg:w-[18.938rem] lg:h-[2.813rem] mt-10 md:mt-0' />
              </div>
            </div>
          </div>
          {/* 1024px and less end */}

          {/* PC > 1024px */}
          <div className='hidden xl:flex justify-between'>
            <h4 className='font-sans font-bold text-3xl text-gradient'>Tail Talks</h4>
            <div className='flex gap-6'>
              <a href="#mission" className='font-Rubik text-black-80 dark:text-white font-medium'>Наша миссия</a>
              <a href="#how_it_works" className='font-Rubik text-black-80 dark:text-white font-medium'>Принцип работы</a>
              <a href="#roadmap" className='font-Rubik text-black-80 dark:text-white font-medium'>Дорожная карта</a>
              <a href="#community" className='font-Rubik text-black-80 dark:text-white font-medium'>Сообщество</a>
              <a href="#faq" className='font-Rubik text-black-80 dark:text-white font-medium'>FAQ</a>
            </div>
            <div className='flex gap-6'>
              <a href="">
                <img src={vk} alt="Vk" />
              </a>
              <a href="">
                <img src={medium} alt="Medium" />
              </a>
              <a href="">
                <img src={dzen} alt="Yandex Zen" />
              </a>
              <a href="">
                <img src={vcru} alt="VC.ru" />
              </a>
              <a href="">
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </div>
          <div className='hidden xl:flex xl:justify-between xl:mt-10'>
            <div className='flex flex-col gap-6'>
              <a href="" className='text-sm font-Rubik text-black-80 dark:text-white'>Безопасность данных Tail Talks</a>
              <a href="" className='text-sm font-Rubik text-black-80 dark:text-white'>Социальная ответственность</a>
              <a href="" className='text-sm font-Rubik text-black-80 dark:text-white'>Благотворительность</a>
            </div>
            <div className='flex flex-col gap-6 justify-end'>
              <h5 className='font-Rubik text-black-80 dark:text-white font-medium'>Свяжитесь с нами</h5>
              <p className='font-Rubik text-black-80 dark:text-white font-medium'>Email:<span className='font-light'> Tailtalks.official@gmail.com </span></p>
            </div>
            <div className='flex items-end'>
              <ButtonBread
                onClick={() => window.open('https://t.me/tailtalks_official', '_blank')} name='Сообщество Telegram'
                className='w-[21.563rem] h-[3rem] text-base lg:w-[18.938rem] lg:h-[2.813rem]' />
            </div>
          </div>
          {/* PC > 1024px end */}

        </div>
        <div className='flex flex-col xs:flex-row justify-between mt-[35px]'>
          <p className='font-Rubik dark:text-white dark:text-opacity-60 text-sm'>© 2024 Tail Talks. All Rights Reserved</p>
          <a href='#' className='font-Rubik dark:text-white dark:text-opacity-60 text-sm font-medium'>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
