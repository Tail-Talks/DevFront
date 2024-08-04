import React, { useState, useEffect } from 'react'
import { preloadImage } from '../../../helpers/imagePreloader'
import GoalsName from './GoalsName'
import CardGoal from '../../Cards/CardGoal'
import { goalsName, goalsBody, goalsPictures } from '../../../data/goals'

export default function Goals() {
    const [show, setShow] = useState(goalsName[0].id)

    useEffect(() => {
        const preload = async () => {
            const promises = goalsPictures.map((src) => preloadImage(src))
            await Promise.all(promises)
        }
        preload()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setShow(goalsName[0].id)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section className='mt-[140px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <h3 className='font-Rubik variable font-semibold text-lg bg-clip-text text-transparent bg-bread'>
                        Общие цели и философия нашего сообщества
                    </h3>
                    <h2 className='font-sans font-medium dark:text-white text-[34px] mt-[10px]'>
                        Сообщество Tail Talks
                    </h2>
                </div>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-[48%] flex lg:flex-col flex-wrap gap-2 lg:gap-0'>
                        {goalsName.map((goal) => (
                            <GoalsName
                                key={goal.id}
                                name={goal.text}
                                showGoal={() => setShow(goal.id)}
                                hideGoal={() => setShow('')}
                                isSelected={goal.id === show}
                            />
                        ))}
                    </div>
                    <div className='w-full lg:w-1/2'>
                        {goalsBody
                            .filter((goal) => goal.id === show)
                            .map((g) => (
                                <CardGoal key={g.id} pictureURL={g.url} text={g.text} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
