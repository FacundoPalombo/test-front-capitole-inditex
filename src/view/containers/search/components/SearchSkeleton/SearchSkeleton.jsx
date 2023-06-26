import React from 'react';
import Song from '../Song';
import SearchBox from '../SearchBox';
import image from './asset.jpg';
import styles from './styles.module.scss';

const SearchSkeleton = () => {
  const skeletonMock = 'abcdefghijklmnopqrstuvwxyz'.split('').map((i) => ({
    image,
    artist: '....',
    title: '....',
    podcastId: i,
    key: i,
    skeleton: true,
  }));
  return (
    <section id="search-skeleton" className={styles.search_skeleton__container}>
      <SearchBox onChange={() => {}} value="" skeleton />
      {skeletonMock.map((song) => (
        <Song {...song} />
      ))}
    </section>
  );
};

export default SearchSkeleton;
