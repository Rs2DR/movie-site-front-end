import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.scss';

import { Navigation, Pagination } from 'swiper/modules';
import LinkButton from '../../../components/UI/LinkButton/LinkButton';

export default function Slider() {
	return (
		<Swiper
			slidesPerView={1}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			className='mySwiper'
		>
			<SwiperSlide className='first-slide'>
				<h1>
					Dive into a <b>universe</b> of <br /> un-ending content and <br />{' '}
					channels
				</h1>
				<LinkButton link='#'>Start FREE trial</LinkButton>
			</SwiperSlide>
			<SwiperSlide className='second-slide'>
				<h1>OnAir</h1>
				<LinkButton link='#'>Start FREE trial</LinkButton>
			</SwiperSlide>
		</Swiper>
	);
}
