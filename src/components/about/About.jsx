import React from 'react';
import styles from './about.module.scss';
import Title from '../ui/title/Title';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Title>о спектакле</Title>
      <div className={styles.about__body}>
        <h3 className={styles.about__subtitle}>
          “Неспортивная История”
          <br />
          по повести Агеева Игоря Валентиновича
        </h3>
        <p className={styles.about__description}>
          Татьяна Серебрякова отдала 10 лет своей жизни спортивной гимнастике и к 16
          годам уже стала чемпионкой мира и получила возможность поездить по миру. Во
          время соревнований в Таня получает серьёзную травму позвоночника и вынуждена
          оставить большой спорт. Она возвращается в родной городок и становится
          восьмиклассницей в обычной школе. Но в Тане заложена только одна жизненная
          установка - побеждать, несмотря на ни на что…
        </p>
      </div>
    </section>
  );
}
