import React, { useState, useEffect } from 'react'

interface GoalsNameProps {
    name: string,
    showGoal: () => void,
    hideGoal: () => void,
    isSelected: boolean
}

export default function GoalsName({ name, showGoal, hideGoal, isSelected }: GoalsNameProps) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleClick = () => {
        if (isSmallScreen) {
            showGoal()
        }
    }

    return (
        <div className='mt-[10px] lg:mt-[20px]'>
            <div className={`${isSmallScreen ? 'p-[1px] rounded-xl mr-auto bg-gradient-to-tr from-[#FF4C8C] to-[#FFAE4E]' : ''}`}>
                <div
                    className={`px-2 py-2 lg:p-0 font-Rubik font-light dark:text-white text-black-80 text-xl xl:text-2xl cursor-pointer bg-white dark:bg-[#191919] lg:bg-transparent rounded-xl
                        ${isSmallScreen && isSelected ? 'bg-bread text-black-80 dark:text-black-80' : 'hover:bg-bread lg:hover:bg-transparent lg:hover:text-gradient'}`}
                    onMouseEnter={!isSmallScreen ? showGoal : undefined}
                    onMouseLeave={!isSmallScreen ? hideGoal : undefined}
                    onClick={isSmallScreen ? handleClick : undefined}
                >
                    {name}
                </div>
            </div>
        </div>
    )
}
