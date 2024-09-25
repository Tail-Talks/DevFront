// Я думаю лучше хранить modals в отдельной папке
import React from 'react'
import Modal from 'react-modal'
import Circle from '../../assets/svg/modals/FormSuccess/Circle.svg'
import Check from '../../assets/svg/modals/FormSuccess/Check.svg'

interface FormSubmitSuccessProps {
  isOpen: boolean,
  closeModal: () => void
}

export default function FormSubmitSuccess({ isOpen, closeModal }: FormSubmitSuccessProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="w-full h-full flex justify-center items-center"
      overlayClassName="fixed inset-0 z-20 bg-black-80 bg-opacity-55" // Классы для наложения модального окна
      shouldCloseOnOverlayClick={true}
    >
      <div className="w-full h-full flex justify-center items-center" onClick={closeModal}>
        <div className=" bg-white rounded-[15px] px-6 py-4 sm:bg-transparent flex flex-col items-center" >
          <div className="relative w-24 h-24 flex justify-center items-center">
            <img src={Circle} alt="Circle" className="absolute" /> {/* Есть небольше несоответствии с макетом */}
            <img src={Check} alt="Check"/>
          </div>
          <p className="mb-4 mt-4 text-center text-[1.25rem] text-black-80 sm:text-[#F3F3F3]">Форма успешно отправлена!</p>
        </div>
      </div>
    </Modal>
  )
}
