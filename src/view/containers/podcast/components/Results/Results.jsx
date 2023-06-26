import { number } from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const Results = ({ results }) => {
  return (
    <div className={styles.results__card}>
      <h2 className={styles.results__title}>Total tracks: {results}</h2>
    </div>
  );
};

Results.propTypes = {
  results: number,
};

export default Results;
