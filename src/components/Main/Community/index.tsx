import React from 'react'
import ButtonBread from '../../UI/ButtonBread'

import telegramIcon from '../../../assets/icons/telegram.svg'
import notesIcon from '../../../assets/icons/notes.svg'
import communityCat from '../../../assets/pictures/main/community-cat.jpg'
import communityDog from '../../../assets/pictures/main/community-dog.jpg'

export default function Community() {
	return (
		<section id='community' className='mt-[140px] scroll-mt-[6rem]'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row justify-between text-center gap-x-12'>
					<div className='2xl:grow flex flex-col-reverse lg:flex-col justify-between items-center lg:items-start w-full lg:w-1/2 lg:min-w-[448px] xl:min-w-[590px] relative'>
						<div className='xl:pr-16 3xl:w-[790px]'>
							<h3 className='font-sans font-semibold dark:text-white text-xl lg:text-2xl xl:text-[26px] 3xl:text-4xl text-black-50 mt-10 lg:mt-[72px]'>
								Станьте частью уникального сообщества любителей животных Tail Talks!
							</h3>
							<p className='dark:text-[#F3F3F3F2] font-light font-Rubik Variable text-lg xl:text-xl 3xl:text-3xl leading-[26px] pt-4 3xl:mt-10 text-[#4D4D4D]'>
								Не упусти шанс получить премиум-доступ к новой социальной сети для домашних животных.
							</p>
						</div>
						<div className='relative'>
							<img src={communityCat} alt="" className='rounded-2xl w-[448px] h-[270px] xl:w-[590px] xl:h-[350px] 3xl:w-[790px] 3xl:h-[500px] 3xl:mt-10' />
							<img src={telegramIcon} alt="" className='absolute w-[52px] h-[52px] xl:w-[99px] xl:h-[99px] top-[-1.5rem] left-[-1.5rem]' />
						</div>
					</div>
					<div className='mt-10 lg:mt-0 2xl:grow flex flex-col justify-between items-center w-full lg:w-1/2 lg:min-w-[448px] xl:min-w-[590px] relative'>
						<div className='relative'>
							<img src={communityDog} alt="" className='rounded-2xl w-[448px] h-[270px] xl:w-[590px] xl:h-[350px] 3xl:w-[790px] 3xl:h-[500px] 3xl:mb-10' />
							<img src={notesIcon} alt="" className='absolute w-[52px] h-[52px] xl:w-[99px] xl:h-[99px] top-[-1.5rem] right-[-1.5rem]' />
						</div>
						<div className='3xl:w-[790px]'>
							<h3 className='font-sans font-semibold dark:text-white text-xl lg:text-2xl xl:text-[26px] 3xl:text-4xl text-black-50 mt-10 lg:mt-20'>
								Сообщество Tail Talks в Telegram
							</h3>
							<p className=' dark:text-[#F3F3F3F2] font-light font-Rubik Variable text-lg xl:text-xl 3xl:text-3xl leading-[26px] pt-4 text-[#4D4D4D]'>
								Подключайтесь к нашему Telegram-сообществу, чтобы вместе создавать лучшее место для общения любителей животных. Ваши идеи помогут нам расти и развиваться!
							</p>
							<a href="https://t.me/tailtalkstg" target='_blank'>
								<ButtonBread
								name='Сообщество Telegram'
								className='mt-10 h-[47px] lg:h-[61px] xl:h-16 text-base lg:text-lg' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
