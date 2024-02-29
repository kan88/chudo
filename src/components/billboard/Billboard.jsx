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
        {/* <li className={styles.billboard__item}>
          <div className={styles.billboard__wrapper}>
            <span className={styles.billboard__date}>27 января 2024 г.</span>
            <span className={styles.billboard__time}>15:00</span>
          </div>
          <h3 className={styles.billboard__title}>Второй состав</h3>
          <Button />
        </li>
        <li className={styles.billboard__item}>
          <div className={styles.billboard__wrapper}>
            <span className={styles.billboard__date}>27 января 2024 г.</span>
            <span className={styles.billboard__time}>19:00</span>
          </div>
          <h3 className={styles.billboard__title}>Первый состав</h3>
          <Button />
        </li> */}
      </ul>
    </section>
  );
}
