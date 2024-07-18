import React from 'react'
import ButtonBread from '../../UI/ButtonBread'
import NFTDog from '../../../assets/images/NFT/NFT-dog.jpg'


export default function NFT() {
	return (
		<section className='mt-[140px]'>
			<div className='container mx-auto'>
				<div className='flex justify-between'>
					<div className='w-[50%]'>
						<p className='font-Rubic variable font-semibold text-lg bg-clip-text text-transparent bg-bread'>NFT</p>
						<div className='max-w-[525px]'>
							<h2 className='font-sans font-medium text-[30px] xl:text-[34px] dark:text-white text-black-80'>
								Ваш питомец заслуживает быть в блокчейне!
							</h2>
							<p className='font-Rubic variable font-light text-[18px] xl:text-xl dark:text-white text-[#4D4D4D] mt-[20px]'>
								Зафиксируйте самые яркие моменты жизни вашего питомца в цифровой эпохе, превратив его фото в NFT:
							</p>
						</div>
						<div className='mt-[30px] xl:mt-10 max-w-[605px]'>
							<p className='font-Rubic variable font-light text-[18px] xl:text-xl dark:text-white text-[#4D4D4D] mt-5 xl:mt-[30px]'>
								<span className='bg-clip-text text-transparent bg-bread text-xl xl:text-2xl font-medium'>Сохранность: </span>
								Ваши фото будут храниться безопасно всегда
							</p>
							<p className='font-Rubic variable font-light text-[18px] xl:text-xl dark:text-white text-[#4D4D4D] mt-5 xl:mt-[30px]'>
								<span className='bg-clip-text text-transparent bg-bread text-xl xl:text-2xl font-medium'>Уникальность: </span>
								Каждый NFT является подтверждением оригинальности и уникальности вашего питомца
							</p>
							<p className='font-Rubic variable font-light text-[18px] xl:text-xl dark:text-white text-[#4D4D4D] mt-5 xl:mt-[30px]'>
								<span className='bg-clip-text text-transparent bg-bread text-xl xl:text-2xl font-medium'>Эксклюзивность: </span>
								Выделяйтесь среди других, имея NFT, который никто не сможет скопировать
							</p>
							<p className='font-Rubic variable font-light text-[18px] xl:text-xl dark:text-white text-[#4D4D4D] mt-5 xl:mt-[30px]'>
								<span className='bg-clip-text text-transparent bg-bread text-xl xl:text-2xl font-medium'>Поддержка сообщества: </span>
								Станьте частью растущего сообщества домашних животных и NFT
							</p>
						</div>
						<a href="https://t.me/tailtalkstg" target='_blank'>
							<ButtonBread name='Сообщество Telegram' />
						</a>
					</div>
					<img src={NFTDog} alt="" className='w-[368px] h-[524px] xl:w-[485px] xl:h-[659px] rounded-xl' />
				</div>
			</div>
		</section>
	)
}
