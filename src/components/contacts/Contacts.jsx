import React from 'react';
import Title from '../ui/title/Title';
import styles from './contacts.module.scss';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <Title>Место проведения</Title>
      <div className={styles.contacts__wrapper}>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CDq3jXYv"
          width="560"
          height="400"
          frameBorder="1"
          allowFullScreen
          style={{ position: 'relative' }}
          title="map"
          className={styles.contacts__map}
        />
        <div className={styles.contacts__info}>
          <h3 className={styles.contacts__title}>Арт-центр “Эфир”</h3>
          <span className={styles.contacts__address}>
            Москва, Нижний Сусальный пер., 5, стр. 16, этаж -1
          </span>
          <span className={styles.contacts__number}>Тел: +7 (916) 931-64-01</span>
        </div>
      </div>

    </section>
  );
}
