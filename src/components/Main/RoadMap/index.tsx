import React from 'react'
import { useTheme } from '../../../context/ThemeContext'

import roadmapStarBread from '../../../assets/icons/main/roadmap-star-bread.svg'
import roadmapStarBreadSm from '../../../assets/icons/main/roadmap-star-bread-sm.svg'
import roadmapStarGrayMd from '../../../assets/icons/main/roadmap-star-gray-md.svg'
import roadmapStarGraySm from '../../../assets/icons/main/roadmap-star-gray-sm.svg'
import roadmapStarWhiteSm from '../../../assets/icons/main/roadmap-star-white-sm.svg'
import roadmapSunFull from '../../../assets/icons/main/roadmap-sun-full.svg'
import roadmapSunThin from '../../../assets/icons/main/roadmap-sun-thin.svg'
import roadmapPawDark from '../../../assets/icons/main/roadmap-paw-dark.svg'
import roadmapPawLight from '../../../assets/icons/main/roadmap-paw-light.svg'
import roadmapEllipsesDark from '../../../assets/icons/main/roadmap-ellipses-dark.svg'
import roadmapEllipsesLight from '../../../assets/icons/main/roadmap-ellipses-light.svg'


export default function RoadMap() {
	const { theme } = useTheme()
	return (
		<section id='roadmap' className={theme ? 'mt-[140px] xl:bg-roadmap-stars relative' : 'mt-[140px] relative'}>
			<div className='container mx-auto'>
				<img className='absolute left-[100px] top-[-15px]' src={theme ? roadmapStarGraySm : roadmapStarBreadSm} alt="" />
				<img className='absolute left-[150px] top-[0px]' src={roadmapStarBread} alt="" />
				{theme && <img className='absolute left-[870px] xl:left-[1100px] top-[-20px]' src={roadmapStarWhiteSm} alt="" />}
				{theme && <img className='absolute left-[935px] xl:left-[1265px] top-[55px]' src={roadmapStarGrayMd} alt="" />}
				{!theme && <img className='absolute left-[905px] xl:left-[1050px] top-[-40px] w-[78px] h-[78px]' src={roadmapSunFull} alt="" />}
				{!theme && <img className='absolute left-[1035px] xl:left-[1200px] top-[30px] w-[95px] h-[95px]' src={roadmapSunFull} alt="" />}
				{!theme && <img className='absolute left-[1000px] xl:left-[1170px] top-[-80px] w-[90px] h-[90px]' src={roadmapSunThin} alt="" />}
				<div className='container mx-auto px-4'>
					<h3 className='font-sans font-medium dark:text-white text-[34px] text-center'>
						Дорожная карта Tail Talks 2024!
					</h3>
					<p className='font-Rubik Variable font-light text-center dark:text-[#F3F3F3] text-[20px] mt-[30px]'>
						Отслеживайте развитие нашей социальной сети для животных
					</p>
				</div>
				<div className={theme ?
					'overflow-x-auto scroll-container scroll-container-dark w-[90%] mx-auto'
					: 'overflow-x-auto scroll-container scroll-container-light-bread w-[90%] mx-auto'}>
					<div className='w-[1884px] h-[700px] mt-[50px] mx-auto relative pl-7'>
						<img className='absolute left-[0px] bottom-[100px]' src={theme ? roadmapPawDark : roadmapPawLight} alt="" />
						<img className='absolute left-[720px] bottom-[510px] z-10' src={theme ? roadmapEllipsesDark : roadmapEllipsesLight} alt="" />
						{/* progress line */}
						<div className='relative w-[1320px] h-[3px] ml-[150px] mt-[13px] bg-gradient-to-r from-[#FFAE4E] from-10% dark:via-white dark:via-30% via-[#A0A0A0] via-30% dark:to-white to-[#A0A0A0]'>
							<div className='absolute left-0 top-0 w-[26px] h-[26px] rounded-full bg-bread translate-x-[-50%] translate-y-[-50%]'></div>
							<div className='absolute left-[33%] top-0 w-[26px] h-[26px] rounded-full dark:bg-white bg-[#A0A0A0] translate-x-[-50%] translate-y-[-50%]'></div>
							<div className='absolute left-[67%] top-0 w-[26px] h-[26px] rounded-full dark:bg-white bg-[#A0A0A0] translate-x-[-50%] translate-y-[-50%]'></div>
							<div className='absolute left-[100%] top-0 w-[26px] h-[26px] rounded-full dark:bg-white bg-[#A0A0A0] translate-x-[-50%] translate-y-[-50%]'></div>
						</div>
						{/* end progress line */}
						<div className='flex items-start h-[609px]'>
							<div className='flex flex-col justify-center items-center mr-[90px]'>
								<p className='font-sans font-semibold text-[20px] dark:text-white text-center mt-[33px]'>
									Первый квартал
								</p>
								<div className='w-[346px] border-2 dark:border-white border-[#000000] rounded-2xl mt-[40px] dark:text-white flex flex-col justify-center items-center'>
									<div className='m-10'>
										<ul className='font-Rubik Variable font-medium text-lg'>
											Исследование рынка
											<li className='font-light text-base list-disc mt-[15px]'>
												анализ конкурентов
											</li>
											<li className='font-light text-base list-disc'>
												определение целевой аудитории
											</li>
											<li className='font-light text-base list-disc'>
												изучение потребностей рынка
											</li>
										</ul>
										<ul className='font-Rubik Variable font-medium text-lg mt-[35px]'>
											Разработка концепции
											<li className='font-light text-base list-disc mt-[15px]'>
												определение функциональности
											</li>
											<li className='font-light text-base list-disc'>
												разработка бизнес-модели
											</li>
											<li className='font-light text-base list-disc'>
												создание прототипа
											</li>
										</ul>
										<ul className='font-Rubik Variable font-medium text-lg mt-[35px]'>
											Формирование команды
											<li className='font-light text-base list-disc mt-[15px] text-wrap'>
												поиск и привлечение опытных специалистов
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='flex flex-col justify-center items-center mr-[90px]'>
								<p className='font-sans font-semibold text-[20px] dark:text-white text-center mt-[33px]'>
									Второй квартал
								</p>
								<div className='w-[346px] border-2 dark:border-white border-[#000000] rounded-2xl mt-[40px] dark:text-white flex flex-col justify-center items-center'>
									<div className='m-10'>
										<ul className='font-Rubik Variable font-medium text-lg'>
											Разработка MVP
											<li className='font-light text-base list-disc mt-[15px]'>
												запуск минимально жизнеспособного продукта
											</li>
											<li className='font-light text-base list-disc'>
												тестирование
											</li>
											<li className='font-light text-base list-disc'>
												доработка функциональности
											</li>
											<li className='font-light text-base list-disc'>
												получение обратной связи от пользователей
											</li>
										</ul>
										<ul className='font-Rubik Variable font-medium text-lg mt-[35px]'>
											Привлечение инвестиций
											<li className='font-light text-base list-disc mt-[15px]'>
												подготовка инвестиционного предложения
											</li>
											<li className='font-light text-base list-disc'>
												поиск инвесторов
											</li>
										</ul>
										<ul className='font-Rubik Variable font-medium text-lg mt-[35px]'>
											Маркетинг
											<li className='font-light text-base list-disc mt-[15px] text-wrap'>
												запуск рекламной кампании
											</li>
											<li className='font-light text-base list-disc text-wrap'>
												формирование сообщества
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='flex flex-col justify-center items-center mr-[90px]'>
								<p className='font-sans font-semibold text-[20px] dark:text-white text-center mt-[33px]'>
									Третий квартал
								</p>
								<div className='w-[346px] border-2 dark:border-white border-[#000000] rounded-2xl mt-[40px] dark:text-white flex flex-col justify-center items-center'>
									<div className='m-10'>
										<ul className='font-Rubik Variable font-medium text-lg'>
											Развитие платформы
											<li className='font-light text-base list-disc mt-[15px]'>
												добавление новых функций
											</li>
											<li className='font-light text-base list-disc'>
												расширение возможностей
											</li>
											<li className='font-light text-base list-disc'>
												улучшение пользовательского опыта
											</li>
										</ul>
										<ul className='font-Rubik Variable font-medium text-lg mt-[35px]'>
											Привлечение пользователей
											<li className='font-light text-base list-disc mt-[15px]'>
												проведение конкурсов и акций
											</li>
											<li className='font-light text-base list-disc'>
												сотрудничество с инфлюенсерами
											</li>
										</ul>
										<ul className='font-Rubik Variable font-medium text-lg mt-[35px]'>
											Партнерство
											<li className='font-light text-base list-disc mt-[15px] text-wrap'>
												с другими компаниями в сфере Web3
											</li>
											<li className='font-light text-base list-disc text-wrap'>
												с вет клиниками, зоомагазинами
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='flex flex-col justify-center items-center mr-[90px]'>
								<p className='font-sans font-semibold text-[20px] dark:text-white text-center mt-[33px]'>
									Четвертый квартал
								</p>
								<div className='w-[346px] border-2 dark:border-white border-[#000000] rounded-2xl mt-[40px] dark:text-white flex flex-col justify-center items-center'>
									<div className='m-10'>
										<ul className='font-Rubik Variable font-medium text-lg text-center'>
											Выход на новые рынки
											<li className='font-light text-base text-left list-disc mt-[15px]'>
												адаптация платформы для разных стран
											</li>
											<li className='font-light text-base text-left list-disc'>
												перевод интерфейса на другие языки
											</li>
										</ul>
										<ul className='font-Rubik Variable font-medium text-lg text-center mt-[35px]'>
											Масштабирование
											<li className='font-light text-base text-left list-disc mt-[15px]'>
												увеличение числа пользователей
											</li>
											<li className='font-light text-base text-left list-disc'>
												расширение команды
											</li>
											<li className='font-light text-base text-left list-disc'>
												привлечение дополнительных инвестиций
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
