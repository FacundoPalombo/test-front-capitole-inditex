import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

import styles from './styles.module.scss';
import { useIsFetching } from '@tanstack/react-query';

const Main = () => {
  const isLoading = useIsFetching() > 0;

  return (
    <main id="main" data-testid="main">
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
          {isLoading && (
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
