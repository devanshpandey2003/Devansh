import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Amit Sharma",
			subtitle: "Senior Developer, YBI Foundation",
			comment: "Working with Devansh during his internship was a pleasure. His ability to quickly grasp complex ML concepts and implement them effectively is impressive",
		},
		{
			id: 2,
			image: Image3,
			title: "Dr. Rajesh Dhkkad",
			subtitle: "Professor, SGSITS",
			comment: "Devansh consistently exhibits strong problem-solving abilities and a solid grasp of AI/ML principles. His project work reflects both technical depth and a commendable level of innovation. Good luck! 👍",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials