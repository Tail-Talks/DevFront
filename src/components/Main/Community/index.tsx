import React from 'react'
import ButtonBread from '../../UI/ButtonBread'

import telegramIcon from '../../../assets/icons/telegram.svg'
import notesIcon from '../../../assets/icons/notes.svg'
import communityCat from '../../../assets/pictures/main/community-cat.jpg'
import communityDog from '../../../assets/pictures/main/community-dog.jpg'

export default function Community() {
	return (
		<section id='community' className='mt-[140px]'>
			<div className='container mx-auto'>
				<div className='flex justify-between text-center gap-x-12'>
					<div className='2xl:grow flex flex-col justify-between w-1/2 min-w-[448px] xl:min-w-[590px] relative'>
						<div className='xl:pr-16 3xl:w-[790px]'>
							<h3 className='font-sans font-semibold dark:text-white text-2xl xl:text-[26px] 3xl:text-4xl text-black-50 mt-[72px]'>
								Станьте частью уникального сообщества любителей животных Tail Talks!
							</h3>
							<p className='dark:text-[#F3F3F3F2] font-light font-Rubik Variable text-lg xl:text-xl 3xl:text-3xl leading-[26px] pt-4 3xl:mt-10 text-[#4D4D4D]'>
								Не упусти шанс получить премиум-доступ к новой социальной сети для домашних животных.
							</p>
						</div>
						<img src={telegramIcon} alt="" className='absolute w-[52px] h-[52px] xl:w-[99px] xl:h-[99px] left-[-25px] bottom-[235px] xl:left-[-36px] xl:bottom-[280px] 3xl:bottom-[430px]' />
						<img src={communityCat} alt="" className='rounded-2xl w-[448px] h-[270px] xl:w-[590px] xl:h-[350px] 3xl:w-[790px] 3xl:h-[500px] 3xl:mt-10' />
					</div>
					<div className='2xl:grow flex flex-col justify-between items-center w-1/2 min-w-[448px] xl:min-w-[590px] relative'>
						<img src={communityDog} alt="" className='rounded-2xl w-[448px] h-[270px] xl:w-[590px] xl:h-[350px] 3xl:w-[790px] 3xl:h-[500px] 3xl:mb-10' />
						<img src={notesIcon} alt="" className='absolute w-[52px] h-[52px] xl:w-[99px] xl:h-[99px] right-[-10px] 2xl:right-[30px] 3xl:right-[180px] 4xl:right-[340px] top-[-20px] xl:top-[-36px]' />
						<div className='3xl:w-[790px]'>
							<h3 className='font-sans font-semibold dark:text-white text-2xl xl:text-[26px] 3xl:text-4xl text-black-50 mt-20'>
								Сообщество Tail Talks в Telegram
							</h3>
							<p className=' dark:text-[#F3F3F3F2] font-light font-Rubik Variable text-lg xl:text-xl 3xl:text-3xl leading-[26px] pt-4 text-[#4D4D4D]'>
								Подключайтесь к нашему Telegram-сообществу, чтобы вместе создавать лучшее место для общения любителей животных. Ваши идеи помогут нам расти и развиваться!
							</p>
							<a href="https://t.me/tailtalkstg" target='_blank'>
								<ButtonBread
								name='Сообщество Telegram'
								className='mt-10' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
