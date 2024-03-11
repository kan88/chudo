/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
// Import Swiper React components

// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';
import photo1 from '../../assets/photos/1.jpg';
import video from '../../assets/video/1.mp4';
import photo2 from '../../assets/photos/2.jpg';
import photo3 from '../../assets/photos/3.jpg';
import photo4 from '../../assets/photos/4.jpg';
import photo5 from '../../assets/photos/5.jpg';
import photo6 from '../../assets/photos/6.jpg';
import photo7 from '../../assets/photos/7.jpg';
import photo8 from '../../assets/photos/8.jpg';
import photo9 from '../../assets/photos/9.jpg';
import photo10 from '../../assets/photos/10.jpg';
import photo11 from '../../assets/photos/11.jpg';
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

export default function Slider() {
  const { width } = useSize();
  const countSlides = Math.floor(width / (350 + 50));
  return (
    <section className={styles.slider}>
      <Title>Медиа</Title>
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
        <SwiperSlide><img src={photo4} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo5} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo6} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo7} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo8} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo9} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo10} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
        <SwiperSlide><img src={photo11} alt="scene" className={styles.slider__photo} loading="lazy" /></SwiperSlide>
      </Swiper>
      <video className={styles.slider__video} controls="controls">
        <source src={video} autoPlay type="video/mp4" />
      </video>
    </section>
  );
}
