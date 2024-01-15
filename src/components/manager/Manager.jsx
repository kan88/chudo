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
        <p className={styles.manager__description}>
          Пьесы о подростках всегда актуальны, ведь им в любое время нужна поддержка.
          Спектакль заставляет взрослых вспомнить как тяжело быть подростком и как страшно
          совершать ошибки. А тех, кто еще только окунается в этот трудный период, призывает
          понять, что любые чувства, боль, страх, ненависть, любовь- это часть нас самих.
        </p>
        <div className={styles.manager__inner}>
          <img className={styles.manager__small} loading="lazy" src={small} alt="фотография руководителя" />
          <img className={styles.manager__big} loading="lazy" src={big} alt="фотография руководителя" />
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
