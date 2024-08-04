import React, { useState, useEffect } from 'react'
import ButtonBread from '../../UI/ButtonBread'
import PreRegistrationModal from '../../modals/PreRegistrationModal'

export default function Counter() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const getCounterStyles = () => {
		if (screenWidth < 1024) {
			return 'flex flex-col justify-center items-center border-r gradient-border px-6 text-black-80 dark:text-[#FFFFFF]'
		} else {
			return 'flex flex-col justify-center items-center border-r lg:border-[black]/20 px-10 text-[#FFFFFF] lg:text-black-80'
		}
	}

	const getCounterStylesLast = () => {
		if (screenWidth < 1024) {
			return 'flex flex-col justify-center items-center sm:border-r gradient-border px-6 text-black-80 dark:text-[#FFFFFF]'
		} else {
			return 'flex flex-col justify-center items-center border-r lg:border-[black]/20 px-10 text-[#FFFFFF] lg:text-black-80'
		}
	}

	return (
		<section id='counter' className='w-full lg:bg-[#F3F3F3] dark:bg-transparent bg-roadmap-stars lg:bg-none'>
			<div className='container mx-auto'>
				<div className='lg:bg-[#F3F3F3] bg-left-65 lg:bg-counterDogLg xl:bg-counterDog bg-contain xl:bg-left bg-no-repeat mt-[100px] xl:mt-[140px] flex justify-end 3xl:justify-center rounded-3xl'>
					<div className='w-full lg:w-[670px] flex flex-col items-center mt-[70px] xl:mt-[134px] mb-[70px] lg:mb-[136px] mr-0 lg:mr-[10px] xl:mr-[110px]'>
						<h3 className='font-sans text-[#000000] dark:text-[#FFFFFFCC] lg:dark:text-[#000000] text-2xl xl:text-[34px] text-center leading-[36px] xl:leading-[50px] font-medium px-4 lg:px-0'>
							Отсчет времени до запуска нашей социальной сети
							<span className='bg-clip-text text-transparent bg-bread'> Tail Talks </span> начался!
						</h3>
						<p className='font-Rubik Variable font-light text-lg xl:text-xl text-black-80 dark:text-[#FFFFFF] lg:dark:text-[#717171] lg:text-[#717171] mt-[25px] text-center px-4 xl:px-10'>
							Наше приложение находится в стадии активной разработки, и мы прилагаем все усилия, чтобы предоставить вам и вашим пушистым (и не только) друзьям лучший опыт общения
						</p>
						<div className='flex mt-9 space-x-4'>
							<div className={getCounterStyles()}>
								<span className='font-Rubik Variable font-semibold italic text-[50px] lg:text-[55px] xl:text-[70px]'>133</span>
								<span className='font-Rubik Variable font-light text-base'>дни</span>
							</div>
							<div className={getCounterStyles()}>
								<span className='font-Rubik Variable font-semibold italic text-[50px] lg:text-[55px] xl:text-[70px]'>01</span>
								<span className='font-Rubik Variable font-light text-base'>часы</span>
							</div>
							<div className={getCounterStylesLast()}>
								<span className='font-Rubik Variable font-semibold italic text-[50px] lg:text-[55px] xl:text-[70px]'>59</span>
								<span className='font-Rubik Variable font-light text-base'>минуты</span>
							</div>
							<div className='hidden sm:flex flex-col justify-center items-center px-6 lg:px-10 text-black-80 dark:text-[#FFFFFF] lg:dark:text-black-80 lg:text-black-80'>
								<span className='font-Rubik Variable font-semibold italic text-[50px] lg:text-[55px] xl:text-[70px]'>23</span>
								<span className='font-Rubik Variable font-light text-base'>секунды</span>
							</div>
						</div>
						<ButtonBread
							name='Предварительная регистрация'
							className='mt-10 h-[47px] lg:h-[61px] xl:h-16 text-base lg:text-lg'
							onClick={openModal} />
					</div>
				</div>
			</div>
			<PreRegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
		</section>
	)
}
