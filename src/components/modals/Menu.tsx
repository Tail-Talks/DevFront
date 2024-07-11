import React, { useEffect } from 'react'
import Modal from 'react-modal'
import ButtonBread from '../UI/ButtonBread'

//SVG
import vk from '../../assets/svg/footer/vk.svg'
import medium from '../../assets/svg/footer/medium.svg'
import dzen from '../../assets/svg/footer/dzen.svg'
import vcru from '../../assets/svg/footer/vcru.svg'
import telegram from '../../assets/svg/footer/telegram.svg'

interface MenuProps {
  isOpen: boolean,
  closeModal: () => void
}

export default function Menu({ isOpen, closeModal }: MenuProps) {

  // Убираем прокрутку основного контента при открытии модального окна
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="fixed mt-[120px] top-0 left-0 right-0 bottom-0 bg-white dark:bg-black-50 dark:bg-opacity-70 overflow-y-auto outline-none"
      overlayClassName="fixed inset-0 bg-white dark:bg-black-50 bg-opacity-75 z-30"
    >
      <div className='menu pb-5'>
        <div className='container mx-auto flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
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
          <div className='flex flex-col gap-3'>
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
          <div className='flex flex-col gap-3'>
            <h5 className='font-Rubik dark:text-white font-medium'>Свяжитесь с нами</h5>
            <p className='font-Rubik dark:text-white font-medium'>Email:<span className='font-light'> Tailtalks.official@gmail.com </span></p>
          </div>
          <div className='flex flex-col gap-3'>
            <a href="" className='text-sm font-medium font-Rubik dark:text-white'>Безопасность данных Tail Talks</a>
            <a href="" className='text-sm font-medium font-Rubik dark:text-white'>Социальная ответственность</a>
            <a href="" className='text-sm font-medium font-Rubik dark:text-white'>Благотворительность</a>
          </div>
          <ButtonBread
            onClick={() => window.open('https://t.me/tailtalks_official', '_blank')}
            name='Сообщество Telegram'
            className='w-[19.5rem] h-[3rem] text-base mt-0' />
          <div className='flex flex-col items-start gap-3'>
            <select className='bg-white dark:bg-black-50 Variable font-Rubik text-[#000000]  dark:text-white text-opacity-60 dark:text-opacity-60 text-sm rounded-md'>
              <option className='font-Rubik dark:text-white dark:text-opacity-60 text-sm'>English</option>
              <option className='font-Rubik dark:text-white dark:text-opacity-60 text-sm'>Russian</option>
              <option className='font-Rubik dark:text-white dark:text-opacity-60 text-sm'>German</option>
            </select>
            <select className='bg-white dark:bg-black-50 Variable font-Rubik text-[#000000]  dark:text-white text-opacity-60 dark:text-opacity-60 text-sm rounded-md'>
              <option className='font-Rubik dark:text-white dark:text-opacity-60 text-sm'>Светлая тема</option>
              <option className='font-Rubik dark:text-white dark:text-opacity-60 text-sm'>Темная тема</option>
            </select>
          </div>
        </div>
      </div>
    </Modal>
  )
}
