import React, { useEffect } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

import styles from './styles.module.scss';

const Main = () => {
  const { state, location } = useNavigation();

  return (
    <main id="main">
      <nav
        id="nav"
        className={styles.navigation}
        aria-label="Navigate back to list of channels"
      >
        <Link
          className={styles.navigation__linkBack}
          aria-label="Go back to home"
          tabIndex="1"
          to="/"
        >
          <h2 className={styles.navigation__title}>Podcaster</h2>
        </Link>
        <div className={styles.navigation__loader}>
          {state === 'loading' && (
            <BounceLoader
              size={40}
              color="#3976a8"
              loading={true}
              speedMultiplier={1.25}
            />
          )}
        </div>
      </nav>
      <hr className={styles.navigation__separator} />
      <Outlet />
    </main>
  );
};

export default Main;
