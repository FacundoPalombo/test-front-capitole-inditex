import { number } from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

type ResultsProps = {
  results: number;
};

const Results = ({ results }: ResultsProps) => {
  return (
    <div className={styles.results__card}>
      <h2 className={styles.results__title}>Episodes: {results}</h2>
    </div>
  );
};

Results.propTypes = {
  results: number,
};

export default Results;
