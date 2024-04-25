import React from 'react';
import styles from './styles.module.scss';

import { func, number, string } from 'prop-types';

type SearchBoxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  resultsCount: number;
};

const SearchBox = ({ onChange, value, resultsCount = 0 }: SearchBoxProps) => {
  return (
    <span className={styles.search_box}>
      <label
        htmlFor="search_box"
        aria-label="Filter over all the 100 best podcasts on itunes."
        className={styles.search_box__label}
      >
        {resultsCount}
      </label>
      <input
        placeholder="Filter podcasts..."
        id="search_box"
        data-testid="search_box"
        name="search_box"
        type="text"
        className={styles.search_box__input}
        onChange={onChange}
        value={value}
      />
    </span>
  );
};

SearchBox.propTypes = {
  value: string,
  onChange: func,
  resultsCount: number,
};

export default SearchBox;
