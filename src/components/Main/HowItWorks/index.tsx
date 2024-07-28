import React, { useRef, useEffect } from 'react'
import CardSlider from '../../Cards/CardSlider'

export default function HowItWorks() {
	const sliderRef = useRef<HTMLDivElement>(null)
	const thumbRef = useRef<HTMLDivElement>(null)
	const trackRef = useRef<HTMLDivElement>(null)
	const isDragging = useRef(false)
	const initialMouseX = useRef(0)
	const initialThumbX = useRef(0)

	// Функция для обработки перетаскивания ползунка
	const handleThumbDrag = (e: MouseEvent) => {
		if (!isDragging.current) return

		const slider = sliderRef.current
		const thumb = thumbRef.current
		const track = trackRef.current
		if (!slider || !thumb || !track) return

		// Получение размеров трека
		const rect = track.getBoundingClientRect()
		const maxScrollLeft = slider.scrollWidth - slider.clientWidth
		const maxThumbLeft = track.clientWidth - thumb.clientWidth

		// Вычисление нового положения ползунка
		const deltaX = e.clientX - initialMouseX.current
		const newLeft = Math.min(Math.max(initialThumbX.current + deltaX, 0), maxThumbLeft)

		// Обновление стилей ползунка и прокрутка слайдера
		thumb.style.left = `${newLeft}px`
		const newScrollLeft = (newLeft / maxThumbLeft) * maxScrollLeft
		slider.scrollLeft = newScrollLeft
	}

	useEffect(() => {
		const thumb = thumbRef.current
		if (!thumb) return

		// Функция для обработки события mousedown на ползунке
		const handleMouseDown = (e: MouseEvent) => {
			isDragging.current = true
			initialMouseX.current = e.clientX
			initialThumbX.current = thumb.offsetLeft

			// Добавление обработчика для события mousemove
			document.addEventListener('mousemove', handleThumbDrag)
			// Удаление обработчика для события mousemove при mouseup
			document.addEventListener('mouseup', () => {
				isDragging.current = false
				document.removeEventListener('mousemove', handleThumbDrag)
			}, { once: true })
		}

		// Добавление обработчика для события mousedown
		thumb.addEventListener('mousedown', handleMouseDown)
		return () => {
			// Удаление обработчика для события mousedown
			thumb.removeEventListener('mousedown', handleMouseDown)
		}
	}, [])

	// Функция для обработки прокрутки слайдера
	const handleScroll = () => {
		const slider = sliderRef.current
		const thumb = thumbRef.current
		const track = trackRef.current
		if (!slider || !thumb || !track) return

		const maxScrollLeft = slider.scrollWidth - slider.clientWidth
		const maxThumbLeft = track.clientWidth - thumb.clientWidth
		const scrollLeft = slider.scrollLeft
		const thumbLeft = (scrollLeft / maxScrollLeft) * maxThumbLeft
		// Обновление положения ползунка в зависимости от прокрутки слайдера
		thumb.style.left = `${thumbLeft}px`
	}

	useEffect(() => {
		const slider = sliderRef.current
		if (!slider) return

		// Добавление обработчика для события scroll
		slider.addEventListener('scroll', handleScroll)
		return () => {
			// Удаление обработчика для события scroll
			slider.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div id='how_it_works' className='w-full mt-36 select-none'>
			<div className='container mx-auto flex-col'>
				<h2 className='font-sans text-black dark:text-white text-5xl font-medium mb-8'>
					Как работает Tail Talks?
				</h2>
				<div className='relative overflow-hidden rounded-[2rem]'>
					<div ref={sliderRef} className='flex overflow-x-auto no-scrollbar'>
						<CardSlider bg={'bg-step-1'} title={'Шаг 1'} text={'Загрузи фотографии своего питомца'} />
						<CardSlider bg={'bg-step-2'} title={'Шаг 2'} text={'Делись публикациями со своими друзьями и собирай лайки'} />
						<CardSlider bg={'bg-step-3'} title={'Шаг 3'} text={'Алгоритмы ИИ позволят легко преобразить фотографию питомца'} />
						<CardSlider bg={'bg-step-4'} title={'Шаг 4'} text={'Алгоритмы ИИ продвинут фото вашего питомца'} />
						<CardSlider bg={'bg-step-5'} title={'Шаг 5'} text={'Участвуй в фотоконкурсах и забирай награды'} />
					</div>
				</div>
				{/* Ползунок */}
				<div className='relative mt-5'>
					<div ref={trackRef} className='w-[700px] mx-auto h-1 bg-[#4D4D4D] rounded relative'>
						<div
							ref={thumbRef}
							className='h-2 bg-black-80 dark:bg-white rounded cursor-pointer w-[200px] absolute left-0 top-[-2px]'
						></div>
					</div>
				</div>
				{/* Конец ползунка */}
			</div>
		</div>
	)
}
