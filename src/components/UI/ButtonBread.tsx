import React from 'react'
import classNames from 'classnames' // Adds additional classes if they are passed through props

interface ButtonBreadProps {
	name: string,
	onClick?: () => void,
  width?: string,
	className?: string,
	type?: 'submit' | 'button'
}

const ButtonBread: React.FC<ButtonBreadProps> = (props) => {
	const { width, className, type = 'button'} = props
	return (
		<button
		type={type}
		{...props}
		className={classNames(
			'font-sans font-bold text-lg 3xl:text-2xl h-16 3xl:w-96 3xl:h-24 rounded-2xl bg-bread',
			width || 'w-96', // // Устанавливает ширину по умолчанию или ширину из пропсов
			className // Добавляет дополнительные классы, если они переданы через пропсы
			)}>
			{props.name}
		</button>
	)
}

export default ButtonBread
