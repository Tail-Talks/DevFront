import React from 'react'
import CardNews from '../../Cards/CardNews'
import newsImg1 from '../../../assets/images/static/newsCard/news-img-1.jpg'
import newsImg2 from '../../../assets/images/static/newsCard/news-img-2.jpg'
import newsImg3 from '../../../assets/images/static/newsCard/news-img-3.jpg'

export default function News() {
	return (
		<section id='news' className='mt-[140px] dark:bg-roadmap-stars'>
			<div className='container mx-auto'>
				<div className=''>
					<h2 className='font-sans font-medium text-3xl xl:text-5xl dark:text-white text-black-80'>
						Наши новости
					</h2>
					<div className='mt-[30px]'>
						<CardNews
							image={newsImg1}
							header='Сообщество Tail Talks в Telegram'
							article='Все, что вам нужно знать о Tail Talks: Присоединяйтесь к нашему активному сообществу в Telegram'
							date='16 апреля 2024' />
						<CardNews
							image={newsImg2}
							header='Ваш питомец заслуживает быть в блокчейне!'
							article='Зафиксируйте самые яркие моменты жизни вашего питомца в цифровой эпохе, превратив его фото в NFT'
							date='16 апреля 2024' />
						<CardNews
							image={newsImg3}
							header='Принимай участие в конкурсах'
							article='Организуем фотоконкурсы и другие мероприятия, предоставляя возможность для творчества и получения наград, что также мотивирует к лучшему уходу за питомцами'
							date='16 апреля 2024' />
					</div>
				</div>
			</div>
		</section>
	)
}
