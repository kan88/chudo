import React from 'react';
import Carousel from 'react-multi-carousel';
import styles from './team.module.scss';
import 'react-multi-carousel/lib/styles.css';
import CustomRightArrow from '../ui/CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from '../ui/CustomLeftArrow/CustomLeftArrow';
import Title from '../ui/title/Title';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

export default function Team({
  students, description,
}) {
  return (
    <div className={styles.team}>
      {/* <h2 className={styles.team__title}>{title}</h2> */}
      <p className={styles.team__description}>{description}</p>
      <Title className={styles.team__title}>Действующие лица и исполнители</Title>
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
              <img className={styles.team__image} src={student.image} loading="lazy" alt="фотография участника" />
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
