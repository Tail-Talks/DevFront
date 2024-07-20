import React from 'react'

interface GoalsNameProps {
	name: string,
	showGoal: () => void,
	hideGoal: () => void,
}

export default function GoalsName({ name, showGoal, hideGoal }: GoalsNameProps) {
	return (
		<div
			className='mt-[20px]'>
			<span className='font-Rubic variable font-light dark:text-white text-black-80 text-2xl cursor-pointer hover:bg-clip-text hover:font-semibold hover:text-transparent hover:bg-bread dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:bg-bread'
				onMouseEnter={showGoal}
				onMouseLeave={hideGoal}>
				{name}
			</span>
		</div>
	)
}
