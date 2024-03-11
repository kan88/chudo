/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Title from '../ui/title/Title';
import styles from './billboard.module.scss';
import Button from '../ui/button/Button';

export default function Billboard() {
  return (
    <section id="billboard" className={styles.billboard}>
      <Title>Афиша</Title>
      <ul className={styles.billboard__list}>
        <li className={styles.billboard__item}>
          <div className={styles.billboard__wrapper}>
            <span className={styles.billboard__date}>14 апреля 2024 г.</span>
            <span className={styles.billboard__time}>18:00</span>
          </div>
          <Button />
        </li>
      </ul>
      <p className={styles.billboard__about}>
        В спектакле актеры сами подростки, эта тема им очень близка.
        И их искренняя игра увлекает так, что веришь каждому слову на сцене.
        Глубоко, тонко, проникновенно.
        Их живые эмоции затрагивают до глубины души. Это стоит увидеть.
        {' '}
      </p>
      <p className={styles.billboard__info}>
        В спектакле
        играют дети из детской театральной студии
        “В ожидании чуда”
        <br />
        <br />
        <a className={styles.billboard__link} alt="chudo-teatr.ru" href="https://chudo-teatr.ru">
          chudo-teatr.ru
        </a>
      </p>
    </section>
  );
}
