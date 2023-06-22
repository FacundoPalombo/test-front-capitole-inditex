import React from 'react';
import styles from './styles.module.scss';

const App = ({ example }) => {
  return (
    <main className={styles.heading}>
      <h1 className={styles.heading__title}>Hello {example}</h1>
    </main>
  );
};

export default App;
