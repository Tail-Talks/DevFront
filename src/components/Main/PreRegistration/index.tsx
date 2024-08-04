import React, { useState } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import ButtonBread from '../../UI/ButtonBread'
import PreRegistrationModal from '../../modals/PreRegistrationModal'

//SVG
import PRstar from '../../../assets/svg/preRegistration/PRstar.svg'
import PRstarBig from '../../../assets/svg/preRegistration/PRstarBig.svg'
import PRstarColor from '../../../assets/svg/preRegistration/PRstarColor.svg'
import PRstarHuge from '../../../assets/svg/preRegistration/PRstarHuge.svg'
import PRstarNight from '../../../assets/svg/preRegistration/PRstarNight.svg'
import PRstarU from '../../../assets/svg/preRegistration/PRstarU.svg'
import sunPlain from '../../../assets/svg/preRegistration/sunPlain.svg'
import sun from '../../../assets/svg/preRegistration/sun.svg'

export default function PreRegistration() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { theme } = useTheme()

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<section id='preRegistration' className='mt-[350px] sm:mt-[100px] lg:mt-[140px] h-[627px] dark:lg:bg-roadmap-stars'>
			<div className="container relative mx-auto h-full flex items-center justify-center">
				<div className='flex flex-col justify-center items-center text-center max-w-[1085px]'>
					<h2 className='font-sans px-8 xl:py-0 font-medium text-[24px] xl:text-[34px] dark:text-white text-black-80'>
						Присоединяйтесь к уникальному сообществу любителей животных TailTalks!
					</h2>
					<p className='font-Rubic variable font-light text-[18px] xl:text-xl dark:text-[#F3F3F3] text-[#4D4D4D] mt-[20px]'>
						Не упусти шанс получить премиум-доступ к новой социальной сети для домашних животных
					</p>
					<ButtonBread
						type='button'
						className='mt-10 w-[345px] h-[49px] lg:w-[463px] lg:h-[70px]'
						name='Предварительная регистрация'
						onClick={openModal} />
				</div>

				{/* stars */}
				<img src={PRstar} alt='star' className='absolute hidden lg:block top-0 left-[30px] xl:top-0 xl:left-[100px]' />
				<img src={PRstarBig} alt='star' className='absolute hidden lg:block bottom-0 left-[200px] xl:bottom-[10%] xl:left-[200px]' />
				<img src={PRstarHuge} alt='star' className='absolute hidden lg:block right-0 top-[15%] xl:right-[100px] xl:top-[50%]' />
				<img src={PRstarColor} alt='star' className='absolute hidden lg:block left-0 top-[60%] xl:left-[100px]' />
				<img src={PRstarU} alt='star' className='absolute hidden lg:block top-[10%] left-[15%] xl:top-[15%] xl:left-[250px]' />
				{theme
					?
					<img src={PRstarNight} alt='star' className='absolute hidden lg:block top-[10%] right-[15%] xl:top-[10%] xl:right-[250px]' />
					:
					<>
						<img src={sunPlain} alt='sun' className='absolute hidden lg:block top-0 right-[40%] xl:top-0 xl:right-[43%]' />
						<img src={sun} alt='sun' className='absolute hidden lg:block bottom-0 right-0 xl:bottom-[10%] xl:right-[20%]' />
					</>}
			</div>

			<PreRegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
		</section>
	)
}
