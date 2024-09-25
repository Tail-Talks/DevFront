import React from 'react'
import classNames from 'classnames' // Adds additional classes if they are passed through props
import style from './button.module.css'

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
			`${style.button} font-sans font-bold text-lg h-16 rounded-2xl bg-bread focus:outline-none focus:ring-0 focus:border-transparent focus-visible:none`,
			width || 'w-96', // // Устанавливает ширину по умолчанию или ширину из пропсов
			className // Добавляет дополнительные классы, если они переданы через пропсы
			)}>
			{props.name}
		</button>
	)
}

export default ButtonBread
