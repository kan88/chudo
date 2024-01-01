import React from 'react';
import Carousel from 'react-multi-carousel';
import styles from './team.module.scss';
import 'react-multi-carousel/lib/styles.css';
import CustomRightArrow from '../ui/CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from '../ui/CustomLeftArrow/CustomLeftArrow';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Team({
  title, students, photo, teacher, description, filial,
}) {
  return (
    <div className={styles.team}>
      <h2 className={styles.team__title}>{title}</h2>
      <div className={styles.team__wrapper}>
        <img className={styles.team__photo} src={photo} alt="" width={300} height={300} />
        <div className={styles.team__info}>
          <span className={styles.team__post}>Режиссер</span>
          <span className={styles.team__name}>{teacher}</span>
        </div>
      </div>
      <p className={styles.team__description}>{description}</p>
      <p className={styles.team__filial}>{filial}</p>
      <ul className={styles.team__list}>
        <Carousel
          responsive={responsive}
          infinite
          customTransition="all .5"
          transitionDuration={500}
          swipeable
          // removeArrowOnDeviceType={['tablet', 'mobile']}
          draggable
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {students.map((student) => (
            <div key={student.name} className={styles.team__item}>
              <img className={styles.team__image} src={student.image} alt="фотография участника" />
              <span className={styles.team__name}>
                {student.name}
              </span>
              <span className={styles.team__nickname}>
                {student.nickname}
              </span>
            </div>
          ))}
        </Carousel>
      </ul>
    </div>
  );
}
