/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// Import Swiper React components

// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';
import photo1 from '../../assets/images/reviews/1.jpg';
import video2 from '../../assets/video/2.mp4';
import video3 from '../../assets/video/3.mp4';
import video4 from '../../assets/video/4.mp4';
import photo2 from '../../assets/images/reviews/2.jpg';
import photo3 from '../../assets/images/reviews/3.jpg';
import Title from '../ui/title/Title';

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import styles from './slider.module.scss';
import useSize from '../../hooks/useSize';

export default function Reviews() {
  const { width } = useSize();
  const countSlides = Math.floor(width / (350 + 50));
  return (
    <section className={styles.slider}>
      <Title>Отзывы зрителей</Title>
      <Swiper
        slidesPerView={countSlides < 1 ? 1 : countSlides}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video className={styles.slider__video} controls="controls">
            <source src={video2} autoPlay type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video className={styles.slider__video} controls="controls">
            <source src={video3} autoPlay type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video className={styles.slider__video} controls="controls">
            <source src={video4} autoPlay type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={countSlides < 1 ? 1 : countSlides}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={photo1} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo2} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo3} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
      </Swiper>
    </section>
  );
}
