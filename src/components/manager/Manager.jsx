import React from 'react';
import Title from '../ui/title/Title';
import styles from './manager.module.scss';
import small from '../../assets/images/small.jpg';
import big from '../../assets/images/big.jpg';

export default function Manager() {
  return (
    <section className={styles.manager}>
      <Title>Художественный руководитель</Title>
      <div className={styles.manager__wrapper}>
        <p className={styles.manager__headline}>
          Подростки-это эмоциональный
        </p>
        <p className={styles.manager__description}>
          кубик Рубика .Энджи Эверетт. Пьесы о подростках всегда будут актуальны,
          ведь им в любое время нужна поддержка. Каждый подросток испытывает столько
          боли и чувств, которые важны для него. И не страшно совершать ошибки,
          когда есть кто-то, кто просто тебя понимает и будет рядом.
        </p>
        <div className={styles.manager__inner}>
          <img className={styles.manager__small} src={small} alt="фотография руководителя" />
          <img className={styles.manager__big} src={big} alt="фотография руководителя" />
          <span className={styles.manager__name}>
            Иваненко Вероника
            <br />
            Алексеевна
          </span>
        </div>
      </div>
    </section>
  );
}
