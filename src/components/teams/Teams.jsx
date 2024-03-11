/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TEAMS from '../../const';
import Team from '../team/Team';
import styles from './teams.module.scss';

export default function Teams() {
  return (
    <section className={styles.teams}>
      {TEAMS.map((team) => <Team key={team.title} {...team} />)}
    </section>
  );
}
