import React from 'react';
import styles from './styles.module.scss';
import { func, string } from 'prop-types';

const SearchBox = ({ onChange, value }) => {
  return (
    <span className={styles.search_box}>
      <label
        htmlFor="search_box"
        aria-label="Filter over all the 100 best podcasts on itunes."
        className={styles.search_box__label}
      >
        100
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
};

export default SearchBox;
