import React, {useRef, useEffect} from 'react'
import { roadmapData } from '../../../data/roadmapData'
import RoadmapCard from '../../Cards/CardRoadmap'
import { useTheme } from '../../../context/ThemeContext'
import { handleThumbDrag, handleMouseDown, handleScroll, initialMouseX, initialThumbX, isDragging } from '../../../helpers/scroll'

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
    <section
      id='roadmap'
      className={theme ? 'mt-[140px] bg-roadmap-stars relative scroll-mt-[6.5rem]' : 'mt-[140px] relative scroll-mt-[6rem]'}
    >
      <div className='container mx-auto'>
        <img
          className='hidden sm:block absolute left-[100px] top-[-15px]'
          src={theme ? roadmapStarGraySm : roadmapStarBreadSm}
          alt='art'
        />
        <img className='hidden sm:block absolute left-[80px] lg:left-[150px] top-[100px] lg:top-[0px]' src={roadmapStarBread} alt='' />
        {theme && (
          <img
            className='hidden sm:block absolute right-[40px] lg:left-[870px] xl:left-[1100px] top-[-20px]'
            src={roadmapStarWhiteSm}
            alt='art'
          />
        )}
        {theme && (
          <img
            className='hidden sm:block absolute right-[0px] lg:left-[950px] xl:left-[1265px] top-[55px]'
            src={roadmapStarGrayMd}
            alt='art'
          />
        )}
        {!theme && (
          <img
            className='hidden sm:block absolute right-[50px] xl:left-[1050px] top-[-40px] w-[78px] h-[78px]'
            src={roadmapSunFull}
            alt='art'
          />
        )}
        {!theme && (
          <img
            className='absolute hidden lg:block right-0 xl:left-[1200px] top-[30px] w-[95px] h-[95px]'
            src={roadmapSunFull}
            alt='art'
          />
        )}
        {!theme && (
          <img
            className='hidden sm:block absolute right-[200px] xl:left-[1170px] top-[-80px] w-[90px] h-[90px]'
            src={roadmapSunThin}
            alt='art'
          />
        )}
        <div className='container mx-auto px-4'>
          <h3 className='font-sans font-medium dark:text-white text-2xl lg:text-[34px] text-center'>
            Дорожная карта Tail Talks 2024!
          </h3>
          <p className='font-Rubik Variable font-light text-center dark:text-[#F3F3F3] text-lg lg:text-[20px] mt-[30px]'>
            Отслеживайте развитие нашей социальной сети для животных
          </p>
        </div>
        <div
          className={
            theme
              ? 'overflow-x-auto no-scrollbar w-[90%] mx-auto'
              : 'overflow-x-auto no-scrollbar w-[90%] mx-auto'
          }
          ref={sliderRef}
        >
          <div className='w-full sm:w-[1884px] h-[700px] mt-[50px] mx-auto relative sm:pl-7'>
            <img
              className='absolute left-[0px] bottom-[59px] sm:bottom-[110px] lg:bottom-[75px]'
              src={theme ? roadmapPawDark : roadmapPawLight}
              alt='art'
            />
            <img
              className='absolute left-[620px] sm:left-[720px] bottom-[510px] z-10'
              src={theme ? roadmapEllipsesDark : roadmapEllipsesLight}
              alt='art'
            />
            {/* progress line */}
            <div className='relative w-[1320px] h-[3px] ml-[150px] mt-[13px] bg-gradient-to-r from-[#FFAE4E] from-10% dark:via-white dark:via-30% via-[#A0A0A0] via-30% dark:to-white to-[#A0A0A0]'>
              <div className='absolute left-0 top-0 w-[26px] h-[26px] rounded-full bg-bread translate-x-[-50%] translate-y-[-50%]'></div>
              <div className='absolute left-[33%] top-0 w-[26px] h-[26px] rounded-full dark:bg-white bg-[#A0A0A0] translate-x-[-50%] translate-y-[-50%]'></div>
              <div className='absolute left-[67%] top-0 w-[26px] h-[26px] rounded-full dark:bg-white bg-[#A0A0A0] translate-x-[-50%] translate-y-[-50%]'></div>
              <div className='absolute left-[100%] top-0 w-[26px] h-[26px] rounded-full dark:bg-white bg-[#A0A0A0] translate-x-[-50%] translate-y-[-50%]'></div>
            </div>
            {/* end progress line */}
            <div className='flex items-start sm:h-[609px]'>
              {roadmapData.map((data, index) => (
                <RoadmapCard key={index} quarter={data.quarter} tasks={data.tasks} />
              ))}
            </div>
          </div>
        </div>
        {/* Ползунок */}
        <div className='relative select-none mt-4 sm:mt-0'>
          <div ref={trackRef} className='w-[320px] md:w-[550px] lg:w-[700px] mx-auto h-1 bg-gray-300 rounded relative'>
            <div
              ref={thumbRef}
              className='h-2 bg-bread rounded cursor-pointer w-[100px] md:w-[200px] absolute left-0 top-[-2px]'
            ></div>
          </div>
        </div>
        {/* Конец ползунка */}
      </div>
    </section>
  )
}
