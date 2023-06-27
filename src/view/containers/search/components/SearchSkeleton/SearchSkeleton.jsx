import React from 'react';
import Song from '../Song';
import SearchBox from '../SearchBox';
import image from './asset.jpg';
import styles from './styles.module.scss';

/* 
# Just ignore this skeleton components

It was only for testing purposes that i made for, because i wanna try some new methods in react router with the suspense features but
for the differences between promises and the boundaries of react, the user experience of loading some components apart and others skeletons apart at the same time looks quite a bit awk.
 */

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
