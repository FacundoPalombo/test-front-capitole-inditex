import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './styles.module.scss';
const Main = () => {
  return (
    <main id="main">
      <nav id="nav">
        <Link className={styles.navigation__linkBack} to="/">
          <h2 className={styles.navigation__title}>Podcaster</h2>
        </Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default Main;
