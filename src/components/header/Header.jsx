import React from 'react';
import styles from './header.module.scss';
import Button from '../ui/button/Button';
// import useExternalScripts from '../../hooks/useExternalScripts';

export default function Header() {
  // useExternalScripts('https://ticketscloud.com/static/scripts/widget/tcwidget.js');
  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = 'https://ticketscloud.com/static/scripts/widget/tcwidget.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li>
            <a className={styles.header__link} href="#about">О спектакле</a>
          </li>
          <li>
            <a className={styles.header__link} href="#billboard">Афиша</a>
          </li>
          <li>
            <a className={styles.header__link} href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className={styles.header__intro}>
        <h1 className={styles.header__title}>неспортивная история</h1>
        <Button />
      </div>
    </header>
  );
}
