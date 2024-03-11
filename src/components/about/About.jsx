import React from 'react';
import styles from './about.module.scss';
import Title from '../ui/title/Title';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Title>о спектакле</Title>
      <div className={styles.about__body}>
        <p className={styles.about__description}>
          Спектакль поставлен по повести И.В. Агеева &quot;Неспортивная история&quot;.
          <br />
          <br />
          Главной героине Татьяне Серебряковой всего 16, она уже многого достигла–
          стала чемпионкой мира по спортивной гимнастике, но травма позвоночника ставит
          крест на её карьере в большом спорте. Теперь она вынуждена учиться в обычной
          школе и сразу сталкивается c проблемой- сверстники её не приняли.
          <br />
          <br />
          Целеустремленность Татьяны во что бы то ни стало завоевать внимание и стать
          лидером, приводит её к ошибке…о которой она потом очень пожалеет.
        </p>
      </div>
    </section>
  );
}
