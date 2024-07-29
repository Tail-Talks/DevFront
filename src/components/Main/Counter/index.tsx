import React, { useState } from 'react'
import ButtonBread from '../../UI/ButtonBread'
import PreRegistrationModal from '../../modals/PreRegistrationModal'


export default function Counter() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<section id='counter' className='w-full bg-[#F3F3F3] dark:bg-transparent'>
			<div className='container mx-auto'>
				<div className='bg-[#F3F3F3] bg-left-65 bg-counterDogLg xl:bg-counterDog bg-contain xl:bg-left bg-no-repeat mt-[100px] xl:mt-[140px] flex justify-end 3xl:justify-center rounded-3xl'>
					<div className='w-[530px] xl:w-[670px] flex flex-col items-center mt-[70px] xl:mt-[134px] mb-[136px] mr-[90px] xl:mr-[110px]'>
						<h3 className='font-sans text-[#000000] text-2xl xl:text-[34px] text-center leading-[36px] xl:leading-[50px] font-medium'>
							Отсчет времени до запуска нашей социальной сети
							<span className='bg-clip-text text-transparent bg-bread'> Tail Talks </span> начался!
						</h3>
						<p className='font-Rubik Variable font-light text-lg xl:text-xl text-[#717171] mt-[25px] text-center xl:px-10'>
							Наше приложение находится в стадии активной разработки, и мы прилагаем все усилия, чтобы предоставить вам и вашим пушистым (и не только) друзьям лучший опыт общения
						</p>
						<div className='flex mt-9'>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[55px] xl:text-[70px]'>133</span>
								<span className='font-Rubik Variable font-light text-base'>дни</span>
							</div>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[55px] xl:text-[70px]'>01</span>
								<span className='font-Rubik Variable font-light text-base'>часы</span>
							</div>
							<div className='flex flex-col justify-center items-center border-r border-[black]/20 px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[55px] xl:text-[70px]'>59</span>
								<span className='font-Rubik Variable font-light text-base'>минуты</span>
							</div>
							<div className='flex flex-col justify-center items-center px-10'>
								<span className='font-Rubik Variable font-semibold italic text-[55px] xl:text-[70px]'>23</span>
								<span className='font-Rubik Variable font-light text-base'>секунды</span>
							</div>
						</div>
						<ButtonBread
						name='Предварительная регистрация'
						className='mt-10'
						onClick={openModal} />
					</div>
				</div>
			</div>
			<PreRegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
		</section>
	)
}
