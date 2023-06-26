import React from 'react';
import styles from './styles.module.scss';
import { func, string } from 'prop-types';

const SearchBox = ({ onChange, value, skeleton }) => {
  return (
    <span className={styles.search_box}>
      <label
        htmlFor="search_box"
        aria-label="Filter over all the 100 best podcasts on itunes."
        className={styles.search_box__label}
        style={
          skeleton && {
            color: '#aaa',
            backgroundColor: '#fff',
            transition: 'filter .11s ease-in-out',
          }
        }
      >
        100
      </label>
      <input
        placeholder={skeleton ? '' : 'Filter podcasts...'}
        id="searchBox"
        style={
          skeleton && { color: '#aaa', transition: 'filter .11s ease-in-out' }
        }
        name="searchBox"
        type="text"
        className={styles.search_box__input}
        onChange={onChange}
        value={value}
      />
    </span>
  );
};

SearchBox.PropTypes = {
  value: string,
  onChange: func,
};

export default SearchBox;
