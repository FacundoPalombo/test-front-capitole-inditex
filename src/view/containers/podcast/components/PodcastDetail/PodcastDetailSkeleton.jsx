import React from 'react';
import styles from './styles.module.scss';
import image from './asset.jpg';

const PodcastDetailSkeleton = () => {
  return (
    <aside className={styles.podcast_detail__card}>
      <img
        className={styles.podcast_detail__picture}
        src={image}
        alt="..."
        aria-label="Loading Podcast Detail"
      />
      <hr className={styles.podcast_detail__separator} />
      <h3 className={styles.podcast_detail__title}>...</h3>
      <em className={styles.podcast_detail__artist}>...</em>
      <hr className={styles.podcast_detail__separator} />
      <p className={styles.podcast_detail__description}>
        <strong>&nbsp;</strong>
        <i>&nbsp;</i>
      </p>
    </aside>
  );
};

export default PodcastDetailSkeleton;
