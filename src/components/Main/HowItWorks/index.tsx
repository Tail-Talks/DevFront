import React, { useRef, useEffect } from 'react'
import CardSlider from '../../Cards/CardSlider'
import { handleThumbDrag, handleMouseDown, handleScroll, initialMouseX, initialThumbX, isDragging } from '../../../helpers/scroll'

export default function HowItWorks() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const thumb = thumbRef.current
    if (!thumb) return

    const handleMouseDownWrapper = (e: MouseEvent) => handleMouseDown(e, thumbRef, (event) => handleThumbDrag(event, sliderRef, thumbRef, trackRef))

    thumb.addEventListener('mousedown', handleMouseDownWrapper)
    return () => {
      thumb.removeEventListener('mousedown', handleMouseDownWrapper)
    }
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleScrollWrapper = () => handleScroll(sliderRef, thumbRef, trackRef)

    slider.addEventListener('scroll', handleScrollWrapper)
    return () => {
      slider.removeEventListener('scroll', handleScrollWrapper)
    }
  }, [])

  return (
    <section id='how_it_works' className='w-full mt-36 select-none scroll-mt-[6rem]'>
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
    </section>
  )
}
