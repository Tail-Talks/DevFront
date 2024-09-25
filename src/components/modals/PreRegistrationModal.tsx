import React, { useState } from 'react'
import Modal from 'react-modal'
import ButtonBread from '../UI/ButtonBread'
import { validateInputString } from '../../helpers/validateInputString'
import PreregistrationPigs from '../../assets/images/modals/preRegistration/preregistrationPigs.jpg'

interface PreRegistrationModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function PreRegistrationModal({ isOpen, closeModal }: PreRegistrationModalProps) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateInputString(username) || !validateInputString(email)) {
      alert('Invalid input, please check how you entered your data')
      return
    }
    console.log('Form submitted')
    console.log({ username, email })
    setUsername('')
    setEmail('')
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className='flex justify-center items-center h-full'
      overlayClassName="fixed inset-0 z-20 bg-black-80 dark:bg-transparent flex justify-center items-center"
    >
      <div className='mx-auto w-[532px] h-[730px] flex flex-col justify-between items-center bg-white rounded-2xl py-12'>
        <img
          src={PreregistrationPigs}
          alt="Hamsters"
          className='w-[442px] h-[237px] rounded-2xl'
        />
        <div className='mx-11'>
          <h4 className='text-2xl font-medium text-center'>
            Укажите ваш e-mail
          </h4>
          <p className='font-light text-lg text-gray-600 text-center'>
            Мы пришлем вам приглашения, как только наша социальная сеть для домашних животных будет готова
          </p>
        </div>
        <form onSubmit={handleSubmit} className='w-[409px] h-[212px] flex flex-col'>
          <div className='w-full h-[59px] bg-bread rounded-2xl p-1 mb-4'>
            <input
              type="email"
              placeholder='E-mail'
              className='w-full h-full bg-clip-border focus:ring-4 rounded-xl py-5 px-6'
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className='w-full h-[59px] bg-bread rounded-2xl p-1 mb-4'>
            <input
              type="text"
              placeholder='Логин (необязательно)'
              className='w-full h-full bg-clip-border focus:ring-4 rounded-xl py-5 px-6'
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          <ButtonBread
            name='Отправить'
            type='submit'
            className='font-sans font-bold text-lg w-full h-[59px] rounded-2xl bg-bread mt-0'
          />
        </form>
      </div>
    </Modal>
  )
}
