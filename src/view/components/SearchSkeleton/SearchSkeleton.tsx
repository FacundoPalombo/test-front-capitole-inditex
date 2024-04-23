import React from 'react';
import Channel from '@containers/search/components/Channel/Channel';
import image from './asset.jpg';
import styles from './styles.module.scss';
import noop from '@utils/noop';

const SearchSkeleton = () => {
  const skeletonMock = 'abcdefghijklmnopqrstu'.split('').map((i) => ({
    image,
    artist: '....................',
    title: '..........................',
    podcastId: i,
    key: i,
    skeleton: true,
  }));

  return (
    <section id="search-skeleton" className={styles.search_skeleton__container}>
      <span className={styles.search_skeleton__search_box}>
        <label
          htmlFor="search_skeleton__search_box"
          aria-label="Filter over all the 100 best podcasts on itunes."
          className={styles.search_skeleton__search_box__label}
        >
          0
        </label>
        <input
          placeholder="..."
          id="search_skeleton__search_box"
          data-testid="search_skeleton__search_box"
          name="search_skeleton__search_box"
          type="text"
          className={styles.search_skeleton__search_box__input}
          onChange={noop}
          value=""
        />
      </span>
      {skeletonMock.map((channel) => (
        <Channel {...channel} />
      ))}
    </section>
  );
};

export default SearchSkeleton;
