/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Title from '../ui/title/Title';
import TEAMS from '../../const';
import Team from '../team/Team';
import styles from './teams.module.scss';

export default function Teams() {
  return (
    <section className={styles.teams}>
      <Title>Состав</Title>
      {TEAMS.map((team) => <Team key={team.title} {...team} />)}
    </section>
  );
}
